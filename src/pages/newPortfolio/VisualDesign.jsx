import React from 'react';
import TitlePortfolio from './TitlePortfolio';

const VisualDesign = () => {
	return (
		<div className='visual'>
			<div className='container'>
				<TitlePortfolio number={'07'} title={'Visual Design'} isDark isReverse />
				<div className='box'>
					<div className='box__img large'>
						<img src='/images/newPortfolio/Home Demo 2.png' alt='' />
					</div>
					<div className='box__text'>
						<h4 className='box__text--title'>Home Page</h4>
						<p className='box__text--desc'>
							Users land when they first visit the website.
						</p>
					</div>
				</div>
				<div className='box'>
					<div className='box__img '>
						<img src='/images/newPortfolio/wallet.png' alt='' />
					</div>
					<div className='box__text'>
						<h4 className='box__text--title'>Login / Registration</h4>
						<p className='box__text--desc'>
							Simplified user registration or log in by connecting to their crypto and
							NFT wallet
						</p>
					</div>
				</div>
				<div className='box'>
					<div className='box__img '>
						<div className='wrap-arrow'>
							<img src='/images/newPortfolio/launches1.png' alt='' />
							<img
								src='/images/newPortfolio/Vector 25.png'
								alt=''
								className='arrow'
							/>
							<img
								src='/images/newPortfolio/Vector 25.png'
								alt=''
								className='arrow'
							/>
						</div>
					</div>
					<div className='box__text'>
						<h4 className='box__text--title'>Upcoming Launches</h4>
						<p className='box__text--desc'>
							A central hub for users to stay informed about what's on the horizon and
							plan their engagement accordingly
						</p>
						<p className='box__text--desc'>
							Each NFT Collection will have a specific sentiment (
							<span className='green'>Positive</span>,{' '}
							<span className='yellow'>Neutral</span>,{' '}
							<span className='red'>Negative</span>) to determine{' '}
							<span className='orange'>Hype</span> of each collection.
						</p>
						<p className='box__text--desc'>
							We also analyze mood from emotions to see if people are:{' '}
							<span className='green'>Happy</span>,{' '}
							<span className='yellow'>Sad</span>, <span className='red'>Angry</span>
						</p>
					</div>
				</div>
				<div className='box reverse'>
					<div className='box__img small'>
						<img src='/images/newPortfolio/collection.png' alt='' />
					</div>
					<div className='box__text'>
						<h4 className='box__text--title'>My Collection</h4>
						<p className='box__text--desc'>
							Major role - allow users to keep track of their favorite or collected
							items in an organized manner. Also, the{' '}
							<strong>Spending Summary</strong> graph provides users with insights
							into their spending patterns or investments related to their
							collections.
						</p>
					</div>
				</div>
				<div className='box__text'>
					<h4 className='box__text--title'>More Screens</h4>
				</div>
			</div>
			<img
				src='/images/newPortfolio/ROBOS Display.png'
				alt='ROBOS'
				className='img-more-screen'
			/>
		</div>
	);
};

export default VisualDesign;
