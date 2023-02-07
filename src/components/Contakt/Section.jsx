import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
	return (
		<section>
			<h2 className="text-center my-2">{title}</h2>
			{children}
		</section>
	);
};

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.element,
};
export default Section;