import React from 'react';
import { RadioButoon } from './RadioButton';

export default {
	title: 'Example/RadioButoon',
	component: RadioButoon,
	argTypes: {
		content: { control: '' }
	},
};
const Template = args => <RadioButoon {...args} />;

export const Default = Template.bind({});
Default.args = {
	content: [
		['value1'],
		['value2'],
		['value3'],
		['value4'],
		['value5'],
	],
};