// btn-primary, btn-accent, btn-second, btn-danger
import {
  h,
  defineComponent,
  withDirectives,
  resolveDirective,
  computed,
} from "vue";

import type { PropType } from "vue";

type TypeBtnType = "" | "primary" | "second" | "accent" | "danger";
// type TypeBtnHtmlProperty = {
//   'aria-label': string
//   name: string
//   title: string
//   id: string
// }
export type TypePropsBtn = {
  mode: TypeBtnType;
  // htmlProperty: TypeBtnHtmlProperty
};

export default defineComponent({
  name: "LBtn",
  props: {
    /**
     * Mode button - 'primary' | 'second' | 'accent' | 'danger'
     */
    mode: {
      type: String as PropType<TypeBtnType>,
      default: "second",
    },
    fill: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // htmlProperty: {
    //   type: Object as PropType<TypeBtnHtmlProperty>,
    //   default: () => {
    //     return {}
    //   },
    //   required: false,
    // },
    /**
     * Icon for button
     */
    // icon: {
    //   type: [String, Boolean],
    //   default: false,
    // },
    /**
     * Ring effect of button
     */
    ringed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const colors = computed(() => `btn-${props.mode}`);
    const rippleObj = computed(() => {
      return { class: `fill active ${colors.value} -z-10` };
    });
    const ripple: any = resolveDirective("ripple");
    return () =>
      withDirectives(
        h(
          "button",
          {
            type: "button",
            class: [
              "btn",
              colors.value,
              {
                fill: props.fill,
                bordered: props.bordered,
                ringed: props.ringed,
                disabled: props.disabled,
              },
              "b-rounded ring-offset-2 ring-offset-white dark:ring-offset-s-800 transition",
            ],
            disabled: props.disabled,
            // class: [
            //   'btn',
            //   !this.disabled ? colors() : '',
            //   {
            //     fill: this.fill,
            //     bordered: this.bordered,
            //     ringed: this.ringed,
            //     disabled: this.disabled,
            //   },
            //   this.rounded,
            //   this.size,
            //   'p-2',
            // ],
            // disabled: this.disabled,
          },
          [slots.default ? slots.default() : []]
        ),
        [[ripple, rippleObj.value]]
      );
  },
});
