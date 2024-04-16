import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tag from '.';

type TagPropsAndCustomArgs = React.ComponentProps<typeof Tag>;
type Story = StoryObj<TagPropsAndCustomArgs>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<any> = {
  component: Tag,
  title: 'Tag/End Icon',
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
    children: {
      description: 'Display text in the label',
    },
    startIcon: {
      description: 'Image element at the start of the tag',
    },
    endIcon: {
      description: 'Image element at the end of the tag',
    },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    endIcon: (
      <img src="/assets/tags/close.svg" width={12} height={12} />
    ),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
    endIcon: (
      <img src="/assets/tags/close.svg" width={12} height={12} />
    ),
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
    endIcon: (
      <img src="/assets/tags/close-success.svg" width={12} height={12} />
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
    endIcon: (
      <img src="/assets/tags/close-warning.svg" width={12} height={12} />
    ),
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
    endIcon: (
      <img src="/assets/tags/close-danger.svg" width={12} height={12} />
    ),
  },
};
