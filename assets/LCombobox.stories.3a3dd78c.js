var d=Object.defineProperty;var s=(e,t)=>d(e,"name",{value:t,configurable:!0});import{r as n}from"./vue.esm-bundler.e1ec89ec.js";import{_ as i}from"./FCombobox.82363358.js";import{_ as u,a as c}from"./FText.49f64919.js";import{L as p,a as b}from"./LForm.3f1bf389.js";import{L as f}from"./LIcon.64afb968.js";import{i as F,a as x,b as C,c as h}from"./useIcon.1f824c76.js";import"./LSpinner.a1ee4105.js";const y=4,L=4,T=0,v=0,g=10,w=10,k=0,q=0,D=0,M=1671565565920,S=!0,I=[{assertionResults:[{ancestorTitles:["","Combobox with autocomplete"],fullName:" Combobox with autocomplete should be render with default options",status:"passed",title:"should be render with default options",duration:45,failureMessages:[]},{ancestorTitles:["","Combobox with autocomplete"],fullName:" Combobox with autocomplete should be by press ArrowDown ",status:"passed",title:"should be by press ArrowDown ",duration:12,failureMessages:[]},{ancestorTitles:["","Combobox with autocomplete"],fullName:" Combobox with autocomplete LCombobox filter",status:"passed",title:"LCombobox filter",duration:7,failureMessages:[]},{ancestorTitles:["","FCombobox"],fullName:" FCombobox renders properly",status:"passed",title:"renders properly",duration:12,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y autocomplete none",status:"passed",title:"autocomplete none",duration:9,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y autocomplete both",status:"passed",title:"autocomplete both",duration:8,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y role=listbox",status:"passed",title:"role=listbox",duration:9,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y test aria-expanded",status:"passed",title:"test aria-expanded",duration:6,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y test aria-activedescendant(first)",status:"passed",title:"test aria-activedescendant(first)",duration:8,failureMessages:[]},{ancestorTitles:["","FCombobox a11y"],fullName:" FCombobox a11y test aria-activedescendant(last)",status:"passed",title:"test aria-activedescendant(last)",duration:8,failureMessages:[]}],startTime:1671565567390,endTime:1671565567514,status:"passed",message:"",name:"E:/vue3/ui/vueco/src/test/FCombobox.spec.ts"}],_={numTotalTestSuites:y,numPassedTestSuites:L,numFailedTestSuites:T,numPendingTestSuites:v,numTotalTests:g,numPassedTests:w,numFailedTests:k,numPendingTests:q,numTodoTests:D,startTime:M,success:S,testResults:I},z={title:"Components/FCombobox",component:i,parameters:{storySource:{source:`import { ref } from "vue";

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
`,locationsMap:{combobox:{startLoc:{col:16,line:57},endLoc:{col:2,line:155},startBody:{col:16,line:57},endBody:{col:2,line:155}}}},vitest:{testFile:"FCombobox.spec.ts",testResults:_}}},E={autocomplete:"both",id:"friends",name:"friends",component:"FCombobox",keyValue:"name",keyLabel:"name",keyFilter:"name",autofocus:!0,multiple:!0,label:"Your friends",description:"Choose friends your know",placeholder:"Choose friends",items:[],vtype:"array",rules:[{type:"required",params:["This field is required"]},{type:"length",params:[1,"Languages cannot be less than 1 language"]}]},N=s(e=>({components:{FCombobox:i,LFormFieldLabel:p,LFormFieldDescription:b,FError:u,LIcon:f,FText:c},setup(){const t=n(e.field),l=n(e.modelValue),r=n(e.error),m=n(e.required);return{selectModel:l,field:t,error:r,required:m,onLoadItems:s(async()=>{try{await fetch("https://jsonplaceholder.typicode.com/users").then(async o=>{const a=await o.json();if(!o.ok)throw a;return a}).then(o=>t.value.items=o)}catch(o){r.value=o}},"onLoadItems"),iChevronDown:F,iCheck:x,iClose:C,iFunnel:h}},template:`
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
  `}),"Default"),P=N.bind({});P.args={modelValue:[],field:E,error:"",required:!0};const H=["Combobox"];export{P as Combobox,H as __namedExportsOrder,z as default};
//# sourceMappingURL=LCombobox.stories.3a3dd78c.js.map
