import { h, defineComponent, type PropType, ref } from "vue";

export enum TypeBtnMode {
  primary = "primary",
  second = "second",
  accent = "accent",
  danger = "danger",
  link = "link",
}
export enum TypeBtnTag {
  a = "a",
  div = "div",
  button = "button",
}

export const LBtn = defineComponent({
  name: "LBtn",
  props: {
    as: {
      type: String as PropType<keyof typeof TypeBtnTag>,
      default: "button",
      validator(val: TypeBtnTag) {
        return [...Object.values(TypeBtnTag)].includes(val);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * V-model pressed for pressed mode button
     */
    pressed: {
      type: Boolean,
      default: false,
    },
  },
  emit: ["update:pressed"],
  setup(props, { slots, emit }) {
    return () =>
      h(
        props.as,
        {
          role: !["button", "input"].includes(props.as) ? "button" : undefined,
          tabindex: !["button", "input"].includes(props.as) ? 0 : undefined,
          type: ["input", "button"].includes(props.as) ? "button" : undefined,
          "aria-pressed": !["button", "input"].includes(props.as)
            ? props.pressed == true
            : undefined,
          disabled: props.disabled || undefined,
          onClick: () => {
            !props.disabled && emit("update:pressed", !props.pressed);
            // console.log("click");
          },
          onKeydown: (e: KeyboardEvent) => {
            (e.key === "Space" || e.key === "Enter") &&
              !props.disabled &&
              emit("update:pressed", !props.pressed);
          },
        },
        {
          default: () => (slots.default ? slots.default() : []),
        }
      );
  },
});
