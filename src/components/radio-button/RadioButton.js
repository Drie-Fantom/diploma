import React from 'react';
import PropTypes from 'prop-types';
import './radioButton.css';

export const RadioButoon = ({

	content,
	sizecontent = 'large',
	contentTextColor = 'black',
	backgroundColor = '#fff',
}) => {

	const sizeContent = {
		small: '18px',
		medium: '22px',
		large: '26px',
	};


	return (

		<div className={'radioButton-body'}
			style={{ backgroundColor: backgroundColor }
			}>
			{content.map((r, rowIndex) => (
				<div className={'radioButton-item'}>
					<input type="radio" key={rowIndex} id={rowIndex}
						name="content" value="content"
						className={'radioButton__content'}
					></input>
					<label for={rowIndex} style={{ color: contentTextColor, 'font-size': sizeContent[sizecontent] }}
					>{r}</label>
				</div>
			))}
		</div >
	);
};

RadioButoon.propTypes = {
	sizecontent: PropTypes.oneOf(['small', 'medium', 'large']),
	contentTextColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};