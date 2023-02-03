var d=Object.defineProperty;var a=(n,e)=>d(n,"name",{value:e,configurable:!0});import{a as c}from"./vue.esm-bundler.63e44d6a.js";import{h as m,b as u}from"./FText.2ae2cb53.js";import{_ as h}from"./FCheckboxGroup.77f2c40d.js";import{_ as x}from"./FCheckbox.9b5e3c49.js";import{u as i}from"./useValidate.0010780f.js";import"./LIcon.a931258d.js";import"./iframe.42a69c0e.js";const T={parameters:{storySource:{source:`import { ref } from "vue";
import { LInputText, LInputCheckbox } from "@/components/LInput";

import FText from "@/components/ui/FText.vue";
import FCheckboxGroup from "@/components/ui/FCheckboxGroup.vue";
import FCheckbox from "@/components/ui/FCheckbox.vue";

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

export const FCheckboxInput = (args: any) => ({
  components: { FCheckbox },
  setup() {
    const form = ref({
      check: false,
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
  <FCheckbox :field="schema" v-model="form.check" @on-input="onInput">
  </FCheckbox>
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
`,locationsMap:{"input-text":{startLoc:{col:25,line:16},endLoc:{col:2,line:77},startBody:{col:25,line:16},endBody:{col:2,line:77}},"f-checkbox-input":{startLoc:{col:30,line:79},endLoc:{col:2,line:137},startBody:{col:30,line:79},endBody:{col:2,line:137}},"input-checkbox-group":{startLoc:{col:34,line:139},endLoc:{col:2,line:168},startBody:{col:34,line:139},endBody:{col:2,line:168}},"input-textarea":{startLoc:{col:29,line:170},endLoc:{col:2,line:251},startBody:{col:29,line:170},endBody:{col:2,line:251}}}}},title:"Components/Inputs"},V=a(n=>({components:{LInputText:m,FText:u},setup(){const e=c({text:""}),t={id:"text",component:"LInputText",name:"text",label:"Test text",description:"Help text for input field",placeholder:"Input test text ...",type:"text",autofocus:!0,vtype:"string",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[5,"Email cannot be more than 5 characters"]},{type:"max",params:[15,"Email cannot be less than 15 characters"]},{type:"matches",params:[/^[a-zA-Z]+$/,"Please enter only letter text"]}]},{errors:o,onValidate:s,onCreateSchema:l}=i();return l([t]),{form:e,args:n,errors:o,schema:t,onInput:a(async r=>{r.name&&await s(r.name,e.value)},"onInput")}},template:`
  <FText :schema="schema">
    <template #label="{ inputElement, id }">
      <label :for="id">lab {{ schema.label }}</label>
    </template>
  </FText>
  `}),"InputText"),C=a(n=>({components:{FCheckbox:x},setup(){const e=c({check:!1}),t={id:"text",component:"LInputText",name:"text",label:"Test text",description:"Help text for input field",placeholder:"Input test text ...",type:"text",autofocus:!0,vtype:"string",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[5,"Email cannot be more than 5 characters"]},{type:"max",params:[15,"Email cannot be less than 15 characters"]},{type:"matches",params:[/^[a-zA-Z]+$/,"Please enter only letter text"]}]},{errors:o,onValidate:s,onCreateSchema:l}=i();return l([t]),{form:e,args:n,errors:o,schema:t,onInput:a(async r=>{r.name&&await s(r.name,e.value)},"onInput")}},template:`
  <FCheckbox :field="schema" v-model="form.check" @on-input="onInput">
  </FCheckbox>
  `}),"FCheckboxInput"),w=a(n=>({components:{FCheckboxGroup:h},setup(){return{checks:c([]),args:n,field:{id:"group_checkbox",name:"group_checkbox",label:"Group checkbox",groupvalue:[{id:1,value:"hello"},{id:2,value:"world"}]}}},template:`
  {{checks}}
  <FCheckboxGroup :field="field" v-model="checks">
    <template #label="{ inputElement, id }">
      <label :for="id">lab {{ field.label }}</label>
    </template>
  </FCheckboxGroup>
  `}),"InputCheckboxGroup"),z=a(n=>({components:{},setup(){const e=c({text:""}),t=[{id:"text",component:"LInputText",name:"text",label:"Test text",description:"Help text for input field",placeholder:"Input test text ...",type:"text",autofocus:!0,vtype:"string",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[5,"Email cannot be more than 5 characters"]},{type:"max",params:[15,"Email cannot be less than 15 characters"]},{type:"matches",params:[/^[a-zA-Z]+$/,"Please enter only letter text"]}]}],{errors:o,onValidate:s,onCreateSchema:l}=i();return l(t),{form:e,args:n,errors:o,schema:t,onInput:a(async r=>{await s(r.name,e.value)},"onInput")}},template:`
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
  `}),"InputTextarea"),F=["InputText","FCheckboxInput","InputCheckboxGroup","InputTextarea"];export{C as FCheckboxInput,w as InputCheckboxGroup,V as InputText,z as InputTextarea,F as __namedExportsOrder,T as default};
//# sourceMappingURL=LInput.stories.ae36f60b.js.map
