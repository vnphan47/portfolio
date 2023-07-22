import React, { Fragment, useEffect } from 'react';
import { LineDots } from '../../ components/LineDots';
import { LetConnect } from '../portfolio/LetConnect';
import { TextAboutMe } from './TextAboutMe';
import { ImagesCat } from './ImagesCat';
import { TitleBox } from '../../ components/TitleBox';
import { useWindowSize } from '../../hooks/useWindowSize';

export const AboutPage = () => {
	const { width } = useWindowSize();

	const _renderContent = () => {
		if (width <= 768)
			return (
				<Fragment>
					<TitleBox title='about me' />
					<img className='about__avatar' src='/images/about/IMG_6454 1.png' alt='avt' />
					<div className='about--right'>
						<TextAboutMe />
						<ImagesCat />
					</div>
				</Fragment>
			);

		return (
			<Fragment>
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
			</Fragment>
		);
	};

	return (
		<div>
			<LineDots />
			<div className='container'>
				<div className='about'>{_renderContent()}</div>
			</div>
			<LineDots />
			<LetConnect isShowOnlyDesignedBy={width > 768} />
		</div>
	);
};
