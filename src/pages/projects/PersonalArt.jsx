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
						src='/images/art/Remini20211019121125488_JPG 2.png'
						alt=''
					/>
					<img src='/images/art/TỚ KỂ CẬU NGHE 2.png' alt='' />
					<img src='/images/art/Anh là thanh xuân 1.png' alt='' />
					<div className='row__image--2'>
						<img src='/images/art/DoreMi Chippies-01 1.png' alt='' />
						<img src='/images/art/DoreMonn Chippies-01 2.png' alt='' />
					</div>
					<img className='img-full' src='/images/art/RarityPos copy 1.png' alt='' />
					<img className='img-full' src='/images/art/COMING SOON 1.png' alt='' />
				</div>
			);

		return (
			<Fragment>
				<div className='col-1'>
					<div>
						<img
							className='img-full'
							src='/images/art/Remini20211019121125488_JPG 2.png'
							alt=''
						/>
						<img src='/images/art/DoreMi Chippies-01 1.png' alt='' />
						<img src='/images/art/DoreMonn Chippies-01 2.png' alt='' />
						<img className='img-full' src='/images/art/COMING SOON 1.png' alt='' />
					</div>
				</div>
				<div className='col-2'>
					<img src='/images/art/TỚ KỂ CẬU NGHE 2.png' alt='' />
					<img src='/images/art/Anh là thanh xuân 1.png' alt='' />
					<img className='img-full' src='/images/art/RarityPos copy 1.png' alt='' />
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
