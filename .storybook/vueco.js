import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#0891b2",
  colorSecondary: "#06b6d4",

  // UI
  appBg: "white",
  appContentBg: "#fff",
  appBorderColor: "#f1f5f9",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barSelectedColor: "#0891b2",
  barBg: "#f9fafb",
  barTextColor: "#64748b",

  // Form colors
  inputBg: "white",
  inputBorder: "#e2e8f0",
  inputTextColor: "#0f172a",
  inputBorderRadius: 4,

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: "https://place-hold.it/350x150",
  brandTarget: "_self",
});
