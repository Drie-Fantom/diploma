import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './place.css';
export const Place = ({

	rows,
	headers,
	activerow = '15',
	activeplace = '4',
}) => {
	useEffect(() => {
		if (headers.length < 1) {
			throw Error('Must have at least one header');
		} else if (!rows.every(r => r.length === headers.length)) {
			throw Error('Row length must equal header length');
		}
	}, [rows, headers]);

	return (
		<div className="place-body">
			<div className="place-body__content">
				{headers.map((h, columnIndex) => (
					<div key={columnIndex} className={'place-body__column'}>
						<div
							className={'place-body__head'}
						>
							{h}
						</div>

						<div>
							{rows.map((r, rowIndex) => (
								<div className={`place-body__item--${r[columnIndex]}`}>
									{r[columnIndex]}
								</div>
							))}
						</div>
					</div>
				))}

			</div>
			<div className="place-body__place">
				Your place is: row {activerow}, place {activeplace}.
			</div>
		</div>
	);
};

Place.propTypes = {
	activerow: PropTypes.string,
	activeplace: PropTypes.string,
	headers: PropTypes.arrayOf(PropTypes.string).isRequired,
	rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};