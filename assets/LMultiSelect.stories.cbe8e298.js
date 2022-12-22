var x=Object.defineProperty;var l=(n,r)=>x(n,"name",{value:r,configurable:!0});import{r as t}from"./vue.esm-bundler.a08ba302.js";import{_ as c}from"./FMultiSelect.e6edf080.js";import{_ as m,a as p}from"./FText.b1066ef0.js";import{L as u,a as f}from"./LForm.e3c9163c.js";import{L as v}from"./LIcon.ca56402e.js";import{i as b,a as h,b as F,c as g}from"./useIcon.1f824c76.js";const T={parameters:{storySource:{source:`import { ref } from "vue";

import FMultiSelect from "@/components/ui/FMultiSelect.vue";
import FText from "@/components/ui/FText.vue";
import { LFormFieldLabel, LFormFieldDescription } from "@/components/LForm";
import { LIcon } from "@/components/LIcon";
import FError from "@/components/ui/FError.vue";

export default {
  title: "Components/FMultiSelect",
  component: FMultiSelect,
};

import {
  iChevronDown,
  iCheck,
  iClose,
  iFunnel,
} from "@/stories/composable/useIcon";

const schemaMultiSelect = {
  id: "friends",
  name: "friends",
  component: "FMultiSelect",
  keyValue: "id", // \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430
  keyLabel: "name",
  keyGroup: "username", // \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0438
  // keyFilter: "name",
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
    FMultiSelect,
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

    const onLoadItems = async (params) => {
      console.log("onLoadItems: ", params);

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
  <div class="py-16 bg-s-200 dark:bg-s-900">
    <div class="max-w-lg mx-auto p-4 rounded-md bg-white dark:bg-s-800 shadow-xl">
      <FMultiSelect
        :is="field.component"
        v-model="selectModel"
        :field="field"
        :error="error"
        :required="required"
        @on-load-items="onLoadItems"
      >
        <template #selected-item="{ removeOption, option }">
          <span class="p-1">
            {{ option[field.keyLabel] }},
          </span>
        </template>
        <template #options="{ option, selected, hovered }">
          <div class="cursor-pointer focus:outline-none focus:bg-black/10 hover:bg-black/10">
            <div
              :class="[
                'flex p-2 items-center ',
                selected ? 'text-black dark:text-white font-medium' : '',
              ]"
            >
              <div
                :class="[
                  'flex items-center border rounded-md h-6 w-6 mr-2',
                  selected
                    ? 'bg-p-600 border-p-600'
                    : 'border-s-300 dark:border-s-700',
                ]"
              >
                <LIcon
                  v-if="selected"
                  :class="[
                    'text-xl',
                    {
                      'text-white': selected,
                    },
                  ]"
                >
                  {{ iCheck }}
                </LIcon>
              </div>
              <div>
                {{ option[field.keyLabel] }}
                <div class="text-xs">
                    {{ option.description }}
                </div>
              </div>
            </div>
          </div>
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
      </FMultiSelect>
      </div>
    </div>
  \`,
});

export const InputMultiSelect: any = Default.bind({});
InputMultiSelect.args = {
  modelValue: [],
  field: schemaMultiSelect,
  error: "",
  required: true,
};

const fieldWithImage = {
  id: "friends",
  name: "friends",
  component: "FMultiSelect",
  keyValue: "id", // \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430
  keyLabel: "title",
  keyGroup: "category", // \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0438
  // keyFilter: "name",
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

const WithImages = (args: any) => ({
  components: {
    FMultiSelect,
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

    const onLoadItems = async (params) => {
      console.log("onLoadItems: ", params);

      /**
       * fetch items for options
       */
      try {
        await fetch(
          \`https://dummyjson.com/products\` // &_$client[_$populateParams][text]=\${params?.text}
        )
          .then(async (response) => {
            const result = await response.json();

            if (!response.ok) {
              throw result;
            }
            return result;
          })
          .then((json) => (field.value.items = json.products));
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
  <div class="py-16 bg-s-200 dark:bg-s-900">
    <div class="max-w-lg mx-auto p-4 rounded-md bg-white dark:bg-s-800 shadow-xl">
      <FMultiSelect
        :is="field.component"
        v-model="selectModel"
        :field="field"
        :error="error"
        :required="required"
        @on-load-items="onLoadItems"
      >
        <template #selected-item="{ removeOption, option }">
          <div class="py-1 px-2 bg-s-200 dark:bg-s-700 rounded-md mr-1 mb-1">
            {{ option[field.keyLabel] }}
          </div>
        </template>
        <template #option="{ option, selected, hovered }">
          <div
            v-ripple="{}"
            :class="[
              'flex p-2 items-center rounded-md text-black dark:text-white',
              hovered
                ? 'bg-p-100 dark:bg-p-800 group-hover:ring-2 group-hover:ring-offset-2 group-focus:ring-2 group-focus:ring-offset-2 ring-white dark:ring-s-800 ring-inset ring-offset-p-500'
                : '',
            ]"
          >
            <div
              :class="[
                'flex items-center border rounded-md h-6 w-6 mr-2',
                selected
                  ? 'border-transparent'
                  : 'border-s-200 dark:border-s-700',
              ]"
            >
              <LIcon
                v-if="selected"
                :class="[
                  'text-xl',
                  {
                    'text-p-500': selected,
                  },
                ]"
              >
                {{ iCheck }}
              </LIcon>
            </div>
            <div>
            <img
              :src="option.images[0]"
              class="mr-4 rounded-md h-10 w-10"
              alt=""
            />
            </div>
            <div class="w-full flex items-center">
              <div class="flex-auto">
                {{ option[field.keyLabel] }}
              </div>
              <div class="text-xs text-s-500 dark:text-s-400">
                  {{ option.brand }}
              </div>
            </div>
          </div>
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
      </FMultiSelect>
      </div>
    </div>
  \`,
});

export const InputwithImageMultiSelect: any = WithImages.bind({});
InputwithImageMultiSelect.args = {
  modelValue: [],
  field: fieldWithImage,
  error: "",
  required: true,
};
`,locationsMap:{"input-multi-select":{startLoc:{col:16,line:48},endLoc:{col:2,line:185},startBody:{col:16,line:48},endBody:{col:2,line:185}},"inputwith-image-multi-select":{startLoc:{col:19,line:222},endLoc:{col:2,line:369},startBody:{col:19,line:222},endBody:{col:2,line:369}}}}},title:"Components/FMultiSelect",component:c},k={id:"friends",name:"friends",component:"FMultiSelect",keyValue:"id",keyLabel:"name",keyGroup:"username",autofocus:!0,multiple:!0,label:"Your friends",description:"Choose friends your know",placeholder:"Choose friends",items:[],vtype:"array",rules:[{type:"required",params:["This field is required"]},{type:"length",params:[1,"Languages cannot be less than 1 language"]}]},y=l(n=>({components:{FMultiSelect:c,LFormFieldLabel:u,LFormFieldDescription:f,FError:m,LIcon:v,FText:p},setup(){const r=t(n.field),s=t(n.modelValue),o=t(n.error),d=t(n.required);return{selectModel:s,field:r,error:o,required:d,onLoadItems:l(async a=>{console.log("onLoadItems: ",a);try{await fetch("https://jsonplaceholder.typicode.com/users").then(async e=>{const i=await e.json();if(!e.ok)throw i;return i}).then(e=>r.value.items=e)}catch(e){o.value=e}},"onLoadItems"),iChevronDown:b,iCheck:h,iClose:F,iFunnel:g}},template:`
  <div class="py-16 bg-s-200 dark:bg-s-900">
    <div class="max-w-lg mx-auto p-4 rounded-md bg-white dark:bg-s-800 shadow-xl">
      <FMultiSelect
        :is="field.component"
        v-model="selectModel"
        :field="field"
        :error="error"
        :required="required"
        @on-load-items="onLoadItems"
      >
        <template #selected-item="{ removeOption, option }">
          <span class="p-1">
            {{ option[field.keyLabel] }},
          </span>
        </template>
        <template #options="{ option, selected, hovered }">
          <div class="cursor-pointer focus:outline-none focus:bg-black/10 hover:bg-black/10">
            <div
              :class="[
                'flex p-2 items-center ',
                selected ? 'text-black dark:text-white font-medium' : '',
              ]"
            >
              <div
                :class="[
                  'flex items-center border rounded-md h-6 w-6 mr-2',
                  selected
                    ? 'bg-p-600 border-p-600'
                    : 'border-s-300 dark:border-s-700',
                ]"
              >
                <LIcon
                  v-if="selected"
                  :class="[
                    'text-xl',
                    {
                      'text-white': selected,
                    },
                  ]"
                >
                  {{ iCheck }}
                </LIcon>
              </div>
              <div>
                {{ option[field.keyLabel] }}
                <div class="text-xs">
                    {{ option.description }}
                </div>
              </div>
            </div>
          </div>
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
      </FMultiSelect>
      </div>
    </div>
  `}),"Default"),w=y.bind({});w.args={modelValue:[],field:k,error:"",required:!0};const I={id:"friends",name:"friends",component:"FMultiSelect",keyValue:"id",keyLabel:"title",keyGroup:"category",autofocus:!0,multiple:!0,label:"Your friends",description:"Choose friends your know",placeholder:"Choose friends",items:[],vtype:"array",rules:[{type:"required",params:["This field is required"]},{type:"length",params:[1,"Languages cannot be less than 1 language"]}]},q=l(n=>({components:{FMultiSelect:c,LFormFieldLabel:u,LFormFieldDescription:f,FError:m,LIcon:v,FText:p},setup(){const r=t(n.field),s=t(n.modelValue),o=t(n.error),d=t(n.required);return{selectModel:s,field:r,error:o,required:d,onLoadItems:l(async a=>{console.log("onLoadItems: ",a);try{await fetch("https://dummyjson.com/products").then(async e=>{const i=await e.json();if(!e.ok)throw i;return i}).then(e=>r.value.items=e.products)}catch(e){o.value=e}},"onLoadItems"),iChevronDown:b,iCheck:h,iClose:F,iFunnel:g}},template:`
  <div class="py-16 bg-s-200 dark:bg-s-900">
    <div class="max-w-lg mx-auto p-4 rounded-md bg-white dark:bg-s-800 shadow-xl">
      <FMultiSelect
        :is="field.component"
        v-model="selectModel"
        :field="field"
        :error="error"
        :required="required"
        @on-load-items="onLoadItems"
      >
        <template #selected-item="{ removeOption, option }">
          <div class="py-1 px-2 bg-s-200 dark:bg-s-700 rounded-md mr-1 mb-1">
            {{ option[field.keyLabel] }}
          </div>
        </template>
        <template #option="{ option, selected, hovered }">
          <div
            v-ripple="{}"
            :class="[
              'flex p-2 items-center rounded-md text-black dark:text-white',
              hovered
                ? 'bg-p-100 dark:bg-p-800 group-hover:ring-2 group-hover:ring-offset-2 group-focus:ring-2 group-focus:ring-offset-2 ring-white dark:ring-s-800 ring-inset ring-offset-p-500'
                : '',
            ]"
          >
            <div
              :class="[
                'flex items-center border rounded-md h-6 w-6 mr-2',
                selected
                  ? 'border-transparent'
                  : 'border-s-200 dark:border-s-700',
              ]"
            >
              <LIcon
                v-if="selected"
                :class="[
                  'text-xl',
                  {
                    'text-p-500': selected,
                  },
                ]"
              >
                {{ iCheck }}
              </LIcon>
            </div>
            <div>
            <img
              :src="option.images[0]"
              class="mr-4 rounded-md h-10 w-10"
              alt=""
            />
            </div>
            <div class="w-full flex items-center">
              <div class="flex-auto">
                {{ option[field.keyLabel] }}
              </div>
              <div class="text-xs text-s-500 dark:text-s-400">
                  {{ option.brand }}
              </div>
            </div>
          </div>
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
      </FMultiSelect>
      </div>
    </div>
  `}),"WithImages"),M=q.bind({});M.args={modelValue:[],field:I,error:"",required:!0};const $=["InputMultiSelect","InputwithImageMultiSelect"];export{w as InputMultiSelect,M as InputwithImageMultiSelect,$ as __namedExportsOrder,T as default};
//# sourceMappingURL=LMultiSelect.stories.cbe8e298.js.map
