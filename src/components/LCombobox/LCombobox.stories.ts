import { ref } from "vue";

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
      onInput: args.onInput,
      onChoose: args.onChoose,
    };
  },
  template: `
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
  `,
});

const schema = {
  autocomplete: "both",
  id: "friends",
  name: "friends",
  component: "FCombobox",
  keyValue: "website", // ???????? ?????? ????????????????
  keyLabel: "name",
  // keyGroup: 'parentId', // ???????? ?????? ??????????????????????
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
  template: `
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
  `,
});

const schemaSimpleData = {
  autocomplete: "both",
  id: "friends",
  name: "friends",
  component: "FCombobox",
  // keyValue: "name", // ???????? ?????? ????????????????
  // keyLabel: "name",
  // keyGroup: 'parentId', // ???????? ?????? ??????????????????????
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
