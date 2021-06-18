import React from 'react';
import { DropDownList } from './DropDownList';

export default {
	title: 'Example/DropDownList',
	component: DropDownList,
	argTypes: {
		content: { control: '' }
	},
};
const Template = args => <DropDownList {...args} />;

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