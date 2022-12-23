var se=Object.defineProperty;var r=(e,t)=>se(e,"name",{value:t,configurable:!0});import{d as k,r as l,h as N,k as H,p as ae,t as ie,q as le,o as ce,b as me,e as d,y as g,g as pe,i as T,u as a,A as z,B as de,w as fe,f as ve,E as ge}from"./vue.esm-bundler.e1ec89ec.js";import{u as be,i as he}from"./useIcon.1f824c76.js";import{L as F,_ as Me}from"./FButton.b3469d9e.js";import"./FText.49f64919.js";import"./FNumber.1919de9d.js";import"./FCombobox.82363358.js";import"./FCheckboxGroup.0d493440.js";import"./FTabs.66c8602b.js";import"./FMultiSelect.d58f6f07.js";import"./FSpinner.d18ef1c5.js";import{L as we}from"./LIcon.64afb968.js";import"./ripple.41117a53.js";import"./LSpinner.a1ee4105.js";var D={exports:{}},u=D.exports={},f,v;function P(){throw new Error("setTimeout has not been defined")}r(P,"defaultSetTimout");function $(){throw new Error("clearTimeout has not been defined")}r($,"defaultClearTimeout");(function(){try{typeof setTimeout=="function"?f=setTimeout:f=P}catch{f=P}try{typeof clearTimeout=="function"?v=clearTimeout:v=$}catch{v=$}})();function G(e){if(f===setTimeout)return setTimeout(e,0);if((f===P||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch{try{return f.call(null,e,0)}catch{return f.call(this,e,0)}}}r(G,"runTimeout");function ye(e){if(v===clearTimeout)return clearTimeout(e);if((v===$||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(e);try{return v(e)}catch{try{return v.call(null,e)}catch{return v.call(this,e)}}}r(ye,"runClearTimeout");var b=[],I=!1,w,S=-1;function Ie(){!I||!w||(I=!1,w.length?b=w.concat(b):S=-1,b.length&&J())}r(Ie,"cleanUpNextTick");function J(){if(!I){var e=G(Ie);I=!0;for(var t=b.length;t;){for(w=b,b=[];++S<t;)w&&w[S].run();S=-1,t=b.length}w=null,I=!1,ye(e)}}r(J,"drainQueue");u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];b.push(new X(e,t)),b.length===1&&!I&&G(J)};function X(e,t){this.fun=e,this.array=t}r(X,"Item");X.prototype.run=function(){this.fun.apply(null,this.array)};u.title="browser";u.browser=!0;u.env={};u.argv=[];u.version="";u.versions={};function h(){}r(h,"noop");u.on=h;u.addListener=h;u.once=h;u.off=h;u.removeListener=h;u.removeAllListeners=h;u.emit=h;u.prependListener=h;u.prependOnceListener=h;u.listeners=function(e){return[]};u.binding=function(e){throw new Error("process.binding is not supported")};u.cwd=function(){return"/"};u.chdir=function(e){throw new Error("process.chdir is not supported")};u.umask=function(){return 0};function C(e){return e==null||e.value==null?null:"$el"in e.value?e.value.$el.$el?e.value.$el.$el:e.value.$el:e.value}r(C,"useDom");function B(e){const t=ie(Y,null);if(t===null){const o=new Error(`<${e} /> is missing a parent <LMenu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,B),o}return t}r(B,"useContext");const Y=Symbol("MenuContext"),Z=k({props:{field:{type:Object,default:()=>({})}},setup(e,{slots:t}){const o=l(null),n=l(null),i=l(null),s=l([]),L=l(null),E=l(null),c=l(null),ne=l(0),oe=l(e.field),R=r(()=>{document&&(document.removeEventListener("click",x),document.removeEventListener("keyup",x)),console.log("unRegisterOverlay")},"unRegisterOverlay"),j=r(()=>{document&&(document.addEventListener("click",x),document.addEventListener("keyup",x)),console.log("registerOverlay")},"registerOverlay"),O=l(!1),ue=r(()=>{O.value||j(),M.isOpen.value=!0},"onOpenPopup"),x=r(m=>{var q,W,Q;const p=m==null?void 0:m.target;if(p&&(((q=C(M.domNode))==null?void 0:q.contains(p))||((W=C(M.menuNode))==null?void 0:W.contains(p))||((Q=C(M.buttonNode))==null?void 0:Q.contains(p))))return;const y=C(M.buttonNode);M.isOpen.value=!1,y==null||y.focus(),R()},"onClosePopup"),K=r(m=>{console.log("onSetFocusToMenuitem",m),s.value.forEach(function(p){var y;p===m&&(c.value=m,(y=C(l(m)))==null||y.focus())})},"onSetFocusToMenuitem"),re=r(m=>{let p=s.value.indexOf(c.value);switch(m.key){case"Up":case"ArrowUp":p--;break;case"ArrowDown":case"Down":p++;break}K(s.value[p])},"onChangeActiveIndex"),V=`menu-${be()}`,M={id:V,domNode:o,buttonNode:n,menuNode:i,menuItemsNode:s,firstMenuItem:L,lastMenuItem:E,activeItem:c,activeItemIndex:ne,field:oe,isOpen:O,registerOverlay:j,unRegisterOverlay:R,onOpenPopup:ue,onClosePopup:x,onSetFocusToMenuitem:K,onChangeActiveIndex:re};return le(Y,M),()=>N("div",{ref:o,id:`menu-${V}`},{default:()=>t.default?t.default({menuItemsNode:M.menuItemsNode.value,isOpen:O.value}):void 0})}}),ee=k({props:{as:{type:[String,Object],default:"button"}},setup(e,{slots:t}){const o=B("LMenuButton");return H(()=>{}),()=>N(e.as,{id:`menu-button-${o.id}`,ref:o.buttonNode,"aria-expanded":o.isOpen.value,"aria-controls":`menu-list-${o.id}`,onKeydown:n=>{let i=!1;switch(n.key){case"Enter":case"ArrowDown":case"Down":o.onOpenPopup(),D.exports.nextTick(()=>{o.onSetFocusToMenuitem(o.firstMenuItem.value)}),i=!0;break;case"Esc":case"Escape":o.onClosePopup(),i=!0;break;case"Up":case"ArrowUp":o.onOpenPopup(),D.exports.nextTick(()=>{o.onSetFocusToMenuitem(o.lastMenuItem.value)}),i=!0;break}i&&(n.stopPropagation(),n.preventDefault())},onclick:n=>{o.isOpen.value?o.onClosePopup():o.onOpenPopup(),n.stopPropagation(),n.preventDefault()}},{default:()=>t.default?t.default({}):[]})}}),te=k({setup(e,{slots:t,attrs:o}){const n=B("LMenuItems");return()=>N("div",{id:`menu-list-${n.id}`,ref:n.menuNode,role:"menu"},{default:()=>t.default?t.default():[]})}}),A=k({props:{as:{type:[String,Object],default:"ul"}},setup(e,{slots:t}){return()=>N(e.as,{role:"presentation"},{default:()=>t.default?t.default():[]})}}),_=k({props:{as:{type:[String,Object],default:"a"}},setup(e,{slots:t,attrs:o}){const n=B("LMenuItem"),i=l(null);return H(()=>{n.menuItemsNode.value.push(i.value),console.log("onMounted item",n.menuItemsNode.value),n.firstMenuItem.value||(n.firstMenuItem.value=i.value),n.lastMenuItem.value=i.value}),ae(()=>{const s=n.menuItemsNode.value.indexOf(i.value);n.menuItemsNode.value.slice(s,1)}),()=>N(e.as,{...o,ref:i,role:"menuitem",tabindex:i.value==n.activeItem.value?0:-1,onKeydown:s=>{const L=s.currentTarget,E=s.key;let c=!1;if(!(s.ctrlKey||s.altKey||s.metaKey)){switch(E){case"Enter":L==null||L.click(),n.onClosePopup(),c=!0;break;case"Esc":case"Escape":n.onClosePopup(),c=!0;break;case"Up":case"ArrowUp":n.onChangeActiveIndex(s),c=!0;break;case"ArrowDown":case"Down":n.onChangeActiveIndex(s),c=!0;break;case"Home":case"PageUp":n.onSetFocusToMenuitem(n.firstMenuItem.value),c=!0;break;case"End":case"PageDown":n.onSetFocusToMenuitem(n.lastMenuItem.value),c=!0;break;case"Tab":n.onClosePopup();break}c&&(s.stopPropagation(),s.preventDefault())}},onClick:()=>{n.onClosePopup()}},{default:()=>t.default?t.default():[]})}}),ke={class:"absolute text-sm left-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-s-800 shadow-lg"},U=k({__name:"FMenu",props:{activeItem:{type:[String,Number],default:""}},emits:["update:activeItem"],setup(e){return(t,o)=>(ce(),me(a(Z),{class:z(["relative",{}]),onClick:o[0]||(o[0]=n=>t.$emit("update:activeItem",e.activeItem))},{default:d(({isOpen:n})=>[g(a(ee),{as:a(F),class:"flex items-center rounded-md bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-10 dark:hover:bg-opacity-10 px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-p-500 ring-offset-2 dark:ring-offset-s-900"},{default:d(()=>[pe(t.$slots,"button",{},()=>[T(" Button menu "),g(a(we),{role:"presentation",class:z(["ml-2 transition-transform",{"rotate-180":n}])},{default:d(()=>[T(de(a(he)),1)]),_:2},1032,["class"])])]),_:2},1032,["as"]),fe(ve("div",ke,[g(a(te),{class:"px-2 py-2 divide-y divide-s-100 dark:divide-s-700"},{default:d(()=>[g(a(A),{as:"div"},{default:d(()=>[g(a(_),{as:a(F),class:"group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"},{default:d(()=>[T(" item 1 ")]),_:1},8,["as"]),g(a(_),{as:a(F),class:"group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"},{default:d(()=>[T(" item 2 ")]),_:1},8,["as"])]),_:1}),g(a(A),{as:"div"},{default:d(()=>[g(a(_),{class:"group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"},{default:d(()=>[g(a(F),null,{default:d(()=>[T("item 1")]),_:1})]),_:1})]),_:1})]),_:1})],512),[[ge,n]])]),_:3}))}});U.__docgenInfo={exportName:"default",displayName:"FMenu",description:"",tags:{},props:[{name:"activeItem",type:{name:"string|number"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:activeItem"}],slots:[{name:"button"}]};const je={title:"Components/FMenu",component:U,parameters:{storySource:{source:`import { ref } from "vue";

// import vitestResults from "@/unit-test-results.json";

// import FCombobox from "@/components/ui/FCombobox.vue";
// import { LIcon } from "@/components/LIcon";
import {
  LMenu,
  LMenuButton,
  LMenuItem,
  LMenuItems,
  LMenuItemWrapper,
} from "../LMenu";
import { LBtn } from "../LBtn";
import type { IMenuField } from "../LMenu";
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

// import {
//   iChevronDown,
//   iCheck,
//   iClose,
//   iFunnel,
// } from "@/stories/composable/useIcon";

const Default = (args: any) => ({
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

export const Simple: any = Default.bind({});
Simple.args = {
  // modelValue: [],
  // field: schema,
};
// <template #items>
//           <ul>
//             <li><LBtn>item 1</LBtn></li>
//           </ul>
//           <ul>
//             <li><a href="https://www.w3.org/TR/wai-aria/"><span>gogo</span>item 2</a></li>
//             <li><a href="https://www.w3.org/TR/wai-aria/"><span>gogo</span>item 2</a></li>
//           </ul>
//       </template>
`,locationsMap:{simple:{startLoc:{col:16,line:37},endLoc:{col:2,line:62},startBody:{col:16,line:37},endBody:{col:2,line:62}}}}}},Le=r(e=>({components:{FMenu:U,LBtn:F,FButton:Me,LMenu:Z,LMenuButton:ee,LMenuItems:te,LMenuItemWrapper:A,LMenuItem:_},setup(){return{activeMenuitem:l("")}},template:`
    <div class="h-64">
      <FMenu v-model="activeMenuitem"></FMenu>
    </div>
  `}),"Default"),xe=Le.bind({});xe.args={};const Ke=["Simple"];export{xe as Simple,Ke as __namedExportsOrder,je as default};
//# sourceMappingURL=LMenu.stories.6e2563c2.js.map
