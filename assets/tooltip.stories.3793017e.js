var n=Object.defineProperty;var e=(t,o)=>n(t,"name",{value:o,configurable:!0});import"./FButton.e2284790.js";import{b as l}from"./FText.e47b59e4.js";import"./FCheckbox.231a7475.js";import"./FCombobox.2a76966d.js";import"./FCheckboxGroup.00f6ca4e.js";import"./FNumber.4084e374.js";import"./FTabs.48dc9955.js";import{_ as i}from"./FMultiSelect.f13b4e17.js";import"./FSpinner.5c65aea2.js";import"./FMenu.262032d8.js";import{t as r}from"./tooltip.c1dd918e.js";import{a as s}from"./vue.esm-bundler.780544ed.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ripple.4234d591.js";import"./LIcon.15f4bd65.js";import"./useId.06feead9.js";import"./useIcon.fe9488f3.js";import"./LSpinner.c2fd7dc3.js";import"./useDom.cdb636d1.js";import"./browser.cfbb4fdd.js";import"./LMenu.0b5d16bd.js";const P={parameters:{storySource:{source:`import { FButton } from "@/components/ui/index";
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
//# sourceMappingURL=tooltip.stories.3793017e.js.map
