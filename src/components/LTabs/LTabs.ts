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
} from "vue";
import type { Ref, InjectionKey, WritableComputedRef } from "vue";

import { dom } from "@/composable/useDom";
import { useId } from "@/composable/useId";

export type StateDefinition = {
  // State
  selectedIndex: Ref<number | null>;
  focusedIndex: Ref<number | null>;
  selectedKey: Ref<string | null>;
  focusedKey: Ref<string | null>;
  orientation: Ref<"vertical" | "horizontal">;
  activation: Ref<"auto" | "manual">;
  model: WritableComputedRef<string>;

  tabs: Ref<{ tab: Ref<HTMLElement | null>; tabData: string }[]>;
  panels: Ref<Ref<HTMLElement | null>[]>;

  // State mutators
  setSelectedKey(key: string): void;
  setFocusedIndex(index: string): void;
  registerTab(tab: Ref<HTMLElement | null>, tabData: string): void;
  unregisterTab(tab: Ref<HTMLElement | null>, tabData: string): void;
  registerPanel(panel: Ref<HTMLElement | null>): void;
  unregisterPanel(panel: Ref<HTMLElement | null>): void;
};

export const TabsContext = Symbol(
  "TabsContext"
) as InjectionKey<StateDefinition>;

// function useTabsContext(component: string) {
//   const context = inject(TabsContext, null)

//   if (context === null) {
//     const err = new Error(
//       `<${component} /> is missing a parent <TabGroup /> component.`
//     )
//     if (Error.captureStackTrace) Error.captureStackTrace(err, useTabsContext)
//     throw err
//   }

//   return context
// }

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
    const selectedIndex = ref<StateDefinition["selectedIndex"]["value"]>(null);
    const focusedIndex = ref<StateDefinition["focusedIndex"]["value"]>(null);
    const selectedKey = ref<StateDefinition["selectedKey"]["value"]>(null);
    const focusedKey = ref<StateDefinition["focusedKey"]["value"]>(null);
    const tabs = ref<StateDefinition["tabs"]["value"]>([]);
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
      panels,
      model,
      setSelectedKey(key: string) {
        if (selectedKey.value === key) return;
        selectedKey.value = key;

        const index = tabs.value.findIndex((x) => x.tabData == key);
        selectedIndex.value = index;

        emit("change", key);
        model.value = key;
        emit("update:modelValue", key);
      },
      setFocusedIndex(key: string) {
        if (focusedKey.value === key) return;
        focusedKey.value = key;
        const index = tabs.value.findIndex((x) => x.tabData == key);
        focusedIndex.value = index;
      },
      registerTab(tab: Ref<HTMLElement | null>, tabData: string) {
        // if (!tabs.value[id]) tabs.value[id] = tab;
        tabs.value.push({
          tab,
          tabData,
        });
      },
      unregisterTab(tab: typeof tabs.value[number], id: string) {
        const idx = tabs.value.findIndex((x) => x.tabData === id);
        if (idx !== -1) tabs.value.splice(idx, 1);
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

    provide(TabsContext, tabApi);

    return () => h(props.as, { class: "tabs" }, [slots.default?.({ tabApi })]);
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
    const tabApi = inject(TabsContext);

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
        props.as,
        {
          class: "tabs-list",
          ...ourProps,
        },
        [slots.default?.({ ...props })]
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
  setup(props, { attrs, slots, expose }) {
    const tabApi = inject(TabsContext);
    const id = `l-tabs-tab-${useId()}`;

    const internalTabRef = ref<HTMLElement | null>(null);

    expose({ el: internalTabRef, $el: internalTabRef });

    // console.log("internalTabRef=", props.tab);

    onMounted(() => {
      tabApi?.registerTab(internalTabRef, props.tab);
      if (props.tab == tabApi?.model.value) {
        // tabApi?.setSelectedKey(props.tab);
        handleSelection();
      }
    });
    onUnmounted(() => tabApi?.unregisterTab(internalTabRef, props.tab));

    const indexTab = computed(() =>
      tabApi?.tabs.value.findIndex((x) => x.tab == internalTabRef.value)
    );
    const selected = computed(() => props.tab === tabApi?.selectedKey.value);
    const focused = computed(() => props.tab === tabApi?.focusedKey.value);

    const nextTab = (event) => {
      if (tabApi.focusedIndex.value == tabApi?.tabs.value.length - 1) return;
      tabApi.focusedIndex.value = tabApi.focusedIndex.value + 1;
      tabApi.tabs.value[tabApi.focusedIndex.value]?.tab.focus();

      event.preventDefault();
      event.stopPropagation();
    };
    const prevTab = (event) => {
      if (tabApi.focusedIndex.value < 1) return;
      tabApi.focusedIndex.value = tabApi?.focusedIndex.value - 1;
      tabApi.tabs.value[tabApi.focusedIndex.value]?.tab.focus();

      event.preventDefault();
      event.stopPropagation();
    };

    function handleKeyDown(event: KeyboardEvent) {
      // const list = tabApi?.tabs.value
      //   .map((tab) => dom(tab))
      //   .filter(Boolean) as HTMLElement[];

      if (event.key === "Space" || event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();

        tabApi?.setSelectedKey(props.tab);
        return;
      }

      switch (event.key) {
        case "Home":
        case "PageUp":
          event.preventDefault();
          event.stopPropagation();

          // dom(api.tabs.value[0])?.focus()
          tabApi.tabs.value[0]?.focus();
          // api.setSelectedKey(0)

          return; // focusIn(list, Focus.First)

        case "End":
        case "PageDown":
          event.preventDefault();
          event.stopPropagation();
          // dom(tabApi.tabs.value[tabApi.tabs.value.length - 1])?.focus()
          tabApi.tabs.value[tabApi.tabs.value.length - 1]?.focus();
          // tabApi.setSelectedKey(tabApi.tabs.value.length - 1)
          return; // focusIn(list, Focus.Last)
      }
      // console.log("Event key=", event.key);

      if (tabApi?.orientation.value == "vertical") {
        if (event.key === "ArrowUp")
          // return focusIn(list, Focus.Previous | Focus.WrapAround);
          prevTab(event);
        if (event.key === "ArrowDown")
          // return focusIn(list, Focus.Next | Focus.WrapAround);
          nextTab(event);
        return;
      } else {
        // const indexCurrent = tabApi?.tabs.value.findIndex(
        //   (x) => x.tabData == tabApi.focusedIndex.value
        // );
        // const currentTab =
        //   indexCurrent !== -1 ? tabApi?.tabs.value[indexCurrent] : 0;
        // console.log(
        //   "Not vertical => index=",
        //   indexCurrent,
        //   " tab=",
        //   currentTab
        // );

        if (event.key === "ArrowLeft") {
          prevTab(event);
          // console.log(
          //   "focus tab-#",
          //   tabApi.tabs.value[tabApi.focusedIndex.value]?.tab.focus()
          // );
          // dom(tabApi.tabs.value[tabApi.focusedIndex.value].tab)?.focus();
          // return; // focusIn(list, Focus.Previous | Focus.WrapAround)
        } else if (event.key === "ArrowRight") {
          nextTab(event);
          // console.log("focus tab-#", tabApi.focusedIndex.value);
          // dom(tabApi.tabs.value[tabApi.focusedIndex.value].tab)?.focus();
          // console.log(
          //   "focus tab-#",
          //   tabApi.tabs.value[tabApi.focusedIndex.value]?.tab.focus()
          // );
          // return; // focusIn(list, Focus.Next | Focus.WrapAround)
          // return;
        }
      }
    }

    function handleFocus() {
      internalTabRef.value?.focus();
      tabApi.setFocusedIndex(props.tab);
    }

    /**
     * event click
     */
    function handleSelection() {
      if (props.disabled) return;

      dom(internalTabRef)?.focus();
      tabApi.setSelectedKey(props.tab);
      tabApi.setFocusedIndex(props.tab);
    }

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
    function handleMouseDown(event: MouseEvent) {
      event.preventDefault();
    }

    const type = "button";
    // useResolveButtonType(
    //   computed(() => ({ as: props.as, type: attrs.type })),
    //   internalTabRef
    // )
    // console.log(
    //   "tabApi.panels.value[indexTab.value]=",
    //   tabApi.panels.value[indexTab.value],
    //   " indexTab.value=",
    //   indexTab.value
    // );

    return () => {
      const slot = { selected: selected.value };

      const ourProps = {
        ref: internalTabRef,
        onKeydown: handleKeyDown,
        onFocus:
          tabApi.activation.value === "manual" ? handleFocus : handleSelection,
        onMousedown: handleMouseDown,
        onClick: handleSelection,
        id,
        role: "tab",
        type: type.value,
        "aria-controls": tabApi.panels.value[indexTab.value]?.value.id,
        "aria-selected": selected.value,
        tabIndex: selected.value ? 0 : -1,
        disabled: props.disabled ? true : undefined,
        ["data-deletable"]: false,
      };

      let children = slots.default?.(slot);
      // console.log("children", children);

      // console.log(children);

      return h(children[0], {
        ...props,
        ...ourProps,
        selected: selected.value,
      });
    };
  },
});

export const LTabPanels = defineComponent({
  name: "LTabPanels",
  props: {
    as: { type: [Object, String], default: "div" },
  },
  setup(props, { slots, attrs }) {
    const tabApi = inject(TabsContext);

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
  setup(props, { attrs, slots, expose }) {
    const tabApi = inject(TabsContext);
    const id = `l-tabs-panel-${useId()}`;

    const internalPanelRef = ref<HTMLElement | null>(null);

    expose({ el: internalPanelRef, $el: internalPanelRef });

    onMounted(() => tabApi?.registerPanel(internalPanelRef));
    onUnmounted(() => tabApi?.unregisterPanel(internalPanelRef));

    const myIndex = computed(() =>
      tabApi.panels.value.indexOf(internalPanelRef)
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
        "aria-labelledby": dom(tabApi.tabs.value[myIndex.value])?.id,
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
      // return render({
      //   ourProps,
      //   theirProps: props,
      //   slot,
      //   attrs,
      //   slots,
      //   features: Features.Static | Features.RenderStrategy,
      //   visible: selected.value,
      //   name: "TabPanel",
      // });
    };
  },
});
