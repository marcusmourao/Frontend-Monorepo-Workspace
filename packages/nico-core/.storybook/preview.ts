import type { Preview } from '@storybook/vue3'

// .storybook/preview.js
import { setup } from "@storybook/vue3";

setup((app) => {
  // Registers your app's plugins into Storybook
});


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
