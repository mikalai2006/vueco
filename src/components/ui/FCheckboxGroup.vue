<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FCheckboxGroup",
  inheritAttrs: false,
});
</script>
<script setup lang="ts">
import { computed, ref } from "vue";
import type { IField } from "@/components/LForm";

import { LInputCheckboxGroup } from "@/components/LInput";
import { LIcon } from "@/components/LIcon";

const props = withDefaults(
  defineProps<{
    /**
     * modelValue - model boolean
     */
    modelValue: Array<string | number>;
    error?: string;
    /**
     * Schema for field.
     */
    field: IField;
    required?: boolean;
  }>(),
  {
    modelValue: () => {
      return [];
    },
  }
);

const emit = defineEmits(["update:modelValue", "on-input"]);

const model = computed({
  get: () => props.modelValue,
  set: (val: Array<string | number>) => {
    emit("update:modelValue", val);
  },
});

const inputElement = ref<InstanceType<typeof LInputCheckboxGroup> | null>(null);

const onSetFocus = () => {
  const el = inputElement.value?.$el;

  if (el && el?.input) el?.input.focus();
};

const onReset = () => {
  model.value = [];
  emit("on-input");
  onSetFocus();
};
</script>
<template>
  <div class="relative flex items-start">
    <slot name="before" :onReset="onReset"></slot>
    <div class="flex items-center">
      <LInputCheckboxGroup
        v-for="item in field.groupvalue"
        :key="`item_${item.id}`"
        v-bind="$attrs"
        ref="inputElement"
        v-model="model"
        :field="field"
        :error="error"
        :checked="model.indexOf(item.value) != -1"
        class="mr-2 h-5 w-5 appearance-none outline-none group focus:ring-2 focus:ring-offset-2 border rounded-md focus:ring-offset-white dark:focus:ring-offset-s-800 checked:bg-p-500"
        :class="[
          {
            'border-d-500 dark:border-d-500 focus:ring-d-500 focus:border-d-500 ':
              error,
          },
          {
            'border-s-200 dark:border-s-600 focus:ring-p-500 focus:border-p-500':
              !error,
          },
        ]"
        @change="$emit('on-input')"
      >
        <LIcon
          v-if="model.indexOf(item.value) !== -1"
          class="bg-transparent absolute top-0 left-0 text-white text-xl"
        >
          M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0
          1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093
          3.473-4.425a.267.267 0 0 1 .02-.022z
        </LIcon>
      </LInputCheckboxGroup>
    </div>
    <div>
      <slot
        name="label"
        :id="field.id"
        :required="required"
        :onSetFocus="onSetFocus"
      ></slot>
      <slot name="after" :onReset="onReset"></slot>
      <slot name="error"></slot>
      <slot name="description"></slot>
    </div>
  </div>
</template>
