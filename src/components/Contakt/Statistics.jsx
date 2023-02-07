import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
	return (
		<div>
			<p className="text-center my-2">Good: {good}</p>
			<p className="text-center my-2">Neutral: {neutral}</p>
			<p className="text-center my-2">Bad: {bad}</p>
			<p className="text-center my-2">Total: {total}</p>
			<p className="text-center my-2">Positive feedback: {positiveFeedback}%</p>
		</div>
	);
};

Statistics.propTypes = {
	good: PropTypes.number,
	neutral: PropTypes.number,
	bad: PropTypes.number,
	total: PropTypes.number,
	positiveFeedback: PropTypes.number,
};

export default Statistics;