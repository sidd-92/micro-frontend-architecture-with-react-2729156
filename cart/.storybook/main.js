

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/react-webpack5',
  webpackFinal: async (config) => {
    config.module.rules
      .filter((rule) => rule.test?.toString().includes('css'))
      .forEach((rule) => {
        if (Array.isArray(rule.use)) {
          rule.use.push('postcss-loader');
        }
      });
    return config;
  },
};
export default config;