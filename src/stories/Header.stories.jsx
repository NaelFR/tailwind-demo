import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    businessUnit: {
      control: { type: 'text' },
    },
  },
};

export const Template = (args) => <Header {...args} />;

export const LeroyMerlin = Template.bind({});
LeroyMerlin.args = {
  businessUnit: 'LM',
};

export const Adeo = Template.bind({});
Adeo.args = {
  businessUnit: 'Central',
};

export const Bricoman = Template.bind({});
Bricoman.args = {
  businessUnit: 'BM',
};

export const Bricocenter = Template.bind({});
Bricocenter.args = {
  businessUnit: 'BC',
};

export const Zodio = Template.bind({});
Zodio.args = {
  businessUnit: 'ZD',
};