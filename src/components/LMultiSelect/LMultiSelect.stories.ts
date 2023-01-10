import { ref } from "vue";

import FMultiSelect from "@/components/ui/FMultiSelect.vue";
import FText from "@/components/ui/FText.vue";
import { LFormFieldLabel, LFormFieldDescription } from "@/components/LForm";
import { LIcon } from "@/components/LIcon";
import FError from "@/components/ui/FError.vue";

export default {
  title: "Components/FMultiSelect",
  component: FMultiSelect,
};

import { iChevronDown, iCheck, iClose } from "@/stories/composable/useIcon";

const schemaMultiSelect = {
  id: "friends",
  name: "friends",
  component: "FMultiSelect",
  keyValue: "id", // ключ для свойства
  keyLabel: "name",
  keyGroup: "username", // ключ для группировки
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

    const onInput = (e) => {
      console.log("onInput", e);
    };
    const onChoose = (e) => {
      console.log("onChoose", e);
    };
    const onChooseGroup = (e) => {
      console.log("onChooseGroup", e);
    };

    return {
      selectModel,
      field,
      error,
      required,

      onLoadItems,
      onInput,
      onChoose,
      onChooseGroup,

      iChevronDown,
      iCheck,
      iClose,
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
        @on-input="onInput"
        @on-choose="onChoose"
        @on-choose-group="onChooseGroup"
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
  `,
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
  keyValue: "id", // ключ для свойства
  keyLabel: "title",
  keyGroup: "category", // ключ для группировки
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
      /**
       * fetch items for options
       */
      try {
        await fetch(
          `https://dummyjson.com/products` // &_$client[_$populateParams][text]=${params?.text}
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
  `,
});

export const InputwithImageMultiSelect: any = WithImages.bind({});
InputwithImageMultiSelect.args = {
  modelValue: [],
  field: fieldWithImage,
  error: "",
  required: true,
};
