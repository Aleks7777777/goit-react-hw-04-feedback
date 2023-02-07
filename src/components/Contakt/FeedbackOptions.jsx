import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ handleFeedbackClick, options }) => {
	const elements = options.map(option => (
		<button
			key={option}
			name={option}
			onClick={handleFeedbackClick}
			type="button"
			className="btn btn-outline-light "
		>
			{option}
		</button>
	));
	return (
		<div className="d-flex align-items-center justify-content-center w-100">
			<div
				className="btn-group"
				role="group"
				aria-label="Basic outlined example"
			>
				{elements}
			</div>
		</div>
	);
};

FeedbackOptions.propTypes = {
	handleFeedbackClick: PropTypes.func.isRequired,
};
export default FeedbackOptions;