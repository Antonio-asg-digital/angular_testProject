/** @type { import('@storybook/angular-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|md)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  refs: {
    "design-system": {
      title: 'My design system',
      //👇 The url provided by Chromatic when it was deployed
      url: 'https://www.chromatic.com/build?appId=66bb3fc6b1a13cd69acea6b8&number=26',
    },
  },
};
export default config;
