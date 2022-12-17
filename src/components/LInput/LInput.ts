import {
  h,
  defineComponent,
  resolveDirective,
  withDirectives,
  ref,
  watchEffect,
  watch,
  nextTick,
  onMounted,
  Fragment,
} from "vue";

import type { PropType } from "vue";

import type { IField } from "@/components/LForm/LForm";

export const LInputText = defineComponent({
  name: "LInputText",
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
      default: "",
    },
    field: {
      type: Object as PropType<IField>,
      required: true,
      default: () => {
        return {};
      },
    },
    error: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const autofocus: any = resolveDirective("autofocus");

    const id = props.field.id || props.field.name;

    return () =>
      withDirectives(
        h("input", {
          value: props.modelValue,
          id,
          name: id,
          type: "text",
          placeholder: props.field.placeholder,
          // autocomplete: "off",
          "aria-labelledby": `${props.field.name}_label`,
          "aria-describedby": props.field.description
            ? `${id}_help`
            : undefined,
          "aria-invalid": !!props.error,
          onInput: (e: Event) => {
            const el = e.target as HTMLInputElement;
            emit("update:modelValue", el.value);
          },
        }),
        [[autofocus, { status: props.field.autofocus }]]
      );
  },
});

export const LInputNumber = defineComponent({
  name: "LInputNumber",
  props: {
    modelValue: {
      type: [Number, String],
      required: true,
      default: 0,
    },
    field: {
      type: Object as PropType<IField>,
      required: true,
      default: () => {
        return {};
      },
    },
    error: {
      type: String,
      default: "",
    },
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const autofocus: any = resolveDirective("autofocus");

    const id = props.field.id || props.field.name;

    watchEffect(
      () => {
        // model.value = +props.modelValue
        emit("update:modelValue", +props.modelValue);
        if (props.modelValue > props.max) {
          emit("update:modelValue", props.max);
        }
        if (props.modelValue < props.min) {
          emit("update:modelValue", props.min);
        }
      },
      {
        flush: "post",
      }
    );

    return () =>
      withDirectives(
        h("input", {
          value: props.modelValue,
          id,
          name: id,
          type: "number",
          min: props.min,
          max: props.max,
          placeholder: props.field.placeholder,
          "aria-labelledby": `${id}_label`,
          "aria-describedby": props.field.description
            ? `${id}_help`
            : undefined,
          "aria-invalid": !!props.error,
          onInput: (e: Event) => {
            const el = e.target as HTMLInputElement;
            emit("update:modelValue", el.value);
          },
        }),
        [[autofocus, { status: props.field.autofocus }]]
      );
  },
});

export const LInputTextarea = defineComponent({
  name: "LInputTextarea",
  props: {
    modelValue: {
      type: String,
      required: true,
      default: "",
    },
    field: {
      type: Object as PropType<IField>,
      required: true,
    },
    error: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit, expose }) {
    const autofocus: any = resolveDirective("autofocus");

    const id = props.field.id || props.field.name;

    const el = ref<HTMLInputElement | null>(null);
    const onResize = () => {
      if (el.value) {
        const css = window.getComputedStyle(el.value, null);
        const { borderTopWidth, borderBottomWidth } = css;
        el.value.style.height = "auto";
        el.value.style.height =
          el.value.scrollHeight +
          parseInt(borderTopWidth) +
          parseInt(borderBottomWidth) +
          "px";
      }
    };
    watch(
      () => props.modelValue,
      () => {
        nextTick(() => onResize());
      }
    );
    onMounted(() => {
      nextTick(() => {
        onResize();
      });
    });

    expose({ focus: () => el.value?.focus() });
    return () =>
      withDirectives(
        h("textarea", {
          ref: el,
          value: props.modelValue,
          id,
          name: id,
          autocomplete: "off",
          placeholder: props.field.placeholder,
          "aria-labelledby": `${id}_label`,
          "aria-describedby": props.field.description
            ? `${id}_help`
            : undefined,
          "aria-invalid": !!props.error,
          onInput: (e: Event) => {
            const el = e.target as HTMLInputElement;
            emit("update:modelValue", el.value);
          },
        }),
        [[autofocus, { status: props.field.autofocus }]]
      );
  },
});

export const LInputCheckbox = defineComponent({
  name: "LInputCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: false,
    },
    field: {
      type: Object as PropType<IField>,
      required: true,
    },
    error: {
      type: String,
      default: "",
    },
  },
  inheritAttrs: false,
  expose: ["focus"],
  setup(props, { attrs, slots, emit, expose }) {
    const autofocus: any = resolveDirective("autofocus");

    const id = props.field.id || props.field.name;

    const el = ref<HTMLInputElement | null>(null);

    expose({ focus: () => el.value?.focus() });

    return () =>
      h(Fragment, {}, [
        withDirectives(
          h("input", {
            ...attrs,
            ref: el,
            value: props.modelValue,
            id,
            name: id,
            type: "checkbox",
            "aria-labelledby": `${id}_label`,
            "aria-describedby": props.field.description
              ? `${id}_help`
              : undefined,
            "aria-invalid": !!props.error,
            onInput: (e: Event) => {
              const el = e.target as HTMLInputElement;
              emit("update:modelValue", el.checked);
            },
          }),
          [[autofocus, { status: props.field.autofocus }]]
        ),
        slots.default ? slots.default() : null,
      ]);
  },
});

export const LInputCheckboxGroup = defineComponent({
  name: "LInputCheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      required: true,
      default: () => [],
    },
    field: {
      type: Object as PropType<IField>,
      required: true,
    },
    error: {
      type: String,
      default: "",
    },
  },
  inheritAttrs: false,
  expose: ["focus"],
  setup(props, { attrs, slots, emit, expose }) {
    const autofocus: any = resolveDirective("autofocus");

    const { id, name } = props.field;

    const check = (optionId: string, checked: boolean) => {
      const updatedValue = [...props.modelValue];
      if (checked) {
        updatedValue.push(optionId);
      } else {
        updatedValue.splice(updatedValue.indexOf(optionId), 1);
      }
      emit("update:modelValue", updatedValue);
    };

    const el = ref<HTMLInputElement | null>(null);

    expose({ focus: () => el.value?.focus() });

    return () =>
      h(Fragment, {}, [
        withDirectives(
          h("input", {
            ...attrs,
            ref: el,
            value: props.field.value,
            id: id,
            name: name,
            type: "checkbox",
            checked: props.modelValue.indexOf(props.field.value) != -1,
            "aria-labelledby": `${id}_label`,
            "aria-describedby": props.field.description
              ? `${id}_help`
              : undefined,
            "aria-invalid": !!props.error,
            onInput: (e: Event) => {
              const el = e.target as HTMLInputElement;
              check(props.field.value, el.checked);
            },
          }),
          [[autofocus, { status: props.field.autofocus }]]
        ),
        slots.default ? slots.default() : null,
      ]);
  },
});
