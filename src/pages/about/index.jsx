import React from 'react';
import { LineDots } from '../../ components/LineDots';
import { LetConnect } from '../portfolio/LetConnect';
import { TextAboutMe } from './TextAboutMe';
import { ImagesCat } from './ImagesCat';
import { TitleBox } from '../../ components/TitleBox';

export const AboutPage = () => {
	return (
		<div>
			<LineDots />
			<div className='container'>
				<div className='about'>
					<div className='about--left'>
						<img src='/images/about/IMG_6454 1.png' alt='avt' />
						<LetConnect isNotShowDesignedBy />
					</div>
					<div className='about--right'>
						<div className='row-title'>
							<TitleBox title='about me' />
						</div>
						<TextAboutMe />
						<ImagesCat />
					</div>
				</div>
			</div>
			<LineDots />
			<LetConnect isShowOnlyDesignedBy />
		</div>
	);
};
