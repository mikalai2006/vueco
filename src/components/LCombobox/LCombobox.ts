import {
  computed,
  defineComponent,
  h,
  inject,
  nextTick,
  onMounted,
  provide,
  ref,
  withModifiers,
  type ComputedRef,
  type InjectionKey,
  type PropType,
  type Ref,
  type WritableComputedRef,
  onUnmounted,
  watch,
  type HTMLAttributes,
} from "vue";
import type { IField } from "@/components/LForm";
import { useId } from "@/composable/useId";

export interface IComobobox {
  after?: boolean;
  autofocus?: boolean;
  description?: string;
  disabled?: boolean;
  id: string;
  items: (string | number)[];
  keyLabel?: string;
  keyValue?: string;
  keyFilter?: string;
  label?: string;
  multiple?: boolean;
  name: string;
  placeholder?: string;
}

const isPrintableCharacter = (str: string) => {
  return str.length === 1 && str.match(/\S| /);
};

// export const IGeneralPropsFormElement = {
//   after: {
//     type: Boolean,
//     default: false,
//     required: false,
//   },
//   autofocus: {
//     type: Boolean,
//     default: false,
//     required: false,
//   },
//   description: {
//     type: String,
//     default: "",
//     required: false,
//   },
//   disabled: {
//     type: Boolean,
//     default: false,
//     required: false,
//   },
//   id: {
//     type: String,
//     required: true,
//   },
//   items: {
//     type: Array,
//     default: () => {
//       return [];
//     },
//     required: true,
//   },
//   keyLabel: {
//     type: String,
//     default: "id",
//     required: false,
//   },
//   keyValue: {
//     type: String,
//     default: "id",
//     required: false,
//   },
//   keyFilter: {
//     type: String,
//     default: "id",
//     required: false,
//   },
//   label: {
//     type: String,
//     default: "",
//     required: false,
//   },
//   multiple: {
//     type: Boolean,
//     default: false,
//     required: false,
//   },
//   name: {
//     type: String,
//     default: "name",
//     required: false,
//   },
//   placeholder: {
//     type: String,
//     default: "placeholder",
//     required: false,
//   },
//   // autocomplete?: string;
//   // co?: string;
//   // component?: string;
//   // group?: string;
//   // multi?: boolean;
//   // rules?: {
//   //   type: string;
//   //   params: any[];
//   // }[];
//   // size?: number;
//   // type?: string;
//   // vtype?: string;
// };

export type TOption =
  | {
      [key: string]: string | number;
    }
  | string
  | number;
export type TComboboxModel = number | string | [];
export type StateComboboxDefinition = {
  // State
  comboboxNode: Ref<HTMLFormElement | null>;
  buttonNode?: Ref<HTMLFormElement | null>;
  listboxNode: Ref<HTMLFormElement | null>;

  comboboxHasVisualFocus: Ref<boolean>;
  listboxHasVisualFocus: Ref<boolean>;
  hasHover: Ref<boolean>;

  focusOption: Ref<number>;

  isNone: Ref<boolean>;
  isList: Ref<boolean>;
  isBoth: Ref<boolean>;

  allOptions: Ref<{ index: string; key: string; el: HTMLElement | null }[]>;

  option: Ref<TOption | null>;
  // firstOption: Ref<TOption | null>;
  // lastOption: Ref<TOption | null>;

  filteredOptions: Ref<(TOption | null)[]>;
  filter: Ref<string>;
  filterText: Ref<string>;

  model: WritableComputedRef<TComboboxModel[]>;

  autocomplete: ComputedRef<string>;

  field: Ref<IField>;

  isBusy: Ref<boolean>;
  isDisabled: ComputedRef<boolean>;
  isOpen: Ref<boolean>;

  hasOptions: ComputedRef<boolean>;

  open: () => void;
  close: (e?: Event | undefined, force?: boolean) => void;
  registerOverlay: () => void;
  unRegisterOverlay: () => void;
  onChangeActiveIndex: (event: KeyboardEvent, index?: number) => number;
  onSetFocusOption: () => void;
  onChooseOption: (option: TOption, flag?: boolean) => void;
  onFilterOptions: (flag?: boolean) => TOption[];
  onSetValue: () => void;
};

export const ComboboxContext = Symbol(
  "ComboboxContext"
) as InjectionKey<StateComboboxDefinition>;

export const LCombobox = defineComponent({
  props: {
    modelValue: {
      type: [Array, String, Number] as PropType<TComboboxModel>,
      default: () => {
        return [];
      },
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
    showList: {
      type: Boolean,
      default: false,
    },
    // ...IGeneralPropsFormElement,
  },
  emits: [
    "update:showList",
    "update:modelValue",
    "onLoadItems",
    "onInput",
    "onChoose",
  ],
  setup(props, { slots, emit }) {
    const autocomplete = computed<
      StateComboboxDefinition["autocomplete"]["value"]
    >(() => props.field?.autocomplete || "none");
    const isNone = ref<StateComboboxDefinition["isNone"]["value"]>(false);
    const isList = ref<StateComboboxDefinition["isList"]["value"]>(false);
    const isBoth = ref<StateComboboxDefinition["isBoth"]["value"]>(false);
    const field = ref<StateComboboxDefinition["field"]["value"]>(props.field);

    const focusOption =
      ref<StateComboboxDefinition["focusOption"]["value"]>(-1);
    const hasOptions = computed<StateComboboxDefinition["hasOptions"]["value"]>(
      () => filteredOptions.value.length > 0 // focusOption.value > 0
    );
    const option = ref<StateComboboxDefinition["option"]["value"]>(null);
    const isOpen = ref<StateComboboxDefinition["isOpen"]["value"]>(false);
    const hasHover = ref<StateComboboxDefinition["hasHover"]["value"]>(false);
    const isBusy = ref<StateComboboxDefinition["isBusy"]["value"]>(false);
    const isDisabled = computed<StateComboboxDefinition["isDisabled"]["value"]>(
      () => field.value?.disabled || isBusy.value || false
    );

    const comboboxHasVisualFocus =
      ref<StateComboboxDefinition["comboboxHasVisualFocus"]["value"]>(false);
    const listboxHasVisualFocus =
      ref<StateComboboxDefinition["listboxHasVisualFocus"]["value"]>(false);

    const comboboxNode =
      ref<StateComboboxDefinition["comboboxNode"]["value"]>(null);
    const listboxNode =
      ref<StateComboboxDefinition["listboxNode"]["value"]>(null);

    const allOptions = ref<StateComboboxDefinition["allOptions"]["value"]>([]);

    const model = computed<StateComboboxDefinition["model"]["value"]>({
      get() {
        return props.field.multiple && Array.isArray(props.modelValue)
          ? [...props.modelValue]
          : [props.modelValue];
      },
      set(value) {
        const newValue = field.value.multiple ? value : value[0];
        emit("update:modelValue", newValue), emit("onInput", newValue);
      },
    });

    const filter = ref<StateComboboxDefinition["filter"]["value"]>("");
    const filterText = ref<StateComboboxDefinition["filterText"]["value"]>("");
    const filteredOptions = ref<
      StateComboboxDefinition["filteredOptions"]["value"]
    >([]);

    const onFilterOptions = (flag?: boolean) => {
      console.time("onFilterOptions");

      if (typeof flag !== "boolean") {
        flag = false;
      }

      // let _option = null;
      // let _currentOption = combobox.option.value;
      const _filter = filter.value.toLowerCase();

      let _filteredOptions: TOption[] = [];
      const _keyFilter = field.value.keyFilter;
      const _allOptions = field.value.items || [];
      // this.listboxNode.innerHTML = '';

      // do not filter any options if autocomplete is none
      if ((isNone.value || filter.value.length === 0) && !flag) {
        // filter.value = "";
        _filteredOptions = _allOptions;
      } else {
        if (_keyFilter) {
          _filteredOptions = _allOptions
            .filter((x: any) =>
              typeof x == "object"
                ? x[_keyFilter].toLowerCase().indexOf(_filter) === 0
                : false
            )
            .sort(
              (a: any, b: any) =>
                combobox.model.value.indexOf(a[_keyFilter]) -
                combobox.model.value.indexOf(b[_keyFilter])
            );
        } else {
          _filteredOptions = _allOptions.filter((x) =>
            typeof x == "string" ? x.toLowerCase().indexOf(_filter) === 0 : ""
          );
        }
      }

      // const allOptions = field.value.items || [];
      // let result: TOption[] = allOptions;
      // if (keyFilter) {
      //   result = allOptions
      //     .filter((x) =>
      //       typeof x == "object"
      //         ? x[keyFilter]
      //             .toLowerCase()
      //             .indexOf(filterText.value.toLowerCase()) !== -1
      //         : typeof x == "number"
      //         ? x !== -1
      //         : x.toLowerCase().indexOf(filterText.value.toLowerCase()) !== -1
      //     )
      //     .sort(
      //       (a: any, b: any) =>
      //         combobox.model.value.indexOf(a[keyFilter]) -
      //         combobox.model.value.indexOf(b[keyFilter])
      //     );
      // }
      filteredOptions.value = _filteredOptions;
      console.timeEnd("onFilterOptions");

      return _filteredOptions;
    };

    watch(
      () => props.field.items,
      () => {
        onFilterOptions();
      }
    );

    if (field.value.autocomplete) {
      if (typeof field.value.autocomplete === "string") {
        const auto = field.value.autocomplete.toLowerCase();
        isNone.value = auto === "none";
        isList.value = auto === "list";
        isBoth.value = auto === "both";
      } else {
        // default value of autocomplete
        isNone.value = true;
      }
    }

    const open = () => {
      isOpen.value = true;
      // onChooseFirstSelectedOption();

      setTimeout(() => {
        registerOverlay();
      }, 10);
      nextTick(() => {
        if (!combobox.isNone.value) {
          comboboxNode.value?.setSelectionRange(
            0,
            combobox.filter.value.length
          );
        }
      });
      // this.buttonNode.setAttribute('aria-expanded', 'true');
    };

    const close = (e: Event | undefined, force?: boolean) => {
      if (typeof force !== "boolean") {
        force = false;
      }
      if (!e) return;
      const el = e.target as HTMLInputElement | null;
      // if (
      //   !force ||
      //   combobox.listboxNode.value?.contains(el) ||
      //   combobox.comboboxNode.value == el
      // ) {
      //   return;
      // }
      if (
        force ||
        (!combobox.listboxNode.value?.contains(el) &&
          combobox.comboboxNode.value != el)
      ) {
        unRegisterOverlay();
        // this.setCurrentOptionStyle(false);
        isOpen.value = false;
        // this.buttonNode.setAttribute("aria-expanded", "false");
        // this.setActiveDescendant(false);
        comboboxNode.value?.focus();
        combobox.focusOption.value = -1;
        if (!field.value.multiple) {
          nextTick(() => {
            if (!combobox.isNone.value) {
              comboboxNode.value?.setSelectionRange(
                combobox.filter.value.length,
                combobox.filter.value.length
              );
            }
          });
        }
      }
    };

    const unRegisterOverlay = () => {
      if (document) {
        document.removeEventListener("click", close);
        document.removeEventListener("keyup", close);
      }
    };

    const registerOverlay = () => {
      if (document) {
        document.addEventListener("click", close);
        document.addEventListener("keyup", close);
      }
    };

    const onChangeActiveIndex = (e: KeyboardEvent, index?: number) => {
      let newIndex = combobox.focusOption.value || 0;

      if (index || index === 0) {
        newIndex = index;
      } else {
        // if (combobox.focusOption.value == -1) {
        //   newIndex = 0;
        // }
        if (e.key === "ArrowDown") {
          newIndex++;
          // e.preventDefault();
        } else if (e.key === "ArrowUp") {
          newIndex--;
          // e.preventDefault();
        }
        if (newIndex > combobox.allOptions.value.length - 1) {
          newIndex = combobox.allOptions.value.length - 1;
        }
        if (newIndex < 0) {
          newIndex = 0;
        }
      }
      combobox.focusOption.value = newIndex;
      return newIndex;
    };

    // const onChooseFirstSelectedOption = () => {
    //   const keyValue = combobox.field.value.keyValue;
    //   const firstValue = combobox.field.value.multiple
    //     ? combobox.model.value[0]
    //     : combobox.model.value;

    //   let index = combobox.filteredOptions.value.findIndex((x) =>
    //     keyValue && typeof x == "object"
    //       ? x[keyValue] == firstValue
    //       : x == firstValue
    //   );
    //   if (index == -1) {
    //     combobox.focusOption.value = 0;
    //     index = 0;
    //   } else {
    //     combobox.focusOption.value = index;
    //   }
    //   return index;
    // };

    const onSetFocusOption = () => {
      // if (!combobox.focusOption.value) {
      //   combobox.focusOption.value = 0;
      // }
      const keyValue = combobox.field.value.keyValue;
      nextTick(() => {
        const value =
          combobox.filteredOptions.value[combobox.focusOption.value];
        if (!value) {
          // value = combobox.filteredOptions.value[0];
          return;
        }
        const elForFocus = combobox.allOptions.value.find(
          (x) =>
            x.index ===
            (keyValue && typeof value == "object" ? value[keyValue] : value)
        );
        if (elForFocus?.el) {
          //  && !select.searchEl.value
          elForFocus.el?.focus();
        }

        // model.value = [keyValue ? value[keyValue] : value];
      });
    };

    /**
     * Choose option.
     * @param option object | string | number
     */
    const onChooseOption = (option: TOption, flag: boolean) => {
      if (typeof flag !== "boolean") {
        flag = false;
      }
      const value: any =
        combobox.field.value.keyValue && typeof option == "object"
          ? option[combobox.field.value.keyValue]
          : option;
      emit("onChoose", value);
      const index = combobox.model.value.findIndex((x: any) => x === value);
      let newValue = [...combobox.model.value];
      if (combobox.field.value.multiple) {
        if (index !== -1) {
          newValue.splice(index, 1);
        } else {
          newValue.push(value);
        }
        combobox.filter.value = `${value}`;
      } else {
        newValue = [value];
        combobox.filter.value = `${value}`;
      }
      if (!isNone.value) {
        nextTick(() => {
          if (flag) {
            combobox.comboboxNode.value?.setSelectionRange(
              0,
              combobox.filter.value.length
            );
          } else {
            combobox.comboboxNode.value?.setSelectionRange(
              combobox.filterText.value.length,
              combobox.filter.value.length
            );
          }
        });
      }
      // combobox.model.value = newValue;

      // if (!combobox.field.value.multiple) {

      //   // combobox.filterText.value = value;
      // }
    };

    const onSetValue = () => {
      // const _keyValue = combobox.field.value.keyValue;
      // console.group("onSetValue");
      if (field.value.multiple) {
        const newValue: TComboboxModel[] = [...combobox.model.value];
        const indexExists = combobox.model.value.findIndex(
          (x) => x == combobox.filter.value
        );
        if (indexExists != -1) {
          newValue.splice(indexExists, 1);
        } else {
          newValue.push(combobox.filter.value);
        }
        combobox.model.value = newValue;
        filter.value = "";
      } else {
        combobox.model.value = [combobox.filter.value];
      }
      combobox.onFilterOptions();
      console.groupEnd();
    };

    const combobox = {
      autocomplete,
      isNone,
      isBoth,
      isList,
      field,

      comboboxNode,
      listboxNode,

      focusOption,
      hasOptions,

      filter,
      filterText,

      option,
      allOptions,
      filteredOptions,

      model,

      comboboxHasVisualFocus,
      listboxHasVisualFocus,
      hasHover,

      isOpen,
      isBusy,
      isDisabled,
      open,
      close,
      registerOverlay,
      unRegisterOverlay,
      onChangeActiveIndex,
      onSetFocusOption,
      onChooseOption,
      onFilterOptions,
      onSetValue,
    };

    const loadData = async () => {
      isBusy.value = true;
      await emit("onLoadItems");
      isBusy.value = false;
    };

    onMounted(async () => {
      await loadData();
      nextTick(() => {
        if (field.value.autofocus) {
          combobox.comboboxNode.value?.focus();
        }
      });
      await onFilterOptions();
    });

    provide(ComboboxContext, combobox);

    return () =>
      h("div", null, {
        default: () =>
          slots.default
            ? slots.default({
                // combobox,
                isNone: isNone.value,
                isOpen: isOpen.value,
                isBusy: isBusy.value,
              })
            : [],
      });
  },
});

export const LComboboxInput = defineComponent({
  name: "LComboboxInput",
  setup(props, { slots }) {
    const combobox = inject(ComboboxContext);
    if (!combobox) {
      console.info("LComboboxInput must be nested to LCombobox component");
      return;
    }

    // const query = ref("");
    const searchDebounce = ref<ReturnType<typeof setTimeout> | null>(null);
    const onSearch = () => {
      combobox.filterText.value = combobox.filter.value;
      // select.onLoadItems({ text: newValue.value })
      combobox.isBusy.value = false;
      combobox.focusOption.value = -1;
      !combobox.isOpen.value && combobox.open();
      combobox.onFilterOptions();
      nextTick(() => {
        if (combobox.isBoth.value) {
          const addOption = combobox.filteredOptions.value[0];
          if (addOption && combobox.filterText.value.length) {
            combobox.onChooseOption(addOption);
            // !combobox.field.value.multiple && combobox.close(e, true);
          }
        }
      });
      // combobox.comboboxNode.value?.setSelectionRange(
      //   combobox.filterText.value.length - 1,
      //   combobox.filterText.value.length
      // );
    };

    // if (combobox.field.value.autocomplete) {
    watch(
      () => combobox.model.value,
      (val) => {
        if (combobox.isBoth.value && !combobox.field.value?.multiple) {
          combobox.filter.value = `${val[0]}`;
        }
      }
    );
    // }

    const aria = computed(() => {
      const aria: HTMLAttributes = {};
      // aria["aria-controls"] = `${combobox.field.value.name}-listbox`;
      if (combobox.allOptions.value[combobox.focusOption.value]) {
        aria["aria-activedescendant"] = `${
          combobox.allOptions.value[combobox.focusOption.value]?.key
        }`;
      }
      return aria;
    });

    return () =>
      h(
        "input",
        {
          ref: combobox.comboboxNode,
          id: combobox.field.value.id,
          value: combobox.filter.value,
          type: "text",
          name: combobox.field.value.id,
          role: "combobox",
          tabindex: 0,
          placeholder: combobox.field.value.placeholder,
          "aria-autocomplete": combobox.autocomplete.value,
          "aria-expanded": combobox.isOpen.value,
          "aria-controls": `${combobox.field.value.name}-listbox`,
          ...aria.value,
          onInput: (e: KeyboardEvent) => {
            const el = e.target as HTMLInputElement;
            if (searchDebounce.value) clearTimeout(searchDebounce.value);
            combobox.isBusy.value = true;
            combobox.filter.value = el.value;
            searchDebounce.value = setTimeout(() => onSearch(), 500);
          },
          onClick: withModifiers(
            (e: MouseEvent) => {
              if (combobox.isOpen.value) {
                combobox.close(e, true);
              } else {
                combobox.open();
              }
            },
            ["stop"]
          ),
          onKeydown: withModifiers((e: KeyboardEvent) => {
            let flag = false;
            const altKey = e.altKey;
            switch (e.key) {
              case "Enter":
                if (combobox.isOpen.value && combobox.focusOption.value != -1) {
                  const addOption =
                    combobox.filteredOptions.value[combobox.focusOption.value];
                  if (addOption) {
                    combobox.onChooseOption(addOption, true);
                    // !combobox.field.value.multiple && combobox.close(e, true);
                    combobox.onSetValue();
                  }
                  if (!combobox.field.value.multiple) {
                    combobox.close(e, true);
                    combobox.onFilterOptions(true);
                  }
                }
                combobox.filterText.value = "";
                // if (this.listboxHasVisualFocus) {
                //   this.setValue(this.option.textContent);
                // }
                // this.close(true);
                // this.setVisualFocusCombobox();
                flag = true;
                break;
              case "ArrowDown":
              case "Down":
                if (combobox.hasOptions) {
                  if (altKey) {
                    !combobox.isOpen.value && combobox.open();
                  } else {
                    !combobox.isOpen.value && combobox.open();
                    combobox.onChangeActiveIndex(e);
                    const currentOption =
                      combobox.filteredOptions.value[
                        combobox.focusOption.value
                      ];
                    if (currentOption && combobox.isBoth.value) {
                      combobox.onChooseOption(currentOption, true);
                    }
                    combobox.onSetFocusOption();
                    nextTick(() => {
                      combobox.comboboxNode.value?.focus();
                      combobox.filterText.value = "";
                    });
                    // if (
                    //   this.listboxHasVisualFocus ||
                    //   (this.isBoth && this.filteredOptions.length > 1)
                    // ) {
                    //   this.setOption(this.getNextOption(this.option), true);
                    //   this.setVisualFocusListbox();
                    // } else {
                    //   this.setOption(this.firstOption, true);
                    //   this.setVisualFocusListbox();
                    // }
                  }
                }
                flag = true;
                break;
              case "Up":
              case "ArrowUp":
                if (combobox.hasOptions) {
                  if (altKey) {
                    combobox.open();
                  } else {
                    if (!combobox.isOpen.value) {
                      combobox.open();
                      combobox.onChangeActiveIndex(
                        e,
                        combobox.filteredOptions.value.length - 1
                      );
                    } else {
                      combobox.onChangeActiveIndex(e);
                    }
                    combobox.onSetFocusOption();
                    const currentOption =
                      combobox.filteredOptions.value[
                        combobox.focusOption.value
                      ];
                    if (currentOption && combobox.isBoth.value) {
                      combobox.onChooseOption(currentOption);
                    }
                    nextTick(() => {
                      combobox.comboboxNode.value?.focus();
                      combobox.filterText.value = "";
                    });
                    // if (this.listboxHasVisualFocus) {
                    //   this.setOption(this.getPreviousOption(this.option), true);
                    // } else {
                    //   this.open();
                    //   if (!altKey) {
                    //     this.setOption(this.lastOption, true);
                    //     this.setVisualFocusListbox();
                    //   }
                    // }
                  }
                }
                flag = true;
                break;
              case "Esc":
              case "Escape":
                if (combobox.isOpen.value) {
                  combobox.close(e, true);
                  // this.setVisualFocusCombobox();
                  combobox.comboboxNode.value?.setSelectionRange(
                    combobox.filter.value.length,
                    combobox.filter.value.length
                  );
                } else {
                  combobox.model.value = [];
                  combobox.filter.value = "";
                  combobox.filterText.value = "";
                  // this.setValue('');
                  // this.comboboxNode.value = '';
                }
                // combobox.unRegisterOverlay();
                // combobox.option.value = null;
                combobox.onFilterOptions(true);
                flag = true;
                break;
              case "Tab":
                combobox.close(e, true);
                // this.close(true);
                // if (this.listboxHasVisualFocus) {
                //   if (this.option) {
                //     this.setValue(this.option.textContent);
                //   }
                // }
                // break;
                break;
              case "Home":
                combobox.comboboxNode.value?.setSelectionRange(0, 0);
                flag = true;
                break;
              case "End":
                combobox.comboboxNode.value?.setSelectionRange(
                  combobox.filter.value.length,
                  combobox.filter.value.length
                );
                // var length = this.comboboxNode.value.length;
                // this.comboboxNode.setSelectionRange(length, length);
                flag = true;
                break;
              default:
                break;
            }

            if (flag) {
              e.stopPropagation();
              e.preventDefault();
            }
          }, []),
          onKeyup: withModifiers((e: KeyboardEvent) => {
            let flag = false;
            // option = null;
            const char = e.key;

            // if (isPrintableCharacter(char)) {
            //   combobox.filter.value += char;
            // }
            // console.log(
            //   ".......",
            //   combobox.filterText.value,
            //   combobox.filter.value
            // );

            // this is for the case when a selection in the textbox has been deleted
            // if (
            //   combobox.filterText.value.length < combobox.filter.value.length
            // ) {
            //   combobox.filterText.value = combobox.filter.value;
            //   combobox.option.value = null;
            //   combobox.onFilterOptions();
            //   // this.filterOptions();
            // }

            if (e.key === "Escape" || e.key === "Esc") {
              return;
            }

            switch (e.key) {
              case "Backspace":
                // this.setVisualFocusCombobox();
                // this.setCurrentOptionStyle(false);
                // combobox.filterText.value = combobox.filter.value;
                // combobox.option.value = null;
                // this.filterOptions();
                combobox.onFilterOptions();
                flag = true;
                break;

              case "Left":
              case "ArrowLeft":
              case "Right":
              case "ArrowRight":
              case "Home":
              case "End":
                if (combobox.isBoth.value) {
                  // combobox.filterText.value = combobox.filter.value;
                } else {
                  // combobox.option.value = null;
                  // this.setCurrentOptionStyle(false);
                }
                // this.setVisualFocusCombobox();
                // flag = true;
                break;

              default:
                if (isPrintableCharacter(char)) {
                  // this.setVisualFocusCombobox();
                  // this.setCurrentOptionStyle(false);
                  flag = true;

                  // if (combobox.isList.value || combobox.isBoth.value) {
                  //   option = this.filterOptions();
                  //   if (option) {
                  //     if (this.isClosed() && this.comboboxNode.value.length) {
                  //       this.open();
                  //     }

                  //     if (
                  //       this.getLowercaseContent(option).indexOf(
                  //         this.comboboxNode.value.toLowerCase()
                  //       ) === 0
                  //     ) {
                  //       this.option = option;
                  //       if (this.isBoth || this.listboxHasVisualFocus) {
                  //         this.setCurrentOptionStyle(option);
                  //         if (this.isBoth) {
                  //           this.setOption(option);
                  //         }
                  //       }
                  //     } else {
                  //       this.option = null;
                  //       this.setCurrentOptionStyle(false);
                  //     }
                  //   } else {
                  //     this.close();
                  //     this.option = null;
                  //     this.setActiveDescendant(false);
                  //   }
                  // } else if (this.comboboxNode.value.length) {
                  //   this.open();
                  // }
                }
                break;
            }

            if (flag) {
              e.stopPropagation();
              e.preventDefault();
            }
          }, []),
          onFocus: () => {
            // combobox.filterText.value = combobox.filter.value;
            // this.filterOptions();
            // combobox.onFilterOptions();
            // this.setVisualFocusCombobox();
            // combobox.option.value = null;
            // this.setCurrentOptionStyle(null);
          },
          onBlur: () => {
            // this.removeVisualFocusAll();
          },
        },
        slots.default ? slots.default({}) : []
      );
  },
});

export const LComboboxButton = defineComponent({
  name: "LComboboxButton",
  setup(props, { slots }) {
    const combobox = inject(ComboboxContext);
    if (!combobox) {
      console.info("LComboboxButton must be nested to LCombobox component");
      return;
    }

    // const onSearch = () => {
    //   combobox.filterText.value = combobox.filter.value;
    //   combobox.isBusy.value = false;
    //   combobox.focusOption.value = -1;
    //   !combobox.isOpen.value && combobox.open();
    //   combobox.allOptions.value.findIndex((x) =>
    //     x[combobox.field.value.keyValue]
    //       .toLowerCase()
    //       .startsWith(combobox.filter.value)
    //   );
    //   nextTick(() => {
    //     if (combobox.isBoth.value) {
    //       const addOption = combobox.filteredOptions.value[0];
    //       if (addOption && combobox.filterText.value.length) {
    //         combobox.onChooseOption(addOption);
    //         // !combobox.field.value.multiple && combobox.close(e, true);
    //       }
    //     }
    //   });
    // };

    return () =>
      h(
        "div",
        {
          ref: combobox.comboboxNode,
          id: combobox.field.value.id,
          name: combobox.field.value.id,
          role: "combobox",
          tabindex: 0,
          "aria-labelledby": `${combobox.field.value.id}_label`,
          "aria-expanded": combobox.isOpen.value,
          "aria-controls": `${combobox.field.value.name}-listbox`,
          "aria-activedescendant": `${
            combobox.allOptions.value[combobox.focusOption.value]?.key || ""
          }`,
          onClick: withModifiers((e: MouseEvent) => {
            if (combobox.isOpen.value) {
              combobox.close(e, true);
            } else {
              combobox.open();
            }
          }, []),
          onKeydown: withModifiers((e: KeyboardEvent) => {
            let flag = false;
            const altKey = e.altKey;
            switch (e.key) {
              case "Enter":
                if (combobox.isOpen.value && combobox.focusOption.value != -1) {
                  const addOption =
                    combobox.filteredOptions.value[combobox.focusOption.value];
                  if (addOption) {
                    combobox.onChooseOption(addOption, true);
                    // !combobox.field.value.multiple && combobox.close(e, true);
                    combobox.onSetValue();
                  }
                  if (!combobox.field.value.multiple) {
                    combobox.close(e, true);
                    // combobox.onFilterOptions(true);
                  }
                }
                // combobox.filterText.value = "";
                flag = true;
                break;
              case "ArrowDown":
              case "Down":
                if (combobox.hasOptions) {
                  if (altKey) {
                    !combobox.isOpen.value && combobox.open();
                  } else {
                    if (!combobox.isOpen.value) {
                      combobox.open();
                      if (combobox.focusOption.value <= 0) {
                        combobox.focusOption.value = 0;
                      }
                      combobox.onChangeActiveIndex(
                        e,
                        combobox.focusOption.value
                      );
                    } else {
                      combobox.onChangeActiveIndex(e);
                    }
                    // const currentOption =
                    //   combobox.filteredOptions.value[
                    //     combobox.focusOption.value
                    //   ];
                    // if (currentOption && combobox.isBoth.value) {
                    //   combobox.onChooseOption(currentOption, true);
                    // }
                    combobox.onSetFocusOption();
                    nextTick(() => {
                      combobox.comboboxNode.value?.focus();
                      // combobox.filterText.value = "";
                    });
                  }
                }
                flag = true;
                break;
              case "Up":
              case "ArrowUp":
                if (combobox.hasOptions) {
                  if (altKey) {
                    combobox.open();
                  } else {
                    if (!combobox.isOpen.value) {
                      combobox.open();
                      if (combobox.focusOption.value <= 0) {
                        combobox.focusOption.value =
                          combobox.filteredOptions.value.length - 1;
                      }
                      combobox.onChangeActiveIndex(
                        e,
                        combobox.focusOption.value
                      );
                    } else {
                      combobox.onChangeActiveIndex(e);
                    }
                    combobox.onSetFocusOption();
                    // const currentOption =
                    //   combobox.filteredOptions.value[
                    //     combobox.focusOption.value
                    //   ];
                    // if (currentOption && combobox.isBoth.value) {
                    //   combobox.onChooseOption(currentOption);
                    // }
                    nextTick(() => {
                      combobox.comboboxNode.value?.focus();
                      combobox.filterText.value = "";
                    });
                    // if (this.listboxHasVisualFocus) {
                    //   this.setOption(this.getPreviousOption(this.option), true);
                    // } else {
                    //   this.open();
                    //   if (!altKey) {
                    //     this.setOption(this.lastOption, true);
                    //     this.setVisualFocusListbox();
                    //   }
                    // }
                  }
                }
                flag = true;
                break;
              case "Esc":
              case "Escape":
                if (combobox.isOpen.value) {
                  combobox.close(e, true);
                } else {
                  combobox.model.value = [];
                  combobox.filter.value = "";
                  combobox.filterText.value = "";
                }
                // combobox.onFilterOptions(true);
                flag = true;
                break;
              case "Tab":
                combobox.close(e, true);
                break;
              case "Home":
                flag = true;
                break;
              case "End":
                flag = true;
                break;
              default:
                break;
            }

            if (flag) {
              e.stopPropagation();
              e.preventDefault();
            }
          }, []),
        },
        slots.default ? slots.default({}) : []
      );
  },
});

export const LComboboxOptions = defineComponent({
  name: "LComboboxOptions",
  props: {
    as: {
      type: String,
      default: "ul",
    },
  },
  setup(props, { slots }) {
    const combobox = inject(ComboboxContext);
    if (!combobox) {
      console.info("LComboboxOptions must be nested to LCombobox component");
      return;
    }

    return () =>
      h(
        props.as,
        {
          ref: combobox.listboxNode,
          id: `${combobox.field.value.id}-listbox`,
          role: "listbox",
          "aria-labelledby": `${combobox.field.value.id}`,
          // tabindex: 0,
          // ...aria.value,
          onKeydown: withModifiers((e: KeyboardEvent) => {}, ["stop"]),
          onPointerup: () => {},
          onPointerover: () => {
            combobox.hasHover.value = true;
          },
          onPointerout: () => {
            combobox.hasHover.value = false;
          },
        },
        slots.default
          ? slots.default({
              // groups: select?.groups.value,
              options: combobox.filteredOptions.value, // select.schema.value.items,
              hasOptions: combobox.hasOptions.value,
            })
          : []
      );
  },
});

export const LComboboxOption = defineComponent({
  props: {
    as: {
      type: String,
      default: "li",
    },
    value: {
      type: [String, Number, Object],
      default: "",
    },
  },
  name: "LComboboxOption",
  setup(props, { slots }) {
    const combobox = inject(ComboboxContext);
    if (!combobox) {
      console.info(
        "LComboboxOption must be nested to LComboboxOptions component"
      );
      return;
    }

    const currentOption = ref<HTMLElement | null>(null);

    const id = useId();
    const indexKey = computed(() =>
      combobox.field.value.keyValue && typeof props.value == "object"
        ? props.value[combobox.field.value.keyValue]
        : props.value
    );

    const selected = computed(() => {
      return combobox.model.value.includes(
        combobox.field.value.keyValue && typeof props.value == "object"
          ? props.value[combobox.field.value.keyValue]
          : props.value
      );
    });

    const hovered = computed(() => {
      const keyValue = combobox.field.value.keyValue;
      const value = combobox.filteredOptions.value[combobox.focusOption.value];
      let isHovered = false;
      if (value) {
        isHovered =
          (keyValue && typeof props.value == "object"
            ? props.value[keyValue]
            : props.value) ==
          (keyValue && typeof value == "object" ? value[keyValue] : value);
      }
      return isHovered;
      // select.model.value.includes(
      //   select.field.value.keyValue
      //     ? props.value[select.field.value.keyValue]
      //     : props.value
      // );
    });

    onMounted(() => {
      combobox.allOptions.value.push({
        index: indexKey.value,
        key: `${combobox.field.value.id}-option-${id}`,
        el: currentOption.value,
      });
    });

    const index = computed(() =>
      combobox?.allOptions.value.findIndex((x) => x.key == indexKey.value)
    );

    onUnmounted(() => {
      // delete select.optionsElement.value[key.value];
      combobox?.allOptions.value.splice(index.value, 1);
    });

    return () =>
      h(
        props.as,
        {
          ref: currentOption,
          id: `${combobox.field.value.id}-option-${id}`,
          role: "option",
          "aria-disabled": false,
          tabindex: -1,
          "aria-selected": selected.value === true ? selected.value : undefined,
          // ...aria.value,
          onKeydown: withModifiers(
            (e: KeyboardEvent) => {
              // switch (e.key) {
              //   case "Enter":
              //     combobox.onChooseOption(props.value);
              //     // if (this.listboxHasVisualFocus) {
              //     //   this.setValue(this.option.textContent);
              //     // }
              //     // this.close(true);
              //     // this.setVisualFocusCombobox();
              //     break;
              // }
              // if (searchDebounce.value) clearTimeout(searchDebounce.value);
              // // onSearch(e.key);
              // searchDebounce.value = setTimeout(
              //   () => select.clearSearchQuery(),
              //   350
              // );
              // // select all options
              // if (e.ctrlKey && e.key === "a") {
              //   toggleChooseAll();
              //   e.preventDefault();
              // }
              // if (e.key === "Escape") {
              //   select.focusOption.value = -1;
              //   select.show.value = false;
              //   select.selectButtonEl.value.focus({ preventScroll: true });
              //   return;
              // }
              // change index active option.
              // const newIndex = select.onChangeActiveIndex(e);
              // e.preventDefault();
              // if (newIndex !== select.focusOption.value) {
              //   // set focus by index element from selected elements.
              //   select.focusOption.value = newIndex;
              //   // select.filteredOptions.value[newIndex]?.focus();
              //   const keyValue = select.field.value.keyValue;
              //   const value = select.filteredOptions.value[newIndex];
              //   const elForFocus = select.optionsEl.value.find(
              //     (x) => x.key == (keyValue ? value[keyValue] : value)
              //   );
              //   console.log(
              //     "focus option = ",
              //     newIndex,
              //     select.optionsEl.value
              //   );
              //   if (elForFocus) {
              //     //  && !select.searchEl.value
              //     elForFocus.el?.focus();
              //     // console.log("focus index option = ", newIndex, elForFocus.el);
              //   } else {
              //     // select.searchEl.value?.focus();
              //   }
              //   // select.optionsEl[newIndex].value?.focus();
              // }
              // if (!e.shiftKey) {
              //   select.indexShiftFrom.value = newIndex;
              // }
              // if (
              //   e.shiftKey &&
              //   (e.key === "ArrowDown" || e.key === "ArrowUp")
              // ) {
              //   select.indexShiftTo.value = select.focusOption.value;
              //   select.chooseItemsOfRange({
              //     range: {
              //       from: select.indexShiftFrom.value,
              //       to: select.indexShiftTo.value,
              //     },
              //   });
              //   // select.indexShiftFrom.value =
              //   //   select.indexShiftFrom.value || select.focusOption.value
              //   // console.group('onKeyDown')
              //   // console.log(
              //   //   'select.focusOption.value=',
              //   //   select.focusOption.value
              //   // )
              //   // console.log('From =', select.indexShiftFrom.value)
              //   // console.log('To =', select.indexShiftTo.value)
              //   // console.groupEnd()
              // }
            },
            ["stop"]
          ),
          onPointerup: () => {
            // if (
            //   !this.comboboxNode.contains(event.target) &&
            //   !this.listboxNode.contains(event.target) &&
            //   !this.buttonNode.contains(event.target)
            // ) {
            //   this.comboboxHasVisualFocus = false;
            //   this.setCurrentOptionStyle(null);
            //   this.removeVisualFocusAll();
            //   setTimeout(this.close.bind(this, true), 300);
            // }
          },
          onPointerover: () => {
            combobox.hasHover.value = true;
          },
          onPointerout: () => {
            combobox.hasHover.value = false;
            // setTimeout(this.close.bind(this, false), 300);
          },
          onClick: withModifiers(
            (e: MouseEvent) => {
              combobox.onChooseOption(props.value);

              combobox.onSetValue();
              if (!combobox.field.value?.multiple) {
                combobox.close(e, true);
              }
              if (!combobox.isNone) {
                combobox.onFilterOptions(true);
              }
              nextTick(() => {
                combobox.comboboxNode.value?.focus();
              });
            },
            ["stop"]
          ),
          // onKeyup: (e: KeyboardEvent) => {
          //   if (e.key === "Shift") {
          //     select.pressShift.value = false;
          //     select.indexShiftFrom.value = 0;
          //     select.indexShiftTo.value = 0;
          //   }
          // },
          // onFocus: () => {
          // },
        },
        slots.default
          ? slots.default({
              selected: selected.value,
              hovered: hovered.value,
            })
          : combobox.field.value.keyValue && typeof props.value == "object"
          ? props.value[combobox.field.value.keyValue]
          : props.value
      );
  },
});
