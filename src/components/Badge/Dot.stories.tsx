import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from '.';

type BadgePropsAndCustomArgs = React.ComponentProps<typeof Badge>;
type Story = StoryObj<BadgePropsAndCustomArgs>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<any> = {
  component: Badge,
  title: 'Badge/Dot',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
      description: "Which variant should the badge be?",
    },
    styleSheet: {
      description: 'The style sheet of the badge',
    },
    label: {
      description: 'Display text in the label',
    },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Danger',
  },
};
