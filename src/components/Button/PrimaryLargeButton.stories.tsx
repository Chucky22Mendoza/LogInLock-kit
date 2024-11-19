import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

type ButtonPropsAndCustomArgs = React.ComponentProps<typeof Button>;
type Story = StoryObj<ButtonPropsAndCustomArgs>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<any> = {
  component: Button,
  title: 'Button/PrimaryLarge',
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

export const Primary: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    children: 'Large',
  },
};

export const StartIcon: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    startIcon: (<img src="assets/home.svg" alt="home" />),
    children: 'Large',
  },
};

export const EndIcon: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    endIcon: (<img src="assets/home.svg" alt="home" />),
    children: 'Large',
  },
};

export const OnlyIcon: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    startIcon: (<img src="assets/home.svg" alt="home" />),
  },
};

export const PrimaryDisabled: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    disabled: true,
    children: 'Large',
  },
};

export const StartIconDisabled: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    disabled: true,
    startIcon: (<img src="assets/home.svg" alt="home" />),
    children: 'Large',
  },
};

export const EndIconDisabled: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    disabled: true,
    endIcon: (<img src="assets/home.svg" alt="home" />),
    children: 'Large',
  },
};

export const OnlyIconDisabled: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    disabled: true,
    startIcon: (<img src="assets/home.svg" alt="home" />),
  },
};