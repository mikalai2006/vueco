<script lang="ts" setup>
import {
  LMenu,
  LMenuButton,
  LMenuItems,
  LMenuItemWrapper,
  LMenuItem,
  type IMenuField,
} from "@/components/LMenu";
import type { PropType } from "vue";
import { LBtn } from "@/components/LBtn";
import { FButton } from ".";
import { LIcon } from "@/components/LIcon";
import { iChevronDown } from "@/stories/composable/useIcon";
// import { ripple } from "@/directives/ripple";

// const vRipple = ripple;

const props = defineProps({
  // as: {
  //   type: String as PropType<TypeBtnTag>,
  //   default: "button",
  //   validator(val: TypeBtnTag) {
  //     return [...Object.values(TypeBtnTag)].includes(val);
  //   },
  // },
  // field: {
  //   type: Object as PropType<IMenuField>,
  //   required: true,
  //   default: () => {
  //     return {};
  //   },
  // },
  // disabled: {
  //   type: Boolean,
  //   default: false,
  // },
  activeItem: {
    type: [String, Number],
    default: "",
  },
  // fill: {
  //   type: Boolean,
  //   default: false,
  // },
});
defineEmits(["update:activeItem"]);

// const cssClass = computed(() => {
//   let _class =
//     "relative py-2 px-4 font-medium b-rounded outline-none cursor-pointer transition focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-s-900";
//   switch (props.mode as keyof typeof TypeBtnMode) {
//     case TypeBtnMode.primary:
//       _class +=
//         " ring-p-500" +
//         (props.fill
//           ? " bg-p-500 dark:bg-p-700 text-white hover:bg-p-400 hover:bg-p-600 dark:hover:bg-p-600"
//           : " bg-p-500/10 text-p-700 dark:text-p-400 hover:bg-p-500/30");
//       break;
//     case TypeBtnMode.second:
//       _class +=
//         " ring-s-500" +
//         (props.fill
//           ? " bg-s-500 dark:bg-s-700 text-white hover:bg-s-600 dark:hover:bg-s-600"
//           : " bg-s-500/10 text-s-700 dark:text-s-400 hover:bg-s-500/30");
//       break;
//     case TypeBtnMode.danger:
//       _class +=
//         " ring-d-500" +
//         (props.fill
//           ? " bg-d-600 dark:bg-d-700 text-white hover:bg-d-700 dark:hover:bg-d-600"
//           : " bg-d-600/10 text-d-700 dark:text-d-400 hover:bg-d-500/30");
//       break;
//     case TypeBtnMode.link:
//       _class += " ring-s-500/10 hover:bg-s-500/10";
//       break;

//     default:
//       break;
//   }
//   if (props.pressed) {
//     _class += " shadow-inner";
//   }
//   return _class;
// });
</script>

<template>
  <LMenu
    :class="['relative', {}]"
    @click="$emit('update:activeItem', activeItem)"
    #default="{ isOpen }"
  >
    <LMenuButton
      :as="LBtn"
      class="flex items-center rounded-md bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-10 dark:hover:bg-opacity-10 px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-p-500 ring-offset-2 dark:ring-offset-s-900"
    >
      <slot name="button">
        Button menu
        <LIcon
          role="presentation"
          :class="['ml-2 transition-transform', { 'rotate-180': isOpen }]"
        >
          {{ iChevronDown }}
        </LIcon>
      </slot>
    </LMenuButton>
    <div
      v-show="isOpen"
      class="absolute text-sm left-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-s-800 shadow-lg"
    >
      <LMenuItems class="px-2 py-2 divide-y divide-s-100 dark:divide-s-700">
        <LMenuItemWrapper as="div">
          <LMenuItem
            :as="LBtn"
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            item 1
          </LMenuItem>
          <LMenuItem
            :as="LBtn"
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            item 2
          </LMenuItem>
        </LMenuItemWrapper>
        <LMenuItemWrapper as="div">
          <LMenuItem
            class="group cursor-pointer outline-none flex w-full items-center rounded-md px-2 py-2 hover:bg-s-200 focus:bg-s-200 dark:hover:bg-s-700 dark:focus:bg-s-700"
          >
            <LBtn>item 1</LBtn>
          </LMenuItem>
        </LMenuItemWrapper>
      </LMenuItems>
    </div>
  </LMenu>
</template>
