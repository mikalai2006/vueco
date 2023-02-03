var h=Object.defineProperty;var r=(e,n)=>h(e,"name",{value:n,configurable:!0});import{a as o}from"./vue.esm-bundler.63e44d6a.js";import{_ as i}from"./FCombobox.c40d8232.js";import{L as m,a as u,_ as p,b as c}from"./FText.2ae2cb53.js";import{L as b}from"./LIcon.a931258d.js";import{i as f,a as F,b as x}from"./useIcon.fe9488f3.js";import"./useId.06feead9.js";import"./LSpinner.d97669ba.js";import"./ripple.4234d591.js";const C=4,y=4,L=0,g=0,v=10,T=10,q=0,k=0,w=0,D=1673338298026,S=!0,I=[{assertionResults:[{ancestorTitles:["","Combobox with autocomplete"],fullName:" Combobox with autocomplete should be render with default options",status:"passed",title:"should be render with default options",duration:47,failureMessages:[]},{ancestorTitles:["","Combobox with autocomplete"],fullName:" Combobox with autocomplete should be by press ArrowDown ",status:"passed",title:"should be by press ArrowDown ",duration:11,failureMessages:[]},{ancestorTitles:["","Combobox with autocomplete"],fullName:" Combobox with autocomplete LCombobox filter",status:"passed",title:"LCombobox filter",duration:6,failureMessages:[]},{ancestorTitles:["","FCombobox"],fullName:" FCombobox renders properly",status:"passed",title:"renders properly",duration:13,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y autocomplete none",status:"passed",title:"autocomplete none",duration:10,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y autocomplete both",status:"passed",title:"autocomplete both",duration:10,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y role=listbox",status:"passed",title:"role=listbox",duration:8,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y test aria-expanded",status:"passed",title:"test aria-expanded",duration:6,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y test aria-activedescendant(first)",status:"passed",title:"test aria-activedescendant(first)",duration:9,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y test aria-activedescendant(last)",status:"passed",title:"test aria-activedescendant(last)",duration:9,failureMessages:[]}],startTime:1673338299711,endTime:1673338299841,status:"passed",message:"",name:"E:/vue3/ui/vueco/src/test/FCombobox.spec.ts"}],M={numTotalTestSuites:C,numPassedTestSuites:y,numFailedTestSuites:L,numPendingTestSuites:g,numTotalTests:v,numPassedTests:T,numFailedTests:q,numPendingTests:k,numTodoTests:w,startTime:D,success:S,testResults:I},J={title:"Components/FCombobox",component:i,argTypes:{onInput:e=>e,onChoose:e=>e},parameters:{storySource:{source:`import { ref } from "vue";

import vitestResults from "@/unit-test-results.json";

import FCombobox from "@/components/ui/FCombobox.vue";
import FText from "@/components/ui/FText.vue";
import { LFormFieldLabel, LFormFieldDescription } from "@/components/LForm";
import { LIcon } from "@/components/LIcon";
import FError from "@/components/ui/FError.vue";

export default {
  title: "Components/FCombobox",
  component: FCombobox,
  argTypes: {
    onInput: (e) => e,
    onChoose: (e) => e,
  },
  parameters: {
    vitest: {
      testFile: "FCombobox.spec.ts",
      testResults: vitestResults,
    },
  },
};

import { iChevronDown, iCheck, iClose } from "@/stories/composable/useIcon";

const Default = (args: any) => ({
  components: {
    FCombobox,
    LFormFieldLabel,
    LFormFieldDescription,

    FError,
    LIcon,

    FText,
  },
  setup() {
    const field = ref(args.field);
    const selectModel = ref(args.modelValue);
    const error = ref(args.error);
    const required = ref(args.required);

    const onLoadItems = async () => {
      // console.log("onLoadItems: ", params);

      /**
       * fetch items for options
       */
      try {
        await fetch(
          \`https://jsonplaceholder.typicode.com/users\` // &_$client[_$populateParams][text]=\${params?.text}
        )
          .then(async (response) => {
            const result = await response.json();

            if (!response.ok) {
              throw result;
            }
            return result;
          })
          .then((json) => (field.value.items = json));
      } catch (e) {
        error.value = e;
      }
    };
    // onMounted(async () => {
    //   await onLoadItems()
    // })

    return {
      selectModel,
      field,
      error,
      required,

      onLoadItems,

      iChevronDown,
      iCheck,
      iClose,
      onInput: args.onInput,
      onChoose: args.onChoose,
    };
  },
  template: \`
  <div class="py-16">
    <div class="max-w-lg mx-auto p-4 rounded-md bg-s-100 dark:bg-s-800 shadow-xl">
      <FCombobox
        v-model="selectModel"
        :field="field"
        :error="error"
        :required="required"
        @on-load-items="onLoadItems"
        @on-input="(e) => onInput(e)"
        @on-choose="(e) => onChoose(e)"
      >
        <template #selected-option="{ option }">
          <span class="p-1 font-medium">
            {{ option[field.keyLabel] }},
          </span>
        </template>
        <template #error="{ error }">
          <FError>
            {{ error }}
          </FError>
        </template>
        <template #description>
          <LFormFieldDescription :field="field">
            Description
          </LFormFieldDescription>
        </template>
        <template #label="{ onSetFocus, required }">
          <LFormFieldLabel
            v-if="field.label"
            :field="field"
            class="flex-none block font-medium mb-1"
            @onSetFocus="onSetFocus"
          >
            {{ field.label }}
            <span v-if="required" class="text-d-600 dark:text-d-400">*</span>
          </LFormFieldLabel>
        </template>
      </FCombobox>
      </div>
    </div>
  \`,
});

const schema = {
  autocomplete: "both",
  id: "friends",
  name: "friends",
  component: "FCombobox",
  keyValue: "website", // \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430
  keyLabel: "name",
  // keyGroup: 'parentId', // \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0438
  keyFilter: "name",
  autofocus: true,
  multiple: true,
  label: "Your friends",
  description: "Choose friends your know",
  placeholder: "Choose friends",
  items: [],
  vtype: "array",
  rules: [
    {
      type: "required",
      params: ["This field is required"],
    },
    {
      type: "length",
      params: [1, "Languages cannot be less than 1 language"],
    },
  ],
};

export const Combobox: any = Default.bind({});
Combobox.args = {
  modelValue: [],
  field: schema,
  error: "",
  required: true,
};

// Simple data.

const Simple = (args: any) => ({
  components: {
    FCombobox,
    LFormFieldLabel,
    LFormFieldDescription,

    FError,
    LIcon,

    FText,
  },
  setup() {
    const field = ref(args.field);
    const selectModel = ref(args.modelValue);
    const error = ref(args.error);
    const required = ref(args.required);

    return {
      selectModel,
      field,
      error,
      required,

      iChevronDown,
      iCheck,
      iClose,
    };
  },
  template: \`
  <div class="py-16">
    <div class="max-w-lg mx-auto p-4 rounded-md bg-s-100 dark:bg-s-800 shadow-xl">
      <FCombobox
        v-model="selectModel"
        :field="field"
        :error="error"
        :required="required"
      >
        <template #selected-item="{ option }">
          <span class="p-1 font-medium">
            {{ option[field.keyLabel] }},
          </span>
        </template>
        <template #error="{ error }">
          <FError>
            {{ error }}
          </FError>
        </template>
        <template #description>
          <LFormFieldDescription :field="field">
            Description
          </LFormFieldDescription>
        </template>
        <template #label="{ onSetFocus, required }">
          <LFormFieldLabel
            v-if="field.label"
            :field="field"
            class="flex-none block font-medium mb-1"
            @onSetFocus="onSetFocus"
          >
            {{ field.label }}
            <span v-if="required" class="text-d-600 dark:text-d-400">*</span>
          </LFormFieldLabel>
        </template>
      </FCombobox>
      </div>
    </div>
  \`,
});

const schemaSimpleData = {
  autocomplete: "both",
  id: "friends",
  name: "friends",
  component: "FCombobox",
  // keyValue: "name", // \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430
  // keyLabel: "name",
  // keyGroup: 'parentId', // \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0438
  // keyFilter: "name",
  autofocus: true,
  multiple: true,
  label: "Your friends",
  description: "Choose friends your know",
  placeholder: "Choose friends",
  items: ["Hello", "World"],
  vtype: "array",
  rules: [
    {
      type: "required",
      params: ["This field is required"],
    },
    {
      type: "length",
      params: [1, "Languages cannot be less than 1 language"],
    },
  ],
};

export const ComboboxSimpleData: any = Simple.bind({});
ComboboxSimpleData.args = {
  modelValue: [],
  field: schemaSimpleData,
  error: "",
  required: true,
};
`,locationsMap:{combobox:{startLoc:{col:16,line:28},endLoc:{col:2,line:129},startBody:{col:16,line:28},endBody:{col:2,line:129}},"combobox-simple-data":{startLoc:{col:15,line:169},endLoc:{col:2,line:236},startBody:{col:15,line:169},endBody:{col:2,line:236}}}},vitest:{testFile:"FCombobox.spec.ts",testResults:M}}},E=r(e=>({components:{FCombobox:i,LFormFieldLabel:m,LFormFieldDescription:u,FError:p,LIcon:b,FText:c},setup(){const n=o(e.field),a=o(e.modelValue),s=o(e.error),l=o(e.required);return{selectModel:a,field:n,error:s,required:l,onLoadItems:r(async()=>{try{await fetch("https://jsonplaceholder.typicode.com/users").then(async t=>{const d=await t.json();if(!t.ok)throw d;return d}).then(t=>n.value.items=t)}catch(t){s.value=t}},"onLoadItems"),iChevronDown:f,iCheck:F,iClose:x,onInput:e.onInput,onChoose:e.onChoose}},template:`
  <div class="py-16">
    <div class="max-w-lg mx-auto p-4 rounded-md bg-s-100 dark:bg-s-800 shadow-xl">
      <FCombobox
        v-model="selectModel"
        :field="field"
        :error="error"
        :required="required"
        @on-load-items="onLoadItems"
        @on-input="(e) => onInput(e)"
        @on-choose="(e) => onChoose(e)"
      >
        <template #selected-option="{ option }">
          <span class="p-1 font-medium">
            {{ option[field.keyLabel] }},
          </span>
        </template>
        <template #error="{ error }">
          <FError>
            {{ error }}
          </FError>
        </template>
        <template #description>
          <LFormFieldDescription :field="field">
            Description
          </LFormFieldDescription>
        </template>
        <template #label="{ onSetFocus, required }">
          <LFormFieldLabel
            v-if="field.label"
            :field="field"
            class="flex-none block font-medium mb-1"
            @onSetFocus="onSetFocus"
          >
            {{ field.label }}
            <span v-if="required" class="text-d-600 dark:text-d-400">*</span>
          </LFormFieldLabel>
        </template>
      </FCombobox>
      </div>
    </div>
  `}),"Default"),_={autocomplete:"both",id:"friends",name:"friends",component:"FCombobox",keyValue:"website",keyLabel:"name",keyFilter:"name",autofocus:!0,multiple:!0,label:"Your friends",description:"Choose friends your know",placeholder:"Choose friends",items:[],vtype:"array",rules:[{type:"required",params:["This field is required"]},{type:"length",params:[1,"Languages cannot be less than 1 language"]}]},V=E.bind({});V.args={modelValue:[],field:_,error:"",required:!0};const N=r(e=>({components:{FCombobox:i,LFormFieldLabel:m,LFormFieldDescription:u,FError:p,LIcon:b,FText:c},setup(){const n=o(e.field),a=o(e.modelValue),s=o(e.error),l=o(e.required);return{selectModel:a,field:n,error:s,required:l,iChevronDown:f,iCheck:F,iClose:x}},template:`
  <div class="py-16">
    <div class="max-w-lg mx-auto p-4 rounded-md bg-s-100 dark:bg-s-800 shadow-xl">
      <FCombobox
        v-model="selectModel"
        :field="field"
        :error="error"
        :required="required"
      >
        <template #selected-item="{ option }">
          <span class="p-1 font-medium">
            {{ option[field.keyLabel] }},
          </span>
        </template>
        <template #error="{ error }">
          <FError>
            {{ error }}
          </FError>
        </template>
        <template #description>
          <LFormFieldDescription :field="field">
            Description
          </LFormFieldDescription>
        </template>
        <template #label="{ onSetFocus, required }">
          <LFormFieldLabel
            v-if="field.label"
            :field="field"
            class="flex-none block font-medium mb-1"
            @onSetFocus="onSetFocus"
          >
            {{ field.label }}
            <span v-if="required" class="text-d-600 dark:text-d-400">*</span>
          </LFormFieldLabel>
        </template>
      </FCombobox>
      </div>
    </div>
  `}),"Simple"),P={autocomplete:"both",id:"friends",name:"friends",component:"FCombobox",autofocus:!0,multiple:!0,label:"Your friends",description:"Choose friends your know",placeholder:"Choose friends",items:["Hello","World"],vtype:"array",rules:[{type:"required",params:["This field is required"]},{type:"length",params:[1,"Languages cannot be less than 1 language"]}]},R=N.bind({});R.args={modelValue:[],field:P,error:"",required:!0};const K=["Combobox","ComboboxSimpleData"];export{V as Combobox,R as ComboboxSimpleData,K as __namedExportsOrder,J as default};
//# sourceMappingURL=LCombobox.stories.02b6e373.js.map
