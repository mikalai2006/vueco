var f=Object.defineProperty;var o=(n,e)=>f(n,"name",{value:e,configurable:!0});import{r as t}from"./vue.esm-bundler.e1ec89ec.js";import{L as s,a as i,b as c,c as d,d as l,_ as g}from"./FTabs.66c8602b.js";import{_ as u}from"./FButton.b3469d9e.js";import{L as b}from"./LIcon.64afb968.js";import{b as r}from"./useIcon.1f824c76.js";import"./ripple.41117a53.js";const B={parameters:{storySource:{source:`import { ref } from "vue";
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
    <LTabs v-model="activeTab" manual vertical class="flex flex-row" #default="{tabApi}">
      <LTabsList class="flex flex-col p-1 space-y-1 rounded-md">
        <LTab
          v-for="category in Object.keys(tabs)"
          :key="category"
          :tab="category"
          v-slot="{ selected }"
        >
          <button
          v-ripple="{}"
            :class="[
              'relative transition w-full p-2 text-sm leading-5 font-medium text-s-900 dark:text-s-100 rounded-md',
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
`,locationsMap:{horizontal:{startLoc:{col:23,line:150},endLoc:{col:2,line:220},startBody:{col:23,line:150},endBody:{col:2,line:220}},default:{startLoc:{col:27,line:31},endLoc:{col:2,line:148},startBody:{col:27,line:31},endBody:{col:2,line:148}},vertical:{startLoc:{col:21,line:227},endLoc:{col:2,line:341},startBody:{col:21,line:227},endBody:{col:2,line:341}}}}},title:"components/LTabs",component:s},p=o(n=>({components:{FButton:u,LIcon:b,LTabs:s,LTabsList:i,LTab:c,LTabPanels:d,LTabPanel:l},setup(){const e=t({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]}),a=t("Popular"),m=t(!1);return{activeTab:a,args:n,tabs:m,iClose:r,testTabs:["test1","test2","test3","test4"],categories:e}},template:`
      <LTabs v-model="activeTab" class="mt-2 bg-s-50 dark:bg-s-800 p-4 rounded-md" #default="{tabApi}">
        <LTabsList class="flex space-x-1">
          <LTab
            v-for="category in Object.keys(categories)"
            :key="category"
            :tab="category"
            v-slot="{ selected }"
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
  `}),"TemplatePlayground"),h=o(n=>({components:{FTabs:g},setup(){const e=t({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]});return{activeTab:t("Popular"),args:n,iClose:r,tabs:e}},template:`
    <div class="p-12">
      <FTabs v-model="activeTab" :tabs="Object.keys(tabs)"></FTabs>
    </div>
  `}),"HorizontalTabs"),A=h.bind({}),T=p.bind({});T.storyName="Playground";const v=o(n=>({components:{FButton:u,LIcon:b,LTabs:s,LTabsList:i,LTab:c,LTabPanels:d,LTabPanel:l},setup(){const e=t({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]});return{activeTab:t("Popular"),args:n,iClose:r,tabs:e}},template:`
    <LTabs v-model="activeTab" manual vertical class="flex flex-row" #default="{tabApi}">
      <LTabsList class="flex flex-col p-1 space-y-1 rounded-md">
        <LTab
          v-for="category in Object.keys(tabs)"
          :key="category"
          :tab="category"
          v-slot="{ selected }"
        >
          <button
          v-ripple="{}"
            :class="[
              'relative transition w-full p-2 text-sm leading-5 font-medium text-s-900 dark:text-s-100 rounded-md',
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
  `}),"VerticalTabs"),j=v.bind({}),M=["Horizontal","Default","Vertical"];export{T as Default,A as Horizontal,j as Vertical,M as __namedExportsOrder,B as default};
//# sourceMappingURL=LTabs.stories.f32c92a3.js.map
