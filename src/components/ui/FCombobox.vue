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
import type { ISelectModel } from "@/components/LMultiSelect";

import {
  LCombobox,
  LComboboxInput,
  LComboboxOptions,
  LComboboxOption,
  // LComboboxOptionsGroup,
} from "@/components/LCombobox";

import { iChevronDown, iCheck, iClose } from "@/stories/composable/useIcon";

import { LSpinner } from "@/components/LSpinner";
import { LIcon } from "@/components/LIcon";

const props = withDefaults(
  defineProps<{
    /**
     * modelValue - model string
     */
    modelValue: ISelectModel;
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

const model = computed<ISelectModel>({
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
  let newValue: ISelectModel = 0;
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
  {{ model }}
  <slot
    name="label"
    :id="field.id"
    :required="required"
    :onSetFocus="onSetFocus"
  ></slot>
  <div
    class="flex items-center"
    :class="[
      'rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 placeholder-s-400 dark:placeholder-s-400 bg-transparent',
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
    <slot name="before"></slot>
    <LCombobox
      v-bind="$attrs"
      v-model="model"
      v-model:showList="showList"
      :field="field"
      :error="error"
      class="relative flex-auto"
      #default="{ combobox, isOpen, isBusy }"
      @on-load-items="$emit('on-load-items')"
      @on-input="$emit('on-input')"
    >
      <div
        :class="['outline-none flex space-x-2 items-center w-full transition']"
      >
        <div class="flex-auto flex flex-wrap m-1">
          <!-- <LMultiSelectList
            v-for="option in selectedOptions"
            :key="option.name"
            #default="{ removeOption }"
          >
            <slot
              name="selected-item"
              :option="option"
              :removeOption="removeOption"
            >
              <div
                class="m-0.5 rounded-md py-1 leading-5 bg-s-200 dark:bg-s-600 flex items-center"
              >
                <span class="block flex-auto px-1">
                  {{ field.keyLabel ? option[field.keyLabel] : option }}
                </span>
              </div>
            </slot>
          </LMultiSelectList> -->
          <LComboboxInput
            ref="inputElement"
            autocomplete="off"
            class="w-full px-2 py-1 cursor-text outline-none bg-transparent"
          ></LComboboxInput>
          <!-- <LMultiSelectSearch
            v-if="
              field.keyFilter &&
              ((!selectedOptions.length && !field.multiple) || field.multiple)
            "
            class="px-2 py-1 cursor-text outline-none bg-transparent"
          >
          </LMultiSelectSearch> -->
          <!-- <div
            v-if="!selectedOptions.length"
            class="p-1 text-s-500 dark:text-s-400"
          >
            {{ field.placeholder }}
          </div> -->
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
      </div>

      <div
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
        <LComboboxOptions #default="{ options }">
          <!-- <LComboboxOptionsGroup
            v-for="group in groups"
            :key="group.key"
            :group="group.key"
            #default="{ options }"
          > -->
          <!-- <div v-if="group.key !== 'default'">
              {{ group.key }}
            </div> -->
          <LComboboxOption
            v-for="(option, index) of options"
            :key="option[field.keyValue] || option"
            :value="option"
            class="group relative overflow-hidden"
            #default="{ selected, hovered }"
          >
            <slot name="option" :option="option" :selected="selected">
              <div
                v-ripple="{}"
                :class="[
                  'flex p-2 items-center cursor-pointer focus:outline-none',
                  selected
                    ? hovered
                      ? 'bg-p-200 dark:bg-p-800 '
                      : 'bg-p-100 dark:bg-p-900 ' +
                        ' text-black dark:text-white group-focus:bg-p-200 group-hover:bg-p-200 dark:group-hover:bg-p-800 dark:group-focus:bg-p-800'
                    : hovered
                    ? 'bg-s-100  dark:bg-s-900 '
                    : 'bg-transparent' +
                      ' text-black dark:text-white group-focus:bg-s-100 group-hover:bg-s-100 dark:group-hover:bg-s-900 dark:group-focus:bg-s-900',
                ]"
              >
                <div
                  :class="[
                    'flex items-center border rounded-md h-6 w-6 mr-2',
                    selected || hovered
                      ? 'border-transparent'
                      : 'border-s-200 dark:border-s-700',
                  ]"
                >
                  <LIcon
                    v-if="selected"
                    :class="[
                      'text-xl',
                      {
                        'text-s-500 dark:text-white': selected,
                      },
                    ]"
                  >
                    {{ iCheck }}
                  </LIcon>
                </div>
                <!-- <img
                      :src="
                        'https://picsum.photos/id/' + option.id + '/200/300'
                      "
                      class="mr-2 rounded-full h-6 w-6"
                      alt=""
                    /> -->
                {{ field.keyLabel ? option[field.keyLabel] : option }}
                |
                {{ hovered }}
              </div>
            </slot>
          </LComboboxOption>
          <!-- </LComboboxOptionsGroup> -->
        </LComboboxOptions>
      </div>
      <!-- <LMultiSelectButton
        ref="inputElement"
        :class="['outline-none flex space-x-2 items-center w-full transition']"
      >
        <div class="flex-auto flex flex-wrap m-1">
          <LMultiSelectList
            v-for="option in selectedOptions"
            :key="option.name"
            #default="{ removeOption }"
          >
            <slot
              name="selected-item"
              :option="option"
              :removeOption="removeOption"
            >
              <div
                class="m-0.5 rounded-md py-1 leading-5 bg-s-200 dark:bg-s-600 flex items-center"
              >
                <span class="block flex-auto px-1">
                  {{ field.keyLabel ? option[field.keyLabel] : option }}
                </span>
                <span class="p-1" @click.stop="removeOption(option)">
                  <LIcon>
                    {{ iClose }}
                  </LIcon>
                </span>
              </div>
            </slot>
          </LMultiSelectList>
          <LMultiSelectSearch
            v-if="
              field.keyFilter &&
              ((!selectedOptions.length && !field.multiple) || field.multiple)
            "
            class="px-2 py-1 cursor-text outline-none bg-transparent"
          >
          </LMultiSelectSearch>
          <div
            v-if="!field.keyFilter && !selectedOptions.length"
            class="p-1 text-s-500 dark:text-s-400"
          >
            {{ field.placeholder }}
          </div>
        </div>
        <div class="py-2 pr-2">
          <LSpinner v-if="loading" />
          <LIcon
            v-else
            :class="['transition-transform', { 'rotate-180': show }]"
          >
            {{ iChevronDown }}
          </LIcon>
        </div>
      </LMultiSelectButton>
      <div class="absolute right-8 top-0 h-full flex items-center">
        <slot name="after" :on-reset="onReset" :empty="empty"></slot>
      </div>
      <div
        class="z-10 mt-1.5 transition overflow-hidden shadow-2xl outline-none border border-s-200 dark:border-s-700 rounded-md absolute top-full left-0 right-0 bg-white dark:bg-s-800"
        :class="[
          show ? 'block' : 'hidden',
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
        <div v-if="error" class="p-2">
          <slot name="error" :error="error"></slot>
        </div>
        <div
          class="shadow-inner overflow-hidden max-h-64 b-scroll overflow-y-auto"
        >
          <LMultiSelectOptions #default="{ groups }">
            <LMultiSelectGroup
              v-for="group in groups"
              :key="group.key"
              :group="group.key"
              #default="{ options }"
            >
              <div v-if="group.key !== 'default'">
                {{ group.key }}
              </div>
              <LMultiSelectOption
                v-for="(option, index) of options"
                :key="option[field.keyValue] || option"
                :value="option"
                class="group relative overflow-hidden"
                #default="{ selected, focused, hovered }"
              >
                <slot name="option" :option="option" :selected="selected">
                  <div
                    v-ripple="{}"
                    :class="[
                      'flex p-2 items-center cursor-pointer focus:outline-none',
                      selected
                        ? hovered
                          ? 'bg-p-200 dark:bg-p-800 '
                          : 'bg-p-100 dark:bg-p-900 ' +
                            ' text-black dark:text-white group-focus:bg-p-200 group-hover:bg-p-200 dark:group-hover:bg-p-800 dark:group-focus:bg-p-800'
                        : hovered
                        ? 'bg-s-100  dark:bg-s-900 '
                        : 'bg-transparent' +
                          ' text-black dark:text-white group-focus:bg-s-100 group-hover:bg-s-100 dark:group-hover:bg-s-900 dark:group-focus:bg-s-900',
                    ]"
                  >
                    <div
                      :class="[
                        'flex items-center border rounded-md h-6 w-6 mr-2',
                        selected || hovered
                          ? 'border-transparent'
                          : 'border-s-200 dark:border-s-700',
                      ]"
                    >
                      <LIcon
                        v-if="selected"
                        :class="[
                          'text-xl',
                          {
                            'text-s-500 dark:text-white': selected,
                          },
                        ]"
                      >
                        {{ iCheck }}
                      </LIcon>
                    </div>
                    {{ field.keyLabel ? option[field.keyLabel] : option }}
                    |
                    {{ hovered }}
                  </div>
                </slot>
              </LMultiSelectOption>
            </LMultiSelectGroup>
          </LMultiSelectOptions>
        </div>
      </div> -->
      <pre>
        {{ combobox.focusOption }}
      </pre>
    </LCombobox>
  </div>
  <slot name="error" :error="error"></slot>
  <slot name="description"></slot>
</template>
