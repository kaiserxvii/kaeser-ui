import type { Meta, StoryObj } from '@storybook/react-vite';
import { Playground } from './playground';

const meta = {
  component: Playground,
  title: 'Playground',
} satisfies Meta<typeof Playground>;
export default meta;

type Story = StoryObj<typeof Playground>;

export const Primary = {
  args: {},
} satisfies Story;
