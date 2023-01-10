import type { DirectiveBinding } from "vue";

import { useTooltip } from "@/composable/useTooltip";

import type { Placement } from "@popperjs/core";
import type { ITooltipOptions, ITooltip } from "@/composable/useTooltip";

export interface THTMLelement extends HTMLElement {
  tooltip?: ITooltip;
}

const initTooltip = (el: THTMLelement, options: ITooltipOptions) => {
  const tooltip = document.createElement("div");
  tooltip.className += "tooltip";
  const arrowEl = document.createElement("div");
  arrowEl.setAttribute("data-popper-arrow", "");
  arrowEl.className += "arrow";

  const { content } = options;
  const tooltipOptions: ITooltipOptions = { ...options };

  if (!content && typeof options == "string") {
    tooltipOptions.content = options;
  }

  if (content) {
    tooltip.innerHTML = content;
    tooltip.appendChild(arrowEl);
  }

  el.append(tooltip);
  el.tooltip = useTooltip({
    referenceEl: el,
    tooltipEl: tooltip,
    arrowEl,
    options: tooltipOptions,
  });
  el.tooltip.onShow();
};

export const tooltip = {
  mounted: (
    el: THTMLelement,
    binding: DirectiveBinding<ITooltipOptions>
  ): any => {
    const init = () => {
      // console.log("init");

      initTooltip(el, {
        ...binding.value,
        placement: binding.arg as Placement,
      });
      // console.log("remove event tooltip");
      el.removeEventListener("mouseenter", init);
    };

    if (el && binding.value && !el.tooltip) {
      // console.log("create event tooltip", el.tooltip);
      el.addEventListener("mouseenter", init);
    }
  },
  updated: (
    el: THTMLelement,
    binding: DirectiveBinding<ITooltipOptions>
  ): any => {
    el.tooltip?.onUpdateOptions({
      ...binding.value,
      placement: binding.arg as Placement,
    });
  },
};
