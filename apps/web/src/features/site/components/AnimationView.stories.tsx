import type { Meta, StoryObj } from '@storybook/react';
import { AnimationView } from '~/features/site/components/AnimationView';

const Component = AnimationView;

type Story = StoryObj<typeof Component>;
type StoryMeta = Meta<typeof Component>;

export default {
  component: Component,
  argTypes: {},
} satisfies StoryMeta;

export const Default: Story = {};
