<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "LTooltip",
  props: {
    /**
     * v-model - is open tooltip.
     */
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: Number,
      default: 0,
    },
  },
  emit: ["update:modelValue"],
  setup(props, { emit }) {
    const onKeydown = (e: KeyboardEvent) => {};

    const ariaAttrs = computed(() => {
      return {};
    });

    return {
      ariaAttrs,

      onKeydown,
    };
  },
});
</script>

<template>
  <div
    :is="as"
    v-bind="{ ...ariaAttrs }"
    :role="!['button', 'input'].includes(as) ? 'button' : undefined"
    :tabindex="!['button', 'input'].includes(as) ? 0 : undefined"
    :type="['button', 'input'].includes(as) ? 'button' : undefined"
    :disabled="disabled || undefined"
    @click="!disabled && $emit('update:pressed', !pressed)"
    @keydown="onKeydown"
  >
    <slot />
  </div>
</template>
