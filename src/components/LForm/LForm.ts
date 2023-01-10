import {
  h,
  ref,
  defineComponent,
  provide,
  computed,
  inject,
  withModifiers,
} from "vue";

import type { Ref, InjectionKey, PropType, ComputedRef } from "vue";

// enum EError {
//   "noLForm" = "LFormGroup must be use in LForm component!",
// }

export interface ErrorValidate {
  errors: [];
  inner: [];
  message: string;
  name: string;
  params: {
    path: string;
    value: string;
    originalValue: string;
    label: string | undefined;
  };
  path: string;
  type: string;
  value: any;
}

export type TItem = {
  id: string | number;
  name?: string;
  [key: string]: any;
};

export type IField<T = {}> = {
  after?: any;
  autocomplete?: string;
  autofocus?: boolean;
  co?: string;
  component?: string;
  custom?: boolean;
  description?: string;
  disabled?: boolean;
  id: string | number;
  items?: Array<T>;
  group?: string;
  keyLabel?: string;
  keyValue?: string;
  keyGroup?: string;
  keyFilter?: string;
  label?: string;
  multiple?: boolean;
  multi?: boolean;
  name: string;
  placeholder?: string;
  rules?: {
    type: string;
    params: any[];
  }[];
  size?: number;
  type?: string;
  vtype?: string;
  min?: number;
  max?: number;
};

export type StateFieldDefinition = {
  // State
  name?: string; // Ref<string | null>
  // el: Ref<HTMLFormElement | null>;
  // validate: Ref<boolean | null>
  error?: Ref<string | null>;
  model?: string | number | { [key: string]: any } | any[] | boolean; // Ref<any | null>

  // labelledby: Ref<string | undefined>
  // describedby: Ref<string | undefined>
};

export type StateFormDefinition = {
  // State
  formEl: Ref<HTMLFormElement | null>;
  fields: { [key: string]: StateFieldDefinition };
  formModel: Ref<{ [key: string]: any }>;
  errors: Ref<{ [key: string]: string }>;
  validateForm: ComputedRef<boolean>;
  schema: Ref<IField[]>;
  // onValidate: (fieldName: string) => void
};

export const FormContext = Symbol(
  "FormContext"
) as InjectionKey<StateFormDefinition>;

export const LForm = defineComponent({
  name: "LForm",
  props: {
    modelValue: {
      type: [Object],
      required: true,
      default: () => {
        return {};
      },
    },
    schema: {
      type: Array as PropType<IField[]>,
      required: true,
      default: () => {
        return [];
      },
    },
    immediate: {
      type: [Boolean],
      default: false,
    },
    id: {
      type: [String],
      default: "form",
    },
    errors: {
      type: Object as PropType<{ [key: string]: string }>,
      default: () => {
        return {};
      },
    },
  },
  emits: [
    "update:modelValue",
    "onSaveForm",
    "onCheckValidate",
    "afterValidate",
  ],
  setup(props, { emit, slots }) {
    const formEl = ref<StateFormDefinition["formEl"]["value"]>(null);
    // const fields = ref<StateFormDefinition["fields"]>({});
    const formModel = ref<StateFormDefinition["formModel"]["value"]>(
      props.modelValue
    );
    const schema = ref<StateFormDefinition["schema"]["value"]>(
      props.schema || []
    );
    const errors = ref<{ [key: string]: string }>(props.errors);
    const validateForm = computed<StateFormDefinition["validateForm"]["value"]>(
      () =>
        props.errors?.value
          ? Object.keys(props.errors.value).length === 0
          : false
    );
    const form = {
      formEl,
      formModel,
      // fields,
      errors,
      validateForm,
      schema,
      // onValidate,
    };
    provide(FormContext, form);

    // const onCheckValidate = async () => {
    //   await loginFormSchema
    //     .validate(props.modelValue, { abortEarly: false })
    //     // .then(() => { })
    //     .catch((err) => {
    //       err.inner.forEach((error: any) => {
    //         errors.value = { ...errors.value, [error.path]: error.message }
    //       })
    //     })
    //   emit('afterValidate', form.errors.value, props.id)
    // }

    // const onSave = async () => {
    //   await onCheckValidate()
    //   if (validateForm.value) emit('onSaveForm', props.modelValue)
    // }
    const onResetForm = async () => {
      emit("update:modelValue", {});
    };

    // if (props.immediate) onCheckValidate()
    // return () => {
    //   return h(
    //     'form',
    //     {},
    //     slots.default
    //       ? slots.default({
    //           form,
    //           errors,
    //           onValidate,
    //         })
    //       : []
    //   )
    // }
    // return {
    //   form,
    //   formEl,
    //   // errors: errorsA,
    //   // onValidate,
    //   // onSave,
    //   // onCheckValidate,
    //   onResetForm,
    // };

    return () =>
      h(
        "form",
        {
          ref: form.formEl,
        },
        {
          default: () => {
            const children = slots.default
              ? slots.default({
                  form,
                  errors,
                  validateForm: form.validateForm.value,
                  // onCheckValidate: this.onCheckValidate,
                  // onSave: this.onSave,
                  onResetForm,
                })
              : [];
            return children;
          },
        }
      );
  },
  // render() {
  //   return h(
  //     "form",
  //     {
  //       ref: this.form.formEl,
  //     },
  //     {
  //       default: () => {
  //         const children = this.$slots.default
  //           ? this.$slots.default({
  //               form: this.form,
  //               errors: this.errors,
  //               validateForm: this.form.validateForm.value,
  //               // onCheckValidate: this.onCheckValidate,
  //               // onSave: this.onSave,
  //               onResetForm: this.onResetForm,
  //             })
  //           : [];
  //         return children;
  //       },
  //     }
  //   );
  // },
});

export const FormFieldContext = Symbol(
  "ElemsContext"
) as InjectionKey<StateFieldDefinition>;

// export const LFormGroup = defineComponent({
//   name: "LFormGroup",
//   props: {
//     // modelValue: {
//     //   type: [String, Number, Object, Array, Boolean],
//     //   required: true,
//     //   default: '',
//     // },
//     field: {
//       type: Object as PropType<IField>,
//       required: true,
//       default: () => {
//         return {};
//       },
//     },
//     // error: {
//     //   type: String,
//     //   default: '',
//     // },
//   },
//   // emits: ['update:modelValue'],
//   setup(props, { slots }) {
//     const form = inject(FormContext, null);
//     // const fieldEl = ref<StateFieldDefinition["el"]["value"]>(null);

//     if (form) {
//       // form.fields[props.field.name] = {
//       //   el: fieldEl,
//       //   name: props.field.name,
//       //   // model: props.modelValue,
//       // };
//     } else {
//       console.error(EError.noLForm);
//     }
//     // const fieldEl = ref<StateDefinitionField['field']['value']>(null)
//     // form.fields[props.field.name] = fieldEl.value
//     // const model = ref<StateDefinitionField['model']['value']>(
//     //   // form.fields[props.field.name].model
//     //   null
//     // )

//     // const api = {
//     //   // field: fieldEl,
//     // }
//     // provide(FormFieldContext, api)

//     // const onReset = () => {
//     //   // console.group('Reset field')
//     //   // console.log(form.formModel[props.field.name])
//     //   // console.log('reset', form.fields[props.field.name].el.value.field.$el)

//     //   // console.groupEnd()

//     //   if (form.fields[props.field.name].el) {
//     //     const typeField =
//     //       form.fields[props.field.name].el.value.field.$el.getAttribute("type");
//     //     const newValue: any = typeField === "number" ? 0 : "";
//     //     // switch (typeField) {
//     //     //   case 'number':
//     //     //     newValue = 0
//     //     //     break
//     //     //   default:
//     //     //     break
//     //     // }

//     //     form.fields[props.field.name].el.value.$emit(
//     //       "update:modelValue",
//     //       newValue
//     //     );
//     //     form.fields[props.field.name].el.value.$emit("on-input");
//     //     form.fields[props.field.name].el.value.field.$el.focus();
//     //   }
//     // };

//     // const el = ref(null)
//     // watch(
//     //   () => props.modelValue,
//     //   () => {
//     //     form?.onValidate(props.field.id || props.field.name)
//     //   }
//     // )

//     // onMounted(() => {
//     //   // if (form && props.name) {
//     //   //   form.fields[props.name] = el.value
//     //   // }
//     //   console.log('onMounted', form.fields)
//     // })

//     const errorField = computed(() => {
//       return form && form.errors.value
//         ? form.errors.value[props.field.name]
//         : null;
//     });

//     return () =>
//       h(
//         "div",
//         {
//           // ref: fieldEl,
//           // 'data-model': model,
//           role: "group",
//           // 'aria-invalid': !!this.error,
//         },
//         {
//           default: () => {
//             const children = slots.default
//               ? slots.default({
//                   // element: fieldEl,
//                   // value: props.modelValue,
//                   // onReset: onReset,
//                   // api: api,
//                   errorField: errorField.value,
//                 })
//               : [];
//             return children;
//           },
//         }
//       );
//     // {
//     //   model,
//     //   api,
//     //   errorField,
//     //   onReset,
//     // }
//   },
// });

export const LFormField = defineComponent({
  name: "LFormField",
  props: {
    field: {
      type: Object as PropType<IField>,
      required: true,
      default: () => {
        return {};
      },
    },
  },
  setup(props, { slots }) {
    const form = inject(FormContext, null);

    const id = props.field.id || props.field.name;

    const errorField = computed(() => {
      return form && form.errors.value && id
        ? form.errors.value[id]
        : undefined;
    });

    /**
     * Boolean - true - if field is reqired, else false
     */
    const required = computed(
      () =>
        props.field.rules &&
        props.field.rules.filter((x: any) => x.type === "required").length > 0
    );

    return () =>
      h(
        "div",
        {
          // role: 'group',
          // 'aria-invalid': !!this.error,
        },
        {
          default: () => {
            const children = slots.default
              ? slots.default({
                  // element: fieldEl,
                  errorField: errorField.value,
                  required: required.value,
                  // onReset: onReset,
                })
              : [];
            return children;
          },
        }
      );
  },
});

export const LFormFieldLabel = defineComponent({
  name: "LFormFieldLabel",
  props: {
    field: {
      type: Object as PropType<IField>,
      required: true,
    },
  },
  emits: ["onSetFocus"],
  setup(props, { slots, emit }) {
    const id = props.field.id || props.field.name;

    const onFocus = () => {
      emit("onSetFocus");
    };

    return () =>
      h(
        "label",
        {
          id: id + "_label",
          for: id,
          onClick: withModifiers(() => onFocus(), []),
        },
        {
          default: () =>
            slots.default
              ? slots.default({
                  onFocus,
                })
              : [],
        }
      );
  },
});

export const LFormFieldDescription = defineComponent({
  name: "LFormFieldDescription",
  props: {
    field: {
      type: Object as PropType<IField>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const id = props.field.id || props.field.name;

    return () =>
      h(
        "div",
        {
          id: id + "_help",
        },
        slots.default ? slots.default() : []
      );
  },
});
