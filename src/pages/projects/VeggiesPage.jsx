import React from 'react';
import { ProjectHeader } from './ProjectHeader';
import { LineDots } from '../../ components/LineDots';
import { TitleBox } from '../../ components/TitleBox';
import { LetConnect } from '../portfolio/LetConnect';
import { useWindowSize } from '../../hooks/useWindowSize';

export const VeggiesPage = () => {
	const { width, height } = useWindowSize();

	const colors = ['#f15c67', '#81bb5e', '#e8c44b', '#9076a6', '#f09659'];

	const _renderColor = () => {
		const _render = () => {
			return colors.map((item) => (
				<div className='talent__color--item'>
					<div className='circle' style={{ backgroundColor: item }}></div>
					<p className='text'>{item}</p>
				</div>
			));
		};

		return <div className='talent__color'>{_render()}</div>;
	};

	const _renderDesc = () => {
		return (
			<p className='social__desc'>
				Kids around the country (or world!) could create and submit their own short videos
				and ads promoting their favorite fruit or vegetable.
				<br />
				<br />
				Winning videos would be streamed on social media!
			</p>
		);
	};

	return (
		<div className='veggies'>
			<ProjectHeader
				heading='VEGGIES GOT TALENT!'
				description='A take-off on the “America’s Got Talent!” TV Show.'
			/>

			<LineDots />

			<div className='veggies__wrapper veggies__first veggies__grid container'>
				<div className='veggies__wrapper--left'>
					<div className='talent'>
						<img
							className='image--full'
							src='/images/veggies/VGTfinalposter(witheggplant)-01 1.png'
							alt='VGTfinalposter'
						/>
						<p>
							In this program, kids will create and present their own performances to
							promote fruits and veggies to their peers and families.
						</p>
						{width > 768 && _renderColor()}
					</div>
				</div>
				<div className='veggies__wrapper--right'>
					<div className='talent'>
						<img
							className='image--full'
							src='/images/veggies/VGTfinalposter(5-8-23)-01 1.png'
							alt='VGTfinalposter'
						/>
						<img
							className='image--full talent__logo'
							src='/images/veggies/VGTlogo-01 1.png'
							alt='VGTlogo'
						/>
					</div>
				</div>
			</div>
			{width <= 768 && <div className='container container__color'>{_renderColor()}</div>}

			<LineDots />

			<div className='veggies__wrapper veggies__grid container'>
				<div className='veggies__wrapper--left'>
					<img
						className='image--full'
						src='/images/veggies/VGTSocialMediaCOntest(1) 1.png'
						alt='VGTSocialMediaCOntest'
					/>
					{width <= 768 && _renderDesc()}
				</div>
				<div className='veggies__wrapper--right'>
					<div className='social'>
						<TitleBox
							title='social post'
							boxColor='#CCE7C6'
							boxWidth='138px'
							isReverse
						/>
						{width > 768 && _renderDesc()}

						<div className='social__image'>
							<img
								className='image--full'
								src='/images/veggies/ig(1) 1.png'
								alt='VGTSocialMediaCOntest'
							/>
							<img
								className='image--full'
								src='/images/veggies/ig(2) 1.png'
								alt='VGTSocialMediaCOntest'
							/>
						</div>
					</div>
				</div>
			</div>

			<LineDots />

			<div className='veggies__wrapper veggies__third container'>
				<div className='freebies'>
					<TitleBox title='freebies' boxColor='#CCE7C6' boxWidth='138px' />

					<div className='postcards'>
						<div className='postcards__left'>
							<h5>postcards</h5>

							<img
								className='image--full'
								src='/images/veggies/postcardmockup(1) 1.png'
								alt='VGTSocialMediaCOntest'
							/>
						</div>
						<div className='postcards__right'>
							<img
								className='image--full'
								src='/images/veggies/postcard(front)-01 1.png'
								alt='postcard'
							/>
							<img
								className='image--full'
								src='/images/veggies/postcard(back)-01 1.png'
								alt='postcard'
							/>
						</div>
					</div>
					<div className='coloring'>
						<h5>coloring sheets</h5>
						<img
							className='image--full'
							src={`/images/veggies/${width > 1024 ? 'Group 13' : 'Group 47'}.png`}
							alt='Group'
						/>
					</div>
				</div>
			</div>

			<LineDots />
			<LetConnect />
		</div>
	);
};
