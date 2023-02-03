var n=Object.defineProperty;var e=(t,o)=>n(t,"name",{value:o,configurable:!0});import"./FButton.705b3556.js";import{b as l}from"./FText.2ae2cb53.js";import"./FCheckbox.9b5e3c49.js";import"./FCombobox.c40d8232.js";import"./FCheckboxGroup.77f2c40d.js";import"./FNumber.2bc24b64.js";import"./FTabs.f0dd4848.js";import{_ as i}from"./FMultiSelect.36a4102c.js";import"./FSpinner.cdad262e.js";import"./FMenu.50f5982b.js";import{t as r}from"./tooltip.81481ea8.js";import{a as s}from"./vue.esm-bundler.63e44d6a.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ripple.4234d591.js";import"./LIcon.a931258d.js";import"./useId.06feead9.js";import"./useIcon.fe9488f3.js";import"./LSpinner.d97669ba.js";import"./useDom.cdb636d1.js";import"./browser.cfbb4fdd.js";import"./LMenu.f36d856f.js";const P={parameters:{storySource:{source:`import { FButton } from "@/components/ui/index";
import { FMultiSelect, FText } from "@/components/ui";
import { tooltip } from "@/directives/tooltip";

import type { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "directives/Tooltip",
  directives: { tooltip },
} as Meta<typeof tooltip>;

export const Default: StoryFn<typeof tooltip> = () => ({
  setup() {
    return {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    };
  },
  template: \`
  <h1>Default tooltip</h1>
  <div class="flex items-center h-64 w-full overflow-y-scroll b-scroll bg-black/10 dark:bg-white/10 p-24">
    <div
      v-tooltip="{
        content,
      }"
      class="h-24 bg-black/10 p-2 rounded-md"
    >
      Default tooltip
    </div>
    <div class="h-96"></div>
  </div>
  <h1>Default tooltip2</h1>
  <div class="h-48 w-full overflow-y-scroll b-scroll bg-black/10 dark:bg-white/10 px-64 pt-12">
    <div class="py-16">
      Scroll to bottom
    </div>
    <div
      v-tooltip:right="{
        content,
        showTriggers: ['click'],
        hideTriggers: ['click'],
        open: true,
      }"
      class="p-12 mb-48 relative h-48 w-48 bg-black/10 rounded-md"
    >
      With triggers
    </div>
  </div>
  \`,
});

export const Placement: StoryFn<typeof tooltip> = () => ({
  components: {
    FMultiSelect,
    FText,
  },
  setup() {
    const placement = ref("top");

    return {
      placement,
      content: \`Tooltip playground - placement: [\${placement.value}]. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\`,
    };
  },
  template: \`
  <h1>Placement tooltip</h1>
  <div class="h-80 overflow-y-auto b-scroll bg-black/5 dark:bg-white/5">
    <div class="h-screen w-1/2 py-24 flex items-center mx-auto">
      <div
        v-tooltip:[placement]="{
          content,
          open: true,
        }"
        class="flex flex-col items-center p-4 py-16 max-w-xs relative bg-black/10 rounded-md"
      >
        Tooltip playground
        <FText :modelValue="placement" readonly :field="{ autofocus: true,  }"></FText>
      </div>
    </div>
  </div>
  <div class="py-4">
    <FMultiSelect
      v-model="placement"
      :field="{
        label: 'Placement',
        placeholder: 'Choose placement',
        items: [
          'auto',
          'auto-start',
          'auto-end',
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'right',
          'right-start',
          'right-end',
          'left',
          'left-start',
          'left-end',
        ],
      }"
    >
    </FMultiSelect>
  </div>
  \`,
});
`,locationsMap:{default:{startLoc:{col:48,line:13},endLoc:{col:2,line:51},startBody:{col:48,line:13},endBody:{col:2,line:51}},placement:{startLoc:{col:50,line:53},endLoc:{col:2,line:110},startBody:{col:50,line:53},endBody:{col:2,line:110}}}}},title:"directives/Tooltip",directives:{tooltip:r}},I=e(()=>({setup(){return{content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}},template:`
  <h1>Default tooltip</h1>
  <div class="flex items-center h-64 w-full overflow-y-scroll b-scroll bg-black/10 dark:bg-white/10 p-24">
    <div
      v-tooltip="{
        content,
      }"
      class="h-24 bg-black/10 p-2 rounded-md"
    >
      Default tooltip
    </div>
    <div class="h-96"></div>
  </div>
  <h1>Default tooltip2</h1>
  <div class="h-48 w-full overflow-y-scroll b-scroll bg-black/10 dark:bg-white/10 px-64 pt-12">
    <div class="py-16">
      Scroll to bottom
    </div>
    <div
      v-tooltip:right="{
        content,
        showTriggers: ['click'],
        hideTriggers: ['click'],
        open: true,
      }"
      class="p-12 mb-48 relative h-48 w-48 bg-black/10 rounded-md"
    >
      With triggers
    </div>
  </div>
  `}),"Default"),B=e(()=>({components:{FMultiSelect:i,FText:l},setup(){const t=s("top");return{placement:t,content:`Tooltip playground - placement: [${t.value}]. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}},template:`
  <h1>Placement tooltip</h1>
  <div class="h-80 overflow-y-auto b-scroll bg-black/5 dark:bg-white/5">
    <div class="h-screen w-1/2 py-24 flex items-center mx-auto">
      <div
        v-tooltip:[placement]="{
          content,
          open: true,
        }"
        class="flex flex-col items-center p-4 py-16 max-w-xs relative bg-black/10 rounded-md"
      >
        Tooltip playground
        <FText :modelValue="placement" readonly :field="{ autofocus: true,  }"></FText>
      </div>
    </div>
  </div>
  <div class="py-4">
    <FMultiSelect
      v-model="placement"
      :field="{
        label: 'Placement',
        placeholder: 'Choose placement',
        items: [
          'auto',
          'auto-start',
          'auto-end',
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'right',
          'right-start',
          'right-end',
          'left',
          'left-start',
          'left-end',
        ],
      }"
    >
    </FMultiSelect>
  </div>
  `}),"Placement"),$=["Default","Placement"];export{I as Default,B as Placement,$ as __namedExportsOrder,P as default};
//# sourceMappingURL=tooltip.stories.c50c729a.js.map
