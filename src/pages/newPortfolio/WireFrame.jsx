import React from 'react';
import TitlePortfolio from './TitlePortfolio';
import { useWindowSize } from '../../hooks/useWindowSize';

const WireFrame = () => {
	const { width } = useWindowSize();

	return (
		<div className='wireframe'>
			<div className='container'>
				<TitlePortfolio number={'05'} title={'Wireframe'} isDark />
				<p className='wireframe__desc'>
					Here are the high fidelity wireframe which represent a detailed and refined
					representation of a user interface (UI). It helps the stakeholders visualize the
					design's aesthetics and functionality before moving on to the actual development
					phase
				</p>
				<img
					src={`/images/newPortfolio/Wireframe${width <= 768 ? '2' : ''}.png`}
					alt='Wireframe'
				/>
			</div>
		</div>
	);
};

export default WireFrame;
