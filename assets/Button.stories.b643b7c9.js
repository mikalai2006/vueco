var l=Object.defineProperty;var n=(o,e)=>l(o,"name",{value:e,configurable:!0});import{M as t}from"./Button.f080df40.js";import"./vue.esm-bundler.d6e8a8ce.js";const u={parameters:{storySource:{source:`import MyButton from "./Button.vue";\r
\r
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export\r
export default {\r
  title: "Example/Button",\r
  component: MyButton,\r
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes\r
  argTypes: {\r
    backgroundColor: { control: "color" },\r
    onClick: {},\r
    size: {\r
      control: { type: "select" },\r
      options: ["small", "medium", "large"],\r
    },\r
  },\r
};\r
\r
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args\r
const Template = (args) => ({\r
  // Components used in your story \`template\` are defined in the \`components\` object\r
  components: { MyButton },\r
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
  setup() {\r
    return { args };\r
  },\r
  // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
  template: '<my-button v-bind="args" />',\r
});\r
\r
export const Primary = Template.bind({});\r
// More on args: https://storybook.js.org/docs/vue/writing-stories/args\r
Primary.args = {\r
  primary: true,\r
  label: "Button",\r
};\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
  label: "Button",\r
};\r
\r
export const Large = Template.bind({});\r
Large.args = {\r
  size: "large",\r
  label: "Button",\r
};\r
\r
export const Small = Template.bind({});\r
Small.args = {\r
  size: "small",\r
  label: "Button",\r
};\r
`,locationsMap:{primary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},secondary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},large:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},small:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}}}}},title:"Example/Button",component:t,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}},r=n(o=>({components:{MyButton:t},setup(){return{args:o}},template:'<my-button v-bind="args" />'}),"Template"),s=r.bind({});s.args={primary:!0,label:"Button"};const a=r.bind({});a.args={label:"Button"};const i=r.bind({});i.args={size:"large",label:"Button"};const c=r.bind({});c.args={size:"small",label:"Button"};const g=["Primary","Secondary","Large","Small"];export{i as Large,s as Primary,a as Secondary,c as Small,g as __namedExportsOrder,u as default};
//# sourceMappingURL=Button.stories.b643b7c9.js.map
