import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = { user: false };
