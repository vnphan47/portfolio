import React from 'react';
import { ProjectHeader } from './ProjectHeader';
import { LineDots } from '../../ components/LineDots';
import { LetConnect } from '../portfolio/LetConnect';

export const PersonalArt = () => {
	return (
		<div className='art'>
			<div className='container'>
				<ProjectHeader heading='PERSONAL ART' />
			</div>
			<LineDots />
			<div className='container'>
				<div className='art__grid'>
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
				</div>
			</div>

			<LineDots />
			<LetConnect />
		</div>
	);
};
