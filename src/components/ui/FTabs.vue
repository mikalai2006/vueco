<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FTabs",
  inheritAttrs: false,
});
</script>
<script setup lang="ts">
import { computed } from "vue";
import {
  LTabs,
  LTabsList,
  LTab,
  LTabPanels,
  LTabPanel,
} from "@/components/LTabs";

const props = withDefaults(
  defineProps<{
    /**
     * modelValue - model string
     */
    modelValue: string;
    /**
     * tabs
     */
    tabs: Array<string>;
  }>(),
  {
    modelValue: "",
  }
);

const emit = defineEmits(["update:modelValue", "on-input"]);

const model = computed({
  get: () => props.modelValue,
  set: (val: string) => {
    emit("update:modelValue", val);
  },
});
</script>

<template>
  <LTabs v-model="model" manual class="mt-2 bg-white dark:bg-s-700">
    <LTabsList class="flex space-x-1">
      <LTab v-for="tab in tabs" :key="tab" :tab="tab" v-slot="{ selected }">
        <button
          type="button"
          :class="[
            'w-full p-2 leading-5 font-medium text-s-900 dark:text-s-300 border-b-2',
            'focus:outline-none ring-offset-1 ring-offset-s-300 ring-opacity-20',
            selected
              ? 'border-p-500 '
              : 'border-transparent text-s-100 hover:bg-black/[0.1] hover:text-black dark:hover:text-white',
          ]"
        >
          {{ tab }}
        </button>
      </LTab>
    </LTabsList>
    <LTabPanels class="flex-auto">
      <div
        :class="[
          'p-3',
          'focus:outline-none focus:ring-1 focus:ring-dott ring-s-200 ring-opacity-20',
        ]"
      >
        <LTabPanel key="Recent">
          Recent
          <button>Button</button>
        </LTabPanel>
        <LTabPanel key="Popular">
          Popular
          <button>Popular Button</button>
        </LTabPanel>
      </div>
    </LTabPanels>
  </LTabs>
</template>
