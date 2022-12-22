var V=Object.defineProperty;var o=(n,t)=>V(n,"name",{value:t,configurable:!0});import{d as g,a as L,r as m,o as u,x,i as d,g as b,F as T,C as w,e as y,f as v,u as c,j as C,D as z,m as F,z as P}from"./vue.esm-bundler.a08ba302.js";import{d as G,e as E,a as S}from"./FText.b1066ef0.js";import{L as q}from"./LIcon.ca56402e.js";import{u as I}from"./useValidate.b630d031.js";import"./iframe.62c1ba6d.js";const A={class:"relative flex items-start"},$={class:"flex items-center"},B=g({name:"FCheckboxGroup",inheritAttrs:!1}),k=g({...B,props:{modelValue:{default:()=>[]},error:null,field:null,required:{type:Boolean}},emits:["update:modelValue","on-input"],setup(n,{emit:t}){const a=n,r=L({get:()=>a.modelValue,set:e=>{t("update:modelValue",e)}}),l=m(null),i=o(()=>{var s;const e=(s=l.value)==null?void 0:s.$el;e&&(e==null?void 0:e.input)&&(e==null||e.input.focus())},"onSetFocus"),p=o(()=>{r.value=[],t("on-input"),i()},"onReset");return(e,s)=>(u(),x("div",A,[d(e.$slots,"before",{onReset:p}),b("div",$,[(u(!0),x(T,null,w(n.field.groupvalue,f=>(u(),y(c(G),F({key:`item_${f.id}`},e.$attrs,{ref_for:!0,ref_key:"inputElement",ref:l,modelValue:c(r),"onUpdate:modelValue":s[0]||(s[0]=h=>P(r)?r.value=h:null),field:n.field,error:n.error,checked:c(r).indexOf(f.value)!=-1,class:["mr-2 h-5 w-5 appearance-none outline-none group focus:ring-2 focus:ring-offset-2 border rounded-md focus:ring-offset-white dark:focus:ring-offset-s-800 checked:bg-p-500",[{"border-d-500 dark:border-d-500 focus:ring-d-500 focus:border-d-500 ":n.error},{"border-s-200 dark:border-s-600 focus:ring-p-500 focus:border-p-500":!n.error}]],onChange:s[1]||(s[1]=h=>e.$emit("on-input"))}),{default:v(()=>[c(r).indexOf(f.value)!==-1?(u(),y(c(q),{key:0,class:"bg-transparent absolute top-0 left-0 text-white text-xl"},{default:v(()=>[C(" M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z ")]),_:1})):z("",!0)]),_:2},1040,["modelValue","field","error","checked","class"]))),128))]),b("div",null,[d(e.$slots,"label",{id:n.field.id,required:n.required,onSetFocus:i}),d(e.$slots,"after",{onReset:p}),d(e.$slots,"error"),d(e.$slots,"description")])]))}});k.__docgenInfo={exportName:"default",displayName:"FCheckboxGroup",description:"",tags:{},props:[{name:"modelValue",description:"modelValue - model boolean",required:!0,type:{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]}]},defaultValue:{func:!1,value:`() => {\r
  return [];\r
}`}},{name:"error",required:!1,type:{name:"string"}},{name:"field",description:"Schema for field.",required:!0,type:{name:"IField"}},{name:"required",required:!1,type:{name:"boolean"}}],events:[{name:"on-input"},{name:"update:modelValue"}],slots:[{name:"before",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"label",scoped:!0,bindings:[{name:"id",title:"binding"},{name:"required",title:"binding"},{name:"onSetFocus",title:"binding"}]},{name:"after",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"error"},{name:"description"}]};const _={parameters:{storySource:{source:`import { ref } from "vue";
import { LInputText } from "@/components/LInput";

import FText from "@/components/ui/FText.vue";
import FCheckboxGroup from "@/components/ui/FCheckboxGroup.vue";

import { useValidate } from "@/composable/useValidate";
import type { IField } from "@/components/LForm/LForm";

export default {
  title: "Components/Inputs",
  // component: LInput,
};

export const InputText = (args: any) => ({
  components: { LInputText, FText },
  setup() {
    const form = ref({
      text: "",
    });

    const schema = {
      id: "text",
      component: "LInputText",
      name: "text",
      label: "Test text",
      description: "Help text for input field",
      placeholder: "Input test text ...",
      type: "text",
      autofocus: true,
      vtype: "string",
      rules: [
        {
          type: "required",
          params: ["This field is required"],
        },
        {
          type: "min",
          params: [5, "Email cannot be more than 5 characters"],
        },
        {
          type: "max",
          params: [15, "Email cannot be less than 15 characters"],
        },
        {
          type: "matches",
          params: [/^[a-zA-Z]+$/, "Please enter only letter text"],
        },
      ],
    };

    const { errors, onValidate, onCreateSchema } = useValidate();
    onCreateSchema([schema]);

    const onInput = async (field: IField) => {
      if (field.name) {
        await onValidate(field.name, form.value);
      }
    };

    return {
      form,
      args,
      errors,
      schema,
      onInput,
    };
  },
  template: \`
  <FText :schema="schema">
    <template #label="{ inputElement, id }">
      <label :for="id">lab {{ schema.label }}</label>
    </template>
  </FText>
  \`,
});

export const InputCheckboxGroup = (args: any) => ({
  components: { FCheckboxGroup },
  setup() {
    const checks = ref([]);

    const field = {
      id: "group_checkbox",
      name: "group_checkbox",
      label: "Group checkbox",
      groupvalue: [
        { id: 1, value: "hello" },
        { id: 2, value: "world" },
      ],
    };

    return {
      checks,
      args,
      field,
    };
  },
  template: \`
  {{checks}}
  <FCheckboxGroup :field="field" v-model="checks">
    <template #label="{ inputElement, id }">
      <label :for="id">lab {{ field.label }}</label>
    </template>
  </FCheckboxGroup>
  \`,
});

export const InputTextarea = (args: any) => ({
  components: {},
  setup() {
    const form = ref({
      text: "",
    });

    const schema = [
      {
        id: "text",
        component: "LInputText",
        name: "text",
        label: "Test text",
        description: "Help text for input field",
        placeholder: "Input test text ...",
        type: "text",
        autofocus: true,
        vtype: "string",
        rules: [
          {
            type: "required",
            params: ["This field is required"],
          },
          {
            type: "min",
            params: [5, "Email cannot be more than 5 characters"],
          },
          {
            type: "max",
            params: [15, "Email cannot be less than 15 characters"],
          },
          {
            type: "matches",
            params: [/^[a-zA-Z]+$/, "Please enter only letter text"],
          },
        ],
      },
    ];

    const { errors, onValidate, onCreateSchema } = useValidate();
    onCreateSchema(schema);

    const onInput = async (field: any) => {
      await onValidate(field.name, form.value);
    };

    return {
      form,
      args,
      errors,
      schema,
      onInput,
    };
  },
  template: \`
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
  \`,
});

// export const InputSelect = (args: any) => ({
//   components: { LInputSelect },
//   setup() {
//     const inputValue = ref("");
//     return {
//       inputValue,
//       args,
//     };
//   },
//   template: \`
//   <div class="flex flex-col items-start space-y-4">
//     <LInputSelect v-bind="args" v-model="inputValue" :schema="{
//       name: 'select',
//       label: 'Label select',
//       placeholder: 'Placeholder select',
//       description: 'Description select',
//       items: ['one', 'two', 'three'],
//     }">
//       <template #help>
//         Help slot
//       </template>
//     </LInputSelect>
//   </div>
//   \`,
// });
// Default.parameters = {
//   docs: {
//     source: {
//       code: \`
//       <LInput />
//       \`,
//     },
//   },
// }

// export const Styled = (args: any) => ({
//   components: { LInputText },
//   setup() {
//     const inputValue = ref('Test text')
//     return {
//       inputValue,
//       args,
//     }
//   },
//   template: \`
//   <div class="flex flex-col items-start space-y-4">
//     <LInputText
//       v-bind="args"
//       v-model="inputValue"
//       :schema=placeholder="Placeholder"
//       error="With error"
//       class="transition-all"
//     ></LInputText>

//   </div>
//   \`,
// })
// Styled.parameters = {
//   docs: {
//     source: {
//       code: \`
//       <LInput class="p-2 border" />
//       \`,
//     },
//   },
// }

// export const PlayGround: any = TemplatePlayGround.bind({})
// PlayGround.args = {
//   // size: '',
// }
// PlayGround.argTypes = {
//   size: {
//     control: {
//       type: 'select',
//       options: ['small', 'base', 'big'],
//     },
//   },
// }
// PlayGround.storyName = 'Playgroud'

// const Template = (args: any) => ({
//   components: { LInput, VIcon, LBtn },
//   setup() {
//     const inputValue = ref('')
//     const inputPassword = ref('')
//     const typeInput = ref('input')
//     return {
//       inputValue,
//       inputPassword,
//       args,
//       mdiCommentText,
//       mdiAlertCircle,
//       mdiClose,
//       mdiShieldAccount,
//       mdiEye,
//       mdiEyeOff,
//       mdiLock,
//       typeInput,
//       mdiAccount,
//     }
//   },
//   template: \`
//   <div class="flex flex-col items-start space-y-4">
//     <LInput
//       v-bind="args"
//       v-model="inputValue"
//       size="big"
//       class="flex items-stretch rounded-md"
//       :html-attrs="{placeholder:'Placeholder'}"
//     >
//       <template #left="{size}">
//         <div class="text-primary-500 p-2 flex items-center rounded-l-md">
//           <VIcon :size="size">
//             {{mdiCommentText }}
//           </VIcon>
//         </div>
//       </template>
//     </LInput>
//     <LInput v-bind="args" v-model="inputValue" class="flex items-center rounded-md" :html-attrs="{placeholder:'Placeholder2'}">
//       <template #right>
//         <div class="dark:text-white p-3 flex items-center rounded-r-md border-l border-second-100 dark:border-second-600">
//           <VIcon size="small">
//             {{mdiCommentText }}
//           </VIcon>
//         </div>
//       </template>
//     </LInput>
//     <LInput
//       v-bind="args"
//       v-model="inputValue"
//       size="small"
//       class="flex items-center rounded-md w-full"
//       class-input=""
//       :html-attrs="{placeholder:'Placeholder3', type: 'number'}"
//     >
//       <template #right>
//         <div class="dark:text-white p-2 flex items-center rounded-r-md border-l border-second-100 dark:border-second-600">
//           <VIcon size="small">
//             {{mdiCommentText }}
//           </VIcon>
//         </div>
//       </template>
//     </LInput>
//     <div class="w-40">
//       <LInput
//         v-model="inputValue"
//         :validate="inputValue.length === 3"
//         :errors="inputValue.length > 3 ? [{'id': inputValue}] : []"
//         class="flex items-stretch font-medium"
//         class-box="border-b border-second-200 dark:border-second-700 dark:text-white"
//         class-active="border-second-500 dark:border-second-400"
//         class-success="text-primary-700 dark:text-primary-500 border-primary-500"
//         class-input=""
//         :html-attrs="{
//           readonly: true,
//           disabled: true,
//           placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F...'
//         }"
//       >
//         <template #right="{size, errors, active}">
//           <div v-if="errors.length" class="flex items-center p-2">
//             <VIcon :size="size">
//               {{mdiAlertCircle }}
//             </VIcon>
//           </div>
//         </template>
//         <template #left="{ size, value, active, changeValue }">
//           <div class="flex items-stretch">
//             <LBtn
//               mode="second"
//               flat
//               :size="size"
//               rounded="rounded-r-md"
//               :icon="mdiAccount"
//               :html-property="{ 'aria-label': 'Aria label' }"
//               @click="changeValue('')"
//             />
//           </div>
//         </template>
//       </LInput>
//     </div>
//     <div class="w-64 bg-second-50 dark:bg-second-700 rounded-md">
//       <LInput
//         v-model="inputValue"
//         :errors="[]"
//         class="flex items-stretch rounded-md m-4"
//         :html-attrs="{
//           type: 'input',
//           placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F'
//         }"
//       >
//         <template #left="{ size, value }">
//           <div v-if="value" class="flex items-center rounded-l-md p-2">
//             <VIcon :size="size">
//               {{ mdiShieldAccount }}
//             </VIcon>
//           </div>
//         </template>
//       </LInput>
//       <LInput
//         v-model="inputPassword"
//         :validate="inputPassword.length === 3"
//         :errors="inputPassword.length > 3 ? [{'id': inputPassword}] : []"
//         class="flex  items-stretch rounded-md m-4"
//         class-input=""
//         class-success=""
//         :html-attrs="{
//           type: typeInput,
//           placeholder:'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C'
//         }"
//       >
//         <template #left="{ size }">
//           <div class="flex items-center rounded-l-md p-2">
//             <VIcon :size="size">
//               {{ mdiLock }}
//             </VIcon>
//           </div>
//         </template>
//         <template #right="{ size, value, changeValue }">
//           <div class="flex items-stretch">
//             <LBtn
//               :size="size"
//               rounded="rounded-r-md"
//               :icon="typeInput === 'password' ? mdiEye : mdiEyeOff"
//               :html-property="{ 'aria-label': 'Aria label' }"
//               @click="typeInput = typeInput === 'password' ? 'input' : 'password'"
//             />
//           </div>
//         </template>
//       </LInput>
//     </div>
//   </div>
//   \`,
// })

// export const Default: any = Template.bind({})
// // Default.args = {
// //   size: '',
// // }
// // Default.argTypes = {
// //   size: {
// //     control: {
// //       type: 'select',
// //       options: ['small', 'base', 'big'],
// //     },
// //   },
// // }
// Default.storyName = 'All input'
`,locationsMap:{"input-text":{startLoc:{col:25,line:15},endLoc:{col:2,line:76},startBody:{col:25,line:15},endBody:{col:2,line:76}},"input-checkbox-group":{startLoc:{col:34,line:78},endLoc:{col:2,line:107},startBody:{col:34,line:78},endBody:{col:2,line:107}},"input-textarea":{startLoc:{col:29,line:109},endLoc:{col:2,line:190},startBody:{col:29,line:109},endBody:{col:2,line:190}}}}},title:"Components/Inputs"},M=o(n=>({components:{LInputText:E,FText:S},setup(){const t=m({text:""}),a={id:"text",component:"LInputText",name:"text",label:"Test text",description:"Help text for input field",placeholder:"Input test text ...",type:"text",autofocus:!0,vtype:"string",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[5,"Email cannot be more than 5 characters"]},{type:"max",params:[15,"Email cannot be less than 15 characters"]},{type:"matches",params:[/^[a-zA-Z]+$/,"Please enter only letter text"]}]},{errors:r,onValidate:l,onCreateSchema:i}=I();return i([a]),{form:t,args:n,errors:r,schema:a,onInput:o(async e=>{e.name&&await l(e.name,t.value)},"onInput")}},template:`
  <FText :schema="schema">
    <template #label="{ inputElement, id }">
      <label :for="id">lab {{ schema.label }}</label>
    </template>
  </FText>
  `}),"InputText"),j=o(n=>({components:{FCheckboxGroup:k},setup(){return{checks:m([]),args:n,field:{id:"group_checkbox",name:"group_checkbox",label:"Group checkbox",groupvalue:[{id:1,value:"hello"},{id:2,value:"world"}]}}},template:`
  {{checks}}
  <FCheckboxGroup :field="field" v-model="checks">
    <template #label="{ inputElement, id }">
      <label :for="id">lab {{ field.label }}</label>
    </template>
  </FCheckboxGroup>
  `}),"InputCheckboxGroup"),U=o(n=>({components:{},setup(){const t=m({text:""}),a=[{id:"text",component:"LInputText",name:"text",label:"Test text",description:"Help text for input field",placeholder:"Input test text ...",type:"text",autofocus:!0,vtype:"string",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[5,"Email cannot be more than 5 characters"]},{type:"max",params:[15,"Email cannot be less than 15 characters"]},{type:"matches",params:[/^[a-zA-Z]+$/,"Please enter only letter text"]}]}],{errors:r,onValidate:l,onCreateSchema:i}=I();return i(a),{form:t,args:n,errors:r,schema:a,onInput:o(async e=>{await l(e.name,t.value)},"onInput")}},template:`
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
  `}),"InputTextarea"),W=["InputText","InputCheckboxGroup","InputTextarea"];export{j as InputCheckboxGroup,M as InputText,U as InputTextarea,W as __namedExportsOrder,_ as default};
//# sourceMappingURL=LInput.stories.d6e3a7ca.js.map
