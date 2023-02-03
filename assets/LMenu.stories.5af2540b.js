var y=Object.defineProperty;var o=(t,e)=>y(t,"name",{value:e,configurable:!0});import"./jsx-runtime.8f55439d.js";import{c as n,A as g,C as b,S as v,M as f,a as T}from"./Props.1c386f63.js";import"./iframe.42a69c0e.js";import{a as x}from"./vue.esm-bundler.63e44d6a.js";import{L as m,a as i,b as c,c as d,d as M}from"./LMenu.f36d856f.js";import"./string.cdabb4ae.js";import"./es.map.constructor.c3ec749b.js";import"./es.number.to-fixed.c01be8d7.js";import"./useId.06feead9.js";import"./browser.cfbb4fdd.js";import"./useDom.cdb636d1.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},p.apply(this,arguments)}o(p,"_extends");const u=o(t=>({components:{LMenu:m},setup(){const e=x("");return{args:t,activeItem:e}},template:'<LMenu v-model="activeItem" v-bind="args" />'}),"Template"),I={Template:u},C="wrapper";function L({components:t,...e}){return n(C,p({},I,e,{components:t,mdxType:"MDXLayout"}),n(f,{title:"MDX/LMenu",component:m,subcomponents:{LMenuButton:i,LMenuItem:c,LMenuItems:d,LMenuItemWrapper:M},argTypes:{modelValue:"model"},mdxType:"Meta"}),n("h1",null,"LBtn"),n(b,{mdxType:"Canvas"},n(v,{name:"simple-lmenu",args:{label:"LMenu"},mdxType:"Story"},u.bind({}))),n(T,{of:m,mdxType:"ArgsTable"}))}o(L,"MDXContent");L.isMDXComponent=!0;const l=u.bind({});l.storyName="simple-lmenu";l.args={label:"LMenu"};l.parameters={storySource:{source:`args => ({
  components: {
    LMenu
  },
  setup() {
    const activeItem = ref("");
    return {
      args,
      activeItem
    };
  },
  template: '<LMenu v-model="activeItem" v-bind="args" />'
})`}};const a={title:"MDX/LMenu",component:m,subcomponents:{LMenuButton:i,LMenuItem:c,LMenuItems:d,LMenuItemWrapper:M},argTypes:{modelValue:"model"},includeStories:["simpleLmenu"]},S={"simple-lmenu":"simpleLmenu"};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>n(g,{mdxStoryNameToKey:S,mdxComponentAnnotations:a},n(L,null))};const P=["Template","simpleLmenu"];export{u as Template,P as __namedExportsOrder,a as default,l as simpleLmenu};
//# sourceMappingURL=LMenu.stories.5af2540b.js.map
