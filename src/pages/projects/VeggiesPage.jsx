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
				description='Veggies Got Talent! is a take-off on the "American Got Talent!" TV Show. In this program, kids will create and present their own performances to promote fruits and veggies to their peers and families. '
				footer={_renderColor()}			
			/>

			<div className='veggies__wrapper veggies__first veggies__grid container'>
				<div className='veggies__wrapper--left'>
					<div className='talent'>
						<img
							className='image--full'
							src='/images/veggies/VGTwitheggplant.png'
							alt='VGTfinalposter'
						/>
					</div>
				</div>
				<div className='veggies__wrapper--right'>
					<div className='talent'>
						<img
							className='image--full'
							src='/images/veggies/VGTSocial.png'
							alt='VGTfinalposter'
						/>
					</div>
				</div>
			</div>


			<div className='veggies__wrapper veggies__third container'>
					<div className='coloring'>
						<h5>coloring sheets</h5>
						<img
							className='image--full'
							src={`/images/veggies/Mockup 1.png`}
							alt='coloring'
						/>
					</div>

					<div className='postcards'>
						<div className='postcards__left'>
							<h5>postcards</h5>

							<img
								className='image--full'
								src='/images/veggies/postcardleft.png'
								alt='postcard'
							/>
						</div>
						<div className='postcards__right'>
							<img
								className='image--full'
								src='/images/veggies/postcardright.png'
								alt='postcard'
							/>
						</div>
					</div>
					
			</div>
			<LetConnect />
		</div>
	);
};
