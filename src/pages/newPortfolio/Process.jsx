import React from 'react';
import TitlePortfolio from './TitlePortfolio';

const Process = () => {
	return (
		<div
			className='process'
			// style={{ backgroundImage: `url("/images/newPortfolio/kzBthAcuJJpr.png")` }}
		>
			<TitlePortfolio number={'02'} title={'Design Process'} isDark isReverse />
			<img src='/images/newPortfolio/kzBthAcuJJpr.png' alt='' />
		</div>
	);
};

export default Process;
