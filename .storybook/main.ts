const path = require('path');


module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/angular",
  core: {
    builder: "webpack5" // Recommended to specify the builder, especially if using Webpack 5
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'asgcomplibrary': path.resolve(__dirname, '../node_modules/asgcomplibrary')
    };
    return config;
  },
};
