<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FCheckbox",
  inheritAttrs: false,
});
</script>
<script setup lang="ts">
import { computed, ref } from "vue";
import type { IField } from "@/components/LForm";

import { LInputCheckbox } from "@/components/LInput";
import { LIcon } from "@/components/LIcon";

const props = withDefaults(
  defineProps<{
    /**
     * modelValue - model boolean
     */
    modelValue: boolean;
    error?: string;
    /**
     * Schema for field.
     */
    field: IField;
    required?: boolean;
  }>(),
  {
    modelValue: false,
  }
);

const emit = defineEmits(["update:modelValue", "on-input"]);

const model = computed({
  get: () => props.modelValue,
  set: (val: boolean) => {
    emit("update:modelValue", val);
  },
});

const inputElement = ref<InstanceType<typeof LInputCheckbox> | null>(null);

const onSetFocus = () => {
  const el = inputElement.value?.$el;

  if (el && el?.input) el?.input.focus();
};

const empty = computed(() => model.value != false && model.value != true);

const onReset = () => {
  model.value = false;
  emit("on-input");
  onSetFocus();
};
</script>
<template>
  <div class="relative flex items-start">
    <slot name="before" :onReset="onReset"></slot>
    <div class="flex items-center">
      <LInputCheckbox
        v-bind="$attrs"
        ref="inputElement"
        v-model="model"
        :field="field"
        :error="error"
        :checked="!!model"
        class="mr-2 h-5 w-5 appearance-none outline-none group focus:ring-2 focus:ring-offset-2 border rounded-md focus:ring-offset-white dark:focus:ring-offset-s-800 checked:bg-p-500"
        :class="[
          {
            'border-d-500 dark:border-d-500 focus:ring-d-500 focus:border-d-500 hover:ring-d-500':
              error,
          },
          {
            'border-s-200 dark:border-s-600 focus:ring-p-500 focus:border-p-500 hover:ring-p-500 hover:border-p-500':
              !error,
          },
        ]"
        @change="$emit('on-input')"
      >
        <LIcon
          v-if="model"
          class="bg-transparent absolute top-0 left-0 text-white text-xl"
        >
          M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0
          1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093
          3.473-4.425a.267.267 0 0 1 .02-.022z
        </LIcon>
      </LInputCheckbox>
    </div>
    <div>
      <slot
        name="label"
        :id="field.id"
        :required="required"
        :onSetFocus="onSetFocus"
      ></slot>
      <slot name="after" :onReset="onReset" :empty="empty"></slot>
      <slot name="error"></slot>
      <slot name="description"></slot>
    </div>
  </div>
</template>
