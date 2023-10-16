import classNames from 'classnames';
import React from 'react';

const TitlePortfolio = ({ number, title, isDark = false, isReverse = false }) => {
	return (
		<div className={classNames('portfolio__title', { dark: isDark, reverse: isReverse })}>
			<span className='portfolio__title--number'>{number}</span>
			<h2 className='portfolio__title--text'>{title}</h2>
		</div>
	);
};

export default TitlePortfolio;
