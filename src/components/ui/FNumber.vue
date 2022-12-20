<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FNumber",
  inheritAttrs: false,
});
</script>
<script setup lang="ts">
import { computed, ref } from "vue";

import { LInputNumber } from "@/components/LInput";
import type { IField } from "@/components/LForm";
import FError from "./FError.vue";

const props = withDefaults(
  defineProps<{
    /**
     * modelValue - model number
     */
    modelValue: number;
    error?: string;
    /**
     * Schema for field.
     */
    field: IField;
    required?: boolean;
  }>(),
  {
    modelValue: 0,
  }
);

const emit = defineEmits(["update:modelValue", "on-input"]);

const model = computed({
  get: () => props.modelValue,
  set: (val: number) => {
    emit("update:modelValue", +val);
  },
});

const inputElement = ref<InstanceType<typeof LInputNumber> | null>(null);

const onSetFocus = () => {
  const el = inputElement.value?.$el;
  if (el) el.focus();
};

const onReset = () => {
  model.value = 0;
  emit("on-input");
  onSetFocus();
};
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
      'rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 hover:ring-1 bg-white dark:bg-s-900',
      {
        'border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500 hover:ring-d-500':
          error,
      },
      {
        'border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500 hover:ring-p-500 hover:border-p-500':
          !error,
      },
    ]"
  >
    <slot name="before" :onReset="onReset"></slot>
    <LInputNumber
      v-bind="$attrs"
      ref="inputElement"
      v-model="model"
      :field="field"
      :error="error"
      class="outline-none px-4 py-2 bg-transparent w-full placeholder-s-400"
      @input="$emit('on-input')"
    />
    <slot name="after" :onReset="onReset"></slot>
  </div>
  <slot name="error">
    <FError :error="error" />
  </slot>
  <slot name="description"></slot>
</template>
