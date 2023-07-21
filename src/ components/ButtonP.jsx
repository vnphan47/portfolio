import React from 'react';

export const ButtonP = ({ text = 'Button', ...props }) => {
	return (
		<div className='btn' {...props}>
			{text}
		</div>
	);
};
