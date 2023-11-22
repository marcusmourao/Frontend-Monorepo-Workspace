import type { Meta, StoryObj } from '@storybook/vue3';
import MyButton from '.';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/MyButton',
  component: MyButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
  },
  args: {
    primary: true
   }, // default value
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const MyButtonExample: Story = {

};

export const NotPrimary: Story = {
  args: {
     primary: false,
  },
};
