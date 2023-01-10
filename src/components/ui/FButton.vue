<script lang="ts" setup>
import { computed, ref, type PropType } from "vue";
import { LBtn } from "@/components/LBtn";
import { TypeBtnTag, TypeBtnMode } from "@/components/LBtn";
import { ripple } from "@/directives/ripple";

const vRipple = ripple;

const props = defineProps({
  as: {
    type: String as PropType<TypeBtnTag>,
    default: "button",
    validator(val: TypeBtnTag) {
      return [...Object.values(TypeBtnTag)].includes(val);
    },
  },
  mode: {
    type: String as PropType<TypeBtnMode>,
    default: TypeBtnMode.second,
    validator(val: TypeBtnMode) {
      return [...Object.values(TypeBtnMode)].includes(val);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  pressed: {
    type: Boolean,
    default: false,
  },
  fill: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["update:pressed"]);

const cssClass = computed(() => {
  let _class =
    "relative py-2 px-4 font-medium rounded-md outline-none cursor-pointer transition focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-s-900";
  switch (props.mode as keyof typeof TypeBtnMode) {
    case TypeBtnMode.primary:
      _class +=
        " ring-p-500" +
        (props.fill
          ? " bg-p-500 dark:bg-p-700 text-white hover:bg-p-400 hover:bg-p-600 dark:hover:bg-p-600"
          : " bg-p-500/10 text-p-700 dark:text-p-400 hover:bg-p-500/30");
      break;
    case TypeBtnMode.second:
      _class +=
        " ring-s-500" +
        (props.fill
          ? " bg-s-500 dark:bg-s-700 text-white hover:bg-s-600 dark:hover:bg-s-600"
          : " bg-s-500/10 text-s-700 dark:text-s-400 hover:bg-s-500/30");
      break;
    case TypeBtnMode.danger:
      _class +=
        " ring-d-500" +
        (props.fill
          ? " bg-d-600 dark:bg-d-700 text-white hover:bg-d-700 dark:hover:bg-d-600"
          : " bg-d-600/10 text-d-700 dark:text-d-400 hover:bg-d-500/30");
      break;
    case TypeBtnMode.link:
      _class += " ring-s-500/10 hover:bg-s-500/10";
      break;

    default:
      break;
  }
  if (props.pressed) {
    _class += " shadow-inner";
  }
  return _class;
});

const btn = ref(null);

defineExpose({ $el: btn, el: btn });
</script>

<template>
  <LBtn
    ref="btn"
    v-ripple="{ class: 'bg-black/50' }"
    v-bind="{ disabled, pressed, as }"
    :class="[
      cssClass,
      {
        'cursor-not-allowed disabled:bg-transparent disabled:text-s-500 dark:disabled:bg-transparent dark:disabled:text-s-500':
          disabled,
      },
    ]"
    @click="$emit('update:pressed', !pressed)"
  >
    <span class="relative">
      <slot></slot>
    </span>
  </LBtn>
</template>
