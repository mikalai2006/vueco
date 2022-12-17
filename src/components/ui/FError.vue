<script setup lang="ts">
defineProps({
  /**
   * String error for field.
   */
  error: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div
    role="alert"
    class="mt-2 text-sm leading-none text-d-600 dark:text-d-400"
  >
    <slot>
      {{ error }}
    </slot>
  </div>
</template>
