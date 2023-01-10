<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FMultiSelect",
  inheritAttrs: false,
});
</script>
<script lang="ts" setup>
import { computed, ref } from "vue";
import type { IField } from "@/components/LForm";
import type { ISelectModel } from "@/components/LMultiSelect";

import {
  LMultiSelect,
  LMultiSelectButton,
  LMultiSelectSearch,
  LMultiSelectList,
  LMultiSelectGroup,
  LMultiSelectOptions,
  LMultiSelectOption,
} from "@/components/LMultiSelect";

import {
  iChevronDown,
  iCheck,
  iDash,
  // iClose
} from "@/stories/composable/useIcon";

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

const emit = defineEmits([
  "update:modelValue",
  "on-input",
  "on-load-items",
  "on-choose",
  "on-choose-group",
]);

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

const inputElement = ref<InstanceType<typeof LMultiSelectButton> | null>(null);

const onSetFocus = () => {
  const el = inputElement.value?.$el;
  if (el) el.click();
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
  <slot
    name="label"
    :id="field.id"
    :required="required"
    :onSetFocus="onSetFocus"
  ></slot>
  <div
    class="flex items-center"
    :class="[
      'rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 hover:ring-1  bg-white dark:bg-s-900',
      {
        'border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500 hover:ring-d-500':
          error,
      },
      showList ? '' : '',
      {
        'border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500  hover:ring-p-500 hover:border-p-500':
          !error,
      },
    ]"
  >
    <slot name="before"></slot>
    <LMultiSelect
      v-bind="$attrs"
      v-model="model"
      v-model:showList="showList"
      :field="field"
      :error="error"
      class="relative flex-auto"
      #default="{ show, loading, selectedOptions }"
      @on-load-items="$emit('on-load-items', $event)"
      @on-input="$emit('on-input', $event)"
      @on-choose="$emit('on-choose', $event)"
      @on-choose-group="$emit('on-choose-group', $event)"
    >
      <LMultiSelectButton
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
                <!-- <img
                  :src="'https://picsum.photos/id/' + option.id + '/200/300'"
                  class="mr-2 rounded-l-md h-8 w-8"
                  alt=""
                /> -->
                <span class="block flex-auto px-1">
                  {{ field.keyLabel ? option[field.keyLabel] : option }}
                </span>
                <!-- <span class="p-1" @click.stop="removeOption(option)">
                  <LIcon>
                    {{ iClose }}
                  </LIcon>
                </span> -->
              </div>
            </slot>
          </LMultiSelectList>
          <LMultiSelectSearch
            v-if="
              field.keyFilter &&
              ((!selectedOptions.length && !field.multiple) || field.multiple)
            "
            class="px-2 py-1 cursor-text outline-none bg-transparent placeholder-s-400"
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
        class="z-10 mt-1.5 transition shadow-2xl outline-none border border-s-200 dark:border-s-700 rounded-md absolute top-full left-0 right-0 bg-white dark:bg-s-800"
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
        <!-- <div
          class="bg-white dark:bg-s-800 border-b border-s-200 dark:border-s-700"
        >
          <LMultiSelectSearch
            v-if="field.keyFilter"
            class="ml-4 p-2 outline-none bg-transparent"
            #default="{ ref, value, onInput, placeholder }"
          >
            <input
              :ref="(el) => (ref.value = el)"
              :value="value"
              :placeholder="placeholder"
              class="outline-none px-2 py-1"
              @input="onInput"
            />
          </LMultiSelectSearch>
        </div> -->
        <div v-if="error" class="p-2">
          <slot name="error" :error="error"></slot>
        </div>
        <div class="shadow-inner max-h-64 b-scroll overflow-y-auto">
          <LMultiSelectOptions #default="{ groups }">
            <LMultiSelectGroup
              v-for="group in groups"
              :key="group.key"
              :group="group.key"
              #default="{ options, groupSelectedOption, groupLength }"
            >
              <div
                v-if="group.key !== 'default'"
                class="flex p-2 font-bold cursor-pointer bg-s-100 dark:bg-s-900"
              >
                <div
                  :class="[
                    'flex items-center border rounded-md h-6 w-6 mr-2 border-s-200 dark:border-s-700 text-xl text-p-500',
                  ]"
                >
                  <LIcon v-if="groupSelectedOption == groupLength">
                    {{ iCheck }}
                  </LIcon>

                  <LIcon
                    v-if="
                      groupSelectedOption < groupLength &&
                      groupSelectedOption != 0
                    "
                  >
                    {{ iDash }}
                  </LIcon>
                </div>
                {{ group.key }}
              </div>
              <LMultiSelectOption
                v-for="option of options"
                :key="field.keyValue ? option[field.keyValue] : option"
                :value="option"
                class="group relative overflow-hidden focus:outline-none cursor-pointer"
                #default="{ selected, hovered }"
              >
                <slot
                  name="option"
                  :option="option"
                  :selected="selected"
                  :hovered="hovered"
                >
                  <div
                    v-ripple="{}"
                    :class="[
                      'flex p-2 items-center cursor-pointer focus:outline-none',
                      hovered
                        ? 'bg-p-200 dark:bg-p-800 text-black dark:text-white group-focus:bg-p-200 group-hover:bg-p-200 dark:group-hover:bg-p-800 dark:group-focus:bg-p-800'
                        : 'bg-transparent text-black dark:text-white group-focus:bg-p-100 group-hover:bg-p-100 dark:group-hover:bg-p-900 dark:group-focus:bg-p-900',
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
                            'text-p-500 dark:text-p-500': selected,
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
                  </div>
                </slot>
              </LMultiSelectOption>
            </LMultiSelectGroup>
          </LMultiSelectOptions>
        </div>
      </div>
      <!-- <pre>
        {{ select.focusOption }}
      </pre> -->
    </LMultiSelect>
  </div>
  <slot name="error" :error="error"></slot>
  <slot name="description"></slot>
</template>
