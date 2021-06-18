import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './spoiler.css';

export const Spoiler = ({

	content,
	column,
	sizecolumn = 'medium',
	sizecontent = 'medium',
	sizehead = 'medium',
	width = 'medium',
	contentTextColor = 'black',
	headerTextColor = 'black',
	backgroundColor = '#fff',
	columnTextColor = 'black',
}) => {

	useEffect(() => {
		if (column.length < 1) {
			throw Error('Must have at least one column');
		}
	}, [column]);

	const maxWidth = {
		small: '200px',
		medium: '300px',
		large: '400px',
	};
	const sizeColumn = {
		small: '14px',
		medium: '20px',
		large: '28px',
	};
	const sizeContent = {
		small: '11px',
		medium: '16px',
		large: '26px',
	};
	const sizeHead = {
		small: '16px',
		medium: '22px',
		large: '30px',
	};


	return (

		<div className={'spoiler-body'}
			style={{ backgroundColor: backgroundColor, 'max-width': maxWidth[width] }}>
			<details className={'spoiler__header-ditals'}>
				<summary className={'spoiler__header'}
					style={{ color: headerTextColor, 'font-size': sizeHead[sizehead] }}
				>global</summary>
				{column.map((h, columnIndex) => (
					<details className={'spoiler__column-ditals'}>
						<summary key={columnIndex} className={'spoiler__column'}
							style={{ color: columnTextColor, 'font-size': sizeColumn[sizecolumn] }}>
							{h}
						</summary>

						{content[columnIndex].map((r, rowIndex) => (
							<a href=""
								key={rowIndex}
								className={'spoiler__content'}
								style={{ color: contentTextColor, 'font-size': sizeContent[sizecontent] }}
							>
								{r}
							</a>
						))}
					</details>
				))}
			</details>
		</div >
	);
};

Spoiler.propTypes = {
	sizehead: PropTypes.oneOf(['small', 'medium', 'large']),
	width: PropTypes.oneOf(['small', 'medium', 'large']),
	sizecolumn: PropTypes.oneOf(['small', 'medium', 'large']),
	sizecontent: PropTypes.oneOf(['small', 'medium', 'large']),
	contentTextColor: PropTypes.string,
	columnTextColor: PropTypes.string,
	headerTextColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	column: PropTypes.arrayOf(PropTypes.string).isRequired,
	content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};