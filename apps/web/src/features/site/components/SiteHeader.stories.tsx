import type { Meta, StoryObj } from '@storybook/react';
import { SiteHeader } from '~/features/site/components/SiteHeader';

const Component = SiteHeader;

type Story = StoryObj<typeof Component>;
type StoryMeta = Meta<typeof Component>;

export default {
  component: Component,
  argTypes: {},
} satisfies StoryMeta;

export const Default: Story = {};
