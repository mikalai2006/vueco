var s=Object.defineProperty;var r=(e,o)=>s(e,"name",{value:o,configurable:!0});import{M as n}from"./Header.0f009f77.js";import"./Button.fd69278b.js";import"./vue.esm-bundler.780544ed.js";import"./_plugin-vue_export-helper.cdc0426e.js";const g={title:"Example/Header",component:n,parameters:{storySource:{source:`import MyHeader from './Header.vue';\r
\r
export default {\r
  title: 'Example/Header',\r
  component: MyHeader,\r
  parameters: {\r
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout\r
    layout: 'fullscreen',\r
  },\r
};\r
\r
const Template = (args) => ({\r
  // Components used in your story \`template\` are defined in the \`components\` object\r
  components: { MyHeader },\r
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
  setup() {\r
    // Story args can be spread into the returned object\r
    return { ...args };\r
  },\r
  // Then, the spread values can be accessed directly in the template\r
  template: '<my-header :user="user" />',\r
});\r
\r
export const LoggedIn = Template.bind({});\r
LoggedIn.args = {\r
  user: {\r
    name: 'Jane Doe',\r
  },\r
};\r
\r
export const LoggedOut = Template.bind({});\r
LoggedOut.args = {\r
  user: null,\r
};\r
`,locationsMap:{"logged-in":{startLoc:{col:17,line:12},endLoc:{col:2,line:22},startBody:{col:17,line:12},endBody:{col:2,line:22}},"logged-out":{startLoc:{col:17,line:12},endLoc:{col:2,line:22},startBody:{col:17,line:12},endBody:{col:2,line:22}}}},layout:"fullscreen"}},t=r(e=>({components:{MyHeader:n},setup(){return{...e}},template:'<my-header :user="user" />'}),"Template"),a=t.bind({});a.args={user:{name:"Jane Doe"}};const d=t.bind({});d.args={user:null};const i=["LoggedIn","LoggedOut"];export{a as LoggedIn,d as LoggedOut,i as __namedExportsOrder,g as default};
//# sourceMappingURL=Header.stories.b2d39cba.js.map
