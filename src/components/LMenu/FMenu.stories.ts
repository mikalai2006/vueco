import { ref } from "vue";

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
  template: `
    <div class="h-64">
      <FMenu v-model="activeMenuitem"></FMenu>
    </div>
  `,
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
  template: `
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
  `,
});

export const Default: any = DefaultTemplate.bind({});
Default.args = {
  // modelValue: [],
  // field: schema,
};
