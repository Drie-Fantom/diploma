import React from 'react';
import PropTypes from 'prop-types';
import './buttonUp.css';

export const ButtonUp = ({ backgroundColor, size, borderRadius, arrowColor, ...props }) => {
	return (
		< a href="">
			<button
				type="button"
				className={['storybook-button_up', `storybook-button_up--${borderRadius}`, `storybook-button_up--${size}`].join(' ')}
				style={{ backgroundColor: backgroundColor }}
				{...props}
			>
				<div className="arrow"
					style={{ 'border-bottom-color': arrowColor }}
				></div>
			</button >
		</a>
	);
};

ButtonUp.propTypes = {
	backgroundColor: PropTypes.string,
	arrowColor: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	borderRadius: PropTypes.oneOf(['none', 'add']),
	onClick: PropTypes.func,
};
ButtonUp.defaultProps = {
	backgroundColor: null,
	arrowColor: null,
	size: 'medium',
	borderRadius: 'none',
	onClick: undefined,
};