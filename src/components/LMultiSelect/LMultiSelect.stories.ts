import { onMounted, ref } from "vue";

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
  keyValue: "id", // ключ для свойства
  keyLabel: "name",
  // keyGroup: 'parentId', // ключ для группировки
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
          `https://jsonplaceholder.typicode.com/users` // &_$client[_$populateParams][text]=${params?.text}
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
  template: `
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
          <span class="p-1 font-medium">
            {{ option[field.keyLabel] }},
          </span>
        </template>
        <template #option="{ option, selected }">
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
  `,
});

export const InputMultiSelect: any = Default.bind({});
InputMultiSelect.args = {
  modelValue: [],
  field: schemaMultiSelect,
  error: "",
  required: true,
};
// // InputMultiSelect.args = {
// //   text: 'Jest results in Storybook',
// // }
// // InputMultiSelect.parameters = {
// //   jest: 'LMultiSelect.test.js',
// // }

// const WithJSON = (args: any) => ({
//   components: {
//     LMultiSelect,
//     LMultiSelectButton,
//     LMultiSelectSearch,
//     LMultiSelectList,
//     LMultiSelectItem,
//     LMultiSelectOptions,
//     LMultiSelectGroup,
//     LMultiSelectOption,
//   },
//   setup() {
//     const schema = ref({
//       id: 'languages',
//       keyValue: 'name',
//       keyGroup: 'category',
//       component: 'LMultiSelect',
//       name: 'languages',
//       multiple: true,
//       label: 'Your languages',
//       description: 'Input languages your know',
//       placeholder: 'Choose language',
//       items: [],
//       vtype: 'array',
//       rules: [
//         {
//           type: 'required',
//           params: ['This field is required'],
//         },
//         {
//           type: 'length',
//           params: [1, 'Languages cannot be less than 1 language'],
//         },
//       ],
//     })
//     const selectModel = ref(['Adonis'])

//     const onLoadItems = async () => {
//       /**
//        * custom json for options
//        */
//       schema.value.items = [
//         {
//           language: 'Javascript',
//           name: 'Vue.js',
//           category: 'Front-end',
//         },
//         {
//           language: 'Javascript',
//           name: 'Adonis',
//           category: 'Backend',
//         },
//         {
//           language: 'Ruby',
//           name: 'Rails',
//           category: 'Backend',
//         },
//         {
//           language: 'Ruby',
//           name: 'Sinatra',
//           category: 'Backend',
//         },
//         {
//           language: 'Other',
//           name: 'Laravel',
//           category: 'Backend',
//         },
//         {
//           language: 'Other',
//           name: 'Phoenix',
//           category: 'Backend',
//         },
//       ]
//     }
//     onMounted(async () => {
//       await onLoadItems()
//     })

//     return {
//       selectModel,
//       schema,

//       onLoadItems,

//       iChevronDown,
//       iCheck,
//       iClose,
//     }
//   },
//   template: `
//   <div class="py-16 bg-s-200 dark:bg-black h-screen">
//     <div class="max-w-lg mx-auto p-4 rounded-md bg-white dark:bg-s-800 shadow-xl">
//       <LMultiSelect
//         v-model="selectModel"
//         :schema="schema"
//         class="relative"
//         #default="{ show, indexShiftFrom, indexShiftTo, focusOption }"
//         @on-load-items="onLoadItems"
//       >
//       Focus element index: {{focusOption}}<br>
//       Selected from = {{indexShiftFrom}} | to = {{indexShiftTo}}
//         <LMultiSelectButton
//           :class="[
//             'px-2 pt-2 flex items-center',
//             'cursor-text mt-1 rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 placeholder-s-400 dark:placeholder-s-400 bg-transparent',
//             'border-s-200 dark:border-s-700 focus-within:ring-su-500 dark:focus-within:ring-su-500 focus-within:border-su-500'
//           ]"
//         >
//           <div class="w-full flex items-center">
//             <LMultiSelectList
//               #default="{ selectedOptions, removeOption }"
//               class="flex-auto flex flex-wrap"
//             >
//               <LMultiSelectItem
//                 v-for="item in selectedOptions"
//                 class="overflow-hidden flex items-center rounded-md mr-2 mb-2 bg-su-600 text-white"
//               >
//                 <span class="px-2 py-1">
//                   {{ item.name }}
//                 </span>
//                 <div>
//                   <span class="btn btn-second p-1 rounded-md mr-1" @click.native.stop.prevent="removeOption(item)">
//                     <LIcon>
//                       {{iClose}}
//                     </LIcon>
//                   </span>
//                 </div>
//               </LMultiSelectItem>
//               <div v-if="!selectedOptions.length" class="mb-2 p-1 text-s-500">
//                 {{ schema.placeholder }}
//               </div>
//             </LMultiSelectList>
//             <div>
//               <LIcon
//                 :class="[
//                   'transition-transform',
//                   { ' rotate-180': show }
//                 ]"
//               >
//                 {{ iChevronDown }}
//               </LIcon>
//             </div>
//           </div>
//         </LMultiSelectButton>
//         <div
//           class="flex flex-col border border-s-200 dark:border-s-700 rounded-md mt-1 absolute top-full left-0 right-0 bg-white dark:bg-s-800"
//           :class="[show ? 'block' : 'hidden']"
//         >
//           <LMultiSelectSearch
//             class="border rounded-md m-2 p-2 outline-none bg-transparent"
//           />
//           <LMultiSelectOptions
//             class="overflow-hidden max-h-64 b-scroll overflow-y-auto"
//             #default="{ groups }"
//           >
//             <LMultiSelectGroup
//               v-for="(group, groupKey) in groups"
//               :group="groupKey"
//               #default="{ options, groupSelect, groupLength, groupSelectedOption }"
//             >
//               <div class="flex items-center p-2">
//                 <span class="flex-auto font-bold">
//                   {{ groupKey }}
//                 </span>
//                 <div class="text-xl">
//                   <LIcon v-if="groupSelect">
//                   M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z
//                   </LIcon>
//                   <LIcon v-else-if="groupSelectedOption > 0">
//                   M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z
//                   </LIcon>
//                   <LIcon v-else>
//                   M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z
//                   </LIcon>
//                 </div>
//               </div>
//               <LMultiSelectOption
//                 v-for="(option, optionKey) in options"
//                 :value="option"
//                 class="focus:outline-none focus:bg-su-600/70 hover:bg-su-600/70 text-su-900 dark:text-su-200 focus:text-white hover:text-white"
//                 #default="{ optionId, selected }"
//               >
//                 <div
//                   :class="['select-none flex p-2 items-center', { 'bg-su-600/40 ' : selected }]"
//                 >
//                   {{ option.name }}
//                 </div>
//               </LMultiSelectOption>
//             </LMultiSelectGroup>
//           </LMultiSelectOptions>
//         </div>
//       </LMultiSelect>
//       <pre>{{ selectModel }}</pre>
//       </div>
//     </div>
//   `,
// })

// export const InputMultiSelectWidthJSON: any = WithJSON.bind({})

// const WithoutButton = (args: any) => ({
//   components: {
//     LMultiSelect,
//     LMultiSelectButton,
//     LMultiSelectSearch,
//     LMultiSelectList,
//     LMultiSelectItem,
//     LMultiSelectOptions,
//     LMultiSelectGroup,
//     LMultiSelectOption,
//   },
//   setup() {
//     const schema = ref({
//       id: 'languages',
//       keyValue: 'name',
//       keyGroup: 'category',
//       component: 'LMultiSelect',
//       name: 'languages',
//       multiple: true,
//       label: 'Your languages',
//       description: 'Input languages your know',
//       placeholder: 'Choose language',
//       items: [],
//       vtype: 'array',
//       rules: [
//         {
//           type: 'required',
//           params: ['This field is required'],
//         },
//         {
//           type: 'length',
//           params: [1, 'Languages cannot be less than 1 language'],
//         },
//       ],
//     })
//     const selectModel = ref(['Adonis'])

//     const onLoadItems = async () => {
//       /**
//        * custom json for options
//        */
//       schema.value.items = [
//         {
//           language: 'Javascript',
//           name: 'Vue.js',
//           category: 'Front-end',
//         },
//         {
//           language: 'Javascript',
//           name: 'Adonis',
//           category: 'Backend',
//         },
//         {
//           language: 'Ruby',
//           name: 'Rails',
//           category: 'Backend',
//         },
//         {
//           language: 'Ruby',
//           name: 'Sinatra',
//           category: 'Backend',
//         },
//         {
//           language: 'Other',
//           name: 'Laravel',
//           category: 'Backend',
//         },
//         {
//           language: 'Other',
//           name: 'Phoenix',
//           category: 'Backend',
//         },
//       ]
//     }
//     onMounted(async () => {
//       await onLoadItems()
//     })

//     return {
//       selectModel,
//       schema,

//       onLoadItems,

//       iChevronDown,
//       iCheck,
//       iClose,
//     }
//   },
//   template: `
//   <div class="py-16 bg-s-200 dark:bg-black h-screen">
//     <div class="max-w-lg mx-auto p-4 rounded-md bg-white dark:bg-s-800 shadow-xl">
//       <LMultiSelect
//         v-model="selectModel"
//         :schema="schema"
//         class="relative"
//         #default="{ show, indexShiftFrom, indexShiftTo, focusOption }"
//         @on-load-items="onLoadItems"
//       >
//       Focus element index: {{focusOption}}<br>
//       Selected from = {{indexShiftFrom}} | to = {{indexShiftTo}}
//         <div
//           class="flex flex-col border border-s-200 dark:border-s-700 rounded-md bg-white dark:bg-s-800"
//         >
//           <LMultiSelectSearch
//             class="border rounded-md m-2 p-2 outline-none bg-transparent"
//           />
//           <LMultiSelectOptions
//             class="overflow-hidden max-h-64 b-scroll overflow-y-auto"
//             #default="{ groups }"
//           >
//             <LMultiSelectGroup
//               v-for="(group, groupKey) in groups"
//               :group="groupKey"
//               #default="{ options, groupSelect, groupLength, groupSelectedOption }"
//             >
//               <div class="flex items-center p-2">
//                 <span class="flex-auto font-bold">
//                   {{ groupKey }}
//                 </span>
//                 <div class="text-xl">
//                   <LIcon v-if="groupSelect">
//                   M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z
//                   </LIcon>
//                   <LIcon v-else-if="groupSelectedOption > 0">
//                   M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z
//                   </LIcon>
//                   <LIcon v-else>
//                   M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z
//                   </LIcon>
//                 </div>
//               </div>
//               <LMultiSelectOption
//                 v-for="(option, optionKey) in options"
//                 :value="option"
//                 class="focus:outline-none focus:bg-su-600/70 hover:bg-su-600/70 text-su-900 dark:text-su-200 focus:text-white hover:text-white"
//                 #default="{ optionId, selected }"
//               >
//                 <div
//                   :class="['select-none flex p-2 items-center', { 'bg-su-600/40 ' : selected }]"
//                 >
//                   {{ option.name }}
//                 </div>
//               </LMultiSelectOption>
//             </LMultiSelectGroup>
//           </LMultiSelectOptions>
//         </div>
//       </LMultiSelect>
//       <pre>{{ selectModel }}</pre>
//       </div>
//     </div>
//   `,
// })

// export const InputMultiSelectWithoutButton: any = WithoutButton.bind({})
