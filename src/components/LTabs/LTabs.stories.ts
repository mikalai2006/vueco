import { ref } from "vue";
// import LTabs from '@/components/LTabs'
import {
  LTabs,
  LTabsList,
  LTab,
  LTabPanels,
  LTabPanel,
} from "@/components/LTabs";
import FButton from "@/components/ui/FButton.vue";
import FTabs from "@/components/ui/FTabs.vue";
import { LIcon } from "@/components/LIcon";
import { iClose } from "@/stories/composable/useIcon";

import { ripple } from "@/directives/ripple";

export default {
  title: "components/LTabs",
  component: LTabs,
  // argTypes: {
  //   mode: {
  //     control: {
  //       type: "select",
  //       options: ["primary", "accent", "second", "danger"],
  //     },
  //   },
  //   //   backgroundColor: { control: 'color' },
  //   //   size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  //   //   onClick: {},
  // },
};

const TemplatePlayground = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { FButton, LIcon, LTabs, LTabsList, LTab, LTabPanels, LTabPanel },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const categories = ref({
      Recent: [
        {
          id: 1,
          title: "Does drinking coffee make you smarter?",
          date: "5h ago",
          commentCount: 5,
          shareCount: 2,
        },
        {
          id: 2,
          title: "So you've bought coffee... now what?",
          date: "2h ago",
          commentCount: 3,
          shareCount: 2,
        },
      ],
      Popular: [
        {
          id: 1,
          title: "Is tech making coffee better or worse?",
          date: "Jan 7",
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: "The most innovative things happening in coffee",
          date: "Mar 19",
          commentCount: 24,
          shareCount: 12,
        },
      ],
      Trending: [
        {
          id: 1,
          title: "Ask Me Anything: 10 answers to your questions about coffee",
          date: "2d ago",
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: "4d ago",
          commentCount: 1,
          shareCount: 2,
        },
      ],
    });
    const activeTab = ref("Popular");
    const tabs = ref(false);
    const testTabs = ["test1", "test2", "test3", "test4"];
    return {
      activeTab,
      args,
      tabs,
      iClose,
      testTabs,

      categories,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
      <LTabs v-model="activeTab" class="mt-2 bg-s-50 dark:bg-s-800 p-4 rounded-md" #default="{tabApi}">
        <LTabsList class="flex space-x-1">
          <LTab
            v-for="category in Object.keys(categories)"
            :key="category"
            :tab="category"
            v-slot="{ selected }"
            as="template"
          >
            <button
              :class="[
                'transition w-full p-2 text-sm leading-5 font-medium text-s-900 dark:text-s-100 rounded-md',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-p-500',
                selected
                  ? 'bg-black/10 dark:bg-white/10'
                  : 'text-s-100 hover:bg-black/10 dark:hover:bg-white/10',
              ]"
            >
              {{ category }}
            </button>
          </LTab>
        </LTabsList>
        <LTabPanels class="flex-auto mt-2 ">
          <LTabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            :class="[
              'rounded-xl bg-s-50 dark:bg-s-800 p-3',
              'ring-p-500 ring-opacity-60 ring-offset-2 ring-offset-white dark:ring-offset-black focus:outline-none focus:ring-2',
            ]"
          >
          <ul>
              <li
                v-for="post in posts"
                :key="post.id"
                class="relative rounded-md p-3 hover:bg-s-100 dark:hover:bg-s-600"
              >
                {{ post.title }}
              </li>
            </ul>
            <div class="flex space-x-2">
              <FButton mode="second">Go to {{ posts[0].date }}</FButton>
              <FButton mode="danger">Cancel {{ posts[0].date }}</FButton>
            </div>
          </LTabPanel>
        </LTabPanels>
      </LTabs>
  `,
});

const HorizontalTabs = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { FTabs },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const tabs = ref({
      Recent: [
        {
          id: 1,
          title: "Does drinking coffee make you smarter?",
          date: "5h ago",
          commentCount: 5,
          shareCount: 2,
        },
        {
          id: 2,
          title: "So you've bought coffee... now what?",
          date: "2h ago",
          commentCount: 3,
          shareCount: 2,
        },
      ],
      Popular: [
        {
          id: 1,
          title: "Is tech making coffee better or worse?",
          date: "Jan 7",
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: "The most innovative things happening in coffee",
          date: "Mar 19",
          commentCount: 24,
          shareCount: 12,
        },
      ],
      Trending: [
        {
          id: 1,
          title: "Ask Me Anything: 10 answers to your questions about coffee",
          date: "2d ago",
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: "4d ago",
          commentCount: 1,
          shareCount: 2,
        },
      ],
    });
    const activeTab = ref("Popular");
    return {
      activeTab,
      args,
      iClose,

      tabs,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="p-12">
      <FTabs v-model="activeTab" :tabs="Object.keys(tabs)"></FTabs>
    </div>
  `,
});
export const Horizontal: any = HorizontalTabs.bind({});

export const Default: any = TemplatePlayground.bind({});

Default.storyName = "Playground";

const VerticalTabs = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { FButton, LIcon, LTabs, LTabsList, LTab, LTabPanels, LTabPanel },
  directives: {
    ripple,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const tabs = ref({
      Recent: [
        {
          id: 1,
          title: "Does drinking coffee make you smarter?",
          date: "5h ago",
          commentCount: 5,
          shareCount: 2,
        },
        {
          id: 2,
          title: "So you've bought coffee... now what?",
          date: "2h ago",
          commentCount: 3,
          shareCount: 2,
        },
      ],
      Popular: [
        {
          id: 1,
          title: "Is tech making coffee better or worse?",
          date: "Jan 7",
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: "The most innovative things happening in coffee",
          date: "Mar 19",
          commentCount: 24,
          shareCount: 12,
        },
      ],
      Trending: [
        {
          id: 1,
          title: "Ask Me Anything: 10 answers to your questions about coffee",
          date: "2d ago",
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: "4d ago",
          commentCount: 1,
          shareCount: 2,
        },
      ],
    });
    const activeTab = ref("Popular");
    return {
      activeTab,
      args,
      iClose,

      tabs,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <LTabs v-model="activeTab" manual vertical class="flex flex-row">
      <LTabsList class="flex flex-col p-1 space-y-1 rounded-md">
        <LTab
          v-for="category in Object.keys(tabs)"
          :key="category"
          :tab="category"
          as="template"
          v-slot="{ selected }"
        >
          <FButton
            v-ripple="{}"
            :mode="selected ? 'second': 'link'"
            :fill="selected"
          >
            {{ category }}
          </FButton>
        </LTab>
      </LTabsList>
      <LTabPanels class="flex-auto ml-2 ">
        <LTabPanel
          v-for="(posts, idx) in Object.values(tabs)"
          :key="idx"
          :class="[
            'transition rounded-md bg-white dark:bg-s-800 p-3',
            'ring-p-500 ring-opacity-60 ring-offset-2 ring-offset-white dark:ring-offset-black focus:outline-none focus:ring-2',
          ]"
        >
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative rounded-md p-3 hover:bg-s-100 dark:hover:bg-s-600"
            >
              {{ post.title }}
            </li>
          </ul>
          <div class="flex space-x-2">
            <FButton mode="primary">Go to {{ posts[0].date }}</FButton>
            <FButton mode="danger">Cancel {{ posts[0].date }}</FButton>
          </div>
        </LTabPanel>
      </LTabPanels>
    </LTabs>
  `,
});
export const Vertical: any = VerticalTabs.bind({});
