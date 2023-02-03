var f=Object.defineProperty;var o=(n,e)=>f(n,"name",{value:e,configurable:!0});import{a as t}from"./vue.esm-bundler.63e44d6a.js";import{L as s,a as i,b as c,c as l,d,_ as p}from"./FTabs.f0dd4848.js";import{_ as u}from"./FButton.705b3556.js";import{L as m}from"./LIcon.a931258d.js";import{b as r}from"./useIcon.fe9488f3.js";import{r as g}from"./ripple.4234d591.js";import"./useId.06feead9.js";import"./useDom.cdb636d1.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I={parameters:{storySource:{source:`import { ref } from "vue";
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
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { FButton, LIcon, LTabs, LTabsList, LTab, LTabPanels, LTabPanel },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
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
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
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
  \`,
});

const HorizontalTabs = (args: any) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { FTabs },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
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
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <div class="p-12">
      <FTabs v-model="activeTab" :tabs="Object.keys(tabs)"></FTabs>
    </div>
  \`,
});
export const Horizontal: any = HorizontalTabs.bind({});

export const Default: any = TemplatePlayground.bind({});

Default.storyName = "Playground";

const VerticalTabs = (args: any) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { FButton, LIcon, LTabs, LTabsList, LTab, LTabPanels, LTabPanel },
  directives: {
    ripple,
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
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
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
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
  \`,
});
export const Vertical: any = VerticalTabs.bind({});
`,locationsMap:{horizontal:{startLoc:{col:23,line:153},endLoc:{col:2,line:223},startBody:{col:23,line:153},endBody:{col:2,line:223}},default:{startLoc:{col:27,line:33},endLoc:{col:2,line:151},startBody:{col:27,line:33},endBody:{col:2,line:151}},vertical:{startLoc:{col:21,line:230},endLoc:{col:2,line:343},startBody:{col:21,line:230},endBody:{col:2,line:343}}}}},title:"components/LTabs",component:s},h=o(n=>({components:{FButton:u,LIcon:m,LTabs:s,LTabsList:i,LTab:c,LTabPanels:l,LTabPanel:d},setup(){const e=t({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]}),a=t("Popular"),b=t(!1);return{activeTab:a,args:n,tabs:b,iClose:r,testTabs:["test1","test2","test3","test4"],categories:e}},template:`
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
  `}),"TemplatePlayground"),T=o(n=>({components:{FTabs:p},setup(){const e=t({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]});return{activeTab:t("Popular"),args:n,iClose:r,tabs:e}},template:`
    <div class="p-12">
      <FTabs v-model="activeTab" :tabs="Object.keys(tabs)"></FTabs>
    </div>
  `}),"HorizontalTabs"),O=T.bind({}),v=h.bind({});v.storyName="Playground";const y=o(n=>({components:{FButton:u,LIcon:m,LTabs:s,LTabsList:i,LTab:c,LTabPanels:l,LTabPanel:d},directives:{ripple:g},setup(){const e=t({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]});return{activeTab:t("Popular"),args:n,iClose:r,tabs:e}},template:`
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
  `}),"VerticalTabs"),D=y.bind({}),_=["Horizontal","Default","Vertical"];export{v as Default,O as Horizontal,D as Vertical,_ as __namedExportsOrder,I as default};
//# sourceMappingURL=LTabs.stories.54a9c315.js.map
