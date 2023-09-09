import React from 'react';
import { ProjectHeader } from './ProjectHeader';
import { LineDots } from '../../ components/LineDots';
import { TitleBox } from '../../ components/TitleBox';
import { LetConnect } from '../portfolio/LetConnect';
import { useWindowSize } from '../../hooks/useWindowSize';

export const VeggiesPage = () => {
	const { width } = useWindowSize();

	const colors = ['#f15c67', '#81bb5e', '#e8c44b', '#9076a6', '#f09659'];

	const _renderColor = () => {
		const _render = () => {
			return colors.map((item) => (
				<div key={item} className='talent__color--item'>
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
				
				To extend the reach, winning acts can be videotaped  and entered into the <i>America's Next Top Vegetable!</i> - a national
				contest which will appear on a variety of social media channels, websites, and compiled into an educational DVD.
				<br />
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
							src='/images/veggies/VGTwitheggplant.png'
							alt='VGTfinalposter'
						/>
						<p>
							<strong>Veggies Got Talent!</strong> is like a marketing campaign for healthy foods coordinated by schools
							or community groups, and performed by students. It's a fun-filled solution to getting kids
							to eat their fruits and veggies!
						</p>
						{width > 768 && _renderColor()}
					</div>
				</div>
				<div className='veggies__wrapper--right'>
					<div className='talent'>
						<img
							className='image--full'
							src='/images/veggies/VGTwithbeet.png'
							alt='VGTfinalposter'
						/>
						<img
							className='image--full talent__logo'
							src='/images/veggies/VGTlogo.png'
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
						src='/images/veggies/VGTSocial.png'
						alt='VGTSocialMediaCOntest'
					/>
					{width <= 768 && _renderDesc()}
				</div>
				<div className='veggies__wrapper--right'>
					<div className='social'>
						<TitleBox
							title='social post'
							boxColor='#CCE7C6'
							boxWidth='100px'

						/>
						{width > 768 && _renderDesc()}

						<div className='social__image'>
							<img
								className='image--full'
								src='/images/veggies/ig(1).png'
								alt='VGTSocialMediaCOntest'
							/>
							<img
								className='image--full'
								src='/images/veggies/ig(2).png'
								alt='VGTSocialMediaCOntest'
							/>
						</div>
					</div>
				</div>
			</div>

			<LineDots />

			<div className='veggies__wrapper veggies__third container'>
				<div className='freebies'>
					<TitleBox title='freebies' boxColor='#CCE7C6' boxWidth='100px' />

					<div className='postcards'>
						<div className='postcards__left'>
							<h5>postcards</h5>

							<img
								className='image--full'
								src='/images/veggies/postcardmockup.png'
								alt='VGTSocialMediaCOntest'
							/>
						</div>
						<div className='postcards__right'>
							<img
								className='image--full'
								src='/images/veggies/postcardleft.png'
								alt='postcard'
							/>
							<img
								className='image--full'
								src='/images/veggies/postcardright.png'
								alt='postcard'
							/>
						</div>
					</div>
					<div className='coloring'>
						<h5>coloring sheets</h5>
						<img
							className='image--full'
							src={`/images/veggies/${width > 1024 ? 'Group 47' : 'Group 47'}.png`}
							alt='Group'
						/>
						<img 
							className='image--full'
							src='/images/veggies/Mockup.png'
							alt='mockup'
						/>
					</div>
				</div>
			</div>

			<LineDots />
			<LetConnect />
		</div>
	);
};