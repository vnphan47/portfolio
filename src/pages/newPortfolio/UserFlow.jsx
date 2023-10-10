import React from 'react';
import TitlePortfolio from './TitlePortfolio';

const UserFlow = () => {
	return (
		<div className='userflow'>
			<div className='container'>
				<TitlePortfolio number={'04'} title={'User Flow'} />
				<img
					className='wrap-image'
					src='/images/newPortfolio/User Flow.png'
					alt='userflow'
				></img>
			</div>
		</div>
	);
};

export default UserFlow;
