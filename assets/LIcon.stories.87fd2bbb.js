var t=Object.defineProperty;var s=(n,r)=>t(n,"name",{value:r,configurable:!0});import{L as a}from"./LIcon.a931258d.js";import"./vue.esm-bundler.63e44d6a.js";const v={parameters:{storySource:{source:`import LIcon from '@/components/LIcon'\r
\r
// import results from '../../../.jest-test-results.json'\r
\r
// import { withTests } from '@storybook/addon-jest'\r
\r
export default {\r
  component: LIcon,\r
  title: 'Components/LIcon',\r
  // decorators: [withTests({ results })],\r
}\r
\r
const classes: any = []\r
\r
for (const i of ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']) {\r
  classes.push({\r
    id: i,\r
    class: \`text-\${i}\`,\r
  })\r
}\r
const Template = (args: any) => ({\r
  components: { LIcon },\r
  setup() {\r
    return { args, classes }\r
  },\r
  template: \`\r
  <div>\r
    <h1>Icons Bootstrap</h1>\r
    <div>\r
      <a href="https://icons.getbootstrap.com/" title="Icons bootstrap" target="_blank" class="flex items-center">\r
        <span class="pr-2">\r
          Icons bootstrap\r
        </span>\r
        <LIcon>\r
          M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z\r
        </LIcon>\r
      </a>\r
    </div>\r
    <div class="flex items-end space-x-4 text-second-800 dark:text-second-100">\r
      <div v-for="i in classes" class="leading-none p-1 flex flex-col items-center" :class="[i.class]">\r
        <LIcon v-bind="args">\r
        M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\r
        </LIcon>\r
        <div class="pt-2 text-base">{{i.id}}</div>\r
      </div>\r
    </div>\r
    <div class="flex items-end space-x-4 bg-primary-200 text-accent-800">\r
      <div v-for="i in classes" class="leading-none p-1 flex flex-col items-center" :class="[i.class]">\r
        <LIcon v-bind="args">\r
        M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z\r
        </LIcon>\r
        <div class="pt-2 text-base">{{i.id}}</div>\r
      </div>\r
    </div>\r
    <div class="flex items-end space-x-4 text-primary-700 dark:text-primary-300">\r
      <div v-for="i in classes" class="leading-none p-1 flex flex-col items-center" :class="[i.class]">\r
        <LIcon v-bind="args">\r
          M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z\r
        </LIcon>\r
        <div class="pt-2 text-base">{{i.id}}</div>\r
      </div>\r
    </div>\r
    <div class="flex items-center space-x-4 text-second-800 dark:text-second-100">\r
      <div v-for="i in classes" class="leading-none p-1 flex flex-col items-center" :class="[i.class]">\r
        <LIcon v-bind="args">\r
        M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z\r
        </LIcon>\r
        <div>{{i.id}}</div>\r
      </div>\r
    </div>\r
  </div>\r
  \`,\r
})\r
\r
export const Default: any = Template.bind({})\r
Default.args = {}\r
// Default.storyName = 'LIcon'\r
\r
// const TemplatePlayGround = (args: any) => ({\r
//   components: { LIcon },\r
//   setup() {\r
//     return { args, classes }\r
//   },\r
//   template: \`\r
//   <div>\r
//     <h2>Bootstrap</h2>\r
//     <div>\r
//       <a href="https://icons.getbootstrap.com/">Icons bootstrap</a>\r
//     </div>\r
//     <div class="flex items-center space-x-4 text-second-800 dark:text-second-100">\r
//       <div v-for="i in classes" class="leading-none p-1 flex flex-col items-center" :class="[i.class]">\r
//         <LIcon v-bind="args">\r
//         M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\r
//         </LIcon>\r
//         <div class="pt-2 text-base">{{i.id}}</div>\r
//       </div>\r
//     </div>\r
//     <div class="flex items-center space-x-4 text-primary-500">\r
//       <div v-for="i in classes" class="leading-none p-1 flex flex-col items-center" :class="[i.class]">\r
//         <LIcon v-bind="args">\r
//           M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z\r
//         </LIcon>\r
//         <div class="pt-2 text-base">{{i.id}}</div>\r
//       </div>\r
//     </div>\r
//     <div class="flex items-center space-x-4 text-second-800 dark:text-second-100">\r
//       <div v-for="i in classes" class="leading-none p-1 flex flex-row items-center" :class="[i.class]">\r
//         <LIcon v-bind="args">\r
//         M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z\r
//         </LIcon>\r
//         <div class="pl-1">{{i.id}}</div>\r
//       </div>\r
//     </div>\r
//   </div>\r
//   \`,\r
// })\r
\r
// export const PlayGround: any = TemplatePlayGround.bind({})\r
// // PlayGround.args = {\r
// //   size: 24,\r
// // }\r
// // PlayGround.argTypes = {\r
// //   size: {\r
// //     control: {\r
// //       type: 'select',\r
// //       options: ['small', 'base', 'big'],\r
// //     },\r
// //   },\r
// // }\r
// PlayGround.storyName = 'Playgroud'\r
`,locationsMap:{default:{startLoc:{col:17,line:21},endLoc:{col:2,line:73},startBody:{col:17,line:21},endBody:{col:2,line:73}}}}},component:a,title:"Components/LIcon"},e=[];for(const n of["sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl"])e.push({id:n,class:`text-${n}`});const i=s(n=>({components:{LIcon:a},setup(){return{args:n,classes:e}},template:`
  <div>
    <h1>Icons Bootstrap</h1>
    <div>
      <a href="https://icons.getbootstrap.com/" title="Icons bootstrap" target="_blank" class="flex items-center">
        <span class="pr-2">
          Icons bootstrap
        </span>
        <LIcon>
          M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z
        </LIcon>
      </a>
    </div>
    <div class="flex items-end space-x-4 text-second-800 dark:text-second-100">
      <div v-for="i in classes" class="leading-none p-1 flex flex-col items-center" :class="[i.class]">
        <LIcon v-bind="args">
        M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z
        </LIcon>
        <div class="pt-2 text-base">{{i.id}}</div>
      </div>
    </div>
    <div class="flex items-end space-x-4 bg-primary-200 text-accent-800">
      <div v-for="i in classes" class="leading-none p-1 flex flex-col items-center" :class="[i.class]">
        <LIcon v-bind="args">
        M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z
        </LIcon>
        <div class="pt-2 text-base">{{i.id}}</div>
      </div>
    </div>
    <div class="flex items-end space-x-4 text-primary-700 dark:text-primary-300">
      <div v-for="i in classes" class="leading-none p-1 flex flex-col items-center" :class="[i.class]">
        <LIcon v-bind="args">
          M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z
        </LIcon>
        <div class="pt-2 text-base">{{i.id}}</div>
      </div>
    </div>
    <div class="flex items-center space-x-4 text-second-800 dark:text-second-100">
      <div v-for="i in classes" class="leading-none p-1 flex flex-col items-center" :class="[i.class]">
        <LIcon v-bind="args">
        M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z
        </LIcon>
        <div>{{i.id}}</div>
      </div>
    </div>
  </div>
  `}),"Template"),l=i.bind({});l.args={};const m=["Default"];export{l as Default,m as __namedExportsOrder,v as default};
//# sourceMappingURL=LIcon.stories.87fd2bbb.js.map
