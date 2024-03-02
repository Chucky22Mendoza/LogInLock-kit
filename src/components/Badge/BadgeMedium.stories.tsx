import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from '.';

type BadgePropsAndCustomArgs = React.ComponentProps<typeof Badge>;
type Story = StoryObj<BadgePropsAndCustomArgs>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<any> = {
  component: Badge,
  title: 'Badge/Medium',
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
    size: {
      options: [
        'md',
        'lg',
      ],
      description: "Which size should the badge be?",
    },
    styleSheet: {
      description: 'The style sheet of the badge',
    },
    label: {
      description: 'Display text in the label',
    },
    children: {
      description: 'The children of the badge when text',
    }
  },
};

export default meta;

export const Primary: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    label: 'Primary',
    children: (100),
  },
};

export const Secondary: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    label: 'Secondary',
    children: (100),
  },
};

export const Success: Story = {
  args: {
    size: 'md',
    variant: 'success',
    label: 'Success',
    children: (100),
  },
};

export const Warning: Story = {
  args: {
    size: 'md',
    variant: 'warning',
    label: 'Warning',
    children: (100),
  },
};

export const Danger: Story = {
  args: {
    size: 'md',
    variant: 'danger',
    label: 'Danger',
    children: (100),
  },
};
