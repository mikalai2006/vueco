var m=Object.defineProperty;var t=(n,e)=>m(n,"name",{value:e,configurable:!0});import{a as i}from"./vue.esm-bundler.63e44d6a.js";import{L as p}from"./LIcon.a931258d.js";import{L as s,a as o,b as r,c as u,d as a}from"./LMenu.f36d856f.js";import{_ as l,L as d}from"./FButton.705b3556.js";import{i as c}from"./useIcon.fe9488f3.js";import"./useId.06feead9.js";import"./browser.cfbb4fdd.js";import"./useDom.cdb636d1.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ripple.4234d591.js";const W={title:"Components/LMenux",component:s,subcomponents:{LMenuButton:o,LMenuItem:r,LMenuItems:u,LMenuItemWrapper:a},parameters:{storySource:{source:`import { ref } from "vue";

import type { Meta } from "@storybook/vue3";
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
import FButton from "@/components/ui/FButton.vue";

export default {
  title: "Components/LMenux",
  component: LMenu,
  subcomponents: {
    LMenuButton,
    LMenuItem,
    LMenuItems,
    LMenuItemWrapper,
  },
  parameters: {
    // vitest: {
    //   testFile: "FCombobox.spec.ts",
    //   testResults: vitestResults,
    // },
  },
} as Meta;

import {
  iChevronDown,
  // iCheck,
  // iClose,
} from "@/stories/composable/useIcon";

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
`,locationsMap:{default:{startLoc:{col:24,line:41},endLoc:{col:2,line:158},startBody:{col:24,line:41},endBody:{col:2,line:158}}}}}},L=t(n=>({components:{LMenu:s,LMenuButton:o,LMenuItems:u,LMenuItemWrapper:a,LMenuItem:r,FButton:l,LBtn:d,LIcon:p},setup(){return{activeMenuitem:i(""),iChevronDown:c}},template:`
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
  `}),"DefaultTemplate"),M=L.bind({});M.args={};const F=["Default"];export{M as Default,F as __namedExportsOrder,W as default};
//# sourceMappingURL=LMenu.stories.ed1b272f.js.map
