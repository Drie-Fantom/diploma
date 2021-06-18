import React from 'react';
import { Spoiler } from './Spoiler';

export default {
	title: 'Example/Spoiler',
	component: Spoiler,
	argTypes: {
		column: { control: '' },
		content: { control: '' }
	},
};
const Template = args => <Spoiler {...args} />;

export const Default = Template.bind({});
Default.args = {
	content: [
		['link1', 'link5', 'link9', 'link1'],
		['link2', 'link6', 'link10', 'link2'],
		['link3', 'link7', 'link11', 'link3'],
		['link4', 'link8', 'link12', 'link4', 'link4'],
	],
	column: ['Col 1', 'Col 2', 'Col 3', 'Col 4'],
};