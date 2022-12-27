<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FCombobox",
  inheritAttrs: false,
});
</script>
<script lang="ts" setup>
import { computed, ref } from "vue";
import type { IField } from "@/components/LForm";

import {
  LCombobox,
  LComboboxInput,
  LComboboxButton,
  LComboboxOptions,
  LComboboxOption,
  type TComboboxModel,
} from "@/components/LCombobox";

import { iChevronDown, iCheck } from "@/stories/composable/useIcon";

import { LSpinner } from "@/components/LSpinner";
import { LIcon } from "@/components/LIcon";

const props = withDefaults(
  defineProps<{
    /**
     * modelValue - model string
     */
    modelValue: TComboboxModel;
    error?: string;
    /**
     * Schema for field.
     */
    field: IField;
    required?: boolean;
  }>(),
  {
    // modelValue: () => [],
  }
);

const emit = defineEmits(["update:modelValue", "on-input", "on-load-items"]);

const model = computed<TComboboxModel>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const empty = computed<boolean>(() => {
  let empty = true;
  switch (typeof model.value) {
    case "string":
      empty = model.value == "";
      break;
    case "number":
      empty = model.value == 0;
      break;
    default:
      if (Array.isArray(model.value)) {
        empty = model.value.length == 0;
      }
      break;
  }
  return empty;
});

const inputElement = ref<InstanceType<typeof LComboboxInput> | null>(null);

const onSetFocus = () => {
  const el = inputElement.value?.$el;
  if (el) el.focus();
};

const onReset = async () => {
  let newValue: TComboboxModel = 0;
  switch (typeof model.value) {
    case "string":
      newValue = "";
      break;
    default:
      newValue = [];
      break;
  }
  model.value = newValue;
  await emit("on-input");
  await onSetFocus();
};

const showList = ref(false);
</script>
<template>
  <slot
    name="label"
    :id="field.id"
    :required="required"
    :onSetFocus="onSetFocus"
  ></slot>
  <div
    class="flex items-center cursor-pointer"
    :class="[
      'rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 hover:ring-1  bg-white dark:bg-s-900',
      {
        'border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500 hover:ring-d-500':
          error,
      },
      showList ? '' : '',
      {
        'border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500 hover:ring-p-500 hover:border-p-500':
          !error,
      },
    ]"
  >
    <slot name="before"></slot>
    <LCombobox
      v-bind="$attrs"
      v-model="model"
      v-model:showList="showList"
      :field="field"
      :error="error"
      class="relative flex-auto"
      #default="{ isOpen, isBusy, isNone }"
      @on-load-items="$emit('on-load-items')"
      @on-input="$emit('on-input')"
    >
      <div
        :class="['outline-none flex space-x-2 items-center w-full transition']"
      >
        <div class="flex-auto flex flex-wrap m-1">
          <LComboboxButton
            v-if="isNone"
            ref="inputElement"
            autocomplete="off"
            class="w-full px-2 py-1 outline-none bg-transparent"
          >
            <div v-if="model">
              {{ model }}
            </div>
            <div v-else class="text-s-400">
              {{ field.placeholder }}
            </div>
          </LComboboxButton>
          <template v-else>
            <div
              v-if="typeof model == 'object' && field.multiple"
              class="flex flex-row flex-wrap"
            >
              <div
                v-for="(item, index) in model"
                :key="index"
                class="px-2 bg-s-300 dark:bg-s-700 rounded-md mr-1 mb-1"
              >
                {{ item }}
              </div>
            </div>
            <LComboboxInput
              ref="inputElement"
              autocomplete="off"
              class="w-full px-2 py-1 cursor-text outline-none bg-transparent placeholder-s-400"
            ></LComboboxInput>
          </template>
        </div>
        <div class="py-2 pr-2">
          <LSpinner v-if="isBusy" />
          <LIcon
            v-else
            :class="['transition-transform', { 'rotate-180': isOpen }]"
          >
            {{ iChevronDown }}
          </LIcon>
        </div>
        <div class="absolute right-8 top-0 h-full flex items-center">
          <slot name="after" :on-reset="onReset" :empty="empty"></slot>
        </div>
      </div>

      <div
        v-show="isOpen"
        class="z-10 mt-1.5 transition overflow-hidden shadow-2xl outline-none border border-s-200 dark:border-s-700 rounded-md absolute top-full left-0 right-0 bg-white dark:bg-s-800"
        :class="[
          isOpen ? 'block' : 'hidden',
          error ? '' : '',
          {
            'border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500':
              error,
          },
          showList ? '' : '',
          {
            'border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500':
              !error,
          },
        ]"
      >
        <LComboboxOptions
          #default="{ options, hasOptions }"
          class="max-h-64 b-scroll overflow-y-auto"
        >
          <template v-if="hasOptions">
            <LComboboxOption
              v-for="option of options"
              :key="field.keyValue ? option[field.keyValue] : option"
              :value="option"
              class="group relative overflow-hidden"
              #default="{ selected, hovered }"
            >
              <slot name="option" :option="option" :selected="selected">
                <div
                  v-ripple="{}"
                  :class="[
                    'flex p-2 items-center cursor-pointer focus:outline-none',
                    hovered
                      ? 'bg-p-200 dark:bg-p-800 text-black dark:text-white group-focus:bg-p-200 group-hover:bg-p-200 dark:group-hover:bg-p-800 dark:group-focus:bg-p-800'
                      : 'bg-transparent text-black dark:text-white group-focus:bg-p-100 group-hover:bg-p-100 dark:group-hover:bg-p-900 dark:group-focus:bg-p-900',
                  ]"
                >
                  <div :class="['flex items-center h-6 w-6 mr-2']">
                    <LIcon
                      v-if="selected"
                      :class="[
                        'text-xl',
                        {
                          'text-p-500 dark:text-p-500': selected,
                        },
                      ]"
                    >
                      {{ iCheck }}
                    </LIcon>
                  </div>
                  {{ field.keyLabel ? option[field.keyLabel] : option }}
                </div>
              </slot>
            </LComboboxOption>
          </template>
          <template v-else>
            <div class="p-2">None options</div>
          </template>
        </LComboboxOptions>
      </div>
    </LCombobox>
  </div>
  <slot name="error" :error="error"></slot>
  <slot name="description"></slot>
</template>
