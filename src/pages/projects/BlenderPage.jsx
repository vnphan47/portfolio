import React, { Fragment } from 'react';
import { ProjectHeader } from './ProjectHeader';
import { LineDots } from '../../ components/LineDots';
import { LetConnect } from '../portfolio/LetConnect';
import { useWindowSize } from '../../hooks/useWindowSize';

export const BlenderPage = () => {
	const { width } = useWindowSize();

	const _renderImages = () => {
		if (width <= 768)
			return (
				<div>
					<img
						className='img-full'
						src='/images/blender/cozybedroom.png'
						alt=''
					/>
					<img src='/images/blender/isometricblender(1).png' alt='' />
					<img src='/images/blender/Cactus(1).png' alt='' />
				</div>
			);

		return (
			<Fragment>
				<div className='col-1'>
					<img src='/images/blender/cozybedroom.png' alt='' />
					<img src='/images/blender/isometricblender(1).png' alt='' />
					<img src='/images/blender/Cactus(1).png' alt='' />
				</div>
			</Fragment>
		);
	};

	return (
		<div className='blender'>
			<ProjectHeader heading='BLENDER 3D ART' />
			<LineDots />
			<div className='container'>
				<div className='blender__grid'>{_renderImages()}</div>
			</div>
			<LineDots />
			<LetConnect />
		</div>
	);
};
