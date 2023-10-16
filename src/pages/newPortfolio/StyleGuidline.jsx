import React from 'react';
import TitlePortfolio from './TitlePortfolio';

const StyleGuidline = () => {
	return (
		<div className='styleGuid'>
			<div className='container'>
				<TitlePortfolio number={'06'} title={'Style Guidline'} />
				<p className='styleGuid__desc'>
					The combination of these colors provide a modern, neutral aesthetic that is
					commonly seen in technology-related products and services.
				</p>
			</div>
			<div className='styleGuid__middle'>
				<div className='grid '>
					<div className='wrap-bg'>
						<div className='styleGuid__middle--left'>
							<h4 className='styleGuid__title'>Color</h4>
							<img src='/images/newPortfolio/telephone.png' alt='telephone' />
						</div>
					</div>
					<div className='styleGuid__middle--right'>
						<h4 className='styleGuid__title'>Typography</h4>
						<div className='fontSize'>
							<p id='inter'>Inter</p>
							<p id='aa'>Aa</p>
						</div>
						<p className='fontSize__desc'>
							The quick brown fox jumps over the lazy dogs
						</p>
						<div className='fontWeight'>
							<span style={{ fontWeight: '700' }}>Bold</span>
							<span style={{ fontWeight: '600' }}>Semi Bold</span>
							<span style={{ fontWeight: '500' }}>Medium</span>
							<span style={{ fontWeight: '400' }}>Regular</span>
						</div>
					</div>
				</div>
			</div>
			<div className='container iconGraphy'>
				<h4 className='styleGuid__title'>Icongraphy</h4>
				<div className='grid'>
					<div className='iconGraphy__box'>
						<div className='iconGraphy__box--img'>
							<img src='/images/newPortfolio/Group 68.png' alt='icon' />
						</div>
						<h5 className='iconGraphy__box--title'>Icon set</h5>
					</div>
					<div className='iconGraphy__box'>
						<div className='iconGraphy__box--img'>
							<img src='/images/newPortfolio/icongroup.png' alt='icon' />
						</div>
						<h5 className='iconGraphy__box--title'>Emoji set</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StyleGuidline;
