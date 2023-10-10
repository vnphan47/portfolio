import React from 'react';
import IconQuotes from '../../icons/IconQuotes';

const Banner = () => {
	return (
		<div className='banner'>
			<div className='wrap_banner'>
				<h2 className='banner__subTitle'>UX/UI CASE STUDY</h2>
				<div className='banner__header'>
					<img src='/images/newPortfolio/robos.png' alt='robos' />
					<p className='banner__header--title'>Analysis Dashboard</p>
				</div>
				<img
					src='/images/newPortfolio/laptop.png'
					alt='laptop'
					className='banner__laptop'
				/>
				<div className='banner__quotes'>
					<IconQuotes />
					<h2>A Sentimental Analysis Dashboard for NFT Traders</h2>
					<IconQuotes isRight />
				</div>
			</div>
			<div className='wrap-color' />
		</div>
	);
};

export default Banner;
