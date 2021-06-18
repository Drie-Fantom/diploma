import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './dropDownList.css';

export const DropDownList = ({

	content,
	sizecontent = 'medium',
	width = 'medium',
	contentTextColor = 'black',
	backgroundColor = '#fff',
	borderRadius = 'add',
}) => {

	useEffect(() => {
		if (content.length < 1) {
			throw Error('Must have at least one content');
		}
	}, [content]);

	const maxWidth = {
		small: '150px',
		medium: '170px',
		large: '200px',
	};
	const sizeContent = {
		small: '11px',
		medium: '16px',
		large: '26px',
	};
	const border = {
		none: '0px',
		add: '20px',
	};


	return (
		<div className="select">
			<select name="select"
				className={'DropDownList__main'}
				style={{
					color: contentTextColor, 'font-size': sizeContent[sizecontent], backgroundColor: backgroundColor, 'max-width': maxWidth[width],
					'border-radius': border[borderRadius]
				}}>
				{content.map((r, rowIndex) => (
					<option key={rowIndex} value={rowIndex}
						style={{
							color: contentTextColor, 'font-size': sizeContent[sizecontent], 'border-radius': border[borderRadius]
						}}
						className={'DropDownList__content'}
					>{r}</option>
				))}
			</select>
		</div>
	);
};

DropDownList.propTypes = {
	borderRadius: PropTypes.oneOf(['none', 'add']),
	width: PropTypes.oneOf(['small', 'medium', 'large']),
	sizecontent: PropTypes.oneOf(['small', 'medium', 'large']),
	contentTextColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};