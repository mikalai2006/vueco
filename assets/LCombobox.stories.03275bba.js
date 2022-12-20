var d=Object.defineProperty;var s=(e,t)=>d(e,"name",{value:t,configurable:!0});import{r as n}from"./vue.esm-bundler.d6e8a8ce.js";import{_ as i}from"./FCombobox.0e06f52d.js";import{_ as u,a as c}from"./FText.23a6b47a.js";import{L as p,a as b}from"./LForm.f2b6a216.js";import{L as f}from"./LIcon.b157f1df.js";import{i as F,a as x,b as C,c as h}from"./useIcon.1f824c76.js";import"./LSpinner.c9659ed3.js";const y=4,L=4,T=0,v=0,g=10,w=5,q=5,k=0,S=0,M=1671493907043,D=!1,I=[{assertionResults:[{ancestorTitles:["","Combobox with autocomplete"],fullName:" Combobox with autocomplete should be render with default options",status:"passed",title:"should be render with default options",duration:54,failureMessages:[]},{ancestorTitles:["","Combobox with autocomplete"],fullName:" Combobox with autocomplete LCombobox input render",status:"passed",title:"LCombobox input render",duration:14,failureMessages:[]},{ancestorTitles:["","Combobox with autocomplete"],fullName:" Combobox with autocomplete LCombobox filter",status:"passed",title:"LCombobox filter",duration:8,failureMessages:[]},{ancestorTitles:["","FCombobox"],fullName:" FCombobox renders properly",status:"failed",title:"renders properly",duration:17,failureMessages:["Snapshot `FCombobox > renders properly 1` mismatched"],location:{line:128,column:27}},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y autocomplete none",status:"failed",title:"autocomplete none",duration:13,failureMessages:["Snapshot `FCombobox a11y > autocomplete none 1` mismatched"],location:{line:143,column:27}},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y autocomplete both",status:"failed",title:"autocomplete both",duration:11,failureMessages:["Snapshot `FCombobox a11y > autocomplete both 1` mismatched"],location:{line:155,column:27}},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y role=listbox",status:"failed",title:"role=listbox",duration:9,failureMessages:["Snapshot `FCombobox a11y > role=listbox 1` mismatched"],location:{line:166,column:27}},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y test aria-expanded",status:"passed",title:"test aria-expanded",duration:7,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y test aria-activedescendant(first)",status:"passed",title:"test aria-activedescendant(first)",duration:10,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y test aria-activedescendant(last)",status:"failed",title:"test aria-activedescendant(last)",duration:11,failureMessages:["Snapshot `FCombobox a11y > test aria-activedescendant(last) 1` mismatched"],location:{line:206,column:27}}],startTime:1671497609270,endTime:1671497609424,status:"failed",message:"",name:"E:/vue3/ui/vueco/src/test/FCombobox.spec.ts"}],_={numTotalTestSuites:y,numPassedTestSuites:L,numFailedTestSuites:T,numPendingTestSuites:v,numTotalTests:g,numPassedTests:w,numFailedTests:q,numPendingTests:k,numTodoTests:S,startTime:M,success:D,testResults:I},A={title:"Components/FCombobox",component:i,parameters:{storySource:{source:`import { ref } from "vue";

import vitestResults from "@/unit-test-results.json";

import FCombobox from "@/components/ui/FCombobox.vue";
import FText from "@/components/ui/FText.vue";
import { LFormFieldLabel, LFormFieldDescription } from "@/components/LForm";
import { LIcon } from "@/components/LIcon";
import FError from "@/components/ui/FError.vue";

export default {
  title: "Components/FCombobox",
  component: FCombobox,
  parameters: {
    vitest: {
      testFile: "FCombobox.spec.ts",
      testResults: vitestResults,
    },
  },
};

import {
  iChevronDown,
  iCheck,
  iClose,
  iFunnel,
} from "@/stories/composable/useIcon";

const schema = {
  autocomplete: "both",
  id: "friends",
  name: "friends",
  component: "FCombobox",
  keyValue: "name", // \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430
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
      iFunnel,
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
      >
        <template #selected-item="{ removeOption, option }">
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
            :required="required"
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

export const Combobox: any = Default.bind({});
Combobox.args = {
  modelValue: [],
  field: schema,
  error: "",
  required: true,
};
`,locationsMap:{combobox:{startLoc:{col:16,line:57},endLoc:{col:2,line:156},startBody:{col:16,line:57},endBody:{col:2,line:156}}}},vitest:{testFile:"FCombobox.spec.ts",testResults:_}}},E={autocomplete:"both",id:"friends",name:"friends",component:"FCombobox",keyValue:"name",keyLabel:"name",keyFilter:"name",autofocus:!0,multiple:!0,label:"Your friends",description:"Choose friends your know",placeholder:"Choose friends",items:[],vtype:"array",rules:[{type:"required",params:["This field is required"]},{type:"length",params:[1,"Languages cannot be less than 1 language"]}]},N=s(e=>({components:{FCombobox:i,LFormFieldLabel:p,LFormFieldDescription:b,FError:u,LIcon:f,FText:c},setup(){const t=n(e.field),l=n(e.modelValue),a=n(e.error),m=n(e.required);return{selectModel:l,field:t,error:a,required:m,onLoadItems:s(async()=>{try{await fetch("https://jsonplaceholder.typicode.com/users").then(async o=>{const r=await o.json();if(!o.ok)throw r;return r}).then(o=>t.value.items=o)}catch(o){a.value=o}},"onLoadItems"),iChevronDown:F,iCheck:x,iClose:C,iFunnel:h}},template:`
  <div class="py-16">
    <div class="max-w-lg mx-auto p-4 rounded-md bg-s-100 dark:bg-s-800 shadow-xl">
      <FCombobox
        v-model="selectModel"
        :field="field"
        :error="error"
        :required="required"
        @on-load-items="onLoadItems"
      >
        <template #selected-item="{ removeOption, option }">
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
            :required="required"
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
  `}),"Default"),P=N.bind({});P.args={modelValue:[],field:E,error:"",required:!0};const H=["Combobox"];export{P as Combobox,H as __namedExportsOrder,A as default};
//# sourceMappingURL=LCombobox.stories.03275bba.js.map
