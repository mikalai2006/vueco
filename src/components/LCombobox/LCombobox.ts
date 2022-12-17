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
  type HTMLAttributes,
  type InjectionKey,
  type PropType,
  type Ref,
  type WritableComputedRef,
} from "vue";
import type { IField } from "@/components/LForm";
import { useId } from "@/composable/useId";

export type TOption =
  | {
      [key: string]: string | number | boolean;
    }
  | string
  | number
  | boolean;
export type TComboboxModel = number | string | [];
export type StateComboboxDefinition = {
  // State
  comboboxNode: Ref<HTMLFormElement | null>;
  buttonNode: Ref<HTMLFormElement | null>;
  listboxNode: Ref<HTMLFormElement | null>;

  comboboxHasVisualFocus: Ref<boolean>;
  listboxHasVisualFocus: Ref<boolean>;

  hasHover: Ref<boolean>;
  focusOption: Ref<number>;

  isNone: Ref<boolean>;
  isList: Ref<boolean>;
  isBoth: Ref<boolean>;

  allOptions: Ref<{ key: string; el: HTMLElement | null }[]>;

  option: Ref<TOption | null>;
  firstOption: Ref<TOption | null>;
  lastOption: Ref<TOption | null>;

  filteredOptions: ComputedRef<(TOption | null)[]>;
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
  close: (force?: boolean) => void;
  registerOverlay: () => void;
  unRegisterOverlay: () => void;
  onChangeActiveIndex: (event: KeyboardEvent) => number;
  onSetFocusOption: () => void;
  onChooseOption: (option: TOption) => void;
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
  },
  emits: ["update:showList", "update:modelValue", "onLoadItems", "on-input"],
  setup(props, { slots, emit }) {
    const autocomplete = computed<
      StateComboboxDefinition["autocomplete"]["value"]
    >(() => props.field?.autocomplete || "none");
    const isNone = ref<StateComboboxDefinition["isNone"]["value"]>(false);
    const isList = ref<StateComboboxDefinition["isList"]["value"]>(false);
    const isBoth = ref<StateComboboxDefinition["isBoth"]["value"]>(false);
    const field = ref<StateComboboxDefinition["field"]["value"]>(props.field);

    const focusOption = ref<StateComboboxDefinition["focusOption"]["value"]>(0);
    const hasOptions = computed<StateComboboxDefinition["hasOptions"]["value"]>(
      () => focusOption.value > 0
    );

    const filter = ref<StateComboboxDefinition["filter"]["value"]>("");

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
        emit("update:modelValue", newValue), emit("on-input");
      },
    });

    const filterText = ref<StateComboboxDefinition["filterText"]["value"]>("");
    const filteredOptions = computed<
      StateComboboxDefinition["filteredOptions"]["value"]
    >(() => {
      console.time("filteredOptions");

      const allOptions = field.value.items || [];
      let result: TOption[] = allOptions;
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
              combobox.model.value.indexOf(a[keyFilter]) -
              combobox.model.value.indexOf(b[keyFilter])
          );
      }
      console.timeEnd("filteredOptions");
      return result;
    });

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
      // this.buttonNode.setAttribute('aria-expanded', 'true');
    };

    const close = () => {
      // force?: boolean
      // if (typeof force !== "boolean") {
      //   force = false;
      // }

      if (
        !comboboxHasVisualFocus.value &&
        !listboxHasVisualFocus.value &&
        !hasHover.value
      ) {
        // this.setCurrentOptionStyle(false);
        isOpen.value = false;
        // this.buttonNode.setAttribute("aria-expanded", "false");
        // this.setActiveDescendant(false);
        comboboxNode.value?.focus();
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

    const onChangeActiveIndex = (e: KeyboardEvent) => {
      let newIndex = combobox.focusOption.value || 0;

      if (combobox.focusOption.value == -1) {
        newIndex = 0;
      }
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

      console.log("onChangeActiveIndex: newIndex=", newIndex);
      combobox.focusOption.value = newIndex;
      return newIndex;
    };

    const onSetFocusOption = () => {
      if (!combobox.focusOption.value) {
        combobox.focusOption.value = 0;
      }
      // if (select.model.value.length <= 0) {
      //   select.focusOption.value = 0;
      //   // return;
      // }
      const firstValue = combobox.field.value.multiple
        ? combobox.model.value[0]
        : combobox.model.value;

      // if (!firstValue) return;
      const keyValue = combobox.field.value.keyValue;
      const index = combobox.filteredOptions.value.findIndex((x) =>
        keyValue && typeof x == "object"
          ? x[keyValue] == firstValue
          : x == firstValue
      );
      if (index && index != -1) {
        combobox.focusOption.value = index;
      } else {
        // select.focusOption.value = 0;
      }

      // if (index == -1) {
      //   select.selectButtonEl.value?.focus();
      //   // return;
      // }
      nextTick(() => {
        const value =
          combobox.filteredOptions.value[combobox.focusOption.value];
        const elForFocus = combobox.allOptions.value.find(
          (x) => x.key === (keyValue ? value[keyValue] : value)
        );
        if (elForFocus?.el) {
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

    /**
     * Choose option.
     * @param option object | string | number
     */
    const onChooseOption = (option: TOption) => {
      const value =
        combobox.field.value.keyValue && typeof option == "object"
          ? option[combobox.field.value.keyValue]
          : option;
      const index = combobox.model.value.findIndex(
        (x: number | string) => x === value
      );
      let newValue: (string | number)[] = [...combobox.model.value];
      if (combobox.field.value.multiple) {
        if (index !== -1) {
          newValue.splice(index, 1);
        } else {
          newValue.push(value);
        }
      } else {
        newValue = [value];
      }
      combobox.model.value = newValue;
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
    });

    provide(ComboboxContext, combobox);

    return () =>
      h(
        "div",
        {},
        {
          default: () =>
            slots.default
              ? slots.default({
                  combobox,
                  isOpen: isOpen.value,
                  isBusy: isBusy.value,
                })
              : [],
        }
      );
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

    const query = ref("");
    const searchDebounce = ref<ReturnType<typeof setTimeout> | null>(null);
    const onSearch = () => {
      combobox.filterText.value = query.value;
      // select.onLoadItems({ text: newValue.value })
      combobox.isBusy.value = false;
      // select.focusOption.value = 0;
      if (!combobox.isOpen.value) {
        combobox.isOpen.value = true;
        setTimeout(() => {
          combobox.registerOverlay();
        }, 50);
      }
    };

    const isPrintableCharacter = (str: string) => {
      return str.length === 1 && str.match(/\S| /);
    };
    // const aria = computed(() => {
    //   const aria: HTMLAttributes = {};
    //   aria["aria-controls"] = `${combobox.field.value.name}-listbox`;
    //   return aria;
    // });

    return () =>
      h(
        "input",
        {
          ref: combobox.comboboxNode,
          id: combobox.field.value.id,
          value: query.value,
          type: "text",
          name: combobox.field.value.id,
          role: "combobox",
          "aria-autocomplete": combobox.autocomplete.value,
          "aria-expanded": combobox.isOpen.value,
          "aria-controls": `${combobox.field.value.name}-listbox`,
          onInput: (e: KeyboardEvent) => {
            const el = e.target as HTMLInputElement;
            if (searchDebounce.value) clearTimeout(searchDebounce.value);
            combobox.isBusy.value = true;
            searchDebounce.value = setTimeout(() => onSearch(), 350);
            query.value = el.value;
          },
          onClick: withModifiers(() => {
            console.log("LComboboxInput: onClick");
            if (combobox.isOpen.value) {
              combobox.close();
            } else {
              combobox.open();
            }
          }, []),
          onKeydown: withModifiers((e: KeyboardEvent) => {
            console.log("LComboboxInput: onKeydown");
            let flag = false;
            let altKey = e.altKey;
            switch (e.key) {
              case "Enter":
                console.log("LComboboxInput: press Enter");
                // if (this.listboxHasVisualFocus) {
                //   this.setValue(this.option.textContent);
                // }
                // this.close(true);
                // this.setVisualFocusCombobox();
                flag = true;
                break;
              case "ArrowDown":
              case "Down":
                console.log("LComboboxInput: press ArrowDown, Down");
                if (combobox.hasOptions) {
                  if (altKey) {
                    combobox.open();
                  } else {
                    combobox.open();
                    combobox.onChangeActiveIndex(e);
                    combobox.onSetFocusOption();
                    nextTick(() => {
                      combobox.comboboxNode.value?.focus();
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
                console.log("LComboboxInput: press Up, ArrowUp");
                if (combobox.hasOptions) {
                  combobox.onChangeActiveIndex(e);
                  combobox.onSetFocusOption();
                  nextTick(() => {
                    combobox.comboboxNode.value?.focus();
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
                flag = true;
                break;
              case "Esc":
              case "Escape":
                console.log("LComboboxInput: press Esc, Escape");
                if (combobox.isOpen.value) {
                  combobox.close();
                  combobox.filterText.value = "";
                  // this.filterOptions();
                  // this.setVisualFocusCombobox();
                } else {
                  // this.setValue('');
                  // this.comboboxNode.value = '';
                }
                combobox.unRegisterOverlay();
                combobox.option.value = null;
                flag = true;
                break;
              case "Tab":
                console.log("LComboboxInput: press Tab");
                // this.close(true);
                // if (this.listboxHasVisualFocus) {
                //   if (this.option) {
                //     this.setValue(this.option.textContent);
                //   }
                // }
                // break;
                break;
              case "Home":
                console.log("LComboboxInput: press Home");
                // this.comboboxNode.setSelectionRange(0, 0);
                flag = true;
                break;
              case "End":
                console.log("LComboboxInput: press End");
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
            console.log("LComboboxInput: onKeyup");
            let flag = false,
              option = null;
            const char = e.key;

            if (isPrintableCharacter(char)) {
              combobox.filter.value += char;
            }
            // this is for the case when a selection in the textbox has been deleted
            if (query.value.length < combobox.filter.value.length) {
              combobox.filter.value = query.value;
              combobox.option.value = null;
              // this.filterOptions();
            }

            if (e.key === "Escape" || e.key === "Esc") {
              return;
            }

            switch (e.key) {
              case "Backspace":
                console.log("LComboboxInput: onKeyup: Backspace");
                // this.setVisualFocusCombobox();
                // this.setCurrentOptionStyle(false);
                combobox.filter.value = query.value;
                combobox.option.value = null;
                // this.filterOptions();
                flag = true;
                break;

              case "Left":
              case "ArrowLeft":
              case "Right":
              case "ArrowRight":
              case "Home":
              case "End":
                console.log("LComboboxInput: onKeyup: Left or other");
                if (combobox.isBoth.value) {
                  combobox.filter.value = query.value;
                } else {
                  combobox.option.value = null;
                  // this.setCurrentOptionStyle(false);
                }
                // this.setVisualFocusCombobox();
                flag = true;
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
            console.log("LComboboxInput: onFocus");
            combobox.filter.value = query.value;
            // this.filterOptions();
            // this.setVisualFocusCombobox();
            combobox.option.value = null;
            // this.setCurrentOptionStyle(null);
          },
          onBlur: () => {
            console.log("LComboboxInput: onBlur");
            // this.removeVisualFocusAll();
          },
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

    // const aria = computed(() => {
    //   const aria: HTMLAttributes = {};
    //   if (combobox.option.value != null) {
    //     aria[
    //       "aria-activedescendant"
    //     ] = `${combobox.option.value.id}-option-${combobox.focusOption.value}`;
    //   }
    //   if (select.field.value.multiple) {
    //     aria["aria-multiselectable"] = true;
    //   }
    //   return aria;
    // });

    // const searchDebounce = ref<ReturnType<typeof setTimeout> | null>(null);

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
        props.as,
        {
          ref: combobox.listboxNode,
          id: `${combobox.field.value.id}-listbox`,
          role: "listbox",
          "aria-labelledby": `${combobox.field.value.id}-button`,
          // tabindex: 0,
          // ...aria.value,
          onKeydown: withModifiers(
            (e: KeyboardEvent) => {
              console.log("LComboboxOptions: onKeyDown", e.key);
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
            console.log("LComboboxOptions: onPointerup");
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
            console.log("LComboboxOptions: onPointerover");
            combobox.hasHover.value = true;
          },
          onPointerout: () => {
            console.log("LComboboxOptions: onPointerout");
            combobox.hasHover.value = false;
            // setTimeout(this.close.bind(this, false), 300);
          },
          // onKeyup: (e: KeyboardEvent) => {
          //   if (e.key === "Shift") {
          //     select.pressShift.value = false;
          //     select.indexShiftFrom.value = 0;
          //     select.indexShiftTo.value = 0;
          //   }
          // },
          // onFocus: () => {
          //   console.log("LMultiSelectOptions: onFocus");
          // },
        },
        slots.default
          ? slots.default({
              // groups: select?.groups.value,
              options: combobox.filteredOptions.value, // select.schema.value.items,
            })
          : []
      );
  },
});

export const LComboboxOptionsGroup = defineComponent({
  name: "LComboboxOptionsGroup",
  props: {
    group: {
      type: [String],
      default: "default",
      required: true,
    },
  },
  setup(props, { slots }) {
    const combobox = inject(ComboboxContext);
    if (!combobox) {
      return;
    }

    const id = useId();

    const currentGroup = computed(() => combobox.groups.value[props.group]);

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

    const currentOption = ref(null);
    const key = computed(() =>
      combobox.field.value.keyValue && typeof props.value == "object"
        ? props.value[combobox.field.value.keyValue]
        : props.value
    );

    const id = useId();

    const selected = computed(() => {
      // console.log('computed check')
      return combobox.model.value.includes(
        combobox.field.value.keyValue && typeof props.value == "object"
          ? props.value[combobox.field.value.keyValue]
          : props.value
      );
    });

    const hovered = computed(() => {
      // console.log('computed check')
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
        key: key.value,
        el: currentOption.value,
      });
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
              console.log("LComboboxOption: onKeyDown", e.key);
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
            console.log("LComboboxOption: onPointerup");
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
            console.log("LComboboxOption: onPointerover");
            combobox.hasHover.value = true;
          },
          onPointerout: () => {
            console.log("LComboboxOption: onPointerout");
            combobox.hasHover.value = false;
            // setTimeout(this.close.bind(this, false), 300);
          },
          onClick: withModifiers(() => {
            combobox.onChooseOption(props.value);
          }, ["stop"]),
          // onKeyup: (e: KeyboardEvent) => {
          //   if (e.key === "Shift") {
          //     select.pressShift.value = false;
          //     select.indexShiftFrom.value = 0;
          //     select.indexShiftTo.value = 0;
          //   }
          // },
          // onFocus: () => {
          //   console.log("LMultiSelectOptions: onFocus");
          // },
        },
        slots.default
          ? slots.default({
              selected: selected.value,
              hovered: hovered.value,
            })
          : []
      );
  },
});
