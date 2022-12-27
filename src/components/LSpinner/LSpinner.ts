import { h, defineComponent, resolveComponent } from "vue";
import { LIcon } from "@/components/LIcon";

export default defineComponent({
  name: "LSpinner",
  components: {
    LIcon,
  },
  setup: (_, { slots }) => {
    const LIcon: any = resolveComponent("LIcon");

    return () => {
      return h(
        LIcon,
        {
          class: "animate-spin",
        },
        () =>
          slots.default
            ? slots
                .default()
                .map((n) => n.children)
                .join("")
            : "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
      );
    };
  },
});
