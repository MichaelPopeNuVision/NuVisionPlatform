import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import NavBar from './NavBar';

export default {
  title: 'Example/NavBar',
  component: NavBar,

};

const Template = (args) => <NavBar {...args} />;

export const Navbar = Template.bind({});

NavBar.args = {

}


