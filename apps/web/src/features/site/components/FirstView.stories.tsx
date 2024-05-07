import type { Meta, StoryObj } from '@storybook/react';
import { FirstView } from '~/features/site/components/FirstView';

const Component = FirstView;

type Story = StoryObj<typeof Component>;
type StoryMeta = Meta<typeof Component>;

export default {
  component: Component,
  argTypes: {},
} satisfies StoryMeta;

export const Default: Story = {};
