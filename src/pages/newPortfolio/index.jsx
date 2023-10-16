import React from 'react';
import Banner from './Banner';
import Overview from './Overview';
import Process from './Process';
import UserFlow from './UserFlow';
import WireFrame from './WireFrame';
import StyleGuidline from './StyleGuidline';
import Research from './Research';
import VisualDesign from './VisualDesign';

const Portfolio = () => {
	return (
		<div id='portfolio' className='wrapper'>
			<Banner />
			<Overview />
			<Process />
			<Research />
			<UserFlow />
			<WireFrame />
			<StyleGuidline />
			<VisualDesign />
			<a className='scrollToTop' href='#portfolio'>
				Back to top ↑
			</a>
		</div>
	);
};

export default Portfolio;
