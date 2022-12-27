var ie=Object.defineProperty;var u=(n,t)=>ie(n,"name",{value:t,configurable:!0});import{d as B,r as l,h as y,k as le,p as ce,t as me,q as pe,o as de,a as fe,w as f,y as M,i as ve,b as F,u as i,A as J,B as ge,f as Le,g as Me,E as be}from"./vue.esm-bundler.4710087e.js";import{L as X}from"./LIcon.9826c8a0.js";import{u as he,i as Y}from"./useIcon.48b70701.js";import{u as O}from"./FTabs.ad636501.js";import{L as x}from"./ripple.8c7dd227.js";import{_ as Z}from"./FButton.7dbe626b.js";import"./FText.a26618ee.js";import"./FNumber.58dc55fd.js";import"./FCombobox.9f492afa.js";import"./FCheckboxGroup.92b65435.js";import"./FMultiSelect.c3cb141c.js";import"./FSpinner.d817384b.js";import"./LSpinner.94cc8f29.js";var P={exports:{}},o=P.exports={},v,g;function A(){throw new Error("setTimeout has not been defined")}u(A,"defaultSetTimout");function $(){throw new Error("clearTimeout has not been defined")}u($,"defaultClearTimeout");(function(){try{typeof setTimeout=="function"?v=setTimeout:v=A}catch{v=A}try{typeof clearTimeout=="function"?g=clearTimeout:g=$}catch{g=$}})();function ee(n){if(v===setTimeout)return setTimeout(n,0);if((v===A||!v)&&setTimeout)return v=setTimeout,setTimeout(n,0);try{return v(n,0)}catch{try{return v.call(null,n,0)}catch{return v.call(this,n,0)}}}u(ee,"runTimeout");function Ie(n){if(g===clearTimeout)return clearTimeout(n);if((g===$||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(n);try{return g(n)}catch{try{return g.call(null,n)}catch{return g.call(this,n)}}}u(Ie,"runClearTimeout");var b=[],k=!1,w,S=-1;function we(){!k||!w||(k=!1,w.length?b=w.concat(b):S=-1,b.length&&ne())}u(we,"cleanUpNextTick");function ne(){if(!k){var n=ee(we);k=!0;for(var t=b.length;t;){for(w=b,b=[];++S<t;)w&&w[S].run();S=-1,t=b.length}w=null,k=!1,Ie(n)}}u(ne,"drainQueue");o.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];b.push(new te(n,t)),b.length===1&&!k&&ee(ne)};function te(n,t){this.fun=n,this.array=t}u(te,"Item");te.prototype.run=function(){this.fun.apply(null,this.array)};o.title="browser";o.browser=!0;o.env={};o.argv=[];o.version="";o.versions={};function h(){}u(h,"noop");o.on=h;o.addListener=h;o.once=h;o.off=h;o.removeListener=h;o.removeAllListeners=h;o.emit=h;o.prependListener=h;o.prependOnceListener=h;o.listeners=function(n){return[]};o.binding=function(n){throw new Error("process.binding is not supported")};o.cwd=function(){return"/"};o.chdir=function(n){throw new Error("process.chdir is not supported")};o.umask=function(){return 0};function E(n){const t=me(oe,null);if(t===null){const s=new Error(`<${n} /> is missing a parent <LMenu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,E),s}return t}u(E,"useContext");const oe=Symbol("MenuContext"),U=B({props:{field:{type:Object,default:()=>({})}},setup(n,{slots:t}){const s=l(null),e=l(null),c=l(null),r=l([]),a=l(null),m=l(null),p=l(null),se=l(0),re=l(n.field),R=u(()=>{document&&(document.removeEventListener("click",T),document.removeEventListener("keyup",T))},"unRegisterOverlay"),q=u(()=>{document&&(document.addEventListener("click",T),document.addEventListener("keyup",T))},"registerOverlay"),N=l(!1),ue=u(()=>{N.value||q(),I.isOpen.value=!0},"onOpenPopup"),T=u(L=>{var C,H,G;const d=L==null?void 0:L.target;if(!(d&&(((C=O(I.domNode))==null?void 0:C.contains(d))||((H=O(I.menuNode))==null?void 0:H.contains(d))||((G=O(I.buttonNode))==null?void 0:G.contains(d))))){{const W=O(I.buttonNode);W==null||W.focus()}I.isOpen.value=!1,R()}},"onClosePopup"),Q=u(L=>{r.value.forEach(function(d){var C;d===L&&(p.value=L,(C=O(l(L)))==null||C.focus())})},"onSetFocusToMenuitem"),ae=u(L=>{let d=r.value.indexOf(p.value);switch(L.key){case"Up":case"ArrowUp":d--;break;case"ArrowDown":case"Down":d++;break}Q(r.value[d])},"onChangeActiveIndex"),z=`menu-${he()}`,I={id:z,domNode:s,buttonNode:e,menuNode:c,menuItemsNode:r,firstMenuItem:a,lastMenuItem:m,activeItem:p,activeItemIndex:se,field:re,isOpen:N,registerOverlay:q,unRegisterOverlay:R,onOpenPopup:ue,onClosePopup:T,onSetFocusToMenuitem:Q,onChangeActiveIndex:ae};return pe(oe,I),()=>y("div",{ref:s,id:`menu-${z}`},{default:()=>t.default?t.default({isOpen:N.value}):void 0})}}),j=B({props:{as:{type:[String,Object],default:"button"}},inheritAttrs:!1,setup(n,{slots:t,attrs:s}){const e=E("LMenuButton");return()=>{var r;const c={id:`menu-button-${e.id}`,ref:e.buttonNode,"aria-expanded":e.isOpen.value,"aria-controls":`menu-list-${e.id}`,...s,onKeydown:a=>{let m=!1;switch(a.key){case"Enter":case"ArrowDown":case"Down":e.onOpenPopup(),P.exports.nextTick(()=>{e.onSetFocusToMenuitem(e.firstMenuItem.value)}),m=!0;break;case"Esc":case"Escape":e.onClosePopup(),m=!0;break;case"Up":case"ArrowUp":e.onOpenPopup(),P.exports.nextTick(()=>{e.onSetFocusToMenuitem(e.lastMenuItem.value)}),m=!0;break}m&&(a.stopPropagation(),a.preventDefault())},onClick:()=>{e.isOpen.value?e.onClosePopup():e.onOpenPopup()}};if(n.as=="template"){const a=(r=t.default)==null?void 0:r.call(t),m=a!=null&&a.length?a[0]:a;return m?y(m,c):null}else return y(n.as,c,{default:()=>t.default?t.default():[]})}}}),V=B({setup(n,{slots:t,attrs:s}){const e=E("LMenuItems");return()=>y("div",{id:`menu-list-${e.id}`,ref:e.menuNode,role:"menu"},{default:()=>t.default?t.default():[]})}}),_=B({props:{as:{type:[String,Object],default:"ul"}},setup(n,{slots:t}){return()=>y(n.as,{role:"presentation"},{default:()=>t.default?t.default():[]})}}),D=B({props:{as:{type:[String,Object],default:"a"}},setup(n,{slots:t,attrs:s}){const e=E("LMenuItem"),c=l(null);return le(()=>{e.menuItemsNode.value.push(c.value),e.firstMenuItem.value||(e.firstMenuItem.value=c.value),e.lastMenuItem.value=c.value}),ce(()=>{const r=e.menuItemsNode.value.indexOf(c.value);e.menuItemsNode.value.slice(r,1)}),()=>y(n.as,{...s,ref:c,role:"menuitem",tabindex:c.value==e.activeItem.value?0:-1,onKeydown:r=>{const a=r.currentTarget,m=r.key;let p=!1;if(!(r.ctrlKey||r.altKey||r.metaKey)){switch(m){case"Enter":a==null||a.click(),e.onClosePopup(),p=!0;break;case"Esc":case"Escape":e.onClosePopup(),p=!0;break;case"Up":case"ArrowUp":e.onChangeActiveIndex(r),p=!0;break;case"ArrowDown":case"Down":e.onChangeActiveIndex(r),p=!0;break;case"Home":case"PageUp":e.onSetFocusToMenuitem(e.firstMenuItem.value),p=!0;break;case"End":case"PageDown":e.onSetFocusToMenuitem(e.lastMenuItem.value),p=!0;break;case"Tab":e.onClosePopup();break}p&&(r.stopPropagation(),r.preventDefault())}},onClick:()=>{e.onClosePopup()}},{default:()=>t.default?t.default():[]})}}),xe={class:"absolute text-sm left-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-s-800 shadow-lg"},K=B({__name:"FMenu",props:{activeItem:{type:[String,Number],default:""}},emits:["update:activeItem"],setup(n){return(t,s)=>(de(),fe(i(U),{class:J(["relative",{}]),onClick:s[0]||(s[0]=e=>t.$emit("update:activeItem",n.activeItem))},{default:f(({isOpen:e})=>[M(i(j),{as:i(x),class:"flex items-center rounded-md bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-10 dark:hover:bg-opacity-10 px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-p-500 ring-offset-2 dark:ring-offset-s-900"},{default:f(()=>[ve(t.$slots,"button",{},()=>[F(" Button menu "),M(i(X),{role:"presentation",class:J(["ml-2 transition-transform",{"rotate-180":e}])},{default:f(()=>[F(ge(i(Y)),1)]),_:2},1032,["class"])])]),_:2},1032,["as"]),Le(Me("div",xe,[M(i(V),{class:"px-2 py-2 divide-y divide-s-100 dark:divide-s-700"},{default:f(()=>[M(i(_),{as:"div"},{default:f(()=>[M(i(D),{as:i(x),class:"group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"},{default:f(()=>[F(" item 1 ")]),_:1},8,["as"]),M(i(D),{as:i(x),class:"group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"},{default:f(()=>[F(" item 2 ")]),_:1},8,["as"])]),_:1}),M(i(_),{as:"div"},{default:f(()=>[M(i(D),{class:"group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"},{default:f(()=>[M(i(x),null,{default:f(()=>[F("item 1")]),_:1})]),_:1})]),_:1})]),_:1})],512),[[be,e]])]),_:3}))}});K.__docgenInfo={exportName:"default",displayName:"FMenu",description:"",tags:{},props:[{name:"activeItem",type:{name:"string|number"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:activeItem"}],slots:[{name:"button"}]};const Ke={title:"Components/FMenu",component:K,parameters:{storySource:{source:`import { ref } from "vue";

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
`,locationsMap:{simple:{startLoc:{col:23,line:35},endLoc:{col:2,line:60},startBody:{col:23,line:35},endBody:{col:2,line:60}},default:{startLoc:{col:24,line:68},endLoc:{col:2,line:185},startBody:{col:24,line:68},endBody:{col:2,line:185}}}}}},ke=u(n=>({components:{FMenu:K,LBtn:x,FButton:Z,LMenu:U,LMenuButton:j,LMenuItems:V,LMenuItemWrapper:_,LMenuItem:D},setup(){return{activeMenuitem:l("")}},template:`
    <div class="h-64">
      <FMenu v-model="activeMenuitem"></FMenu>
    </div>
  `}),"SimpleTemplate"),ye=ke.bind({});ye.args={};const Be=u(n=>({components:{LMenu:U,LMenuButton:j,LMenuItems:V,LMenuItemWrapper:_,LMenuItem:D,FButton:Z,LBtn:x,LIcon:X},setup(){return{activeMenuitem:l(""),iChevronDown:Y}},template:`
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
  `}),"DefaultTemplate"),Te=Be.bind({});Te.args={};const Re=["Simple","Default"];export{Te as Default,ye as Simple,Re as __namedExportsOrder,Ke as default};
//# sourceMappingURL=LMenu.stories.51f7f6a4.js.map
