import { useId } from "@/composable/useId";
import { nextTick } from "process";
import { useDom } from "@/composable/useDom";
import {
  defineComponent,
  h,
  ref,
  type InjectionKey,
  type Ref,
  onMounted,
  onUnmounted,
  inject,
  provide,
  type PropType,
  // withModifiers,
  // Fragment,
  // cloneVNode,
} from "vue";

function useContext(component: string) {
  const context = inject(MenuContext, null);

  if (context === null) {
    const err = new Error(
      `<${component} /> is missing a parent <LMenu /> component.`
    );
    if (Error.captureStackTrace) Error.captureStackTrace(err, useContext);
    throw err;
  }

  return context;
}

export interface IMenuItem {
  id?: string | number;
  title?: string;
  description?: string;
  group?: string;
  parentId?: string;
}
export interface IMenuField {
  title?: string;
  keyTitle?: string;
  keyGroup: keyof IMenuItem;
  items: IMenuItem[];
}

export type StateMenuDefinition = {
  // State
  id: string;
  domNode: Ref<HTMLElement | null>;
  buttonNode: Ref<HTMLElement | null>;
  menuNode: Ref<HTMLElement | null>;
  menuItemsNode: Ref<(HTMLElement | null)[]>;

  firstMenuItem: Ref<HTMLElement | null>;
  lastMenuItem: Ref<HTMLElement | null>;
  activeItem: Ref<HTMLElement | null>;
  activeItemIndex: Ref<number>;

  // menuItems: ComputedRef<IMenuItem[]>;

  field: Ref<IMenuField>;

  isOpen: Ref<boolean>;

  registerOverlay: () => void;
  unRegisterOverlay: () => void;
  onOpenPopup: () => void;
  onClosePopup: () => void;
  onSetFocusToMenuitem: (newMenuitem: HTMLElement | null) => void;
  onChangeActiveIndex: (e: KeyboardEvent) => void;
};

export const MenuContext = Symbol(
  "MenuContext"
) as InjectionKey<StateMenuDefinition>;

export const LMenu = defineComponent({
  props: {
    field: {
      type: Object as PropType<IMenuField>,
      default: () => {
        return {};
      },
    },
  },
  setup(props, { slots }) {
    const domNode = ref<StateMenuDefinition["domNode"]["value"]>(null);
    const buttonNode = ref<StateMenuDefinition["buttonNode"]["value"]>(null);
    const menuNode = ref<StateMenuDefinition["menuNode"]["value"]>(null);
    const menuItemsNode = ref<StateMenuDefinition["menuItemsNode"]["value"]>(
      []
    );

    const firstMenuItem =
      ref<StateMenuDefinition["firstMenuItem"]["value"]>(null);
    const lastMenuItem =
      ref<StateMenuDefinition["lastMenuItem"]["value"]>(null);
    const activeItem = ref<StateMenuDefinition["activeItem"]["value"]>(null);
    const activeItemIndex =
      ref<StateMenuDefinition["activeItemIndex"]["value"]>(0);
    const field = ref<StateMenuDefinition["field"]["value"]>(props.field);
    // const menuItems = computed<StateMenuDefinition["menuItems"]["value"]>(
    //   () => props.field.items
    // );

    const unRegisterOverlay = () => {
      if (document) {
        document.removeEventListener("click", onClosePopup);
        document.removeEventListener("keyup", onClosePopup);
      }
    };

    const registerOverlay = () => {
      if (document) {
        document.addEventListener("click", onClosePopup);
        document.addEventListener("keyup", onClosePopup);
      }
    };

    const isOpen = ref<StateMenuDefinition["isOpen"]["value"]>(false);

    const onOpenPopup = () => {
      if (!isOpen.value) {
        registerOverlay();
      }
      menu.isOpen.value = true;
    };

    const onClosePopup = (e: Event) => {
      const tgt = e?.target as HTMLInputElement | null;

      if (
        tgt &&
        (useDom(menu.domNode)?.contains(tgt) ||
          useDom(menu.menuNode)?.contains(tgt) ||
          useDom(menu.buttonNode)?.contains(tgt))
      ) {
        return;
      } else {
        const btn = useDom(menu.buttonNode);
        btn?.focus();
      }

      menu.isOpen.value = false;

      unRegisterOverlay();
    };

    const onSetFocusToMenuitem = (newMenuitem: HTMLElement | null) => {
      menuItemsNode.value.forEach(function (item) {
        if (item === newMenuitem) {
          activeItem.value = newMenuitem;
          useDom(ref(newMenuitem))?.focus();
        }
      });
    };

    const onChangeActiveIndex = (e: KeyboardEvent) => {
      let index = menuItemsNode.value.indexOf(activeItem.value);
      switch (e.key) {
        case "Up":
        case "ArrowUp":
          index--;
          break;

        case "ArrowDown":
        case "Down":
          index++;
          break;

        default:
          break;
      }

      onSetFocusToMenuitem(menuItemsNode.value[index]);
    };

    const idMenu = useId();
    const id: StateMenuDefinition["id"] = `menu-${idMenu}`;

    const menu = {
      id,

      domNode,
      buttonNode,
      menuNode,
      menuItemsNode,

      firstMenuItem,
      lastMenuItem,
      activeItem,
      activeItemIndex,

      // menuItems,
      field,

      isOpen,

      registerOverlay,
      unRegisterOverlay,
      onOpenPopup,
      onClosePopup,

      onSetFocusToMenuitem,
      onChangeActiveIndex,
    };

    // onMounted(() => {
    //   const _firstMenuItem = menuItemsNode.value[0];
    //   const _lastMenuItem = menuItemsNode.value[menuItemsNode.value.length - 1];
    //   firstMenuItem.value = _firstMenuItem;
    //   lastMenuItem.value = _lastMenuItem;
    // });

    provide(MenuContext, menu);

    return () =>
      h(
        "div",
        {
          ref: domNode,
          id: `menu-${id}`,
        },

        {
          default: () =>
            slots.default
              ? slots.default({
                  isOpen: isOpen.value,
                })
              : undefined,
        }
      );
  },
});

// export const LMenuButton = defineComponent({
//   props: {
//     as: {
//       type: [String, Object],
//       default: "button",
//     },
//   },
//   setup(props, { slots }) {
//     const menu = useContext("LMenuButton");
//     // let slotsChild: any = slots.default ? slots.default() : [];

//     onMounted(() => {
//       // if (typeof props.as == "object") {
//       //   slotsChild = () => Object.values(slots).map((x) => (x ? x() : []));
//       // }
//     });

//     return () =>
//       h(
//         props.as as string,
//         {
//           id: `menu-button-${menu.id}`,
//           ref: menu.buttonNode,
//           "aria-expanded": menu.isOpen.value,
//           "aria-controls": `menu-list-${menu.id}`,
//           onKeydown: (e: KeyboardEvent) => {
//             let flag = false;
//             switch (e.key) {
//               case "Enter":
//               case "ArrowDown":
//               case "Down":
//                 menu.onOpenPopup();
//                 nextTick(() => {
//                   menu.onSetFocusToMenuitem(menu.firstMenuItem.value);
//                 });
//                 flag = true;
//                 break;
//               case "Esc":
//               case "Escape":
//                 menu.onClosePopup();
//                 // menu.buttonNode.value?.focus();
//                 flag = true;
//                 break;
//               case "Up":
//               case "ArrowUp":
//                 menu.onOpenPopup();
//                 nextTick(() => {
//                   menu.onSetFocusToMenuitem(menu.lastMenuItem.value);
//                 });
//                 flag = true;
//                 break;
//               default:
//                 break;
//             }

//             if (flag) {
//               e.stopPropagation();
//               e.preventDefault();
//             }
//           },
//           onClick: withModifiers(
//             (e: MouseEvent) => {
//               if (menu.isOpen.value) {
//                 menu.onClosePopup();
//                 // menu.buttonNode.value?.focus();
//               } else {
//                 menu.onOpenPopup();
//                 // this.setFocusToFirstMenuitem();
//               }
//               // e.stopPropagation();
//               // e.preventDefault();
//             },
//             ["stop"]
//           ),
//         },
//         {
//           default: () => (slots.default ? slots.default({}) : []),
//         }
//       );
//   },
// });

export const LMenuButton = defineComponent({
  props: {
    as: {
      type: [String, Object],
      default: "button",
    },
  },
  inheritAttrs: false,
  setup(props, { slots, attrs }) {
    const menu = useContext("LMenuButton");
    // onMounted(() => {
    //   // if (props.as == "template") {
    //   //   slotsChild = () => Object.values(slots).map((x) => (x ? x() : []));
    //   // }
    // });

    return () => {
      const _props: any = {
        id: `menu-button-${menu.id}`,
        ref: menu.buttonNode,
        "aria-expanded": menu.isOpen.value,
        "aria-controls": `menu-list-${menu.id}`,
        ...attrs,
        onKeydown: (e: KeyboardEvent) => {
          let flag = false;
          switch (e.key) {
            case "Enter":
            case "ArrowDown":
            case "Down":
              menu.onOpenPopup();
              nextTick(() => {
                menu.onSetFocusToMenuitem(menu.firstMenuItem.value);
              });
              flag = true;
              break;
            case "Esc":
            case "Escape":
              menu.onClosePopup();
              // menu.buttonNode.value?.focus();
              flag = true;
              break;
            case "Up":
            case "ArrowUp":
              menu.onOpenPopup();
              nextTick(() => {
                menu.onSetFocusToMenuitem(menu.lastMenuItem.value);
              });
              flag = true;
              break;
            default:
              break;
          }

          if (flag) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onClick: () => {
          if (menu.isOpen.value) {
            menu.onClosePopup();
            // menu.buttonNode.value?.focus();
          } else {
            menu.onOpenPopup();
            // this.setFocusToFirstMenuitem();
          }
          // e.stopPropagation();
          // e.preventDefault();
        },
      };

      if (props.as == "template") {
        const _slots = slots.default?.();
        // console.log("_slots", _slots);
        const _children = _slots?.length ? _slots[0] : _slots;
        // console.log("_children", _children);
        // const newNode = cloneVNode(_children, _props);
        // console.log("newNode", newNode);
        return _children ? h(_children, _props) : null;
      } else {
        return h(props.as as string, _props, {
          default: () => (slots.default ? slots.default() : []),
        });
      }
    };
    // return () =>
    //   props.as != "template"
    //     ? h(props.as as string, _props, {
    //         default: () => (slots.default ? slots.default({}) : []),
    //       })
    //     : h(newNode, null, {
    //         default: () => (slots.default ? slots.default({ ..._props }) : []),
    //       });
  },
});

export const LMenuItems = defineComponent({
  // props: {},
  setup(props, { slots, attrs }) {
    const menu = useContext("LMenuItems");
    return () =>
      h(
        "div",
        {
          id: `menu-list-${menu.id}`,
          ref: menu.menuNode,
          role: "menu",
        },
        {
          default: () => (slots.default ? slots.default() : []),
        }
      );
  },
});
export const LMenuItemWrapper = defineComponent({
  props: {
    as: {
      type: [String, Object],
      default: "ul",
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.as as string,
        {
          role: "presentation",
        },
        {
          default: () => (slots.default ? slots.default() : []),
        }
      );
  },
});

export const LMenuItem = defineComponent({
  props: {
    // item: {
    //   type: Object,
    //   default: () => {
    //     return {};
    //   },
    // },
    as: {
      type: [String, Object],
      default: "a",
    },
  },
  setup(props, { slots, attrs }) {
    const menu = useContext("LMenuItem");

    const menuitemNode = ref<StateMenuDefinition["menuNode"]["value"]>(null);

    // const slotDefault = slots.default()[0].children[0];
    // if (!slotDefault) {
    //   return;
    // }
    onMounted(() => {
      menu.menuItemsNode.value.push(menuitemNode.value);

      // const _firstMenuItem = menuItemsNode.value[0];
      // const _lastMenuItem = menuItemsNode.value[menuItemsNode.value.length - 1];
      if (!menu.firstMenuItem.value) {
        menu.firstMenuItem.value = menuitemNode.value;
      }
      menu.lastMenuItem.value = menuitemNode.value;
    });

    onUnmounted(() => {
      const indexMenuitem = menu.menuItemsNode.value.indexOf(
        menuitemNode.value
      );
      menu.menuItemsNode.value.slice(indexMenuitem, 1);
    });

    return () =>
      h(
        props.as as string,
        {
          ...attrs,
          ref: menuitemNode,
          role: "menuitem",
          tabindex: menuitemNode.value == menu.activeItem.value ? 0 : -1,
          onKeydown: (e: KeyboardEvent) => {
            const tgt = e.currentTarget as HTMLElement,
              key = e.key;
            let flag = false;

            if (e.ctrlKey || e.altKey || e.metaKey) {
              return;
            }

            switch (key) {
              case "Enter":
                tgt?.click();
                menu.onClosePopup();
                flag = true;
                break;

              case "Esc":
              case "Escape":
                menu.onClosePopup();
                // menu.buttonNode.value?.focus();
                flag = true;
                break;

              case "Up":
              case "ArrowUp":
                menu.onChangeActiveIndex(e);
                flag = true;
                break;

              case "ArrowDown":
              case "Down":
                menu.onChangeActiveIndex(e);
                flag = true;
                break;

              case "Home":
              case "PageUp":
                menu.onSetFocusToMenuitem(menu.firstMenuItem.value);
                flag = true;
                break;

              case "End":
              case "PageDown":
                menu.onSetFocusToMenuitem(menu.lastMenuItem.value);
                flag = true;
                break;

              case "Tab":
                menu.onClosePopup();
                break;

              default:
                // if (isPrintableCharacter(key)) {
                //   this.setFocusByFirstCharacter(tgt, key);
                //   flag = true;
                // }
                break;
            }
            if (flag) {
              e.stopPropagation();
              e.preventDefault();
            }
          },
          onClick: () => {
            menu.onClosePopup();
          },
        },
        {
          default: () => (slots.default ? slots.default() : []),
        }
        // [h(slotDefault, { role: "menuitem",  })]
      );
  },
});
