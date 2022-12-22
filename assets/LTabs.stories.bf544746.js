var U=Object.defineProperty;var b=(t,a)=>U(t,"name",{value:a,configurable:!0});import{d as y,r as d,a as m,k as W,h as x,l as z,q as K,v as Q,t as X,o as V,e as A,f as k,y as P,x as Y,C as Z,F as ee,u as T,g as B,j as R,z as te,A as q,B as ne}from"./vue.esm-bundler.a08ba302.js";import{u as N,b as D}from"./useIcon.1f824c76.js";import{_ as E}from"./FButton.6d175000.js";import{L as H}from"./LIcon.ca56402e.js";const J=Symbol("TabsContext");function C(t){const a=Q(J,null);if(a===null){const s=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,C),s}return a}b(C,"useContext");const I=y({name:"LTabs",props:{as:{type:[Object,String],default:"div"},selectedIndex:{type:[Number],default:0},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1},modelValue:{type:[String],default:""}},emits:{change:t=>t,"update:modelValue":t=>t},setup(t,{slots:a,emit:s}){const e=d(0),i=d(0),r=d(""),c=d(""),l=d([]),g=d([]),v=m({get(){return t.modelValue},set(o){o&&s("update:modelValue",o)}}),p={selectedIndex:e,focusedIndex:i,selectedKey:r,focusedKey:c,orientation:m(()=>t.vertical?"vertical":"horizontal"),activation:m(()=>t.manual?"manual":"auto"),tabs:l,panels:g,model:v,setSelectedKey(o){if(r.value===o)return;r.value=o;const u=l.value.findIndex(h=>h.tabData==o);e.value=u,s("change",o),v.value=o,s("update:modelValue",o)},setFocusedIndex(o){if(c.value===o)return;c.value=o;const u=l.value.findIndex(h=>h.tabData==o);i.value=u},registerTab(o,u){l.value.push({tab:o.value,tabData:u})},unregisterTab(o,u){const h=l.value.findIndex(S=>S.tabData===u);h!==-1&&l.value.splice(h,1)},registerPanel(o){g.value.includes(o)||g.value.push(o)},unregisterPanel(o){const u=g.value.indexOf(o);u!==-1&&g.value.splice(u,1)}};return W(()=>t.modelValue,o=>{p.setSelectedKey(o)}),X(J,p),()=>{var o;return x(t.as,{class:"tabs"},[(o=a.default)==null?void 0:o.call(a,{tabApi:p})])}}}),_=y({name:"LTabsList",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:a}){const s=C("LTabsList");return()=>{var i;const e={role:"tablist","aria-orientation":s==null?void 0:s.orientation.value};return x(t.as,{class:"tabs-list",...e},[(i=a.default)==null?void 0:i.call(a,{...t})])}}}),j=y({name:"LTab",props:{as:{type:[Object,String],default:"button"},tab:{type:[String],default:"default"},disabled:{type:[Boolean],default:!1}},setup(t,{slots:a,expose:s}){const e=C("LTab"),i=`l-tabs-tab-${N()}`,r=d(null);s({el:r,$el:r}),z(()=>{e.registerTab(r,t.tab),t.tab==(e==null?void 0:e.model.value)&&e.setSelectedKey(t.tab)}),K(()=>e==null?void 0:e.unregisterTab(r,t.tab));const c=m(()=>e==null?void 0:e.tabs.value.findIndex(n=>n.tab==r.value)),l=m(()=>t.tab===e.selectedKey.value),g=m(()=>t.tab===e.focusedKey.value),v=b(n=>{var f;e.focusedIndex.value!=e.tabs.value.length-1&&(e.focusedIndex.value=e.focusedIndex.value+1,(f=e.tabs.value[e.focusedIndex.value].tab)==null||f.focus(),n.preventDefault(),n.stopPropagation())},"nextTab"),p=b(n=>{var f;e.focusedIndex.value<1||(e.focusedIndex.value=e.focusedIndex.value-1,(f=e.tabs.value[e.focusedIndex.value].tab)==null||f.focus(),n.preventDefault(),n.stopPropagation())},"prevTab"),o=b(()=>{var n;(n=r.value)==null||n.focus(),e.setFocusedIndex(t.tab)},"handleFocus"),u=b(()=>{var n;t.disabled||((n=r.value)==null||n.focus(),e.setSelectedKey(t.tab),e.setFocusedIndex(t.tab))},"handleSelection");function h(n){n.preventDefault()}b(h,"handleMouseDown");const S=b(n=>{var f,w,L,M;if(n.key==="Space"||n.key==="Enter"){n.preventDefault(),n.stopPropagation(),e.setSelectedKey(t.tab);return}switch(n.key){case"Home":case"PageUp":n.preventDefault(),n.stopPropagation(),(f=e.tabs.value[0].tab)==null||f.focus(),e.activation.value=="auto"&&((w=e.tabs.value[0].tab)==null||w.click());return;case"End":case"PageDown":n.preventDefault(),n.stopPropagation(),(L=e.tabs.value[e.tabs.value.length-1].tab)==null||L.focus(),e.activation.value=="auto"&&((M=e.tabs.value[e.tabs.value.length-1].tab)==null||M.click());return}if((e==null?void 0:e.orientation.value)=="vertical"){n.key==="ArrowUp"&&p(n),n.key==="ArrowDown"&&v(n);return}else n.key==="ArrowLeft"?p(n):n.key==="ArrowRight"&&v(n)},"handleKeyDown"),G=m(()=>e.panels.value[c.value]);return()=>{var L;const n={selected:l.value},f={ref:r,onKeydown:S,onFocus:e.activation.value==="manual"?o:u,onMousedown:h,onClick:u,id:i,role:"tab",type:"button","aria-controls":(L=G.value)==null?void 0:L.id,"aria-selected":l.value,tabIndex:l.value?0:-1,disabled:t.disabled?!0:void 0,["data-deletable"]:!1},w=a.default?a.default(n):[];return x(w[0],{...t,...f,selected:l.value,focused:g.value})}}}),O=y({name:"LTabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:a}){const s=C("LTabPanels");return()=>{var i;const e={selectedIndex:s==null?void 0:s.selectedIndex.value};return x(t.as,{class:"tabs-panels"},[(i=a.default)==null?void 0:i.call(a,{slot:e})])}}}),F=y({name:"LTabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{slots:a,expose:s}){const e=C("LTabPanel");if(!e)return;const i=`l-tabs-panel-${N()}`,r=d(null);s({el:r,$el:r}),z(()=>e==null?void 0:e.registerPanel(r.value)),K(()=>e==null?void 0:e.unregisterPanel(r.value));const c=m(()=>e.panels.value.indexOf(r.value)),l=m(()=>c.value===e.selectedIndex.value);return()=>{var p,o,u;const g={selected:l.value},v={ref:r,id:i,role:"tabpanel","aria-labelledby":(o=(p=e.tabs.value[c.value])==null?void 0:p.tab)==null?void 0:o.id,tabIndex:l.value?0:-1};return!l.value&&t.unmount&&!t.static?x("div",{...v,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"}}):x(t.as,{...v,visible:l.value},[(u=a.default)==null?void 0:u.call(a,g)])}}}),ae={class:q(["p-3","focus:outline-none focus:ring-1 focus:ring-dott ring-s-200 ring-opacity-20"])},oe=B("button",null,"Button",-1),se=B("button",null,"Popular Button",-1),re=y({name:"FTabs",inheritAttrs:!1}),$=y({...re,props:{modelValue:{default:""},tabs:null},emits:["update:modelValue","on-input"],setup(t,{emit:a}){const s=t,e=m({get:()=>s.modelValue,set:i=>{a("update:modelValue",i)}});return(i,r)=>(V(),A(T(I),{modelValue:T(e),"onUpdate:modelValue":r[0]||(r[0]=c=>te(e)?e.value=c:null),manual:"",class:"mt-2 bg-white dark:bg-s-700"},{default:k(()=>[P(T(_),{class:"flex space-x-1"},{default:k(()=>[(V(!0),Y(ee,null,Z(t.tabs,c=>(V(),A(T(j),{key:c,tab:c},{default:k(({selected:l})=>[B("button",{type:"button",class:q(["w-full p-2 leading-5 font-medium text-s-900 dark:text-s-300 border-b-2","focus:outline-none ring-offset-1 ring-offset-s-300 ring-opacity-20",l?"border-p-500 ":"border-transparent text-s-100 hover:bg-black/[0.1] hover:text-black dark:hover:text-white"])},ne(c),3)]),_:2},1032,["tab"]))),128))]),_:1}),P(T(O),{class:"flex-auto"},{default:k(()=>[B("div",ae,[P(T(F),{key:"Recent"},{default:k(()=>[R(" Recent "),oe]),_:1}),P(T(F),{key:"Popular"},{default:k(()=>[R(" Popular "),se]),_:1})])]),_:1})]),_:1},8,["modelValue"]))}});$.__docgenInfo={exportName:"default",displayName:"FTabs",description:"",tags:{},props:[{name:"modelValue",description:"modelValue - model string",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"tabs",description:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}}],events:[{name:"update:modelValue"},{name:"on-input"}]};const pe={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{horizontal:{startLoc:{col:23,line:150},endLoc:{col:2,line:220},startBody:{col:23,line:150},endBody:{col:2,line:220}},default:{startLoc:{col:27,line:31},endLoc:{col:2,line:148},startBody:{col:27,line:31},endBody:{col:2,line:148}},vertical:{startLoc:{col:21,line:227},endLoc:{col:2,line:341},startBody:{col:21,line:227},endBody:{col:2,line:341}}}}},title:"components/LTabs",component:I},le=b(t=>({components:{FButton:E,LIcon:H,LTabs:I,LTabsList:_,LTab:j,LTabPanels:O,LTabPanel:F},setup(){const a=d({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]}),s=d("Popular"),e=d(!1);return{activeTab:s,args:t,tabs:e,iClose:D,testTabs:["test1","test2","test3","test4"],categories:a}},template:`
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
  `}),"TemplatePlayground"),ie=b(t=>({components:{FTabs:$},setup(){const a=d({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]});return{activeTab:d("Popular"),args:t,iClose:D,tabs:a}},template:`
    <div class="p-12">
      <FTabs v-model="activeTab" :tabs="Object.keys(tabs)"></FTabs>
    </div>
  `}),"HorizontalTabs"),ve=ie.bind({}),ue=le.bind({});ue.storyName="Playground";const de=b(t=>({components:{FButton:E,LIcon:H,LTabs:I,LTabsList:_,LTab:j,LTabPanels:O,LTabPanel:F},setup(){const a=d({Recent:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}],Trending:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]});return{activeTab:d("Popular"),args:t,iClose:D,tabs:a}},template:`
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
  `}),"VerticalTabs"),he=de.bind({}),Te=["Horizontal","Default","Vertical"];export{ue as Default,ve as Horizontal,he as Vertical,Te as __namedExportsOrder,pe as default};
//# sourceMappingURL=LTabs.stories.bf544746.js.map
