import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, backgroundColor, size, label, color, borderRadius, ...props }) => {
	const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	return (
		<button
			type="button"
			className={['storybook-button', `storybook-button--${borderRadius}`, mode, `storybook-button--${size}`, mode].join(' ')}
			style={{ backgroundColor: backgroundColor, color: color }}
			{...props}
		>
			{ label}
		</button >
	);
};

Button.propTypes = {
	primary: PropTypes.bool,
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	borderRadius: PropTypes.oneOf(['none', 'add']),
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	color: null,
	backgroundColor: null,
	primary: false,
	size: 'medium',
	borderRadius: 'none',
	onClick: undefined,
};
