import React from 'react';
import PropTypes from 'prop-types';
import './dropDownListDate.css';

export const DropDownListDate = ({

	mindate = '2021-05-26',
	maxdate = '2021-08-26',
	valuedate = '2021-05-26',
	sizecontent = 'medium',
	contentTextColor = 'black',
	backgroundColor = '#fff',
}) => {

	const sizeContent = {
		small: '11px',
		medium: '16px',
		large: '26px',
	};

	return (
		<div className="date-body">
			<input type="date" id="start" name="trip-start"
				value={valuedate}
				min={mindate} max={maxdate}
				style={{ background: backgroundColor, color: contentTextColor, 'font-size': sizeContent[sizecontent] }}></input>
		</div>
	);
};

DropDownListDate.propTypes = {
	mindate: PropTypes.string,
	maxdate: PropTypes.string,
	valuedate: PropTypes.string,
	contentTextColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	sizecontent: PropTypes.oneOf(['small', 'medium', 'large']),
};