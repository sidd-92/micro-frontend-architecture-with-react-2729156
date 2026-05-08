import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/styles/index.css';

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;