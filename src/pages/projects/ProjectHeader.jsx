import React from 'react';

export const ProjectHeader = ({ heading = '', description = '' }) => {
	return (
		<div className='header__project'>
			<h2 className='header__project--heading'>{heading}</h2>
			<p className='header__project--desc'>{description}</p>
		</div>
	);
};
