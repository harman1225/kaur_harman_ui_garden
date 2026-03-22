import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a simple card component.',
  },
};

export const WithShadow: Story = {
  args: {
    title: 'Shadow Card',
    description: 'This card has a shadow.',
    shadow: true,
  },
};
