var U=Object.defineProperty;var p=(n,o)=>U(n,"name",{value:o,configurable:!0});import{d as y,r as i,a as g,h as x,o as R,i as z,p as W,j as B,k as D,A as j,u as L,t as P,l as G,C as Q,F as X,x as T,q as k,E as F,y as Y,z as M,B as Z}from"./vue.esm-bundler.d6e8a8ce.js";import{u as A,b as N}from"./useIcon.1f824c76.js";import{L as ee}from"./LBtn.ba5088c0.js";import{L as ne}from"./LIcon.b157f1df.js";function K(n){return n==null||n.value==null?null:"$el"in n.value?n.value.$el:n.value}p(K,"dom");const w=Symbol("TabsContext"),O=y({name:"LTabs",props:{as:{type:[Object,String],default:"div"},selectedIndex:{type:[Number],default:0},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1},modelValue:{type:[String],default:""}},emits:{change:n=>n,"update:modelValue":n=>n},setup(n,{slots:o,emit:s}){const l=i(null),e=i(null),c=i(null),a=i(null),b=i([]),u=i([]),h=g({get(){return n.modelValue},set(r){r&&s("update:modelValue",r)}}),v={selectedIndex:l,focusedIndex:e,selectedKey:c,focusedKey:a,orientation:g(()=>n.vertical?"vertical":"horizontal"),activation:g(()=>n.manual?"manual":"auto"),tabs:b,panels:u,model:h,setSelectedKey(r){if(c.value===r)return;c.value=r;const d=b.value.findIndex(f=>f.tabData==r);l.value=d,s("change",r),h.value=r,s("update:modelValue",r)},setFocusedIndex(r){if(a.value===r)return;a.value=r;const d=b.value.findIndex(f=>f.tabData==r);e.value=d},registerTab(r,d){b.value.push({tab:r,tabData:d})},unregisterTab(r,d){const f=b.value.findIndex(I=>I.tabData===d);f!==-1&&b.value.splice(f,1)},registerPanel(r){u.value.includes(r)||u.value.push(r)},unregisterPanel(r){const d=u.value.indexOf(r);d!==-1&&u.value.splice(d,1)}};return W(w,v),()=>{var r;return x(n.as,{class:"tabs"},[(r=o.default)==null?void 0:r.call(o,{tabApi:v})])}}}),q=y({name:"LTabsList",props:{as:{type:[Object,String],default:"div"}},setup(n,{slots:o}){const s=B(w);return()=>{var e;const l={role:"tablist","aria-orientation":s==null?void 0:s.orientation.value};return x(n.as,{class:"tabs-list",...l},[(e=o.default)==null?void 0:e.call(o,{...n})])}}}),H=y({name:"LTab",props:{as:{type:[Object,String],default:"button"},tab:{type:[String],default:"default"},disabled:{type:[Boolean],default:!1}},setup(n,{attrs:o,slots:s,expose:l}){const e=B(w),c=`l-tabs-tab-${A()}`,a=i(null);l({el:a,$el:a}),R(()=>{e==null||e.registerTab(a,n.tab),n.tab==(e==null?void 0:e.model.value)&&f()}),z(()=>e==null?void 0:e.unregisterTab(a,n.tab));const b=g(()=>e==null?void 0:e.tabs.value.findIndex(t=>t.tab==a.value)),u=g(()=>n.tab===(e==null?void 0:e.selectedKey.value));g(()=>n.tab===(e==null?void 0:e.focusedKey.value));const h=p(t=>{var m;e.focusedIndex.value!=(e==null?void 0:e.tabs.value.length)-1&&(e.focusedIndex.value=e.focusedIndex.value+1,(m=e.tabs.value[e.focusedIndex.value])==null||m.tab.focus(),t.preventDefault(),t.stopPropagation())},"nextTab"),v=p(t=>{var m;e.focusedIndex.value<1||(e.focusedIndex.value=(e==null?void 0:e.focusedIndex.value)-1,(m=e.tabs.value[e.focusedIndex.value])==null||m.tab.focus(),t.preventDefault(),t.stopPropagation())},"prevTab");function r(t){var m,C;if(t.key==="Space"||t.key==="Enter"){t.preventDefault(),t.stopPropagation(),e==null||e.setSelectedKey(n.tab);return}switch(t.key){case"Home":case"PageUp":t.preventDefault(),t.stopPropagation(),(m=e.tabs.value[0])==null||m.focus();return;case"End":case"PageDown":t.preventDefault(),t.stopPropagation(),(C=e.tabs.value[e.tabs.value.length-1])==null||C.focus();return}if((e==null?void 0:e.orientation.value)=="vertical"){t.key==="ArrowUp"&&v(t),t.key==="ArrowDown"&&h(t);return}else t.key==="ArrowLeft"?v(t):t.key==="ArrowRight"&&h(t)}p(r,"handleKeyDown");function d(){var t;(t=a.value)==null||t.focus(),e.setFocusedIndex(n.tab)}p(d,"handleFocus");function f(){var t;n.disabled||((t=K(a))==null||t.focus(),e.setSelectedKey(n.tab),e.setFocusedIndex(n.tab))}p(f,"handleSelection");function I(t){t.preventDefault()}p(I,"handleMouseDown");const J="button";return()=>{var V,_;const t={selected:u.value},m={ref:a,onKeydown:r,onFocus:e.activation.value==="manual"?d:f,onMousedown:I,onClick:f,id:c,role:"tab",type:J.value,"aria-controls":(V=e.panels.value[b.value])==null?void 0:V.value.id,"aria-selected":u.value,tabIndex:u.value?0:-1,disabled:n.disabled?!0:void 0,["data-deletable"]:!1};let C=(_=s.default)==null?void 0:_.call(s,t);return x(C[0],{...n,...m,selected:u.value})}}}),$=y({name:"LTabPanels",props:{as:{type:[Object,String],default:"div"}},setup(n,{slots:o,attrs:s}){const l=B(w);return()=>{var c;const e={selectedIndex:l==null?void 0:l.selectedIndex.value};return x(n.as,{class:"tabs-panels"},[(c=o.default)==null?void 0:c.call(o,{slot:e})])}}}),S=y({name:"LTabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(n,{attrs:o,slots:s,expose:l}){const e=B(w),c=`l-tabs-panel-${A()}`,a=i(null);l({el:a,$el:a}),R(()=>e==null?void 0:e.registerPanel(a)),z(()=>e==null?void 0:e.unregisterPanel(a));const b=g(()=>e.panels.value.indexOf(a)),u=g(()=>b.value===e.selectedIndex.value);return()=>{var r,d;const h={selected:u.value},v={ref:a,id:c,role:"tabpanel","aria-labelledby":(r=K(e.tabs.value[b.value]))==null?void 0:r.id,tabIndex:u.value?0:-1};return!u.value&&n.unmount&&!n.static?x("div",{...v,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"}}):x(n.as,{...v,visible:u.value},[(d=s.default)==null?void 0:d.call(s,h)])}}}),te={class:M(["p-3","focus:outline-none focus:ring-1 focus:ring-dott ring-s-200 ring-opacity-20"])},re=k("button",null,"Button",-1),ae=k("button",null,"Popular Button",-1),oe=y({name:"FTabs",inheritAttrs:!1}),E=y({...oe,props:{modelValue:{default:""},tabs:null},emits:["update:modelValue","on-input"],setup(n,{emit:o}){const s=n,l=g({get:()=>s.modelValue,set:e=>{o("update:modelValue",e)}});return(e,c)=>(D(),j(T(O),{modelValue:T(l),"onUpdate:modelValue":c[0]||(c[0]=a=>Y(l)?l.value=a:null),manual:"",class:"mt-2 bg-white dark:bg-s-700"},{default:L(()=>[P(T(q),{class:"flex space-x-1"},{default:L(()=>[(D(!0),G(X,null,Q(n.tabs,a=>(D(),j(T(H),{key:a,tab:a},{default:L(({selected:b})=>[k("button",{type:"button",class:M(["w-full p-2 leading-5 font-medium text-s-900 dark:text-s-300 border-b-2","focus:outline-none ring-offset-1 ring-offset-s-300 ring-opacity-20",b?"border-p-500 ":"border-transparent text-s-100 hover:bg-black/[0.1] hover:text-black dark:hover:text-white"])},Z(a),3)]),_:2},1032,["tab"]))),128))]),_:1}),P(T($),{class:"flex-auto"},{default:L(()=>[k("div",te,[P(T(S),{key:"Recent"},{default:L(()=>[F(" Recent "),re]),_:1}),P(T(S),{key:"Popular"},{default:L(()=>[F(" Popular "),ae]),_:1})])]),_:1})]),_:1},8,["modelValue"]))}});E.__docgenInfo={exportName:"default",displayName:"FTabs",description:"",tags:{},props:[{name:"modelValue",description:"modelValue - model string",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"tabs",description:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}}],events:[{name:"update:modelValue"},{name:"on-input"}]};const me={parameters:{storySource:{source:`import { ref } from "vue";\r
// import LTabs from '@/components/LTabs'\r
import {\r
  LTabs,\r
  LTabsList,\r
  LTab,\r
  LTabPanels,\r
  LTabPanel,\r
} from "@/components/LTabs";\r
import { LBtn } from "@/components/LBtn";\r
import FTabs from "@/components/ui/FTabs.vue";\r
import { LIcon } from "@/components/LIcon";\r
import { iClose } from "@/stories/composable/useIcon";\r
\r
export default {\r
  title: "components/LTabs",\r
  component: LTabs,\r
  // argTypes: {\r
  //   mode: {\r
  //     control: {\r
  //       type: "select",\r
  //       options: ["primary", "accent", "second", "danger"],\r
  //     },\r
  //   },\r
  //   //   backgroundColor: { control: 'color' },\r
  //   //   size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },\r
  //   //   onClick: {},\r
  // },\r
};\r
\r
const TemplatePlayground = (args: any) => ({\r
  // Components used in your story \`template\` are defined in the \`components\` object\r
  components: { LBtn, LIcon, LTabs, LTabsList, LTab, LTabPanels, LTabPanel },\r
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
  setup() {\r
    const categories = ref({\r
      Recent: [\r
        {\r
          id: 1,\r
          title: "Does drinking coffee make you smarter?",\r
          date: "5h ago",\r
          commentCount: 5,\r
          shareCount: 2,\r
        },\r
        {\r
          id: 2,\r
          title: "So you've bought coffee... now what?",\r
          date: "2h ago",\r
          commentCount: 3,\r
          shareCount: 2,\r
        },\r
      ],\r
      Popular: [\r
        {\r
          id: 1,\r
          title: "Is tech making coffee better or worse?",\r
          date: "Jan 7",\r
          commentCount: 29,\r
          shareCount: 16,\r
        },\r
        {\r
          id: 2,\r
          title: "The most innovative things happening in coffee",\r
          date: "Mar 19",\r
          commentCount: 24,\r
          shareCount: 12,\r
        },\r
      ],\r
      Trending: [\r
        {\r
          id: 1,\r
          title: "Ask Me Anything: 10 answers to your questions about coffee",\r
          date: "2d ago",\r
          commentCount: 9,\r
          shareCount: 5,\r
        },\r
        {\r
          id: 2,\r
          title: "The worst advice we've ever heard about coffee",\r
          date: "4d ago",\r
          commentCount: 1,\r
          shareCount: 2,\r
        },\r
      ],\r
    });\r
    const activeTab = ref(0);\r
    const activeTab2 = ref(0);\r
    const activeTab3 = ref("Popular");\r
    const activeTab4 = ref("Popular");\r
    const tabs = ref(false);\r
    const testTabs = ["test1", "test2", "test3", "test4"];\r
    return {\r
      activeTab,\r
      args,\r
      tabs,\r
      iClose,\r
      activeTab2,\r
      activeTab3,\r
      activeTab4,\r
      testTabs,\r
\r
      categories,\r
    };\r
  },\r
  // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
  template: \`\r
    <div class="p-4 bg-s-400 rounded-md">\r
    Tab-Tracker {{ activeTab4 }}\r
    <LTabs v-model="activeTab4" manual vertical class="flex flex-row" #default="{tabApi}">\r
      <LTabsList class="flex flex-col p-1 space-y-1 rounded-md">\r
        <LTab\r
          v-for="category in Object.keys(categories)"\r
          :key="category"\r
          :tab="category"\r
          v-slot="{ selected }"\r
        >\r
          <button\r
            :class="[\r
              'w-full p-2 text-sm leading-5 font-medium text-s-900 rounded-md',\r
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-s-500 ring-white ring-opacity-60',\r
              selected\r
                ? 'bg-white shadow'\r
                : 'text-s-100 hover:bg-white/[0.12] hover:text-white',\r
            ]"\r
          >\r
            {{ category }}\r
          </button>\r
        </LTab>\r
      </LTabsList>\r
      <LTabPanels class="flex-auto ml-2 ">\r
        <LTabPanel\r
          v-for="(posts, idx) in Object.values(categories)"\r
          :key="idx"\r
          :class="[\r
            'rounded-xl bg-white p-3',\r
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',\r
          ]"\r
        >\r
        <ul>\r
            <li\r
              v-for="post in posts"\r
              :key="post.id"\r
              class="relative rounded-md p-3 hover:bg-gray-100"\r
            >\r
              {{ post.title }}\r
            </li>\r
          </ul>\r
          <button>Button</button>\r
        </LTabPanel>\r
      </LTabPanels>\r
    </LTabs>\r
    <LTabs v-model="activeTab4" class="mt-2" #default="{tabApi}">\r
      <LTabsList class="flex space-x-1 bg-s-500/50">\r
        <LTab\r
          v-for="category in Object.keys(categories)"\r
          :key="category"\r
          :tab="category"\r
          v-slot="{ selected }"\r
        >\r
          <button\r
            :class="[\r
              'w-full p-2 leading-5 font-medium text-s-900',\r
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-s-500 ring-white ring-opacity-60',\r
              selected\r
                ? 'bg-white shadow'\r
                : 'text-s-100 hover:bg-white/[0.12] hover:text-white',\r
            ]"\r
          >\r
            {{ category }}\r
          </button>\r
        </LTab>\r
      </LTabsList>\r
      <LTabPanels class="flex-auto mt-2 ">\r
        <LTabPanel\r
          v-for="(posts, idx) in Object.values(categories)"\r
          :key="idx"\r
          :class="[\r
            'rounded-xl bg-white p-3',\r
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',\r
          ]"\r
        >\r
        <ul>\r
            <li\r
              v-for="post in posts"\r
              :key="post.id"\r
              class="relative rounded-md p-3 hover:bg-gray-100"\r
            >\r
              {{ post.title }}\r
            </li>\r
          </ul>\r
          <button>Button</button>\r
        </LTabPanel>\r
      </LTabPanels>\r
      /* <pre>\r
        {{ tabApi }}\r
      </pre> */\r
    </LTabs>\r
    </div>\r
  \`,\r
});\r
\r
const HorizontalTabs = (args: any) => ({\r
  // Components used in your story \`template\` are defined in the \`components\` object\r
  components: { FTabs },\r
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
  setup() {\r
    const tabs = ref({\r
      Recent: [\r
        {\r
          id: 1,\r
          title: "Does drinking coffee make you smarter?",\r
          date: "5h ago",\r
          commentCount: 5,\r
          shareCount: 2,\r
        },\r
        {\r
          id: 2,\r
          title: "So you've bought coffee... now what?",\r
          date: "2h ago",\r
          commentCount: 3,\r
          shareCount: 2,\r
        },\r
      ],\r
      Popular: [\r
        {\r
          id: 1,\r
          title: "Is tech making coffee better or worse?",\r
          date: "Jan 7",\r
          commentCount: 29,\r
          shareCount: 16,\r
        },\r
        {\r
          id: 2,\r
          title: "The most innovative things happening in coffee",\r
          date: "Mar 19",\r
          commentCount: 24,\r
          shareCount: 12,\r
        },\r
      ],\r
      Trending: [\r
        {\r
          id: 1,\r
          title: "Ask Me Anything: 10 answers to your questions about coffee",\r
          date: "2d ago",\r
          commentCount: 9,\r
          shareCount: 5,\r
        },\r
        {\r
          id: 2,\r
          title: "The worst advice we've ever heard about coffee",\r
          date: "4d ago",\r
          commentCount: 1,\r
          shareCount: 2,\r
        },\r
      ],\r
    });\r
    const activeTab = ref("Popular");\r
    return {\r
      activeTab,\r
      args,\r
      iClose,\r
\r
      tabs,\r
    };\r
  },\r
  // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
  template: \`\r
    <div class="p-12">\r
      <FTabs v-model="activeTab" :tabs="Object.keys(tabs)"></FTabs>\r
    </div>\r
  \`,\r
});\r
export const Horizontal: any = HorizontalTabs.bind({});\r
\r
// <LTabs\r
//       v-model="activeTab4"\r
//       class="bg-second-100 p-4 m-4"\r
//       :tabs="testTabs"\r
//     >\r
//     </LTabs>\r
//     <LTabs\r
//       v-model="activeTab4"\r
//       class="bg-second-100 p-4 m-4"\r
//       :tabs="testTabs"\r
//       left\r
//     >\r
//     </LTabs>\r
//     <LTabs\r
//       v-model="activeTab4"\r
//       v-bind="args"\r
//       :tabs="testTabs"\r
//       left\r
//       class="w-96 bg-second-50 p-4 m-4"\r
//     >\r
//       <template #tab-tracker="{setItemRefs, changeActive, hash, active, floatingStyles}">\r
//         <div class="self-stretch border-r border-second-150 bg-second-50">\r
//           <div\r
//             :ref="(el) => setItemRefs(el, 'tabsbar')"\r
//             class="sticky top-0 p-4 pb-0"\r
//           >\r
//             <ul\r
//               class="z-10 p-0 m-0 flex flex-col flex-wrap -mb-px"\r
//             >\r
//               <li\r
//                 v-for="tab in testTabs"\r
//                 :key="tab"\r
//                 :ref="(el) => setItemRefs(el, tab)"\r
//                 class="flex-intital"\r
//               >\r
//               <LBtn type="button" mode="second" class="p-1" flat>\r
//                 <div\r
//                   class="cursor-pointer block flex-none"\r
//                   @click="changeActive(tab)"\r
//                 >\r
//                   <a\r
//                     v-if="hash"\r
//                     :href="'#' + tab"\r
//                     :title="tab"\r
//                     @click="changeActive(tab)"\r
//                   >\r
//                     {{ tab }}\r
//                   </a>\r
//                   <span v-else>\r
//                     {{ tab }}\r
//                   </span>\r
//                 </div>\r
//               </LBtn>\r
//               </li>\r
//               <li>Actions</li>\r
//             </ul>\r
//             <div\r
//               class="absolute transition-all ease-in-out bg-primary-500 w-1 z-20"\r
//               :style="floatingStyles"\r
//             ></div>\r
//           </div>\r
//         </div>\r
//       </template>\r
//     </LTabs>\r
//     <div class="h-96"></div>\r
//     <div class="h-96"></div>\r
//       <pre> Active tab - {{activeTab}}</pre>\r
//       <pre> Active tab2 - {{activeTab2}}</pre>\r
//       <pre> Active tab3 - {{activeTab3}}</pre>\r
//       <LTabs\r
//         v-model="activeTab"\r
//         v-bind="args"\r
//         :tabs="['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']"\r
//         class="w-96 bg-second-50 rounded-md"\r
//       >\r
//         <template #tab-two="{ tab, changeActive }">\r
//           <a href="#two" title="" class="btn p-2 btn-primary fill outline" @click="changeActive(tab)">\r
//             <LIcon>\r
//               {{mdiCart}}\r
//             </LIcon>\r
//             {{ tab}}\r
//           </a>\r
//         </template>\r
//         <template #one="{props, active, width}">\r
//             <h1 class="text-4xl">One tab</h1>\r
//             <hr/>\r
//             {{active}}\r
//             <hr/>\r
//             {{props}}\r
//             <hr/>\r
//         </template>\r
//         <template #two="{props, active, width}">\r
//             <h1 class="text-4xl">Two tab</h1>\r
//             <hr/>\r
//             {{active}}\r
//             <hr/>\r
//             {{props}}\r
//         </template>\r
//         <template #three="{props, active, width}">\r
//             <h1 class="text-4xl">Three tab</h1>\r
//             <hr/>\r
//             {{ activeTab2}}\r
\r
//         </template>\r
//       </LTabs>\r
//       <LTabs\r
//               v-model="activeTab2"\r
//               v-bind="args"\r
//               left\r
//               :tabs="['one1', 'two1', 'three1', 'four1', 'five1']"\r
//               class="bg-accent-200 border border-accent-300 rounded-md"\r
//             >\r
//               <template #tab-three1="{ tab, changeActive }">\r
//                 <LBtn mode="accent" fill outline :icon="mdiCart" @click="changeActive(tab)">\r
//                   {{tab}}\r
//                 </LBtn>\r
//               </template>\r
//               <template #one1="{props, active, width}">\r
//                 <section v-for="i in 5" :key="i">\r
//                   <h1 class="text-4xl">One tab</h1>\r
//                   <hr/>\r
//                   active = {{active}}\r
//                   <hr/>\r
//                   {{props}}\r
//                 </section>\r
//               </template>\r
//               <template #two1="{props, active, width}">\r
//                   <h1 class="text-4xl">Two tab</h1>\r
//                   <hr/>\r
//                   {{active}}\r
//                   <hr/>\r
//                   {{props}}\r
//               </template>\r
//               <template #three1="{props, active, width}">\r
//                   <h1 class="text-4xl">Three tab</h1>\r
//                   <hr/>\r
//                   {{active}}\r
//                   <hr/>\r
//                   {{props}}\r
//               </template>\r
//             </LTabs>\r
\r
export const Default: any = TemplatePlayground.bind({});\r
\r
// Default.args = {\r
//   mode: "second",\r
//   flat: true,\r
//   fill: false,\r
//   right: false,\r
//   left: false,\r
//   icon: iClose,\r
//   outline: true,\r
// };\r
Default.storyName = "Playground";\r
\r
// const Template = (args: TypePropsBtn) => ({\r
//   components: { LTabs, LIcon },\r
//   setup() {\r
//     return { args, mdiValve, mdiCube }\r
//   },\r
//   template: \`\r
//     <div class="flex flex-col flex-wrap items-start space-y-2">\r
//       <LBtn v-bind="args" flat>\r
//         Flat primary\r
//       </LBtn>\r
//       <LBtn v-bind="args" fill :icon="mdiValve">\r
//         Fill primary\r
//       </LBtn>\r
//       <LBtn v-bind="args" outline >\r
//         Outline\r
//       </LBtn>\r
//       <LBtn v-bind="args" ringed >\r
//         Ringed\r
//       </LBtn>\r
//       <LBtn v-bind="args" fill rounded="rounded-lg">\r
//         Rounded lg\r
//       </LBtn>\r
//       <LBtn v-bind="args" fill ringed rounded="rounded-md">\r
//         Rounded md\r
//       </LBtn>\r
//       <LBtn v-bind="args" outline flat ringed rounded="rounded-sm">\r
//         Rounded sm\r
//       </LBtn>\r
//       <LBtn v-bind="args" outline flat ringed size="small" rounded="rounded-sm" :icon="mdiCube">\r
//         Small\r
//       </LBtn>\r
//       <LBtn v-bind="args" outline flat ringed rounded="rounded-sm" :icon="mdiCube">\r
//         Medium\r
//       </LBtn>\r
//       <LBtn v-bind="args" outline flat ringed size="big" rounded="rounded-sm" :icon="mdiCube">\r
//         Big\r
//       </LBtn>\r
//       <LBtn v-bind="args" outline flat ringed rounded="rounded-sm" :icon="mdiCube">\r
//       </LBtn>\r
//       <LBtn v-bind="args" outline inverse ringed rounded="rounded-sm" :icon="mdiCube">\r
//         inverse\r
//       </LBtn>\r
//     </div>\r
//   \`,\r
// })\r
\r
// export const Primary: any = Template.bind({})\r
\r
// Primary.args = {\r
//   mode: 'primary',\r
//   loading: false,\r
//   disabled: false,\r
//   rounded: '',\r
//   'html-property': {\r
//     name: 'button',\r
//     'arial-label': 'Button aria label',\r
\r
//     title: 'Title button',\r
//   },\r
// }\r
// Primary.storyName = 'Mode'\r
`,locationsMap:{horizontal:{startLoc:{col:23,line:202},endLoc:{col:2,line:272},startBody:{col:23,line:202},endBody:{col:2,line:272}},default:{startLoc:{col:27,line:31},endLoc:{col:2,line:200},startBody:{col:27,line:31},endBody:{col:2,line:200}}}}},title:"components/LTabs",component:O},se=p(n=>({components:{LBtn:ee,LIcon:ne,LTabs:O,LTabsList:q,LTab:H,LTabPanels:$,LTabPanel:S},setup(){const o=i({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]}),s=i(0),l=i(0),e=i("Popular"),c=i("Popular"),a=i(!1);return{activeTab:s,args:n,tabs:a,iClose:N,activeTab2:l,activeTab3:e,activeTab4:c,testTabs:["test1","test2","test3","test4"],categories:o}},template:`
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
  `}),"TemplatePlayground"),le=p(n=>({components:{FTabs:E},setup(){const o=i({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]});return{activeTab:i("Popular"),args:n,iClose:N,tabs:o}},template:`
    <div class="p-12">
      <FTabs v-model="activeTab" :tabs="Object.keys(tabs)"></FTabs>
    </div>
  `}),"HorizontalTabs"),pe=le.bind({}),ie=se.bind({});ie.storyName="Playground";const ge=["Horizontal","Default"];export{ie as Default,pe as Horizontal,ge as __namedExportsOrder,me as default};
//# sourceMappingURL=LTabs.stories.ee3387e5.js.map
