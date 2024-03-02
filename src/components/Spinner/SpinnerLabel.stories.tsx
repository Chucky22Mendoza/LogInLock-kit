import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '.';

type SpinnerPropsAndCustomArgs = React.ComponentProps<typeof Spinner>;
type Story = StoryObj<SpinnerPropsAndCustomArgs>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<any> = {
  component: Spinner,
  title: 'Spinner/Label',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
      ],
      description: "Which size should the Spinner be?",
    },
    label: {
      description: "The text of the Spinner",
    },
    style: {
      description: 'The style sheet of the Spinner',
    },
    className: {
      description: 'The extra classname of the Spinner',
    }
  },
};

export default meta;

export const XSmall: Story = {
  args: {
    size: 'xs',
    label: 'X-Small',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xl',
    label: 'X-Large',
  },
};
