<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";
import { TypeBtnTag } from "./types";

export default defineComponent({
  name: "LBtn",
  props: {
    as: {
      type: String as PropType<keyof typeof TypeBtnTag>,
      default: "button",
      validator(val: TypeBtnTag) {
        return [...Object.values(TypeBtnTag)].includes(val);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * v-model:pressed - for pressed mode button
     */
    pressed: {
      type: Boolean,
      default: false,
    },
  },
  emit: ["update:pressed"],
  setup(props, { emit }) {
    const onKeydown = (e: KeyboardEvent) => {
      (e.key === "Space" || e.key === "Enter") &&
        !props.disabled &&
        emit("update:pressed", !props.pressed);
    };

    const ariaAttrs = computed(() => {
      return {
        "aria-pressed": !["button", "input"].includes(props.as)
          ? props.pressed == true
          : undefined,
      };
    });

    return {
      ariaAttrs,

      onKeydown,
    };
  },
});
</script>

<template>
  <component
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
  </component>
</template>
