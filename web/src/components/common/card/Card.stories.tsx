import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Liked = Template.bind({});
Liked.args = {
  // user: {
  //   name: 'Jane Doe',
  // },
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
