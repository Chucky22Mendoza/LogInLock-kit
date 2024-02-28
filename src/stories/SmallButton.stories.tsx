import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SmallButton from '../components/SmallButton';

type ButtonPropsAndCustomArgs = React.ComponentProps<typeof SmallButton>;
type Story = StoryObj<ButtonPropsAndCustomArgs & { hasChildren: boolean }>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<any> = {
  component: SmallButton,
  render: ({ hasChildren, ...args }: ButtonPropsAndCustomArgs & { hasChildren: boolean }) =>
    hasChildren
      ? (
        <SmallButton {...args}>
          <img src="./assets/home.svg" alt="" />
          <span>Home</span>
        </SmallButton>
      )
      : <SmallButton {...args} />,
  title: 'Buttons/Small',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'outline',
      ],
    },
    state: {
      options: [
        'active',
        'disabled',
        'hover',
      ],
    },
    hasChildren: {
      type: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;

export const Example: Story = {
  args: {
    type: 'primary',
    state: 'active',
    onClick: () => {
      alert('Button clicked');
    },
    hasChildren: true,
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: 'primary',
    text: 'Button',
  },
};

export const PrimaryActive: Story = {
  args: {
    type: 'primary',
    state: 'active',
    text: 'Button',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    type: 'primary',
    state: 'disabled',
    text: 'Button',
  },
};

export const PrimaryHover: Story = {
  args: {
    type: 'primary',
    state: 'hover',
    text: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    text: 'Button',
  },
};

export const SecondaryActive: Story = {
  args: {
    type: 'secondary',
    state: 'active',
    text: 'Button',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    type: 'secondary',
    state: 'disabled',
    text: 'Button',
  },
};

export const SecondaryHover: Story = {
  args: {
    type: 'secondary',
    state: 'hover',
    text: 'Button',
  },
};

export const Outline: Story = {
  args: {
    type: 'outline',
    text: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    text: 'Button',
  },
};