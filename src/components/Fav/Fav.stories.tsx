import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Favorite from '.';

type FavoritePropsAndCustomArgs = React.ComponentProps<typeof Favorite>;
type Story = StoryObj<FavoritePropsAndCustomArgs>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<any> = {
  component: Favorite,
  title: 'Favorite/Favorite',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'md',
        'lg',
      ],
      description: "Which size should the fav be?",
    },
    isFav: {
      type: 'boolean',
      description: 'State of the fav'
    },
    styleSheet: {
      description: 'The style sheet of the fav',
    },
  },
};

export default meta;

export const MediumFav: Story = {
  args: {
    isFav: true,
    size: 'md',
  },
};

export const MediumUnFav: Story = {
  args: {
    isFav: false,
    size: 'md',
  },
};

export const LargeFav: Story = {
  args: {
    isFav: true,
    size: 'lg',
  },
};

export const LargeUnFav: Story = {
  args: {
    isFav: false,
    size: 'lg',
  },
};
