import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Divider from '.';

type DividerPropsAndCustomArgs = React.ComponentProps<typeof Divider>;
type Story = StoryObj<DividerPropsAndCustomArgs>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<any> = {
  component: Divider,
  title: 'Divider/Horizontal',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'thin',
        'thick',
      ],
      description: "Which size should the divider be?",
    },
    direction: {
      options: [
        'vertical',
        'horizontal',
      ],
      description: "Which direction should the divider be?",
    },
    style: {
      description: 'The style sheet of the divider',
    },
    className: {
      description: 'The extra classname of the divider',
    }
  },
  render: ({ ...args }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid var(--y-btn-generic-disabled-text)',
        borderRadius: '.6rem',
        padding: '2.5rem',
        gap: '1rem',
      }}
    >
      <h2
        style={{
          fontSize: '1.4rem',
          fontWeight: 'bold',
          lineHeight: '1.7rem',
          color: 'var(--y-btn-text)',
        }}
      >
        {`${(args.size as string).charAt(0).toUpperCase()}${(args.size as string).slice(1)} Horizontal ${args.size === 'thin' ? '1' : '2'}px`}
      </h2>
      <div
        style={{
          display: 'flex',
          gap: '.5rem',
          flexDirection: 'column',
          padding: '.8rem',
        }}
      >
        <p
          style={{
            fontSize: '1.2rem',
            fontWeight: '500',
            lineHeight: '1.5rem',
            color: 'var(--y-btn-text)',
          }}
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa adipisci iure possimus earum accusamus nesciunt vero, est quaerat natus, deleniti eum asperiores soluta quisquam impedit hic exercitationem quo, cum veritatis?</p>
        <Divider size={args.size} direction={args.direction} {...args} />
        <p
          style={{
            fontSize: '1.2rem',
            fontWeight: '500',
            lineHeight: '1.5rem',
            color: 'var(--y-btn-text)',
          }}
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa adipisci iure possimus earum accusamus nesciunt vero, est quaerat natus, deleniti eum asperiores soluta quisquam impedit hic exercitationem quo, cum veritatis?</p>
      </div>
    </div>
  ),
};

export default meta;

export const Thin: Story = {
  args: {
    size: 'thin',
    direction: 'horizontal',
  },
};

export const Thick: Story = {
  args: {
    size: 'thick',
    direction: 'horizontal',
  },
};
