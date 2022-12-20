var V=Object.defineProperty;var o=(r,n)=>V(r,"name",{value:n,configurable:!0});import{d as g,a as L,r as m,k as u,l as x,m as d,q as b,F as T,C as w,A as y,u as v,x as c,E as C,D as z,v as F,y as P}from"./vue.esm-bundler.d6e8a8ce.js";import{d as E,e as G,a as S}from"./FText.23a6b47a.js";import{L as q}from"./LIcon.b157f1df.js";import{u as I}from"./useValidate.fc728871.js";import"./iframe.39cb54f5.js";const A={class:"relative flex items-start"},$={class:"flex items-center"},B=g({name:"FCheckboxGroup",inheritAttrs:!1}),k=g({...B,props:{modelValue:{default:()=>[]},error:null,field:null,required:{type:Boolean}},emits:["update:modelValue","on-input"],setup(r,{emit:n}){const a=r,t=L({get:()=>a.modelValue,set:e=>{n("update:modelValue",e)}}),l=m(null),i=o(()=>{var s;const e=(s=l.value)==null?void 0:s.$el;e&&(e==null?void 0:e.input)&&(e==null||e.input.focus())},"onSetFocus"),p=o(()=>{t.value=[],n("on-input"),i()},"onReset");return(e,s)=>(u(),x("div",A,[d(e.$slots,"before",{onReset:p}),b("div",$,[(u(!0),x(T,null,w(r.field.groupvalue,f=>(u(),y(c(E),F({key:`item_${f.id}`},e.$attrs,{ref_for:!0,ref_key:"inputElement",ref:l,modelValue:c(t),"onUpdate:modelValue":s[0]||(s[0]=h=>P(t)?t.value=h:null),field:r.field,error:r.error,checked:c(t).indexOf(f.value)!=-1,class:["mr-2 h-5 w-5 appearance-none outline-none group focus:ring-2 focus:ring-offset-2 border rounded-md focus:ring-offset-white dark:focus:ring-offset-s-800 checked:bg-p-500",[{"border-d-500 dark:border-d-500 focus:ring-d-500 focus:border-d-500 ":r.error},{"border-s-200 dark:border-s-600 focus:ring-p-500 focus:border-p-500":!r.error}]],onChange:s[1]||(s[1]=h=>e.$emit("on-input"))}),{default:v(()=>[c(t).indexOf(f.value)!==-1?(u(),y(c(q),{key:0,class:"bg-transparent absolute top-0 left-0 text-white text-xl"},{default:v(()=>[C(" M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z ")]),_:1})):z("",!0)]),_:2},1040,["modelValue","field","error","checked","class"]))),128))]),b("div",null,[d(e.$slots,"label",{id:r.field.id,required:r.required,onSetFocus:i}),d(e.$slots,"after",{onReset:p}),d(e.$slots,"error"),d(e.$slots,"description")])]))}});k.__docgenInfo={exportName:"default",displayName:"FCheckboxGroup",description:"",tags:{},props:[{name:"modelValue",description:"modelValue - model boolean",required:!0,type:{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]},defaultValue:{func:!1,value:`() => {\r
  return [];\r
}`}},{name:"error",required:!1,type:{name:"string"}},{name:"field",description:"Schema for field.",required:!0,type:{name:"IField"}},{name:"required",required:!1,type:{name:"boolean"}}],events:[{name:"on-input"},{name:"update:modelValue"}],slots:[{name:"before",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"label",scoped:!0,bindings:[{name:"id",title:"binding"},{name:"required",title:"binding"},{name:"onSetFocus",title:"binding"}]},{name:"after",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"error"},{name:"description"}]};const _={parameters:{storySource:{source:`import { ref } from "vue";\r
import { LInputText } from "@/components/LInput";\r
\r
import FText from "@/components/ui/FText.vue";\r
import FCheckboxGroup from "@/components/ui/FCheckboxGroup.vue";\r
\r
import { useValidate } from "@/composable/useValidate";\r
import type { IField } from "@/components/LForm/LForm";\r
\r
export default {\r
  title: "Components/Inputs",\r
  // component: LInput,\r
};\r
\r
export const InputText = (args: any) => ({\r
  components: { LInputText, FText },\r
  setup() {\r
    const form = ref({\r
      text: "",\r
    });\r
\r
    const schema = {\r
      id: "text",\r
      component: "LInputText",\r
      name: "text",\r
      label: "Test text",\r
      description: "Help text for input field",\r
      placeholder: "Input test text ...",\r
      type: "text",\r
      autofocus: true,\r
      vtype: "string",\r
      rules: [\r
        {\r
          type: "required",\r
          params: ["This field is required"],\r
        },\r
        {\r
          type: "min",\r
          params: [5, "Email cannot be more than 5 characters"],\r
        },\r
        {\r
          type: "max",\r
          params: [15, "Email cannot be less than 15 characters"],\r
        },\r
        {\r
          type: "matches",\r
          params: [/^[a-zA-Z]+$/, "Please enter only letter text"],\r
        },\r
      ],\r
    };\r
\r
    const { errors, onValidate, onCreateSchema } = useValidate();\r
    onCreateSchema([schema]);\r
\r
    const onInput = async (field: IField) => {\r
      if (field.name) {\r
        await onValidate(field.name, form.value);\r
      }\r
    };\r
\r
    return {\r
      form,\r
      args,\r
      errors,\r
      schema,\r
      onInput,\r
    };\r
  },\r
  template: \`\r
  <FText :schema="schema">\r
    <template #label="{ inputElement, id }">\r
      <label :for="id">lab {{ schema.label }}</label>\r
    </template>\r
  </FText>\r
  \`,\r
});\r
\r
export const InputCheckboxGroup = (args: any) => ({\r
  components: { FCheckboxGroup },\r
  setup() {\r
    const checks = ref([]);\r
\r
    const field = {\r
      id: "group_checkbox",\r
      name: "group_checkbox",\r
      label: "Group checkbox",\r
      groupvalue: [\r
        { id: 1, value: "hello" },\r
        { id: 2, value: "world" },\r
      ],\r
    };\r
\r
    return {\r
      checks,\r
      args,\r
      field,\r
    };\r
  },\r
  template: \`\r
  {{checks}}\r
  <FCheckboxGroup :field="field" v-model="checks">\r
    <template #label="{ inputElement, id }">\r
      <label :for="id">lab {{ field.label }}</label>\r
    </template>\r
  </FCheckboxGroup>\r
  \`,\r
});\r
\r
export const InputTextarea = (args: any) => ({\r
  components: {},\r
  setup() {\r
    const form = ref({\r
      text: "",\r
    });\r
\r
    const schema = [\r
      {\r
        id: "text",\r
        component: "LInputText",\r
        name: "text",\r
        label: "Test text",\r
        description: "Help text for input field",\r
        placeholder: "Input test text ...",\r
        type: "text",\r
        autofocus: true,\r
        vtype: "string",\r
        rules: [\r
          {\r
            type: "required",\r
            params: ["This field is required"],\r
          },\r
          {\r
            type: "min",\r
            params: [5, "Email cannot be more than 5 characters"],\r
          },\r
          {\r
            type: "max",\r
            params: [15, "Email cannot be less than 15 characters"],\r
          },\r
          {\r
            type: "matches",\r
            params: [/^[a-zA-Z]+$/, "Please enter only letter text"],\r
          },\r
        ],\r
      },\r
    ];\r
\r
    const { errors, onValidate, onCreateSchema } = useValidate();\r
    onCreateSchema(schema);\r
\r
    const onInput = async (field: any) => {\r
      await onValidate(field.name, form.value);\r
    };\r
\r
    return {\r
      form,\r
      args,\r
      errors,\r
      schema,\r
      onInput,\r
    };\r
  },\r
  template: \`\r
  <div class="p-16 max-w-md">\r
    <div\r
      class="flex items-center"\r
      :class="[\r
        'rounded-md px-4 mt-1 border text-base transition w-full appearance-none outline-none focus-within:ring-1 placeholder-s-400 dark:placeholder-s-400 bg-transparent',\r
        {\r
          'border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500':\r
          errors.text,\r
        },\r
        {\r
          'border-s-200 dark:border-s-700 focus-within:ring-p-500 focus-within:border-p-500':\r
            !errors.text,\r
        },\r
      ]"\r
    >\r
    <LInputTextarea\r
      v-bind="args"\r
      v-model="form.text"\r
      :schema="schema[0]"\r
      :error="errors.text"\r
      class="outline-none w-full py-2 bg-transparent"\r
      @input="onInput(schema[0])"\r
    />\r
    </div>\r
  </div>\r
  \`,\r
});\r
\r
// export const InputSelect = (args: any) => ({\r
//   components: { LInputSelect },\r
//   setup() {\r
//     const inputValue = ref("");\r
//     return {\r
//       inputValue,\r
//       args,\r
//     };\r
//   },\r
//   template: \`\r
//   <div class="flex flex-col items-start space-y-4">\r
//     <LInputSelect v-bind="args" v-model="inputValue" :schema="{\r
//       name: 'select',\r
//       label: 'Label select',\r
//       placeholder: 'Placeholder select',\r
//       description: 'Description select',\r
//       items: ['one', 'two', 'three'],\r
//     }">\r
//       <template #help>\r
//         Help slot\r
//       </template>\r
//     </LInputSelect>\r
//   </div>\r
//   \`,\r
// });\r
// Default.parameters = {\r
//   docs: {\r
//     source: {\r
//       code: \`\r
//       <LInput />\r
//       \`,\r
//     },\r
//   },\r
// }\r
\r
// export const Styled = (args: any) => ({\r
//   components: { LInputText },\r
//   setup() {\r
//     const inputValue = ref('Test text')\r
//     return {\r
//       inputValue,\r
//       args,\r
//     }\r
//   },\r
//   template: \`\r
//   <div class="flex flex-col items-start space-y-4">\r
//     <LInputText\r
//       v-bind="args"\r
//       v-model="inputValue"\r
//       :schema=placeholder="Placeholder"\r
//       error="With error"\r
//       class="transition-all"\r
//     ></LInputText>\r
\r
//   </div>\r
//   \`,\r
// })\r
// Styled.parameters = {\r
//   docs: {\r
//     source: {\r
//       code: \`\r
//       <LInput class="p-2 border" />\r
//       \`,\r
//     },\r
//   },\r
// }\r
\r
// export const PlayGround: any = TemplatePlayGround.bind({})\r
// PlayGround.args = {\r
//   // size: '',\r
// }\r
// PlayGround.argTypes = {\r
//   size: {\r
//     control: {\r
//       type: 'select',\r
//       options: ['small', 'base', 'big'],\r
//     },\r
//   },\r
// }\r
// PlayGround.storyName = 'Playgroud'\r
\r
// const Template = (args: any) => ({\r
//   components: { LInput, VIcon, LBtn },\r
//   setup() {\r
//     const inputValue = ref('')\r
//     const inputPassword = ref('')\r
//     const typeInput = ref('input')\r
//     return {\r
//       inputValue,\r
//       inputPassword,\r
//       args,\r
//       mdiCommentText,\r
//       mdiAlertCircle,\r
//       mdiClose,\r
//       mdiShieldAccount,\r
//       mdiEye,\r
//       mdiEyeOff,\r
//       mdiLock,\r
//       typeInput,\r
//       mdiAccount,\r
//     }\r
//   },\r
//   template: \`\r
//   <div class="flex flex-col items-start space-y-4">\r
//     <LInput\r
//       v-bind="args"\r
//       v-model="inputValue"\r
//       size="big"\r
//       class="flex items-stretch rounded-md"\r
//       :html-attrs="{placeholder:'Placeholder'}"\r
//     >\r
//       <template #left="{size}">\r
//         <div class="text-primary-500 p-2 flex items-center rounded-l-md">\r
//           <VIcon :size="size">\r
//             {{mdiCommentText }}\r
//           </VIcon>\r
//         </div>\r
//       </template>\r
//     </LInput>\r
//     <LInput v-bind="args" v-model="inputValue" class="flex items-center rounded-md" :html-attrs="{placeholder:'Placeholder2'}">\r
//       <template #right>\r
//         <div class="dark:text-white p-3 flex items-center rounded-r-md border-l border-second-100 dark:border-second-600">\r
//           <VIcon size="small">\r
//             {{mdiCommentText }}\r
//           </VIcon>\r
//         </div>\r
//       </template>\r
//     </LInput>\r
//     <LInput\r
//       v-bind="args"\r
//       v-model="inputValue"\r
//       size="small"\r
//       class="flex items-center rounded-md w-full"\r
//       class-input=""\r
//       :html-attrs="{placeholder:'Placeholder3', type: 'number'}"\r
//     >\r
//       <template #right>\r
//         <div class="dark:text-white p-2 flex items-center rounded-r-md border-l border-second-100 dark:border-second-600">\r
//           <VIcon size="small">\r
//             {{mdiCommentText }}\r
//           </VIcon>\r
//         </div>\r
//       </template>\r
//     </LInput>\r
//     <div class="w-40">\r
//       <LInput\r
//         v-model="inputValue"\r
//         :validate="inputValue.length === 3"\r
//         :errors="inputValue.length > 3 ? [{'id': inputValue}] : []"\r
//         class="flex items-stretch font-medium"\r
//         class-box="border-b border-second-200 dark:border-second-700 dark:text-white"\r
//         class-active="border-second-500 dark:border-second-400"\r
//         class-success="text-primary-700 dark:text-primary-500 border-primary-500"\r
//         class-input=""\r
//         :html-attrs="{\r
//           readonly: true,\r
//           disabled: true,\r
//           placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F...'\r
//         }"\r
//       >\r
//         <template #right="{size, errors, active}">\r
//           <div v-if="errors.length" class="flex items-center p-2">\r
//             <VIcon :size="size">\r
//               {{mdiAlertCircle }}\r
//             </VIcon>\r
//           </div>\r
//         </template>\r
//         <template #left="{ size, value, active, changeValue }">\r
//           <div class="flex items-stretch">\r
//             <LBtn\r
//               mode="second"\r
//               flat\r
//               :size="size"\r
//               rounded="rounded-r-md"\r
//               :icon="mdiAccount"\r
//               :html-property="{ 'aria-label': 'Aria label' }"\r
//               @click="changeValue('')"\r
//             />\r
//           </div>\r
//         </template>\r
//       </LInput>\r
//     </div>\r
//     <div class="w-64 bg-second-50 dark:bg-second-700 rounded-md">\r
//       <LInput\r
//         v-model="inputValue"\r
//         :errors="[]"\r
//         class="flex items-stretch rounded-md m-4"\r
//         :html-attrs="{\r
//           type: 'input',\r
//           placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F'\r
//         }"\r
//       >\r
//         <template #left="{ size, value }">\r
//           <div v-if="value" class="flex items-center rounded-l-md p-2">\r
//             <VIcon :size="size">\r
//               {{ mdiShieldAccount }}\r
//             </VIcon>\r
//           </div>\r
//         </template>\r
//       </LInput>\r
//       <LInput\r
//         v-model="inputPassword"\r
//         :validate="inputPassword.length === 3"\r
//         :errors="inputPassword.length > 3 ? [{'id': inputPassword}] : []"\r
//         class="flex  items-stretch rounded-md m-4"\r
//         class-input=""\r
//         class-success=""\r
//         :html-attrs="{\r
//           type: typeInput,\r
//           placeholder:'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C'\r
//         }"\r
//       >\r
//         <template #left="{ size }">\r
//           <div class="flex items-center rounded-l-md p-2">\r
//             <VIcon :size="size">\r
//               {{ mdiLock }}\r
//             </VIcon>\r
//           </div>\r
//         </template>\r
//         <template #right="{ size, value, changeValue }">\r
//           <div class="flex items-stretch">\r
//             <LBtn\r
//               :size="size"\r
//               rounded="rounded-r-md"\r
//               :icon="typeInput === 'password' ? mdiEye : mdiEyeOff"\r
//               :html-property="{ 'aria-label': 'Aria label' }"\r
//               @click="typeInput = typeInput === 'password' ? 'input' : 'password'"\r
//             />\r
//           </div>\r
//         </template>\r
//       </LInput>\r
//     </div>\r
//   </div>\r
//   \`,\r
// })\r
\r
// export const Default: any = Template.bind({})\r
// // Default.args = {\r
// //   size: '',\r
// // }\r
// // Default.argTypes = {\r
// //   size: {\r
// //     control: {\r
// //       type: 'select',\r
// //       options: ['small', 'base', 'big'],\r
// //     },\r
// //   },\r
// // }\r
// Default.storyName = 'All input'\r
`,locationsMap:{"input-text":{startLoc:{col:25,line:15},endLoc:{col:2,line:76},startBody:{col:25,line:15},endBody:{col:2,line:76}},"input-checkbox-group":{startLoc:{col:34,line:78},endLoc:{col:2,line:107},startBody:{col:34,line:78},endBody:{col:2,line:107}},"input-textarea":{startLoc:{col:29,line:109},endLoc:{col:2,line:190},startBody:{col:29,line:109},endBody:{col:2,line:190}}}}},title:"Components/Inputs"},M=o(r=>({components:{LInputText:G,FText:S},setup(){const n=m({text:""}),a={id:"text",component:"LInputText",name:"text",label:"Test text",description:"Help text for input field",placeholder:"Input test text ...",type:"text",autofocus:!0,vtype:"string",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[5,"Email cannot be more than 5 characters"]},{type:"max",params:[15,"Email cannot be less than 15 characters"]},{type:"matches",params:[/^[a-zA-Z]+$/,"Please enter only letter text"]}]},{errors:t,onValidate:l,onCreateSchema:i}=I();return i([a]),{form:n,args:r,errors:t,schema:a,onInput:o(async e=>{e.name&&await l(e.name,n.value)},"onInput")}},template:`
  <FText :schema="schema">
    <template #label="{ inputElement, id }">
      <label :for="id">lab {{ schema.label }}</label>
    </template>
  </FText>
  `}),"InputText"),U=o(r=>({components:{FCheckboxGroup:k},setup(){return{checks:m([]),args:r,field:{id:"group_checkbox",name:"group_checkbox",label:"Group checkbox",groupvalue:[{id:1,value:"hello"},{id:2,value:"world"}]}}},template:`
  {{checks}}
  <FCheckboxGroup :field="field" v-model="checks">
    <template #label="{ inputElement, id }">
      <label :for="id">lab {{ field.label }}</label>
    </template>
  </FCheckboxGroup>
  `}),"InputCheckboxGroup"),W=o(r=>({components:{},setup(){const n=m({text:""}),a=[{id:"text",component:"LInputText",name:"text",label:"Test text",description:"Help text for input field",placeholder:"Input test text ...",type:"text",autofocus:!0,vtype:"string",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[5,"Email cannot be more than 5 characters"]},{type:"max",params:[15,"Email cannot be less than 15 characters"]},{type:"matches",params:[/^[a-zA-Z]+$/,"Please enter only letter text"]}]}],{errors:t,onValidate:l,onCreateSchema:i}=I();return i(a),{form:n,args:r,errors:t,schema:a,onInput:o(async e=>{await l(e.name,n.value)},"onInput")}},template:`
  <div class="p-16 max-w-md">
    <div
      class="flex items-center"
      :class="[
        'rounded-md px-4 mt-1 border text-base transition w-full appearance-none outline-none focus-within:ring-1 placeholder-s-400 dark:placeholder-s-400 bg-transparent',
        {
          'border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500':
          errors.text,
        },
        {
          'border-s-200 dark:border-s-700 focus-within:ring-p-500 focus-within:border-p-500':
            !errors.text,
        },
      ]"
    >
    <LInputTextarea
      v-bind="args"
      v-model="form.text"
      :schema="schema[0]"
      :error="errors.text"
      class="outline-none w-full py-2 bg-transparent"
      @input="onInput(schema[0])"
    />
    </div>
  </div>
  `}),"InputTextarea"),j=["InputText","InputCheckboxGroup","InputTextarea"];export{U as InputCheckboxGroup,M as InputText,W as InputTextarea,j as __namedExportsOrder,_ as default};
//# sourceMappingURL=LInput.stories.9204f7cb.js.map
