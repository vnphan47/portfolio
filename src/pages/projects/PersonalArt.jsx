import React, { Fragment } from 'react';
import { ProjectHeader } from './ProjectHeader';
import { LineDots } from '../../ components/LineDots';
import { LetConnect } from '../portfolio/LetConnect';
import { useWindowSize } from '../../hooks/useWindowSize';

export const PersonalArt = () => {
	const { width } = useWindowSize();

	const _renderImages = () => {
		if (width <= 768)
			return (
				<div>
					<img
						className='img-full'
						src='/images/art/BookHunt.png'
						alt=''
					/>
					<img src='/images/art/Letmetellyou.png' alt='' />
					<img src='/images/art/MyYouth.png' alt='' />
						<img src='/images/art/DoreMi.png' alt='' />
						<img src='/images/art/DoreMonn.png' alt='' />
					
					<img className='img-full' src='/images/art/COMING SOON 1.png' alt='' />
				</div>
			);

		return (
			<Fragment>
				<div className='col-2'>
					<img src='/images/art/Letmetellyou.png' alt='' />
					<img src='/images/art/MyYouth.png' alt='' />
					<img src='/images/art/DoreMi.png' alt='' />
					<img src='/images/art/DoreMonn.png' alt='' />
					<img src='/images/art/BookHunt.png' alt='' />
					<img src='/images/art/COMING SOON 1.png' alt='' />
				</div>
			</Fragment>
		);
	};

	return (
		<div className='art'>
			<ProjectHeader heading='PERSONAL ART' />
			<LineDots />
			<div className='container'>
				<div className='art__grid'>{_renderImages()}</div>
			</div>
<LineDots />
			<LetConnect />
		</div>
	);
};

