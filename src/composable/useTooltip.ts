import {
  createPopper,
  type Options,
  type Instance,
  type Placement,
  type PositioningStrategy,
} from "@popperjs/core";
import { computed, nextTick, reactive, ref, type ComputedRef } from "vue";

export interface ITooltipOptions {
  content?: string;
  padding?: number;
  showTriggers?: string[];
  hideTriggers?: string[];
  open?: boolean;
  placement?: Placement;
  strategy?: PositioningStrategy;
  delay?: number;
}

export interface IStateTooltip {
  isOpen: boolean;
  instance: Instance | null;
  options: ITooltipOptions | null;
}

export interface ITooltip {
  onShow: () => void;
  onHide: () => void;
  stateTooltip: ComputedRef<IStateTooltip>;
  onUpdateOptions: (options: ITooltipOptions) => void;
}

const useTooltip = ({
  referenceEl,
  tooltipEl,
  arrowEl,
  options,
  emit,
}: {
  referenceEl: HTMLElement;
  tooltipEl: HTMLElement;
  arrowEl: HTMLElement;
  options: ITooltipOptions;
  emit?: any;
}): ITooltip => {
  const state = reactive<IStateTooltip>({
    isOpen: false,
    instance: null,
    options: null,
  });

  const onUpdateOptions = (options: ITooltipOptions) => {
    onSetOptions(options);
    state.options = { ...state.options, ...options };
    state.instance?.setOptions((optionss) => ({
      ...optionss,
      ...state.options,
    }));
    state.instance?.update();
  };

  const showEvents = ref(["mouseenter", "focus"]);
  const hideEvents = ref(["mouseleave", "blur"]);

  const onSetOptions = (options: ITooltipOptions) => {
    state.options = options;

    if (state.options?.showTriggers) {
      showEvents.value = state.options?.showTriggers;
    }
    if (state.options?.hideTriggers) {
      hideEvents.value = state.options?.hideTriggers;
    }

    // set default placement = top, if not exist option placement.
    if (!options.placement) {
      options.placement = "top";
    }

    if (!options.strategy) {
      options.strategy = "absolute";
    }

    if (!options.delay) {
      options.delay = 300;
    }
    if (showEvents.value.includes("click")) {
      options.delay = 0;
    }
  };

  onSetOptions(options);
  state.instance = createPopper(referenceEl, tooltipEl, {
    ...options,
    modifiers: [
      // ...options.modifiers,
      // {
      //   name: "myModifier",
      //   enabled: true,
      //   phase: "main",
      //   requiresIfExists: ["offset"],
      //   fn({ state }) {
      //     const overflow = detectOverflow(state);
      //     console.log("overflow", overflow);
      //   },
      // },
      { name: "eventListeners", enabled: false },
      {
        name: "arrow",
        options: {
          element: arrowEl,
          padding: 5,
        },
      },
      // {
      //   name: "applyArrowHide",
      //   enabled: true,
      //   phase: "write",
      //   fn({ state: st }) {
      //     const { arrow } = st.elements;
      //     if (arrow) {
      //       if (st.modifiersData.arrow.centerOffset !== 0) {
      //         arrow.setAttribute("data-hide", "");
      //       } else {
      //         arrow.removeAttribute("data-hide");
      //       }
      //     }
      //   },
      // },
      {
        name: "offset",
        options: {
          offset: [5, 5],
        },
      },
    ],
  });

  // show tooltip if exists option open.
  nextTick(() => {
    if (state.options?.open) {
      show();
    } else {
      showEvents.value.forEach((event) => {
        referenceEl.addEventListener(event, show);
      });
    }

    if (!showEvents.value.includes("click")) {
      referenceEl.addEventListener("mouseenter", show);
      referenceEl.addEventListener("mouseleave", hide);
    }
  });

  const onShow = () => {
    if (!state.isOpen) {
      // console.log("onShow");
      // Make the tooltip visible
      tooltipEl.setAttribute("data-show", "");

      // Enable the event listeners
      state.instance?.setOptions((options) => ({
        ...options,
        modifiers: [
          ...(options.modifiers || []),
          { name: "eventListeners", enabled: true },
        ],
      }));

      // Update its position
      state.instance?.update();
      state.isOpen = true;

      emit && emit("show");

      hideEvents.value.forEach((event) => {
        referenceEl.addEventListener(event, hide);
      });
      showEvents.value.forEach((event) => {
        referenceEl.removeEventListener(event, show);
      });
      if (showEvents.value.includes("click")) {
        document.addEventListener("click", onClickOverlow);
      }
    }
  };

  const onHide = () => {
    // console.log("exist el:", referenceEl?.contains(el));

    if (state.isOpen) {
      // console.log("onHide");
      // Hide the tooltip
      tooltipEl.removeAttribute("data-show");

      // Disable the event listeners
      state.instance?.setOptions((options) => ({
        ...options,
        modifiers: [
          ...(options.modifiers || []),
          { name: "eventListeners", enabled: false },
        ],
      }));

      // Update
      state.instance?.update();

      state.isOpen = false;
      emit && emit("hide");

      hideEvents.value.forEach((event) => {
        referenceEl.removeEventListener(event, hide);
      });

      if (!showEvents.value.includes("click")) {
        referenceEl.addEventListener("mouseenter", show);
        referenceEl.addEventListener("mouseleave", hide);
      } else {
        showEvents.value.forEach((event) => {
          referenceEl.addEventListener(event, show);
        });
        document.removeEventListener("click", onClickOverlow);
      }
    }
  };

  let timer = null;
  const hide = () => {
    // console.log("hide");
    clearTimeout(timer);
    onHide();
    // setTimeout(onHide, options.delay);
  };

  const show = () => {
    // console.log("show");
    timer = setTimeout(onShow, options.delay);
  };

  const onClickOverlow = (e: Event) => {
    const el = e.target as HTMLInputElement | null;
    if (!referenceEl?.contains(el) && state.isOpen) {
      onHide();
    }
  };

  return {
    stateTooltip: computed(() => state),

    onShow,
    onHide,
    onUpdateOptions,
  };
};

export { useTooltip };
export type { Options };
