var s=Object.defineProperty;var e=(n,t)=>s(n,"name",{value:t,configurable:!0});import{L as r}from"./LSpinner.c9659ed3.js";import"./vue.esm-bundler.d6e8a8ce.js";import"./LIcon.b157f1df.js";const L={parameters:{storySource:{source:`import LSpinner from "@/components/LSpinner";\r
\r
// import results from '../../.jest-test-results.json'\r
\r
// import { withTests } from '@storybook/addon-jest'\r
\r
export default {\r
  title: "Components/Spinner",\r
  component: LSpinner,\r
};\r
\r
export const Default = (args: any) => ({\r
  components: { LSpinner },\r
  setup() {\r
    return { args };\r
  },\r
  template: \`\r
  <LSpinner class="text-xl"></LSpinner>\r
  \`,\r
});\r
Default.parameters = {\r
  docs: {\r
    source: {\r
      code: \`\r
      <LSpinner />\r
      \`,\r
    },\r
  },\r
};\r
\r
export const Pulse = (args: any) => ({\r
  components: { LSpinner },\r
  setup() {\r
    return { args };\r
  },\r
  template: \`\r
  <LSpinner class="animate-pulse">\r
  M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z\r
  </LSpinner>\r
  \`,\r
});\r
Pulse.parameters = {\r
  docs: {\r
    source: {\r
      code: \`\r
      <LSpinner class="animate-pulse">{{icon}}</LSpinner>\r
      \`,\r
    },\r
  },\r
};\r
\r
export const Ping = (args: any) => ({\r
  components: { LSpinner },\r
  setup() {\r
    return { args };\r
  },\r
  template: \`\r
  <LSpinner class="animate-ping">\r
  M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z\r
  </LSpinner>\r
  \`,\r
});\r
Ping.parameters = {\r
  docs: {\r
    source: {\r
      code: \`\r
      <LSpinner class="animate-ping">{{icon}}</LSpinner>\r
      \`,\r
    },\r
  },\r
};\r
\r
const sizes = [\r
  "text-xs",\r
  "text-sm",\r
  "text-base",\r
  "text-lg",\r
  "text-xl",\r
  "text-2xl",\r
  "text-3xl",\r
  "text-4xl",\r
  "text-5xl",\r
  "text-6xl",\r
  "text-7xl",\r
  "text-8xl",\r
];\r
\r
export const Size = (args: any) => ({\r
  components: { LSpinner },\r
  setup() {\r
    return { args, sizes };\r
  },\r
  template: \`\r
  <div class="flex flex-wrap text-black dark:text-second-100">\r
    <div v-for="z in sizes" class="flex flex-col items-center p-2">\r
      <div class="text-xs">{{z}}</div>\r
      <LSpinner :class="z" />\r
    </div>\r
  </div>\r
  \`,\r
});\r
Size.parameters = {\r
  docs: {\r
    source: {\r
      code: \`\r
      <LSpinner class="text-4xl">{{icon}}</LSpinner>\r
      \`,\r
    },\r
  },\r
};\r
`,locationsMap:{default:{startLoc:{col:23,line:12},endLoc:{col:2,line:20},startBody:{col:23,line:12},endBody:{col:2,line:20}},pulse:{startLoc:{col:21,line:31},endLoc:{col:2,line:41},startBody:{col:21,line:31},endBody:{col:2,line:41}},ping:{startLoc:{col:20,line:52},endLoc:{col:2,line:62},startBody:{col:20,line:52},endBody:{col:2,line:62}},size:{startLoc:{col:20,line:88},endLoc:{col:2,line:101},startBody:{col:20,line:88},endBody:{col:2,line:101}}}}},title:"Components/Spinner",component:r},o=e(n=>({components:{LSpinner:r},setup(){return{args:n}},template:`
  <LSpinner class="text-xl"></LSpinner>
  `}),"Default");o.parameters={docs:{source:{code:`
      <LSpinner />
      `}}};const a=e(n=>({components:{LSpinner:r},setup(){return{args:n}},template:`
  <LSpinner class="animate-pulse">
  M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z
  </LSpinner>
  `}),"Pulse");a.parameters={docs:{source:{code:`
      <LSpinner class="animate-pulse">{{icon}}</LSpinner>
      `}}};const l=e(n=>({components:{LSpinner:r},setup(){return{args:n}},template:`
  <LSpinner class="animate-ping">
  M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z
  </LSpinner>
  `}),"Ping");l.parameters={docs:{source:{code:`
      <LSpinner class="animate-ping">{{icon}}</LSpinner>
      `}}};const c=["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl","text-6xl","text-7xl","text-8xl"],i=e(n=>({components:{LSpinner:r},setup(){return{args:n,sizes:c}},template:`
  <div class="flex flex-wrap text-black dark:text-second-100">
    <div v-for="z in sizes" class="flex flex-col items-center p-2">
      <div class="text-xs">{{z}}</div>
      <LSpinner :class="z" />
    </div>
  </div>
  `}),"Size");i.parameters={docs:{source:{code:`
      <LSpinner class="text-4xl">{{icon}}</LSpinner>
      `}}};const u=["Default","Pulse","Ping","Size"];export{o as Default,l as Ping,a as Pulse,i as Size,u as __namedExportsOrder,L as default};
//# sourceMappingURL=LSpinner.stories.6aee1a14.js.map
