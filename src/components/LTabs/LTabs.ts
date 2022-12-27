// btn-primary, btn-accent, btn-second, btn-danger
import {
  h,
  defineComponent,
  ref,
  inject,
  computed,
  provide,
  onMounted,
  onUnmounted,
  watch,
  type VNode,
} from "vue";
import type { Ref, InjectionKey, WritableComputedRef } from "vue";

import { useId } from "@/composable/useId";
import { useDom } from "@/composable/useDom";

export type StateDefinition = {
  // State
  selectedIndex: Ref<number>;
  focusedIndex: Ref<number>;
  selectedKey: Ref<string>;
  focusedKey: Ref<string>;
  orientation: Ref<"vertical" | "horizontal">;
  activation: Ref<"auto" | "manual">;
  model: WritableComputedRef<string>;

  tabs: Ref<Ref<HTMLElement | null>[]>;
  tabsKeys: Ref<string[]>;
  panels: Ref<(HTMLElement | null)[]>;

  // State mutators
  setSelectedKey(key: string): void;
  setFocusedIndex(tab: string): void;
  registerTab(tab: Ref<HTMLElement | null>, tabData: string): void;
  unregisterTab(tab: Ref<HTMLElement | null>, tabData: string): void;
  registerPanel(panel: HTMLElement | null): void;
  unregisterPanel(panel: HTMLElement | null): void;
};

export const TabsContext = Symbol(
  "TabsContext"
) as InjectionKey<StateDefinition>;

function useContext(component: string) {
  const context = inject(TabsContext, null);

  if (context === null) {
    const err = new Error(
      `<${component} /> is missing a parent <TabGroup /> component.`
    );
    if (Error.captureStackTrace) Error.captureStackTrace(err, useContext);
    throw err;
  }

  return context;
}

export const LTabs = defineComponent({
  name: "LTabs",
  props: {
    as: { type: [Object, String], default: "div" },
    selectedIndex: { type: [Number], default: 0 },
    defaultIndex: { type: [Number], default: 0 },
    vertical: { type: [Boolean], default: false },
    manual: { type: [Boolean], default: false },
    modelValue: { type: [String], default: "" },
  },
  emits: {
    change: (_index: string) => _index,
    "update:modelValue": (index: string) => index,
  },
  setup(props, { slots, emit }) {
    const selectedIndex = ref<StateDefinition["selectedIndex"]["value"]>(0);
    const focusedIndex = ref<StateDefinition["focusedIndex"]["value"]>(0);
    const selectedKey = ref<StateDefinition["selectedKey"]["value"]>("");
    const focusedKey = ref<StateDefinition["focusedKey"]["value"]>("");
    const tabs = ref<StateDefinition["tabs"]["value"]>([]);
    const tabsKeys = ref<StateDefinition["tabsKeys"]["value"]>([]);
    const panels = ref<StateDefinition["panels"]["value"]>([]);
    const model = computed<StateDefinition["model"]["value"]>({
      get() {
        return props.modelValue;
      },
      set(val) {
        val && emit("update:modelValue", val);
      },
    });

    const tabApi = {
      selectedIndex,
      focusedIndex,
      selectedKey,
      focusedKey,
      orientation: computed(() => (props.vertical ? "vertical" : "horizontal")),
      activation: computed(() => (props.manual ? "manual" : "auto")),
      tabs,
      tabsKeys,
      panels,
      model,
      setSelectedKey(key: string) {
        if (selectedKey.value === key) return;
        selectedKey.value = key;

        const index = tabsKeys.value.findIndex((x) => x == key);
        selectedIndex.value = index;

        emit("change", key);
        model.value = key;
        emit("update:modelValue", key);
      },
      setFocusedIndex(tab: string) {
        if (focusedKey.value === tab) return;
        focusedKey.value = tab;
        const indexTab = tabsKeys.value.findIndex((x) => x == tab);
        focusedIndex.value = indexTab;
      },
      registerTab(tab: Ref<HTMLElement | null>, tabKey: string) {
        // if (!tabs.value[id]) tabs.value[id] = tab;
        if (tab) {
          tabs.value.push(tab);
          tabsKeys.value.push(tabKey);
        }
      },
      unregisterTab(tab: Ref<HTMLElement | null>, id: string) {
        const idx = tabsKeys.value.findIndex((x) => x === id);
        if (idx !== -1) {
          tabs.value.splice(idx, 1);
          tabsKeys.value.splice(idx, 1);
        }
        // if (tabs.value[id]) delete tabs.value[id];
      },
      registerPanel(panel: typeof panels.value[number]) {
        if (!panels.value.includes(panel)) panels.value.push(panel);
      },
      unregisterPanel(panel: typeof panels.value[number]) {
        const idx = panels.value.indexOf(panel);
        if (idx !== -1) panels.value.splice(idx, 1);
      },
    };

    watch(
      () => props.modelValue,
      (val) => {
        tabApi.setSelectedKey(val);
      }
    );

    provide(TabsContext, tabApi);

    return () =>
      h(
        props.as as string,
        { class: "tabs" },
        {
          default: () => (slots.default ? slots.default({ tabApi }) : []),
        }
      );
    // return () => {
    //   const slot = { selectedIndex: selectedIndex.value };
    //   const children = slots.default?.(slot);
    //   const { as, ...incomingProps } = Object.assign(props, [
    //     "unmount",
    //     "static",
    //   ]);

    //   return h(as, { class: "tabs" }, children);
    // };
  },
});

export const LTabsList = defineComponent({
  name: "LTabsList",
  props: {
    as: { type: [Object, String], default: "div" },
  },
  setup(props, { slots }) {
    const tabApi = useContext("LTabsList");

    // const slot = slots.default?.();
    // const tabList = []
    // if (slot[0].type == Fragment) {

    // }
    // console.log("slots.default", slots.default?.());

    return () => {
      // const slot = { selectedIndex: tabApi.selectedIndex.value }
      // const children = slots.default?.(slot)
      const ourProps = {
        role: "tablist",
        "aria-orientation": tabApi?.orientation.value,
      };

      return h(
        props.as as string,
        {
          class: "tabs-list",
          ...ourProps,
        },
        {
          default: () => (slots.default ? slots.default() : []),
        }
        // [slots.default?.({ ...props })]
      );
    };
  },
});

export const LTab = defineComponent({
  name: "LTab",
  props: {
    as: { type: [Object, String], default: "button" },
    tab: { type: [String], default: "default" },
    disabled: { type: [Boolean], default: false },
  },
  setup(props, { slots, expose }) {
    const tabApi = useContext("LTab");

    const id = `l-tabs-tab-${useId()}`;

    const internalTabRef = ref<HTMLElement | null>(null);

    expose({ el: internalTabRef, $el: internalTabRef });

    onMounted(() => {
      tabApi.registerTab(internalTabRef, props.tab);
      if (props.tab == tabApi?.model.value) {
        tabApi.setSelectedKey(props.tab);
        // handleSelection();
      }
    });
    onUnmounted(() => tabApi?.unregisterTab(internalTabRef, props.tab));

    const indexTab = computed(() =>
      tabApi?.tabs.value.findIndex((x) => x.value == internalTabRef.value)
    );
    const selected = computed<boolean>(
      () => props.tab === tabApi.selectedKey.value
    );
    const focused = computed(() => props.tab === tabApi.focusedKey.value);

    const nextTab = (e: KeyboardEvent) => {
      if (tabApi.focusedIndex.value == tabApi.tabs.value.length - 1) return;
      tabApi.focusedIndex.value = tabApi.focusedIndex.value + 1;
      useDom(tabApi.tabs.value[tabApi.focusedIndex.value])?.focus();

      e.preventDefault();
      e.stopPropagation();
    };

    const prevTab = (e: KeyboardEvent) => {
      if (tabApi.focusedIndex.value < 1) return;
      tabApi.focusedIndex.value = tabApi.focusedIndex.value - 1;
      useDom(tabApi.tabs.value[tabApi.focusedIndex.value])?.focus();

      e.preventDefault();
      e.stopPropagation();
    };

    const handleFocus = () => {
      useDom(internalTabRef)?.focus();
      tabApi.setFocusedIndex(props.tab);
    };

    /**
     * event click
     */
    const handleSelection = () => {
      if (props.disabled) return;
      useDom(internalTabRef)?.focus();
      tabApi.setSelectedKey(props.tab);
      tabApi.setFocusedIndex(props.tab);
    };

    // watch(
    //   () => tabApi?.model.value,
    //   () => {
    //     console.log("change model value tabApi?.model=", tabApi?.model);
    //     // selectedKey.value = props.modelValue;
    //     handleSelection();
    //   }
    // );

    // This is important because we want to only focus the tab when it gets focus
    // OR it finished the click event (mouseup). However, if you perform a `click`,
    // then you will first get the `focus` and then get the `click` event.
    function handleMouseDown(e: MouseEvent) {
      e.preventDefault();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // const list = tabApi?.tabs.value
      //   .map((tab) => dom(tab))
      //   .filter(Boolean) as HTMLElement[];

      if (e.key === "Space" || e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();

        tabApi.setSelectedKey(props.tab);
        return;
      }

      switch (e.key) {
        case "Home":
        case "PageUp":
          e.preventDefault();
          e.stopPropagation();

          useDom(tabApi.tabs.value[0])?.focus();
          tabApi.activation.value == "auto" &&
            useDom(tabApi.tabs.value[0])?.click();
          return;

        case "End":
        case "PageDown":
          e.preventDefault();
          e.stopPropagation();

          useDom(tabApi.tabs.value[tabApi.tabs.value.length - 1])?.focus();
          tabApi.activation.value == "auto" &&
            useDom(tabApi.tabs.value[tabApi.tabs.value.length - 1])?.click();
          return;
      }

      if (tabApi?.orientation.value == "vertical") {
        if (e.key === "ArrowUp") prevTab(e);
        if (e.key === "ArrowDown") nextTab(e);
        return;
      } else {
        if (e.key === "ArrowLeft") {
          prevTab(e);
        } else if (e.key === "ArrowRight") {
          nextTab(e);
        }
      }
    };

    const relatedPanel = computed(() => tabApi.panels.value[indexTab.value]);

    return () => {
      // const slot: any = { selected: selected.value };

      const ourProps: any = {
        ref: internalTabRef,
        onKeydown: handleKeyDown,
        onFocus:
          tabApi.activation.value === "manual" ? handleFocus : handleSelection,
        onMousedown: handleMouseDown,
        onClick: handleSelection,
        id,
        role: "tab",
        type: "button",
        "aria-controls": relatedPanel.value?.id,
        "aria-selected": selected.value,
        tabIndex: selected.value ? 0 : -1,
        disabled: props.disabled ? true : undefined,
        ["data-deletable"]: false,
      };

      // const children = slots.default ? slots.default(slot) : [];

      if (props.as == "template") {
        const _slots = slots.default?.({
          selected: selected.value,
          focused: focused.value,
        });
        const _children = _slots?.length ? _slots[0] : _slots;
        return _children
          ? h(
              _children,
              Object.assign(
                {},
                ourProps,
                {
                  // ...props,
                  selected: selected.value,
                  focused: focused.value,
                },
                {
                  ..._children?.props,
                }
              )
            )
          : null;
      } else {
        return h(
          props.as as string,
          {
            // ...props,
            ...ourProps,
            selected: selected.value,
            focused: focused.value,
          },
          {
            default: () =>
              slots.default
                ? slots.default({
                    selected: selected.value,
                  })
                : [],
          }
        );
      }
    };
  },
});

export const LTabPanels = defineComponent({
  name: "LTabPanels",
  props: {
    as: { type: [Object, String], default: "div" },
  },
  setup(props, { slots }) {
    const tabApi = useContext("LTabPanels");

    return () => {
      const slot = { selectedIndex: tabApi?.selectedIndex.value };

      return h(
        props.as,
        {
          class: "tabs-panels",
        },
        [slots.default?.({ slot })]
      );
      // render({
      //   theirProps: props,
      //   ourProps: {},
      //   slot,
      //   attrs,
      //   slots,
      //   name: "TabPanels",
      // });
    };
  },
});

export const LTabPanel = defineComponent({
  name: "LTabPanel",
  props: {
    as: { type: [Object, String], default: "div" },
    static: { type: Boolean, default: false },
    unmount: { type: Boolean, default: true },
  },
  setup(props, { slots, expose }) {
    const tabApi = useContext("LTabPanel");
    if (!tabApi) {
      return;
    }
    const id = `l-tabs-panel-${useId()}`;

    const internalPanelRef = ref<HTMLElement | null>(null);

    expose({ el: internalPanelRef, $el: internalPanelRef });

    onMounted(() => tabApi?.registerPanel(internalPanelRef.value));
    onUnmounted(() => tabApi?.unregisterPanel(internalPanelRef.value));

    const myIndex = computed(() =>
      tabApi.panels.value.indexOf(internalPanelRef.value)
    );
    const selected = computed(
      () => myIndex.value === tabApi.selectedIndex.value
    );

    return () => {
      const slot = { selected: selected.value };
      const ourProps = {
        ref: internalPanelRef,
        id,
        role: "tabpanel",
        "aria-labelledby": useDom(tabApi.tabs.value[myIndex.value])?.id,
        tabIndex: selected.value ? 0 : -1,
      };

      if (!selected.value && props.unmount && !props.static) {
        return h("div", {
          ...ourProps,
          style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
          },
        });
      }
      return h(
        props.as,
        {
          ...ourProps,
          visible: selected.value,
          // class: Object.assign({}, attrs.class, { hidden: !selected.value }},
        },
        [slots.default?.(slot)]
      );
    };
  },
});
