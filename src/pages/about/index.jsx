import React from 'react';
import { LineDots } from '../../ components/LineDots';
import { LetConnect } from '../portfolio/LetConnect';
import { TextAboutMe } from './TextAboutMe';
import { ImagesCat } from './ImagesCat';

export const AboutPage = () => {
	return (
		<div>
			<LineDots />
			<div className='wrapper'>
				<div className='about'>
					<div className='about--left'>
						<img src='/images/about/IMG_6454 1.png' alt='avt' />
						<LetConnect isNotShowDesignedBy />
					</div>
					<div className='about--right'>
						<div className='row-title'>
							<div className='box'></div>
							<h3 className='txt-title'>about me</h3>
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
