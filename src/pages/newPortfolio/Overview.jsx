import React from 'react';
import TitlePortfolio from './TitlePortfolio';

const Overview = () => {
	return (
		<div className='container overview'>
			<TitlePortfolio number={'01'} title={'Project Overview'} />
			<div className='grid'>
				<div className='overview__box'>
					<h4 className='overview__box--title'>Challenge</h4>
					<p className='overview__box--desc'>
						We want to develop an effective{' '}
						<strong>Sentiment Analysis Dashboard</strong> that integrates Data and AI
						from all NFTs communities into the Solana Blockchain.
					</p>
				</div>
				<div className='overview__box'>
					<h4 className='overview__box--title'>Goal</h4>
					<p className='overview__box--desc'>
						Provide NFT enthusiasts, collectors, and investors with the tools they need
						to make informed financial decisions while fostering a more transparent and
						trustworthy NFT ecosystem.
					</p>
				</div>

				<div className='overview__box'>
					<div className='divider'></div>
					<div className='wrap-boxRole'>
						<div className='role'>
							<h4 className='overview__box--title'>My Role</h4>
							<div className='wrap-role'>
								<div className='overview__box--text'>
									<p>UX Research</p>
									<p>Visual Design</p>
									<p>User Flow</p>
								</div>
								<div className='overview__box--text'>
									<p>Wireframes</p>
									<p>Prototyping</p>
									<p>NFT Artist</p>
								</div>
							</div>
						</div>
						<div className='tools'>
							<h4 className='overview__box--title'>Tools</h4>
							<div className='tools__image'>
								<img src='/images/newPortfolio/logos_figma.png' alt='logos_figma' />
								<img
									src='/images/newPortfolio/logos_adobe-illustrator.png'
									alt='illustrator'
								/>
							</div>
						</div>
					</div>
				</div>

				<img
					src='/images/newPortfolio/Layer 1.png'
					alt=''
					className='overview__box--robos'
				/>
			</div>
		</div>
	);
};

export default Overview;
