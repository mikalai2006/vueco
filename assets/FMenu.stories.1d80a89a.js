var d=Object.defineProperty;var t=(n,e)=>d(n,"name",{value:e,configurable:!0});import{a as o}from"./vue.esm-bundler.780544ed.js";import{L as c}from"./LIcon.15f4bd65.js";import{L as s,a as r,c as u,d as i,b as m}from"./LMenu.0b5d16bd.js";import{L as a,_ as p}from"./FButton.e2284790.js";import{_ as l}from"./FMenu.262032d8.js";import{i as L}from"./useIcon.fe9488f3.js";import"./useId.06feead9.js";import"./browser.cfbb4fdd.js";import"./useDom.cdb636d1.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ripple.4234d591.js";import"./FText.e47b59e4.js";import"./FCheckbox.231a7475.js";import"./FCombobox.2a76966d.js";import"./LSpinner.c2fd7dc3.js";import"./FCheckboxGroup.00f6ca4e.js";import"./FNumber.4084e374.js";import"./FTabs.48dc9955.js";import"./FMultiSelect.f13b4e17.js";import"./FSpinner.5c65aea2.js";const q={title:"Components/FMenu",component:l,parameters:{storySource:{source:`import { ref } from "vue";

// import vitestResults from "@/unit-test-results.json";

// import FCombobox from "@/components/ui/FCombobox.vue";
import { LIcon } from "@/components/LIcon";
import {
  LMenu,
  LMenuButton,
  LMenuItem,
  LMenuItems,
  LMenuItemWrapper,
} from "@/components/LMenu";
import { LBtn } from "@/components/LBtn";
import FMenu from "@/components/ui/FMenu.vue";
import FButton from "@/components/ui/FButton.vue";

export default {
  title: "Components/FMenu",
  component: FMenu,
  parameters: {
    // vitest: {
    //   testFile: "FCombobox.spec.ts",
    //   testResults: vitestResults,
    // },
  },
};

import {
  iChevronDown,
  // iCheck,
  // iClose,
} from "@/stories/composable/useIcon";

const SimpleTemplate = (args: any) => ({
  components: {
    FMenu,
    LBtn,

    FButton,

    LMenu,
    LMenuButton,
    LMenuItems,
    LMenuItemWrapper,
    LMenuItem,
  },
  setup() {
    const activeMenuitem = ref("");

    return {
      activeMenuitem,
    };
  },
  template: \`
    <div class="h-64">
      <FMenu v-model="activeMenuitem"></FMenu>
    </div>
  \`,
});

export const Simple: any = SimpleTemplate.bind({});
Simple.args = {
  // modelValue: [],
  // field: schema,
};

const DefaultTemplate = (args: any) => ({
  components: {
    LMenu,
    LMenuButton,
    LMenuItems,
    LMenuItemWrapper,
    LMenuItem,
    FButton,
    LBtn,
    LIcon,
  },
  setup() {
    const activeMenuitem = ref("");

    return {
      activeMenuitem,
      iChevronDown,
    };
  },
  template: \`
  <LMenu
    :class="['relative', {}]"
    #default="{ isOpen }"
  >
    <LMenuButton
      as="template"
    >
      <FButton mode="danger">
        <span class="flex items-center">
          Button menu
          <LIcon
            role="presentation"
            :class="['ml-2 transition-transform', { 'rotate-180': isOpen }]"
          >
            {{ iChevronDown }}
          </LIcon>
        </span>
      </FButton>
    </LMenuButton>
    <div
      v-show="isOpen"
      class="absolute text-sm left-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-s-800 shadow-lg"
    >
      <LMenuItems class="px-2 py-2 divide-y divide-s-100 dark:divide-s-700">
        <LMenuItemWrapper as="div">
          <LMenuItem
            as="LBtn"
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            item 1
          </LMenuItem>
          <LMenuItem
            as="LBtn"
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            item 2
          </LMenuItem>
        </LMenuItemWrapper>
        <LMenuItemWrapper as="div">
          <LMenuItem
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            <LBtn>item 1</LBtn>
          </LMenuItem>
        </LMenuItemWrapper>
      </LMenuItems>
    </div>
  </LMenu>
  <LMenu
    :class="['relative', {}]"
    #default="{ isOpen }"
  >
    <LMenuButton
      as="template"
    >
      <FButton mode="link">
        <span class="flex items-center">
          Button menu
          <LIcon
            role="presentation"
            :class="['ml-2 transition-transform', { 'rotate-180': isOpen }]"
          >
            {{ iChevronDown }}
          </LIcon>
        </span>
      </FButton>
    </LMenuButton>
    <div
      v-show="isOpen"
      class="absolute text-sm left-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-s-800 shadow-lg"
    >
      <LMenuItems class="px-2 py-2 divide-y divide-s-100 dark:divide-s-700">
        <LMenuItemWrapper as="div">
          <LMenuItem
            as="LBtn"
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            item 1
          </LMenuItem>
          <LMenuItem
            as="LBtn"
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            item 2
          </LMenuItem>
        </LMenuItemWrapper>
        <LMenuItemWrapper as="div">
          <LMenuItem
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            <LBtn>item 1</LBtn>
          </LMenuItem>
        </LMenuItemWrapper>
      </LMenuItems>
    </div>
  </LMenu>
  \`,
});

export const Default: any = DefaultTemplate.bind({});
Default.args = {
  // modelValue: [],
  // field: schema,
};
`,locationsMap:{simple:{startLoc:{col:23,line:35},endLoc:{col:2,line:60},startBody:{col:23,line:35},endBody:{col:2,line:60}},default:{startLoc:{col:24,line:68},endLoc:{col:2,line:185},startBody:{col:24,line:68},endBody:{col:2,line:185}}}}}},M=t(n=>({components:{FMenu:l,LBtn:a,FButton:p,LMenu:s,LMenuButton:r,LMenuItems:u,LMenuItemWrapper:i,LMenuItem:m},setup(){return{activeMenuitem:o("")}},template:`
    <div class="h-64">
      <FMenu v-model="activeMenuitem"></FMenu>
    </div>
  `}),"SimpleTemplate"),f=M.bind({});f.args={};const g=t(n=>({components:{LMenu:s,LMenuButton:r,LMenuItems:u,LMenuItemWrapper:i,LMenuItem:m,FButton:p,LBtn:a,LIcon:c},setup(){return{activeMenuitem:o(""),iChevronDown:L}},template:`
  <LMenu
    :class="['relative', {}]"
    #default="{ isOpen }"
  >
    <LMenuButton
      as="template"
    >
      <FButton mode="danger">
        <span class="flex items-center">
          Button menu
          <LIcon
            role="presentation"
            :class="['ml-2 transition-transform', { 'rotate-180': isOpen }]"
          >
            {{ iChevronDown }}
          </LIcon>
        </span>
      </FButton>
    </LMenuButton>
    <div
      v-show="isOpen"
      class="absolute text-sm left-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-s-800 shadow-lg"
    >
      <LMenuItems class="px-2 py-2 divide-y divide-s-100 dark:divide-s-700">
        <LMenuItemWrapper as="div">
          <LMenuItem
            as="LBtn"
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            item 1
          </LMenuItem>
          <LMenuItem
            as="LBtn"
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            item 2
          </LMenuItem>
        </LMenuItemWrapper>
        <LMenuItemWrapper as="div">
          <LMenuItem
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            <LBtn>item 1</LBtn>
          </LMenuItem>
        </LMenuItemWrapper>
      </LMenuItems>
    </div>
  </LMenu>
  <LMenu
    :class="['relative', {}]"
    #default="{ isOpen }"
  >
    <LMenuButton
      as="template"
    >
      <FButton mode="link">
        <span class="flex items-center">
          Button menu
          <LIcon
            role="presentation"
            :class="['ml-2 transition-transform', { 'rotate-180': isOpen }]"
          >
            {{ iChevronDown }}
          </LIcon>
        </span>
      </FButton>
    </LMenuButton>
    <div
      v-show="isOpen"
      class="absolute text-sm left-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-s-800 shadow-lg"
    >
      <LMenuItems class="px-2 py-2 divide-y divide-s-100 dark:divide-s-700">
        <LMenuItemWrapper as="div">
          <LMenuItem
            as="LBtn"
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            item 1
          </LMenuItem>
          <LMenuItem
            as="LBtn"
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            item 2
          </LMenuItem>
        </LMenuItemWrapper>
        <LMenuItemWrapper as="div">
          <LMenuItem
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            <LBtn>item 1</LBtn>
          </LMenuItem>
        </LMenuItemWrapper>
      </LMenuItems>
    </div>
  </LMenu>
  `}),"DefaultTemplate"),v=g.bind({});v.args={};const z=["Simple","Default"];export{v as Default,f as Simple,z as __namedExportsOrder,q as default};
//# sourceMappingURL=FMenu.stories.1d80a89a.js.map
