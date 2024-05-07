import type { Meta, StoryObj } from '@storybook/react';
import { CatchCopy } from '~/features/site/components/CatchCopy';

const Component = CatchCopy;

type Story = StoryObj<typeof Component>;
type StoryMeta = Meta<typeof Component>;

export default {
  component: Component,
  argTypes: {},
} satisfies StoryMeta;

export const Default: Story = {};

export const Animation: Story = {
  args: {
    animation: true,
  },
};
