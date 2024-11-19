import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

type ButtonPropsAndCustomArgs = React.ComponentProps<typeof Button>;
type Story = StoryObj<ButtonPropsAndCustomArgs>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<any> = {
  component: Button,
  title: 'Button/TextMedium',
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
        'outlined',
        'text',
      ],
      description: "Which variant should the button be?",
    },
    size: {
      options: [
        'sm',
        'md',
        'lg',
      ],
      description: "Which size should the button be?",
    },
    children: {
      description: 'The children of the button when text',
    },
    startIcon: {
      description: 'The start icon of the button'
    },
    endIcon: {
      description: 'The start icon of the button'
    }
  },
};

export default meta;

export const Outlined: Story = {
  args: {
    size: 'md',
    variant: 'text',
    children: 'Medium',
  },
};

export const StartIcon: Story = {
  args: {
    size: 'md',
    variant: 'text',
    startIcon: (<img src="assets/home.svg" alt="home" />),
    children: 'Medium',
  },
};

export const EndIcon: Story = {
  args: {
    size: 'md',
    variant: 'text',
    endIcon: (<img src="assets/home.svg" alt="home" />),
    children: 'Medium',
  },
};

export const OnlyIcon: Story = {
  args: {
    size: 'md',
    variant: 'text',
    startIcon: (<img src="assets/home.svg" alt="home" />),
  },
};

export const OutlinedDisabled: Story = {
  args: {
    size: 'md',
    variant: 'text',
    disabled: true,
    children: 'Medium',
  },
};

export const StartIconDisabled: Story = {
  args: {
    size: 'md',
    variant: 'text',
    disabled: true,
    startIcon: (<img src="assets/home.svg" alt="home" />),
    children: 'Medium',
  },
};

export const EndIconDisabled: Story = {
  args: {
    size: 'md',
    variant: 'text',
    disabled: true,
    endIcon: (<img src="assets/home.svg" alt="home" />),
    children: 'Medium',
  },
};

export const OnlyIconDisabled: Story = {
  args: {
    size: 'md',
    variant: 'text',
    disabled: true,
    startIcon: (<img src="assets/home.svg" alt="home" />),
  },
};