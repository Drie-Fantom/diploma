import React from 'react';

import { ButtonUp } from './ButtonUp';

export default {
	component: ButtonUp,
	title: 'Example/ButtonUp',
};

const Template = (args) => <ButtonUp  {...args} />;

export const Circle = Template.bind({});
Circle.args = {
	size: 'medium',
	borderRadius: 'add',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
};
