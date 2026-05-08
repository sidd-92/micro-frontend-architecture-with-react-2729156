

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
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // Storybook's implicit CSS loaders omit postcss-loader, so Tailwind directives
    // in index.css are never transformed. Appending postcss-loader here causes webpack
    // to run it first (loaders are applied right-to-left), which expands @tailwind
    // directives before css-loader sees them.
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