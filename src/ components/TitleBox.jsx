import classNames from 'classnames';
import React from 'react';

export const TitleBox = ({
	title = '',
	boxColor = '#B4D9F2',
	boxWidth = '94px',
	isReverse = false,
}) => {
	return (
		<div className={classNames('title-box', { '--reverse': isReverse })}>
			<div className='box' style={{ backgroundColor: boxColor, width: boxWidth }}></div>
			<h3 className='txt-title'>{title}</h3>
		</div>
	);
};
