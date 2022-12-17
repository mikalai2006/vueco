<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import GInputMultiSelect from "@/components/ui/GInputMultiSelect.vue";

import { iCheck } from "@/stories/composable/useIcon";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => {
      return [];
    },
  },
  schema: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
const emit = defineEmits<{
  (e: "update:modelValue", value: any): void;
}>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    // console.log('Change rules', val)
    emit("update:modelValue", val);
  },
});

const schemaWithItems = ref(props.schema);
const onLoadItems = async () => {
  schemaWithItems.value.items = [
    {
      _id: "628fa1ed1c2d607ec0d4d581",
      title: "russian",
      description: "russian option description",
    },
    {
      _id: "628fa1ed1c2d607ec0d4d582",
      title: "english",
      description: "english option description",
    },
  ];
};
const field = ref(null);
defineExpose({
  field,
});
</script>
<template>
  <GInputMultiSelect
    v-model="model"
    :schema="schemaWithItems"
    :ref="(el) => (field = el)"
    @on-load-items="onLoadItems"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
    <template #selected-item="{ item, removeOption }">
      <!-- <img
        :src="'https://picsum.photos/id/10' + item.id + '/200/200'"
        class="h-8 w-10"
        alt=""
      /> -->
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
    </template>
    <template #option="{ option, selected }">
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
        <div>
          {{ option[schema.keyLabel] }}
          <div class="text-xs">
            {{ option.description }}
          </div>
        </div>
      </div>
    </template>
  </GInputMultiSelect>
</template>
