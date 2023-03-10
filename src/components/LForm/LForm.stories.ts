import { computed, onMounted, ref } from "vue";
import {
  LForm,
  LFormField,
  LFormFieldLabel,
  LFormFieldDescription,
} from "@/components/LForm";

import FError from "@/components/ui/FError.vue";

import FText from "@/components/ui/FText.vue";
import FTextarea from "@/components/ui/FTextarea.vue";
import FCheckbox from "@/components/ui/FCheckbox.vue";
import FNumber from "@/components/ui/FNumber.vue";
import FMultiSelect from "@/components/ui/FMultiSelect.vue";
import FCombobox from "@/components/ui/FCombobox.vue";

import FButton from "@/components/ui/FButton.vue";

import LIcon from "@/components/LIcon";
import FSpinner from "@/components/ui/FSpinner.vue";

import { useValidate } from "@/composable/useValidate";

// import { mdiCommentText, mdiAlertCircle, mdiClose } from '@mdi/js'

const iChat =
  "M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z";
const iClose =
  "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z";

const formData = [
  {
    id: "name",
    name: "name",
    group: "default",
    component: "FText",
    label: "First name",
    description: "Input your first name",
    placeholder: "Mikalai",
    after: iClose,
    type: "text",
    vtype: "string",
    rules: [
      {
        type: "required",
        params: ["This field is required"],
      },
      {
        type: "min",
        params: [3, "Name cannot be less than 3 characters"],
      },
      {
        type: "max",
        params: [10, "Name cannot be more than 10 characters"],
      },
    ],
  },
  {
    autocomplete: "both",
    id: "group",
    name: "group",
    keyValue: "id",
    keyLabel: "id",
    keyFilter: "title",
    // keyGroup: "group",
    // group: "custom info",
    // autofocus: true,
    // multiple: true,
    after: true,
    component: "FCombobox",
    label: "Your group",
    description: "Choose group your know",
    placeholder: "Choose group",
    items: [
      { id: "one", group: "group1", title: "one item" },
      { id: "two", group: "group2", title: "two item" },
      { id: "three", group: "group1", title: "three item" },
    ],
    vtype: "string",
    rules: [
      {
        type: "required",
        params: [],
      },
    ],
  },
  {
    id: "categories",
    name: "categories",
    autocomplete: "both",
    after: true,
    keyValue: "title",
    keyLabel: "title",
    keyFilter: "title",
    component: "FCombobox",
    label: "Your categories",
    description: "Input category your know",
    placeholder: "Choose categories",
    multiple: true,
    items: [
      {
        _id: "622c83fa6fdefe5e9ccd08b2",
        parentId: null,
        seo: "dress",
        sort_order: 0,
        status: true,
        title: "????????????",
        description: "???????????? ???????????? ????????????",
        createdAt: "2022-03-12T11:28:58.263Z",
        updatedAt: "2022-03-12T17:42:51.377Z",
        __v: 0,
      },
      {
        _id: "622c841e6fdefe5e9ccd08b5",
        parentId: null,
        seo: "decorations",
        sort_order: 0,
        status: true,
        title: "??????????????????",
        description: "?????????????????? ???? ?????????? ????????????",
        createdAt: "2022-03-12T11:29:34.330Z",
        updatedAt: "2022-03-12T15:01:49.046Z",
        __v: 0,
      },
      {
        _id: "622c9dbd7db0e401b1d32fdf",
        parentId: null,
        title: "??????????????",
        description: "?????????????? ?? ???????????? ?????????????? ?????? ??????????????????????",
        seo: "toys",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-12T13:18:53.144Z",
        updatedAt: "2022-03-12T16:12:37.210Z",
        __v: 0,
      },
      {
        _id: "622ef1997e21dcd30f55b4a1",
        parentId: "622ef1997e21dcd30f55b4a1",
        title: "???????????? ?????? ????????????",
        description: "???????????? ?????? ????????????",
        seo: "for-man",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-14T07:41:13.633Z",
        updatedAt: "2022-03-14T10:03:38.525Z",
        __v: 0,
      },
      {
        _id: "622f11997e21dcd30f55be8a",
        parentId: "622c9dbd7db0e401b1d32fdf",
        title: "?????????????? ???? ??????????????????",
        description: "?????????????? ???? ??????????????????",
        seo: "games-of-wood",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-14T09:57:45.987Z",
        updatedAt: "2022-03-14T10:01:28.605Z",
        __v: 0,
      },
      {
        _id: "622f11cb7e21dcd30f55be8d",
        parentId: "622c841e6fdefe5e9ccd08b5",
        title: "?????????????????? ???? ??????????????????",
        description: "?????????????????? ???? ?????????????????????? ??????????????????",
        seo: "jewelry-wood",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-14T09:58:35.669Z",
        updatedAt: "2022-03-14T10:01:51.436Z",
        __v: 0,
      },
      {
        _id: "622f12047e21dcd30f55be90",
        parentId: null,
        title: "?????? ?? ????????",
        description: "?????????????? ???????????? ???????????? ?????? ???????? ?? ????????",
        seo: "house-and-cottage",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-14T09:59:32.868Z",
        updatedAt: "2022-03-14T09:59:32.868Z",
        __v: 0,
      },
      {
        _id: "622f122b7e21dcd30f55be93",
        parentId: "622f12047e21dcd30f55be90",
        title: "???????????????? ????????????????????????????",
        description: "???????????????? ???????????????????????????? ???????????? ????????????",
        seo: "kitchen-utensils",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-14T10:00:11.664Z",
        updatedAt: "2022-03-14T10:03:23.265Z",
        __v: 0,
      },
    ],
    vtype: "array",
    rules: [
      {
        type: "required",
        params: [],
      },
      {
        type: "min",
        params: [1, "Friends cannot be less than 1"],
      },
      {
        type: "max",
        params: [5, "Friends cannot be more than 5"],
      },
    ],
  },
  {
    id: "groups",
    name: "groups",
    keyValue: "id",
    keyLabel: "id",
    keyFilter: "title",
    keyGroup: "group",
    group: "custom info",
    autofocus: true,
    multiple: true,
    after: true,
    component: "FMultiSelect",
    label: "Your groups",
    description: "Input groups your know",
    placeholder: "Choose groups",
    items: [
      { id: "one", group: "odd", title: "One item" },
      { id: "two", group: "even", title: "two item" },
      { id: "four", group: "even", title: "Four item" },
      { id: "five", group: "odd", title: "Five item" },
      { id: "six", group: "even", title: "Six item" },
      { id: "seven", group: "odd", title: "Seven item" },
      { id: "three", group: "odd", title: "three item" },
    ],
    vtype: "array",
    rules: [
      {
        type: "required",
        params: [],
      },
    ],
  },
  {
    id: "friend",
    name: "friend",
    // keyValue: "name",
    // keyLabel: "name",
    // group: "custom info",
    autofocus: true,
    component: "FMultiSelect",
    label: "Your friend",
    description: "Input friend your know",
    placeholder: "Choose friend",
    items: ["one", "two", "three"],
    vtype: "string",
    rules: [
      {
        type: "required",
        params: [],
      },
    ],
  },
  {
    id: "languages",
    name: "languages",
    // groupkey: 'name',
    keyValue: "_id",
    keyLabel: "title",
    group: "custom info",
    component: "GInputMultiSelectNested",
    label: "Your languages",
    description: "Input languages your know",
    placeholder: "Choose language",
    items: [],
    multiple: true,
    vtype: "array",
    rules: [
      {
        type: "required",
        params: ["This field is required"],
      },
      {
        type: "min",
        params: [1, "Languages cannot be less than 1 language"],
      },
      {
        type: "max",
        params: [5, "Languages cannot be more than 5 language"],
      },
    ],
  },
  {
    id: "about",
    name: "about",
    group: "???????????????????????????????? ????????????????????",
    component: "FTextarea",
    label: "About",
    description: "Brief description for your profile. URLs are hyperlinked.",
    placeholder: "About me",
    vtype: "string",
    rules: [
      {
        type: "required",
        params: ["This field is required"],
      },
      {
        type: "min",
        params: [3, "About cannot be less than 3 characters"],
      },
      {
        type: "max",
        params: [10, "About cannot be more than 10 characters"],
      },
    ],
  },
  {
    id: "age",
    name: "age",
    group: "???????????????????????????????? ????????????????????",
    component: "FNumber",
    label: "Age",
    placeholder: "Enter age",
    type: "number",
    vtype: "number",
    rules: [
      {
        type: "required",
        params: ["This field is required"],
      },
      {
        type: "min",
        params: [10, "Age cannot be less than 5"],
      },
      {
        type: "max",
        params: [60, "Age cannot be more than 60 "],
      },
    ],
  },
  {
    id: "comments",
    name: "comments",
    group: "???????????????????????????????? ????????????????????",
    component: "FCheckbox",
    description: "Get notified when someones posts a comment on a posting.",
    label: "Comments",
    type: "checkbox",
    vtype: "boolean",
    rules: [
      {
        type: "isTrue",
        params: ["This field boolean is required"],
      },
    ],
  },
  {
    id: "accept",
    name: "accept",
    group: "???????????????????????????????? ????????????????????",
    component: "FCheckbox",
    description: "Description for accept field",
    label: "Accept",
    type: "checkbox",
    vtype: "boolean",
    rules: [
      {
        type: "isTrue",
        params: ["This field boolean is required"],
      },
    ],
  },
];

export default {
  title: "Components/Form",
  component: LForm,
};

export const Default = () => ({
  components: {
    LForm,
    LFormField,
    LFormFieldLabel,
    LFormFieldDescription,
    LIcon,
    FSpinner,

    FError,
    FText,
    FTextarea,
    FCheckbox,
    FNumber,
    FMultiSelect,
    FCombobox,

    FButton,
  },
  setup() {
    const forms = ref({
      email: "",
      name: "Name",
      languages: ["Karianne"],
      friend: "Nicholas Runolfsdottir V",
      male: false,
      accept: false,
      comments: true,
    });

    const { errors, onValidate, onCreateSchema, onFormValidate } =
      useValidate();

    const onSaveForm = async () => {
      await onFormValidate(forms.value);

      if (isValidForm.value) {
        console.group("Save form");
        console.log(forms.value);
        console.groupEnd();
      }
    };

    onMounted(async () => {
      // create schema validate
      await onCreateSchema(formData);

      // await onFormValidate(forms.value)
    });

    const isValidForm = computed(() => Object.keys(errors.value).length === 0);

    const onInput = async (field: any) => {
      await onValidate(field.name, forms.value);
      // console.log("Hook after validate field ", field.name, forms.value);
    };

    return {
      errors,
      forms,
      formData,

      onSaveForm,
      onInput,

      iClose,
      iChat,
    };
  },
  template: `
  <div class="py-16 bg-s-200 dark:bg-s-900">
      <LForm
        v-model="forms"
        :schema="formData"
        :errors="errors"
        class="max-w-lg mx-auto p-6 rounded-md bg-white dark:bg-s-800 shadow-xl"
        #default="{ form }"
      >
        <LFormField
          v-for="field in formData"
          :key="field.name"
          :field="field"
          class="mb-6"
          #default="{ errorField, required }"
        >
            <component
              :is="field.component"
              v-model="forms[field.name]"
              :field="field"
              :error="errors[field.name]"
              @onInput="onInput(field)"
            >
              <template #label="{ onSetFocus }">
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

              <template #description>
                <LFormFieldDescription
                  v-if="field.description"
                  :field="field"
                  class="mt-2 text-sm leading-none text-s-600 dark:text-s-400"
                >
                  {{ field.description }}
                </LFormFieldDescription>
              </template>

              <template v-if="field.after" #after="{onReset, empty}">
                <FButton
                  v-if="!empty"
                  mode="danger"
                  aria-label="reset"
                  class="px-2 mr-1"
                  @click="onReset"
                >
                  <LIcon>
                    {{ iClose }}
                  </LIcon>
                </FButton>
              </template>

              <template #error>
                <FError
                  v-if="errorField && errorField != ''"
                  :error="errorField"
                />
              </template>

            </component>

          </LFormField>
          <FButton @click="onSaveForm" fill mode="primary" ringed :disabled="Object.keys(errors).length > 0">
            <div class="flex">
              <LIcon>
                {{iChat}}
              </LIcon>
              <span class="pl-2" >onSave</span>
            </div>
          </FButton>
        </LForm>
    </div>
  `,
});
// !forms[field.name] ? 'px-4' : 'pl-4 pr-12'

// <div v-if="forms[field.name]" class="absolute right-1 top-2">
// <FButton
//   :mode="errorField ? 'danger' : 'second'"
//   ringed
//   class="text-lg leading-3 px-2"
//   @click="onReset"
// >
//   <LIcon>
//     {{ iClose }}
//   </LIcon>
// </FButton>
// </div>
