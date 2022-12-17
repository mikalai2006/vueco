import { ref } from "vue";
// import LTabs from '@/components/LTabs'
import {
  LTabs,
  LTabsList,
  LTab,
  LTabPanels,
  LTabPanel,
} from "@/components/LTabs";
import { LBtn } from "@/components/LBtn";
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
  // Components used in your story `template` are defined in the `components` object
  components: { LBtn, LIcon, LTabs, LTabsList, LTab, LTabPanels, LTabPanel },
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
    const activeTab = ref(0);
    const activeTab2 = ref(0);
    const activeTab3 = ref("Popular");
    const activeTab4 = ref("Popular");
    const tabs = ref(false);
    const testTabs = ["test1", "test2", "test3", "test4"];
    return {
      activeTab,
      args,
      tabs,
      iClose,
      activeTab2,
      activeTab3,
      activeTab4,
      testTabs,

      categories,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="p-4 bg-s-400 rounded-md">
    Tab-Tracker {{ activeTab4 }}
    <LTabs v-model="activeTab4" manual vertical class="flex flex-row" #default="{tabApi}">
      <LTabsList class="flex flex-col p-1 space-y-1 rounded-md">
        <LTab
          v-for="category in Object.keys(categories)"
          :key="category"
          :tab="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full p-2 text-sm leading-5 font-medium text-s-900 rounded-md',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-s-500 ring-white ring-opacity-60',
              selected
                ? 'bg-white shadow'
                : 'text-s-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </LTab>
      </LTabsList>
      <LTabPanels class="flex-auto ml-2 ">
        <LTabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
        <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative rounded-md p-3 hover:bg-gray-100"
            >
              {{ post.title }}
            </li>
          </ul>
          <button>Button</button>
        </LTabPanel>
      </LTabPanels>
    </LTabs>
    <LTabs v-model="activeTab4" class="mt-2" #default="{tabApi}">
      <LTabsList class="flex space-x-1 bg-s-500/50">
        <LTab
          v-for="category in Object.keys(categories)"
          :key="category"
          :tab="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full p-2 leading-5 font-medium text-s-900',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-s-500 ring-white ring-opacity-60',
              selected
                ? 'bg-white shadow'
                : 'text-s-100 hover:bg-white/[0.12] hover:text-white',
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
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
        <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative rounded-md p-3 hover:bg-gray-100"
            >
              {{ post.title }}
            </li>
          </ul>
          <button>Button</button>
        </LTabPanel>
      </LTabPanels>
      /* <pre>
        {{ tabApi }}
      </pre> */
    </LTabs>
    </div>
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

// <LTabs
//       v-model="activeTab4"
//       class="bg-second-100 p-4 m-4"
//       :tabs="testTabs"
//     >
//     </LTabs>
//     <LTabs
//       v-model="activeTab4"
//       class="bg-second-100 p-4 m-4"
//       :tabs="testTabs"
//       left
//     >
//     </LTabs>
//     <LTabs
//       v-model="activeTab4"
//       v-bind="args"
//       :tabs="testTabs"
//       left
//       class="w-96 bg-second-50 p-4 m-4"
//     >
//       <template #tab-tracker="{setItemRefs, changeActive, hash, active, floatingStyles}">
//         <div class="self-stretch border-r border-second-150 bg-second-50">
//           <div
//             :ref="(el) => setItemRefs(el, 'tabsbar')"
//             class="sticky top-0 p-4 pb-0"
//           >
//             <ul
//               class="z-10 p-0 m-0 flex flex-col flex-wrap -mb-px"
//             >
//               <li
//                 v-for="tab in testTabs"
//                 :key="tab"
//                 :ref="(el) => setItemRefs(el, tab)"
//                 class="flex-intital"
//               >
//               <LBtn type="button" mode="second" class="p-1" flat>
//                 <div
//                   class="cursor-pointer block flex-none"
//                   @click="changeActive(tab)"
//                 >
//                   <a
//                     v-if="hash"
//                     :href="'#' + tab"
//                     :title="tab"
//                     @click="changeActive(tab)"
//                   >
//                     {{ tab }}
//                   </a>
//                   <span v-else>
//                     {{ tab }}
//                   </span>
//                 </div>
//               </LBtn>
//               </li>
//               <li>Actions</li>
//             </ul>
//             <div
//               class="absolute transition-all ease-in-out bg-primary-500 w-1 z-20"
//               :style="floatingStyles"
//             ></div>
//           </div>
//         </div>
//       </template>
//     </LTabs>
//     <div class="h-96"></div>
//     <div class="h-96"></div>
//       <pre> Active tab - {{activeTab}}</pre>
//       <pre> Active tab2 - {{activeTab2}}</pre>
//       <pre> Active tab3 - {{activeTab3}}</pre>
//       <LTabs
//         v-model="activeTab"
//         v-bind="args"
//         :tabs="['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']"
//         class="w-96 bg-second-50 rounded-md"
//       >
//         <template #tab-two="{ tab, changeActive }">
//           <a href="#two" title="" class="btn p-2 btn-primary fill outline" @click="changeActive(tab)">
//             <LIcon>
//               {{mdiCart}}
//             </LIcon>
//             {{ tab}}
//           </a>
//         </template>
//         <template #one="{props, active, width}">
//             <h1 class="text-4xl">One tab</h1>
//             <hr/>
//             {{active}}
//             <hr/>
//             {{props}}
//             <hr/>
//         </template>
//         <template #two="{props, active, width}">
//             <h1 class="text-4xl">Two tab</h1>
//             <hr/>
//             {{active}}
//             <hr/>
//             {{props}}
//         </template>
//         <template #three="{props, active, width}">
//             <h1 class="text-4xl">Three tab</h1>
//             <hr/>
//             {{ activeTab2}}

//         </template>
//       </LTabs>
//       <LTabs
//               v-model="activeTab2"
//               v-bind="args"
//               left
//               :tabs="['one1', 'two1', 'three1', 'four1', 'five1']"
//               class="bg-accent-200 border border-accent-300 rounded-md"
//             >
//               <template #tab-three1="{ tab, changeActive }">
//                 <LBtn mode="accent" fill outline :icon="mdiCart" @click="changeActive(tab)">
//                   {{tab}}
//                 </LBtn>
//               </template>
//               <template #one1="{props, active, width}">
//                 <section v-for="i in 5" :key="i">
//                   <h1 class="text-4xl">One tab</h1>
//                   <hr/>
//                   active = {{active}}
//                   <hr/>
//                   {{props}}
//                 </section>
//               </template>
//               <template #two1="{props, active, width}">
//                   <h1 class="text-4xl">Two tab</h1>
//                   <hr/>
//                   {{active}}
//                   <hr/>
//                   {{props}}
//               </template>
//               <template #three1="{props, active, width}">
//                   <h1 class="text-4xl">Three tab</h1>
//                   <hr/>
//                   {{active}}
//                   <hr/>
//                   {{props}}
//               </template>
//             </LTabs>

export const Default: any = TemplatePlayground.bind({});

// Default.args = {
//   mode: "second",
//   flat: true,
//   fill: false,
//   right: false,
//   left: false,
//   icon: iClose,
//   outline: true,
// };
Default.storyName = "Playground";

// const Template = (args: TypePropsBtn) => ({
//   components: { LTabs, LIcon },
//   setup() {
//     return { args, mdiValve, mdiCube }
//   },
//   template: `
//     <div class="flex flex-col flex-wrap items-start space-y-2">
//       <LBtn v-bind="args" flat>
//         Flat primary
//       </LBtn>
//       <LBtn v-bind="args" fill :icon="mdiValve">
//         Fill primary
//       </LBtn>
//       <LBtn v-bind="args" outline >
//         Outline
//       </LBtn>
//       <LBtn v-bind="args" ringed >
//         Ringed
//       </LBtn>
//       <LBtn v-bind="args" fill rounded="rounded-lg">
//         Rounded lg
//       </LBtn>
//       <LBtn v-bind="args" fill ringed rounded="rounded-md">
//         Rounded md
//       </LBtn>
//       <LBtn v-bind="args" outline flat ringed rounded="rounded-sm">
//         Rounded sm
//       </LBtn>
//       <LBtn v-bind="args" outline flat ringed size="small" rounded="rounded-sm" :icon="mdiCube">
//         Small
//       </LBtn>
//       <LBtn v-bind="args" outline flat ringed rounded="rounded-sm" :icon="mdiCube">
//         Medium
//       </LBtn>
//       <LBtn v-bind="args" outline flat ringed size="big" rounded="rounded-sm" :icon="mdiCube">
//         Big
//       </LBtn>
//       <LBtn v-bind="args" outline flat ringed rounded="rounded-sm" :icon="mdiCube">
//       </LBtn>
//       <LBtn v-bind="args" outline inverse ringed rounded="rounded-sm" :icon="mdiCube">
//         inverse
//       </LBtn>
//     </div>
//   `,
// })

// export const Primary: any = Template.bind({})

// Primary.args = {
//   mode: 'primary',
//   loading: false,
//   disabled: false,
//   rounded: '',
//   'html-property': {
//     name: 'button',
//     'arial-label': 'Button aria label',

//     title: 'Title button',
//   },
// }
// Primary.storyName = 'Mode'
