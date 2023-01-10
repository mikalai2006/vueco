import { FButton } from "@/components/ui/index";
import { FMultiSelect, FText } from "@/components/ui";
import { tooltip } from "@/directives/tooltip";

import type { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "directives/Tooltip",
  directives: { tooltip },
} as Meta<typeof tooltip>;

export const Default: StoryFn<typeof tooltip> = () => ({
  setup() {
    return {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    };
  },
  template: `
  <h1>Default tooltip</h1>
  <div class="flex items-center h-64 w-full overflow-y-scroll b-scroll bg-black/10 dark:bg-white/10 p-24">
    <div
      v-tooltip="{
        content,
      }"
      class="h-24 bg-black/10 p-2 rounded-md"
    >
      Default tooltip
    </div>
    <div class="h-96"></div>
  </div>
  <h1>Default tooltip2</h1>
  <div class="h-48 w-full overflow-y-scroll b-scroll bg-black/10 dark:bg-white/10 px-64 pt-12">
    <div class="py-16">
      Scroll to bottom
    </div>
    <div
      v-tooltip:right="{
        content,
        showTriggers: ['click'],
        hideTriggers: ['click'],
        open: true,
      }"
      class="p-12 mb-48 relative h-48 w-48 bg-black/10 rounded-md"
    >
      With triggers
    </div>
  </div>
  `,
});

export const Placement: StoryFn<typeof tooltip> = () => ({
  components: {
    FMultiSelect,
    FText,
  },
  setup() {
    const placement = ref("top");

    return {
      placement,
      content: `Tooltip playground - placement: [${placement.value}]. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    };
  },
  template: `
  <h1>Placement tooltip</h1>
  <div class="h-80 overflow-y-auto b-scroll bg-black/5 dark:bg-white/5">
    <div class="h-screen w-1/2 py-24 flex items-center mx-auto">
      <div
        v-tooltip:[placement]="{
          content,
          open: true,
        }"
        class="flex flex-col items-center p-4 py-16 max-w-xs relative bg-black/10 rounded-md"
      >
        Tooltip playground
        <FText :modelValue="placement" readonly :field="{ autofocus: true,  }"></FText>
      </div>
    </div>
  </div>
  <div class="py-4">
    <FMultiSelect
      v-model="placement"
      :field="{
        label: 'Placement',
        placeholder: 'Choose placement',
        items: [
          'auto',
          'auto-start',
          'auto-end',
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'right',
          'right-start',
          'right-end',
          'left',
          'left-start',
          'left-end',
        ],
      }"
    >
    </FMultiSelect>
  </div>
  `,
});
