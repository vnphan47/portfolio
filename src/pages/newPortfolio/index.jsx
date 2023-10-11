import React from 'react';
import Banner from './Banner';
import Overview from './Overview';
import Process from './Process';
import UserFlow from './UserFlow';
import WireFrame from './WireFrame';
import StyleGuidline from './StyleGuidline';

const Portfolio = () => {
	return (
		<div className='wrapper'>
			<Banner />
			<Overview />
			<Process />
			<UserFlow />
			<WireFrame />
			<StyleGuidline />
		</div>
	);
};

export default Portfolio;
