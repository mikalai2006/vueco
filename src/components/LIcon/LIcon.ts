import { h, defineComponent } from "vue";

export default defineComponent({
  name: "LIcon",
  setup: (_, ctx) => {
    const { slots } = ctx;
    return () =>
      h(
        "svg",
        {
          class: ["fill-current"],
          width: "1em",
          height: "1em",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: `0 0 16 16`,
        },
        h("path", {
          d: slots.default
            ? slots
                .default()
                .map((n) => n.children)
                .join("")
            : "",
        })
      );
  },
});
