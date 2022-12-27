import { app } from "@storybook/vue3";

import "../src/assets/css/tailwindcss.scss";

import { ripple } from "../src/directives/ripple";
app.directive("ripple", ripple);
import { autofocus } from "../src/directives/autofocus";
app.directive("autofocus", autofocus);
import { LBtn } from "../src/components/LBtn";
app.component("LBtn", LBtn);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    disable: true,
    // default: "light",
    // values: [
    //   {
    //     name: "light",
    //     value: "#FAFAFA",
    //   },
    //   {
    //     name: "dark",
    //     value: "#18181B",
    //   },
    // ],
  },
};
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Theme tailwindcss",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: ["light", "dark"],
      dynamicTitle: true,
    },
  },
};

// export const withTheme = (StoryFn, context) => {
//   // Get values from story parameter first, else fallback to globals
//   const theme = context.parameters.theme || context.globals.theme;
//   const storyTheme = theme === "dark" ? darkTheme : lightTheme;
//   return (
//     <div class={storyTheme}>
//       <story />
//     </div>
//   );
// };

// export const decorators = [withTheme];
export const decorators = [
  (story, context) => {
    const theme = context.globals.theme;
    return {
      data: () => {
        return {
          theme,
        };
      },
      components: { story },
      template:
        '<div :class="[theme]"><div class="app"><div class=" w-full p-6"><story /></div></div></div>',
    };
  },
];
