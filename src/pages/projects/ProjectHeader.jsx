import React from 'react';

export const ProjectHeader = ({ heading = '', description = '', footer }) => {
	return (
		<div className='header__project container'>
			<h2 className='header__project--heading'>{heading}</h2>
			<p className='header__project--desc'>{description}</p>
			{footer}
		</div>
	);
};
