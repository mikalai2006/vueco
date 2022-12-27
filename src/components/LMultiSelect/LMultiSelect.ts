import {
  computed,
  defineComponent,
  Fragment,
  h,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  ref,
  watch,
  withModifiers,
  type HTMLAttributes,
} from "vue";
import type {
  ComputedRef,
  InjectionKey,
  PropType,
  Ref,
  WritableComputedRef,
} from "vue";
import type { IField } from "@/components/LForm";

// composable function
import { useId } from "@/composable/useId";

enum EError {
  "noParent" = "%s must be use inner %s component!",
}

export interface IOption {
  el: Ref<HTMLElement | null>;
}

export type ISelectModel = number | string | [];
export type TSelectItem =
  | {
      [key: string]: string | number | boolean;
    }
  | string
  | number
  | boolean;

export interface IRange {
  from: number;
  to: number;
}

export interface TGroups {
  [key: string]: {
    selected: any;
    length: number;
    key: string;
  };
}

/**
 * state select
 */
export type StateDefinition = {
  // State
  id: string;

  selectButtonEl: Ref<HTMLElement | null>;
  searchEl: Ref<HTMLInputElement | null>;
  listBoxEl: Ref<HTMLFormElement | null>;

  // optionsElement: Ref<{ [key: string]: Ref<HTMLElement | null> }>;
  optionsEl: Ref<{ key: string; el: HTMLElement }[]>;

  focusOption: Ref<number>;
  model: WritableComputedRef<ISelectModel[]>;

  selectedOptions: ComputedRef<TSelectItem[]>;

  filteredOptions: ComputedRef<TSelectItem[]>;
  filterText: Ref<string>;
  field: Ref<IField>;

  groups: ComputedRef<TGroups>;
  groupkey: string | undefined;

  disabled: Ref<boolean>;
  loading: Ref<boolean>;

  show: Ref<Boolean>;

  searchQuery: Ref<string>;

  pressShift: Ref<boolean>;
  indexShiftFrom: Ref<number>;
  indexShiftTo: Ref<number>;

  registerOverlay: () => void;
  unRegisterOverlay: () => void;
  chooseItemsOfRange: ({ range }: { range: IRange }) => void;
  onLoadItems: () => void; // params
  updateModel: (val: ISelectModel) => void;
  clearSearchQuery: () => void;

  onChangeActiveIndex: (e: KeyboardEvent) => number;
  onChooseOption: (option: ISelectModel) => void;
  onSetFocus: () => void;
};

export const SelectContext = Symbol(
  "SelectContext"
) as InjectionKey<StateDefinition>;

export const LMultiSelect = defineComponent({
  name: "LMultiSelect",
  props: {
    modelValue: {
      type: [Array, String, Number] as PropType<ISelectModel>,
      default: () => {
        return [];
      },
    },
    showField: {
      type: Boolean,
      default: false,
    },
    field: {
      type: Object as PropType<IField>,
      required: true,
      default: () => {
        return {};
      },
    },
  },
  emits: ["update:showList", "update:modelValue", "onLoadItems", "on-input"],
  setup(props, { emit, slots, expose }) {
    const close = (e: Event) => {
      const el = e.target as HTMLInputElement;
      if (
        !select.selectButtonEl.value?.contains(el) &&
        !select.listBoxEl.value?.contains(el) &&
        !select.searchEl.value?.contains(el)
      ) {
        show.value = false;
        unRegisterOverlay();
        // select.selectButtonEl.value?.focus({ preventScroll: true })
      }
    };

    const unRegisterOverlay = () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keyup", close);
      console.log("unRegisterOverlay");
    };

    const registerOverlay = () => {
      document.addEventListener("click", close);
      document.addEventListener("keyup", close);
      console.log("registerOverlay");
    };

    const searchEl = ref<StateDefinition["searchEl"]["value"]>(null);
    const optionsEl = ref<StateDefinition["optionsEl"]["value"]>([]);
    // const optionsElement = ref<StateDefinition["optionsElement"]["value"]>({});

    const selectButtonEl =
      ref<StateDefinition["selectButtonEl"]["value"]>(null);
    const listBoxEl = ref<StateDefinition["listBoxEl"]["value"]>(null);
    const field = ref<StateDefinition["field"]["value"]>(props.field);
    const indexShiftFrom = ref(0); // <StateDefinition["indexShiftFrom"]["value"]>
    const indexShiftTo = ref(0); // <StateDefinition["indexShiftTo"]["value"]>
    const pressShift = ref(false); // <StateDefinition["pressShift"]["value"]>
    const searchQuery = ref(""); // <StateDefinition["searchQuery"]["value"]>
    const show = ref(false); // <StateDefinition["show"]["value"]>
    const disabled = ref(false); // <StateDefinition["disabled"]["value"]>
    const loading = ref(false); // <StateDefinition["loading"]["value"]>
    const filterText = ref(""); // <StateDefinition["filterText"]["value"]>
    const focusOption = ref(0); // <StateDefinition["focusOption"]["value"]>

    watch(
      () => show.value,
      (val) => {
        emit("update:showList", val);
      }
    );

    const groupkey = field.value.keyGroup || undefined;

    const model = computed({
      get() {
        return props.field.multiple && Array.isArray(props.modelValue)
          ? [...props.modelValue]
          : [props.modelValue];
      },
      set(value) {
        const newValue = field.value.multiple ? value : value[0];
        emit("update:modelValue", newValue), emit("on-input");
      },
    });

    const filteredOptions = computed(() => {
      console.time("filteredOptions");

      const allOptions = field.value.items || [];
      let result: TSelectItem[] = allOptions;
      const keyFilter = field.value.keyFilter;
      if (keyFilter) {
        result = allOptions
          .filter((x) =>
            typeof x == "object"
              ? x[keyFilter]
                  .toLowerCase()
                  .indexOf(filterText.value.toLowerCase()) !== -1
              : typeof x == "number"
              ? x !== -1
              : x.toLowerCase().indexOf(filterText.value.toLowerCase()) !== -1
          )
          .sort(
            (a: any, b: any) =>
              select.model.value.indexOf(a[keyFilter]) -
              select.model.value.indexOf(b[keyFilter])
          );
      }
      console.timeEnd("filteredOptions");
      return result;
    });
    /**
     * All selected items (options).
     */
    const selectedOptions = computed(() => {
      const allOptions = field.value.items || [];
      const keyValue = field.value.keyValue;
      let result: TSelectItem[] = [];
      result = allOptions
        .filter((x) =>
          select.model.value.includes(
            typeof x == "object" && keyValue ? x[keyValue] : x
          )
        )
        .sort(
          (a, b) =>
            select.model.value.indexOf(a[keyValue]) -
            select.model.value.indexOf(b[keyValue])
        );
      return result;
    });

    const groups = computed(() => {
      // <StateDefinition["groups"]["value"]>
      console.time("groupscomputed");
      const groups: TGroups = {}; // new Set()
      if (!groupkey) {
        groups["default"] = {
          selected: selectedOptions.value.length || 0,
          length: field.value.items?.length || 0,
          key: "default",
        };
      }
      if (groupkey) {
        filteredOptions.value
          .sort((a, b) =>
            typeof a[groupkey] == "string"
              ? a[groupkey].localeCompare(b[groupkey])
              : a - b
          )
          ?.forEach((x) => {
            // console.log(x[select.groupkey])
            let _group =
              typeof x[groupkey] == "string"
                ? x[groupkey]
                : x[groupkey].toString();
            if (typeof x == "object") {
              groups[_group] = {
                selected: selectedOptions.value.filter(
                  (y) => typeof y == "object" && y[groupkey] == _group
                ).length,
                length: groups[_group] ? groups[_group].length + 1 : 1,
                key: _group,
              };
            }
          });
      }
      console.timeEnd("groupscomputed");
      console.log("groups=", groups);
      return groups; // Object.keys(groups)
    });

    expose({
      elselect: selectButtonEl,
    });

    const chooseItemsOfRange = ({ range }: { range: IRange }) => {
      // if not multiple mode
      if (!field.value.multiple) {
        // console.error(EError.noParent, "LMultiSelectButton", "LMultiSelect");
        return;
      }

      // if multiple option - select range options
      const { from, to } = range;
      if (!field.value.items) {
        return;
      }

      const chooseItems = field.value.items.slice(
        from < to ? from : to,
        to > from ? to + 1 : from + 1
      );
      select.model.value = JSON.parse(
        JSON.stringify(
          chooseItems.map((x) =>
            field.value.keyValue && typeof x == "object"
              ? x[field.value.keyValue]
              : x
          )
        )
      );
      // 1
      // select.updateModel(
      //   select.schema.value.multiple ? select.model.value : select.model.value
      // )
      console.log("chooseItemsOfRange");
      console.log({ range }, select.model.value);
    };

    /**
     * Choose option.
     * @param option object | string | number
     */
    const onChooseOption = (option: ISelectModel) => {
      const value = select?.field.value.keyValue
        ? option[select.field.value.keyValue]
        : option;
      const index = select.model.value.findIndex(
        (x: number | string) => x === value
      );
      let newValue: (string | number)[] = [...select.model.value];
      if (select.field.value.multiple) {
        if (index !== -1) {
          newValue.splice(index, 1);
        } else {
          newValue.push(value);
        }
      } else {
        newValue = [value];
      }
      select.model.value = newValue;
    };

    /**
     * Change index active option.
     * @param e KeyboardEvent
     * @returns newIndex number
     */
    const onChangeActiveIndex = (e: KeyboardEvent) => {
      let newIndex = select.focusOption.value || 0;

      if (select.focusOption.value == -1) {
        newIndex = 0;
      }
      if (e.key === "ArrowDown") {
        newIndex++;
        // e.preventDefault();
      } else if (e.key === "ArrowUp") {
        newIndex--;
        // e.preventDefault();
      }
      if (newIndex > select.optionsEl.value.length - 1) {
        newIndex = select.optionsEl.value.length - 1;
      }
      if (newIndex < 0) {
        newIndex = 0;
      }

      console.log("onChangeActiveIndex: newIndex=", newIndex);
      // select.focusOption.value = newIndex;
      return newIndex;
    };

    // если есть выбранные элементы, то устанавливаем фокус на первый из них
    const onSetFocus = () => {
      if (!select.focusOption.value) {
        select.focusOption.value = 0;
      }
      // if (select.model.value.length <= 0) {
      //   select.focusOption.value = 0;
      //   // return;
      // }
      const firstValue = select.field.value.multiple
        ? select.model.value[0]
        : select.model.value;

      // if (!firstValue) return;
      const keyValue = select.field.value.keyValue;
      const index = select.filteredOptions.value.findIndex((x) =>
        keyValue && typeof x == "object"
          ? x[keyValue] == firstValue
          : x == firstValue
      );
      if (index && index != -1) {
        select.focusOption.value = index;
      } else {
        // select.focusOption.value = 0;
      }

      // if (index == -1) {
      //   select.selectButtonEl.value?.focus();
      //   // return;
      // }
      nextTick(() => {
        console.log(
          "onSetFocus: index=",
          index,
          " select.focusOption.value=",
          select.focusOption.value
        );
        const value = select.filteredOptions.value[select.focusOption.value];
        const elForFocus = select.optionsEl.value.find(
          (x) => x.key === (keyValue ? value[keyValue] : value)
        );
        if (elForFocus.el) {
          console.log("elForFocus.el=", elForFocus.el);
          //  && !select.searchEl.value
          elForFocus.el?.focus();
        }
      });
      // console.log(
      //   "set focus",
      //   firstValue,
      //   "focusOption.value=",
      //   index,
      //   keyValue
      // );
    };

    const select = {
      id: props.field.name,
      selectButtonEl,
      listBoxEl,
      searchEl,

      optionsEl,
      // optionsElement,

      focusOption,
      model,
      field,
      show,

      loading,
      disabled,

      groups,
      groupkey,

      /**
       * selected options
       */
      selectedOptions,

      filteredOptions,
      filterText,

      searchQuery,
      clearSearchQuery() {
        if (searchQuery.value === "") return;

        searchQuery.value = "";
      },

      pressShift,
      indexShiftFrom,
      indexShiftTo,

      registerOverlay,
      unRegisterOverlay,
      chooseItemsOfRange,
      onLoadItems: () => emit("onLoadItems"),
      updateModel: (val: ISelectModel) => {
        emit("update:modelValue", val), emit("on-input");
      },

      onChangeActiveIndex,
      onChooseOption,
      onSetFocus,
    };

    provide(SelectContext, select);

    const loadData = async () => {
      loading.value = true;
      disabled.value = true;
      await emit("onLoadItems");
      loading.value = false;
      disabled.value = false;
    };

    onMounted(async () => {
      await loadData();
      if (field.value.autofocus) {
        nextTick(() => {
          if (select.searchEl.value) {
            select.searchEl.value.focus();
          } else {
            selectButtonEl.value?.focus();
          }
        });
      }
    });

    return () =>
      h(
        "div",
        {
          // onBlur: () => {
          //   // console.log('blur select button')
          //   select.show.value = false
          // },
        },
        {
          default: () =>
            slots.default
              ? slots.default({
                  select,
                  loading: loading.value,
                  disabled: disabled.value,
                  show: select.show.value,
                  filteredOptions: filteredOptions.value,
                  focusOption: select.focusOption.value,
                  indexShiftFrom: select.indexShiftFrom.value,
                  indexShiftTo: select.indexShiftTo.value,
                  selectedOptions: select.selectedOptions.value || [],
                })
              : [],
        }
      );
  },
});

export const LMultiSelectButton = defineComponent({
  name: "LMultiSelectButton",
  setup(props, { slots }) {
    const select = inject(SelectContext);
    if (!select) {
      console.info(EError.noParent, "LMultiSelectButton", "LMultiSelect");
      return;
    }
    // const selectButtonEl = ref<StateDefinition['selectButtonEl']['value']>(null)
    const aria = computed(() => {
      const aria: HTMLAttributes = {};
      if (select.show.value) {
        aria["aria-controls"] = `${select.field.value.name}-listbox`;
      }
      return aria;
    });

    const propsType = computed(() =>
      select.searchEl.value
        ? {}
        : {
            role: "button",
            type: "button",
            tabindex: 0,
            disabled: select.disabled.value,
            "aria-expanded": select.show.value,
            "aria-haspopup": "listbox",
            "aria-labelledby": select.field.value.label
              ? `${select.field.value.name}_label`
              : undefined,
            ...aria.value,
          }
    );

    return () =>
      h(
        select.searchEl.value ? "div" : "button",
        {
          ref: select.selectButtonEl,
          id: `${select.id}-button`,
          ...propsType.value,
          onClick: withModifiers(() => {
            // e: MouseEvent
            console.log("LMultiSelectButton: onClick");
            // nextTick(() => {
            //   select.searchEl.value?.focus();
            // });
            select.show.value = !select.show.value;
            if (select.show.value) {
              nextTick(() => {
                select.onSetFocus();
              });
              // set focus input element.
              if (select.searchEl.value) {
                nextTick(() => {
                  select.searchEl.value?.focus();
                });
              }
              setTimeout(() => {
                select.registerOverlay();
              }, 50);

              // nextTick(() => {
              //   select.optionsEl[select.focusOption.value]?.value.focus()
              // })
            } else {
              select.unRegisterOverlay();
            }
            // console.log('click select button', select.show.value)
          }, []),
          onKeydown: withModifiers((e: KeyboardEvent) => {
            console.log("LMultiSelectButton: onKeydown");
            switch (e.key) {
              case "Enter":
                console.log(
                  "select.focusOption.value=",
                  select.focusOption.value
                );

                select.onChooseOption(
                  select.filteredOptions.value[select.focusOption.value]
                );
                if (!select.field.value.multiple) {
                  nextTick(() => {
                    if (select.searchEl.value) {
                      select.searchEl.value?.focus();
                    } else {
                      select.selectButtonEl.value?.focus({
                        preventScroll: true,
                      });
                    }
                    select.show.value = false;
                  });
                  // e.stopPropagation();
                  // e.preventDefault();
                }
                break;
              case "ArrowUp":
              case "ArrowDown":
                console.log("Key press down");

                if (!select.show.value) {
                  select.show.value = true;
                  // console.log(`select ${select.focusOption.value}`)
                  select.registerOverlay();
                }
                if (select.show.value) {
                  select.onChangeActiveIndex(e);
                }
                nextTick(() => {
                  select.onSetFocus();
                });
                // nextTick(() => {
                //   console.log("focus listBoxEl");
                //   select.listBoxEl.value?.focus({ preventScroll: true });
                // });
                // nextTick(() => {
                //   select.optionsEl[select.focusOption.value]?.el.focus();
                // });

                // set focus input element.
                // nextTick(() => {
                //   select.searchEl.value?.focus();
                // });

                break;
              case "Escape":
                select.show.value = false;
                select.focusOption.value = 0;
                select.unRegisterOverlay();
                break;
            }
            // if (e.key === "Enter" || e.key === "ArrowDown") {
            //   if (!select.show.value) {
            //     select.show.value = true;
            //     select.onSetFocus();
            //     // console.log(`select ${select.focusOption.value}`)
            //     select.registerOverlay();
            //   }
            //   nextTick(() => {
            //     console.log("focus listBoxEl");
            //     select.listBoxEl.value?.focus({ preventScroll: true });
            //   });
            //   nextTick(() => {
            //     select.optionsEl[select.focusOption.value]?.el.focus();
            //   });

            //   // set focus input element.
            //   if (select.searchEl.value) {
            //     nextTick(() => {
            //       select.searchEl.value?.focus();
            //     });
            //   }

            //   // e.preventDefault();
            // }
          }, []),
          // onFocus: () => {
          //   // console.log("focus select button", select.searchEl.value);
          //   // if (!select.show.value) {
          //   //   select.show.value = true
          //   // }
          //   nextTick(() => {
          //     if (select.searchEl.value) {
          //       select.searchEl.value.focus();
          //     }
          //   });
          // },
        },
        slots.default
          ? slots.default({
              show: select.show.value,
              disabled: select.disabled.value,
              loading: select.loading.value,
            })
          : []
      );
  },
});

export const LMultiSelectList = defineComponent({
  name: "LMultiSelectList",
  setup(props, { emit, slots }) {
    const select = inject(SelectContext);

    const removeOption = (item) => {
      const indexValue = select.model.value.findIndex(
        (x: string) => x == (item[select.field.value.keyValue] || item)
      );
      if (indexValue !== -1) {
        const newValue = [...select.model.value];
        newValue.splice(indexValue, 1);
        select.model.value = newValue;
      }
      // if (select.show.value) {
      //   select.show.value = false
      // }
      // select.updateModel(
      //   select.schema.value.multiple
      //     ? select.model.value.map((x) =>
      //         select.schema.value.valuekey ? x[select.schema.value.valuekey] : x
      //       )
      //     : select.schema.value.valuekey
      //     ? select.model.value[0][select.schema.value.valuekey]
      //     : select.model.value[0]
      // )
      // 2
      // select.updateModel(
      //   select.schema.value.multiple
      //     ? select.model.value
      //     : select.model.value[0]
      // )
    };

    const removeLast = () => {
      select.model.value.splice(select.model.value.length - 1, 1);
    };
    // watch(
    //   () => select.model,
    //   (val, oldVal) => {
    //     console.log('watch: ', val, oldVal)
    //   }
    // )
    // const selectedOptions = computed(() => {
    //   // console.log('items computed: ', select.schema.value.items)
    //   const allOptions = select.schema.value.items
    //   return allOptions
    //     .filter((x: any) => select.model.value.includes(x.id))
    //     .sort(
    //       (a: any, b: any) =>
    //         select.model.value.indexOf(a.id) - select.model.value.indexOf(b.id)
    //     )
    // })

    return () =>
      h(
        Fragment,
        {},
        slots.default
          ? slots.default({
              removeOption,
              onKeydown: (e) => {
                if (e.key === "Backspace") {
                  removeLast();
                }
              },
            })
          : []
      );
  },
});
// export const LMultiSelectItem = defineComponent({
//   name: "LMultiSelectItem",
//   setup(props, { slots }) {
//     const select = inject(SelectContext);

//     return () => h("div", {}, slots.default ? slots.default() : null);
//   },
// });

export const LMultiSelectSearch = defineComponent({
  name: "LMultiSelectSearch",
  // inheritAttrs: false,
  setup(props, { slots }) {
    const select = inject(SelectContext, {});
    const newValue = ref("");
    // const addItem = () => {
    //   console.log('add', newValue.value)
    //   select.model.value.push(newValue.value)
    //   newValue.value = ''
    // }
    const searchDebounce = ref<ReturnType<typeof setTimeout> | null>(null);
    const onSearch = () => {
      select.filterText.value = newValue.value;
      // select.onLoadItems({ text: newValue.value })
      select.loading.value = false;
      // select.focusOption.value = 0;
      if (!select.show.value) {
        select.show.value = true;
        setTimeout(() => {
          select.registerOverlay();
        }, 50);
      }
    };

    return () =>
      h(
        "input",
        {
          ref: (el) => (select.searchEl.value = el),
          role: "combobox",
          tabindex: 0,
          placeholder: select.field.value?.placeholder,
          disabled: select.disabled.value,
          "aria-expanded": select.show.value,
          "aria-haspopup": "listbox",
          "aria-labelledby": select.field.value.label
            ? `${select.field.value.name}_label`
            : undefined,
          "aria-controls": select.show.value
            ? `${select.field.value.name}-listbox`
            : undefined,
          value: newValue.value,
          onInput: (e: KeyboardEvent) => {
            const el = e.target as HTMLInputElement;
            if (searchDebounce.value) clearTimeout(searchDebounce.value);
            select.loading.value = true;
            searchDebounce.value = setTimeout(() => onSearch(), 350);
            newValue.value = el.value;
          },
          // onKeydown: withModifiers((e: KeyboardEvent) => {
          //   console.log("LMultiSelectSearch: onKeydown key=", e.key);
          //   // if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          //   //   if (select.show.value) {
          //   //     const newIndex = select.onChangeActiveIndex(e);
          //   //     select.focusOption.value = newIndex;
          //   //   } else {
          //   //     // select.show.value = true;
          //   //     // select.focusOption.value = 0;
          //   //   }
          //   //   console.log(
          //   //     "LMultiSelectSearch: onKeydown select.focusOption.value=",
          //   //     select.focusOption.value
          //   //   );
          //   //   e.preventDefault();
          //   // } else if (e.key == "Enter") {
          //   //   select.onChooseOption(
          //   //     select.filteredOptions.value[select.focusOption.value]
          //   //   );
          //   //   if (!select.field.value.multiple) {
          //   //     nextTick(() => {
          //   //       select.selectButtonEl.value?.focus({ preventScroll: true });
          //   //       select.show.value = false;
          //   //     });
          //   //     // e.stopPropagation();
          //   //     // e.preventDefault();
          //   //   }
          //   // } else if (e.key == "Escape") {
          //   //   select.show.value = false;
          //   //   select.focusOption.value = -1;
          //   // }
          // }, []),
        }
        // slots.default
        //   ? slots.default({
        //       value: newValue.value,
        //       placeholder: select.field.value.placeholder,
        //       onInput: (e) => {
        //         // console.log("onInput", e);

        //         if (searchDebounce.value) clearTimeout(searchDebounce.value);
        //         select.loading.value = true;
        //         searchDebounce.value = setTimeout(() => onSearch(), 350);
        //         newValue.value = e.target.value;
        //       },
        //     })
        //   : []
      );
  },
});

export const LMultiSelectOptions = defineComponent({
  name: "LMultiSelectOptions",
  setup(props, { slots }) {
    const select = inject(SelectContext);
    if (!select) {
      return;
    }

    const id = useId();

    const aria = computed(() => {
      const aria: HTMLAttributes = {};
      if (select.focusOption.value != null && select.focusOption.value !== -1) {
        aria[
          "aria-activedescendant"
        ] = `${select.id}-option-${select.focusOption.value}`;
      }
      if (select.field.value.multiple) {
        aria["aria-multiselectable"] = true;
      }
      return aria;
    });

    const toggleChooseAll = () => {
      // if not multiple mode.
      if (!select.field.value.multiple) return;
      const keyValue = select.field.value.keyValue;

      // if multiple mode - select or deselect all options
      if (select.model.value.length === select.field.value.items?.length) {
        select.model.value = [];
        // 3
        // select.updateModel([])
      } else {
        const allSelectedOptions = select.field.value.items?.map((x) =>
          keyValue && typeof x == "object" ? x[keyValue] : x
        );
        if (allSelectedOptions) select.model.value = allSelectedOptions;
        // 4
        // select.updateModel(allSelectedOptions)
      }
    };

    const searchDebounce = ref<ReturnType<typeof setTimeout> | null>(null);

    // const onSearch = (value: string) => {
    //   if (!select.show.value) return;
    //   if (value.length > 1) return;
    //   select.searchQuery.value += value.toLowerCase();

    //   const allOptions = select.field.value.keyFilter
    //     ? select.filteredOptions.value
    //     : select.field.value.items;

    //   const indexFindElement = allOptions.findIndex((x) =>
    //     x[select.field.value.keyValue]
    //       .toLowerCase()
    //       .startsWith(select.searchQuery.value)
    //   );
    //   // console.log('searchQuery=', sselect.searchQuery.value, indexFindElement)
    //   if (indexFindElement !== -1) {
    //     select.focusOption.value = indexFindElement;
    //     select.optionsEl[indexFindElement].value.focus();
    //   }
    // };

    return () =>
      h(
        "div",
        {
          ref: select.listBoxEl,
          id: `${select.field.value.name}-listbox`,
          role: "listbox",
          "aria-labelledby": `${select.field.value.name}_label`,
          tabindex: 0,
          ...aria.value,
          onKeydown: withModifiers(
            (e: KeyboardEvent) => {
              if (searchDebounce.value) clearTimeout(searchDebounce.value);
              // onSearch(e.key);
              searchDebounce.value = setTimeout(
                () => select.clearSearchQuery(),
                350
              );
              console.log("Key press of options", e.key);

              // select all options
              if (e.ctrlKey && e.key === "a") {
                toggleChooseAll();
                e.preventDefault();
              }

              if (e.key === "Escape") {
                select.focusOption.value = 0;
                select.show.value = false;
                if (select.searchEl.value) {
                  select.searchEl.value?.focus();
                } else {
                  select.selectButtonEl.value?.focus({ preventScroll: true });
                }
                return;
              }

              // change index active option.
              const newIndex = select.onChangeActiveIndex(e);
              e.preventDefault();
              if (newIndex !== select.focusOption.value) {
                // set focus by index element from selected elements.
                select.focusOption.value = newIndex;
                // select.filteredOptions.value[newIndex]?.focus();
                const keyValue = select.field.value.keyValue;
                const value = select.filteredOptions.value[newIndex];
                const elForFocus = select.optionsEl.value.find((x) => {
                  let val = value;
                  if (typeof value == "object" && keyValue) {
                    val = value[keyValue];
                  }
                  return x.key == val;
                });
                if (elForFocus) {
                  //  && !select.searchEl.value
                  elForFocus.el?.focus();
                  // console.log("focus index option = ", newIndex, elForFocus.el);
                } else {
                  // select.searchEl.value?.focus();
                }
                // select.optionsEl[newIndex].value?.focus();
              }
              if (!e.shiftKey) {
                select.indexShiftFrom.value = newIndex;
              }

              if (
                e.shiftKey &&
                (e.key === "ArrowDown" || e.key === "ArrowUp")
              ) {
                select.indexShiftTo.value = select.focusOption.value;
                select.chooseItemsOfRange({
                  range: {
                    from: select.indexShiftFrom.value,
                    to: select.indexShiftTo.value,
                  },
                });
                // select.indexShiftFrom.value =
                //   select.indexShiftFrom.value || select.focusOption.value
                // console.group('onKeyDown')
                // console.log(
                //   'select.focusOption.value=',
                //   select.focusOption.value
                // )
                // console.log('From =', select.indexShiftFrom.value)
                // console.log('To =', select.indexShiftTo.value)
                // console.groupEnd()
              }
            },
            ["stop"]
          ),
          onKeyup: (e: KeyboardEvent) => {
            if (e.key === "Shift") {
              select.pressShift.value = false;
              select.indexShiftFrom.value = 0;
              select.indexShiftTo.value = 0;
            }
          },
          onFocus: () => {
            console.log("LMultiSelectOptions: onFocus");
          },
        },
        slots.default
          ? slots.default({
              groups: select?.groups.value,
              options: select?.filteredOptions.value, // select.schema.value.items,
            })
          : []
      );
  },
});

export const LMultiSelectGroup = defineComponent({
  name: "LMultiSelectGroup",
  props: {
    group: {
      type: [String, Number],
      default: "default",
      required: true,
    },
  },
  setup(props, { slots }) {
    const select = inject(SelectContext);
    if (!select) {
      return;
    }

    const id = useId();

    const currentGroup = computed(() => select.groups.value[props.group]);

    /**
     * Choose group options
     */
    const chooseGroup = () => {
      console.time("chooseGroup");
      if (!select?.field.value.multiple) {
        return;
      }
      const { length, selected } = currentGroup.value;
      const allOptionsOfGroup = select.field.value.items
        .filter((x) =>
          select.groupkey ? x[select.groupkey] === props.group : true
        )
        .map((x) =>
          select.field.value.keyValue ? x[select.field.value.keyValue] : x
        );

      const newValue =
        length !== selected
          ? select.model.value.concat(allOptionsOfGroup)
          : select.model.value.filter((x) => allOptionsOfGroup.indexOf(x) < 0);
      select.model.value = newValue;
      console.timeEnd("chooseGroup");
    };

    /**
     * options for current group
     */
    const options = computed(() => {
      const allOptions = select.field.value.keyFilter
        ? select.filteredOptions.value
        : select.field.value.items;
      return select.groupkey
        ? allOptions.filter((x) => x[select.groupkey] === props.group)
        : allOptions;
    });

    const groupSelect = computed(
      () => currentGroup.value.selected === currentGroup.value.length
    );

    return () =>
      h(
        "div",
        {
          // ref: optionEl,
          id: `${select?.id}-group-${id}`,
          role: "group",
          "aria-disabled": false,
          // tabindex: -1, // disabled === true ? undefined : -1,
          // 'aria-selected': false,
          onClick: withModifiers(() => {
            chooseGroup();
          }, ["stop"]),
        },
        slots.default
          ? slots.default({
              groupId: id,
              options: options.value,
              groupSelectedOption: currentGroup.value.selected,
              groupLength: currentGroup.value.length,
              groupSelect: groupSelect.value,
            })
          : []
      );
  },
});

export const LMultiSelectOption = defineComponent({
  name: "LMultiSelectOption",
  props: {
    // id: {
    //   type: [String, Number],
    //   default: 0,
    //   required: true,
    // },
    value: {
      type: [String, Number, Object],
      default: "",
    },
  },
  setup(props, { slots }) {
    const select = inject(SelectContext);
    const optionEl = ref<HTMLElement>(null);
    const key = computed(() =>
      select.field.value.keyValue
        ? props.value[select.field.value.keyValue]
        : props.value
    );

    onMounted(() => {
      select.optionsEl.value.push({
        key: key.value,
        el: optionEl.value,
      });
      // select.optionsElement.value[key.value] = optionEl;
      // console.log("add key=", key.value, " props.value=", props.value);
    });

    const id = useId();
    const index = computed(() =>
      select.optionsEl.value.findIndex((x) => x.key == key.value)
    );

    onUnmounted(() => {
      // console.log("remove key=", index);
      // delete select.optionsElement.value[key.value];
      select?.optionsEl.value.splice(index.value, 1);
    });

    const selected = computed(() => {
      // console.log('computed check')
      return select.model.value.includes(
        select.field.value.keyValue
          ? props.value[select.field.value.keyValue]
          : props.value
      );
    });
    const hovered = computed(() => {
      // console.log('computed check')
      const keyValue = select.field.value.keyValue;
      const value = select.filteredOptions.value[select.focusOption.value];
      let isHovered = false;
      if (value) {
        isHovered =
          (keyValue ? props.value[keyValue] : props.value) ==
          (keyValue ? value[keyValue] : value);
      }
      return isHovered;
      // select.model.value.includes(
      //   select.field.value.keyValue
      //     ? props.value[select.field.value.keyValue]
      //     : props.value
      // );
    });

    // const optionElement = slots.default({
    //   // value: props.value,
    //   optionId: id,
    //   selected: selected.value,
    //   focused: select?.focusOption.value,
    // });
    // console.log("optionElement=", optionElement);

    return () =>
      h(
        "div",
        {
          ref: optionEl,
          id: `${select.id}-option-${id}`,
          role: "option",
          "aria-disabled": false,
          tabindex: -1, // disabled === true ? undefined : -1,
          "aria-selected": selected.value === true ? selected.value : undefined,
          onFocus: () => {
            console.log("LMultiSelectOption: onFocus");

            // if (select.pressShift.value) {
            //   chooseItem()
            // }
          },
          onKeydown: (e: KeyboardEvent) => {
            // if (e.shiftKey) {
            // }

            // if (e.shiftKey && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
            //   // chooseItem()

            //   select.pressShift.value = true
            //   select.indexShiftTo.value = props.id
            //   console.log('props.id=', props.id)
            //   console.log('indexShiftFrom=', select.indexShiftFrom.value)
            //   console.log('indexShiftTo=', select.indexShiftTo.value)
            // }
            // console.log('Key press of option (choose)', e.key)
            if (e.key === "Enter") {
              select.onChooseOption(props.value);
              if (!select.field.value.multiple) {
                select.show.value = false;

                if (select.searchEl.value) {
                  select.searchEl.value?.focus();
                } else {
                  select.selectButtonEl.value?.focus({
                    preventScroll: true,
                  });
                }
                e.preventDefault();
              }
            }
          },
          onMouseenter: (e) => {
            console.log("LMultiSelectOption: onMouseenter");

            select.focusOption.value = index.value;
            if (!e.shiftKey) {
              select.indexShiftFrom.value = select.focusOption.value;
            } else {
              select.indexShiftTo.value = select.focusOption.value - 1;
            }
          },
          onMouseleave: (e) => {
            console.log("LMultiSelectOption: onMouseleave");

            select.focusOption.value = null;
            if (!e.shiftKey) {
              select.indexShiftFrom.value = 0;
            }
          },
          onClick: withModifiers(
            (e) => {
              console.log("LMultiSelectOption: onClick");
              if (e.shiftKey) {
                select.chooseItemsOfRange({
                  range: {
                    from: select.indexShiftFrom.value,
                    to: select.indexShiftTo.value,
                  },
                });
              } else {
                select?.onChooseOption(props.value);
                if (!select.field.value.multiple) {
                  select.selectButtonEl.value.focus({ preventScroll: true });
                  select.show.value = false;
                  e.preventDefault();
                }

                nextTick(() => {
                  if (select?.searchEl.value) {
                    select?.searchEl.value?.focus();
                    e.preventDefault();
                  }
                });
              }
            },
            ["stop"]
          ),
        },
        slots.default
          ? slots.default({
              // value: props.value,
              optionId: id,
              selected: selected.value,
              hovered: hovered.value,
              focused: select?.focusOption.value,
            })
          : []
      );
  },
});
