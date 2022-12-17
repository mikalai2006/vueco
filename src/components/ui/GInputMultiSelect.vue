<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue";
import type { PropType } from "vue";
export default defineComponent({
  name: "GInputMultiSelect",
  inheritAttrs: false,
});
</script>
<script lang="ts" setup>
import { IField } from "@/components/LForm/LForm";
import {
  LMultiSelect,
  LMultiSelectButton,
  LMultiSelectSearch,
  LMultiSelectList,
  LMultiSelectItem,
  LMultiSelectGroup,
  LMultiSelectOptions,
  LMultiSelectOption,
} from "@/components/LMultiSelect";

import { iChevronDown, iCheck } from "@/stories/composable/useIcon";

const props = withDefaults(
  defineProps<{
    modelValue: [] | number | string;
    error?: string;
    autofocus?: boolean;
    schema: any; //IField
  }>(),
  {
    modelValue: () => [],
    schema: {},
  }
);

const emit = defineEmits(["update:modelValue", "on-input"]);

// props: {
//   modelValue: {
//     type: [Array, Number, String],
//     required: true,
//     default: () => {
//       return []
//     },
//   },
//   schema: {
//     type: Object as PropType<IField>,
//     required: true,
//     default: () => {
//       return {}
//     },
//   },
//   autofocus: {
//     type: Boolean,
//     default: false,
//   },
//   error: {
//     type: String,
//     default: '',
//   },
// },
// emits: ['update:modelValue', 'on-input'],
// components: {
//   LMultiSelect,
//   LMultiSelectButton,
//   LMultiSelectSearch,
//   LMultiSelectList,
//   LMultiSelectItem,
//   LMultiSelectOptions,
//   LMultiSelectOption,
// },
// setup(props, { emit, expose }) {
const selectModel = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
    console.log("set value", value);
  },
});
const schemaField = ref(props.schema);
const onLoadItems = async () => {
  await fetch("https://jsonplaceholder.typicode.com/users?&_limit=50")
    .then((response) => response.json())
    .then((json) => {
      if (!schemaField.value.items.length) {
        schemaField.value.items = json;
      }
    });
};
onMounted(async () => {
  await onLoadItems();
});

const inputElement = ref(null);
defineExpose({
  inputElement,
});
</script>
<template>
  <slot name="label" :inputElement="inputElement"></slot>
  <div
    class="flex items-center"
    :class="[
      'rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 placeholder-s-400 dark:placeholder-s-400 bg-transparent',
      {
        'border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500':
          error,
      },
      {
        'border-s-200 dark:border-s-700 focus-within:ring-p-500 focus-within:border-p-500':
          !error,
      },
    ]"
  >
    <slot name="before"></slot>
    <LMultiSelect
      :ref="(el) => (inputElement = el)"
      v-bind="$attrs"
      v-model="selectModel"
      :schema="schemaField"
      class="relative px-4 pt-1 flex-auto"
      #default="{ show, loading, disabled }"
      @on-load-items="onLoadItems"
      @on-input="$emit('on-input')"
    >
      <LMultiSelectButton
        :class="[
          'outline-none flex items-center mt-1 cursor-text w-full transition',
        ]"
      >
        <div class="w-full flex items-center">
          <LMultiSelectList
            #default="{ selectedOptions, removeOption }"
            class="flex-auto flex flex-wrap"
          >
            <LMultiSelectItem
              v-for="item in selectedOptions"
              :key="item.id"
              class="overflow-hidden flex items-center rounded-md mr-2 mb-2 bg-s-200 dark:bg-s-600 text-black dark:text-white"
            >
              <slot
                name="selected-item"
                :item="item"
                :removeOption="removeOption"
              >
                <img
                  :src="'https://picsum.photos/id/' + item.id + '/200/300'"
                  class="mr-2 rounded-l-md h-8 w-8"
                  alt=""
                />
                <span class="block flex-auto px-2 py-1">
                  {{ item[schema.keyLabel] }}
                </span>
                <span
                  :aria-hidden="true"
                  class="btn btn-second rounded-md text-xs py-1 px-2 mr-1"
                  @click.stop="removeOption(item)"
                >
                  X
                </span>
              </slot>
            </LMultiSelectItem>
            <div v-if="!selectedOptions.length" class="mb-2 p-1 text-s-500">
              {{ schemaField.placeholder }}
            </div>
          </LMultiSelectList>
          <div>
            <LIcon :class="['transition-transform', { ' rotate-180': show }]">
              {{ iChevronDown }}
            </LIcon>
          </div>
        </div>
      </LMultiSelectButton>
      <div
        class="transition shadow-2xl overflow-hidden outline-none border border-s-200 focus:ring-1 focus-within:ring-1 dark:border-s-700 focus:ring-p-500 focus-within:ring-p-500 rounded-md max-h-64 b-scroll overflow-y-auto absolute z-1 top-full left-0 right-0 bg-white dark:bg-s-800"
        :class="[show ? 'block' : 'hidden', error ? 'mt-8' : 'mt-2']"
      >
        <div
          class="bg-white dark:bg-s-800 border-b border-s-200 dark:border-s-700"
        >
          <LMultiSelectSearch class="ml-4 p-2 outline-none bg-transparent" />
        </div>
        <div>
          <LMultiSelectOptions #default="{ groups }">
            <LMultiSelectGroup
              v-for="group in groups"
              :group="group.key"
              #default="{ options }"
            >
              <div v-if="group.key !== 'default'">
                {{ group.key }}
              </div>
              <LMultiSelectOption
                v-for="option in options"
                :value="option"
                class="cursor-pointer focus:outline-none focus:bg-black/10 hover:bg-black/10"
                #default="{ value, selected }"
              >
                <slot name="option" :option="option" :selected="selected">
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

                    <img
                      :src="
                        'https://picsum.photos/id/' + option.id + '/200/300'
                      "
                      class="mr-2 rounded-full h-6 w-6"
                      alt=""
                    />
                    {{ option[schemaField.keyLabel] }}
                  </div>
                </slot>
              </LMultiSelectOption>
            </LMultiSelectGroup>
          </LMultiSelectOptions>
        </div>
      </div>
    </LMultiSelect>
    <slot name="after"></slot>
  </div>
  <slot name="error"></slot>
  <slot name="description"></slot>
</template>
