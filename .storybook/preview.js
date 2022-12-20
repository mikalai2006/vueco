import { app } from "@storybook/vue3";

import "../src/assets/css/tailwindcss.scss";

import { ripple } from "../src/directives/ripple";
app.directive("ripple", ripple);
import { autofocus } from "../src/directives/autofocus";
app.directive("autofocus", autofocus);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
        '<div :class="[theme]"><div class="app"><div class="bg-white dark:bg-s-900 min-h-screen w-full"><story /></div></div></div>',
    };
  },
];
