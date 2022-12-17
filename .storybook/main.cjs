module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: (config, { configType }) => {
    // customize the Vite config here
    config.resolve.alias["@"] = "/src";

    // config.resolve.alias['path'] = 'path-browserify'
    // config.resolve.alias['crypto'] = 'crypto-browserify'
    // config.resolve.alias['stream'] = 'stream-browserify'

    // return the customized config
    return config;
  },
};
