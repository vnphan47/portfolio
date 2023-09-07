import React from 'react';
import { ProjectHeader } from './ProjectHeader';
import { TitleBox } from '../../ components/TitleBox';
import { LetConnect } from '../portfolio/LetConnect';
import { useWindowSize } from '../../hooks/useWindowSize';

export const CookBook = () => {
	const { width } = useWindowSize();

    const _renderImages = () => {
        return (
            <div className='cookbook_mockup'>
                <img 
                    className='image-full'
                    src='/images/cookbook/Mock1.png' alt='mockup1'
                />
                <img 
                    className='image-full'
                    src='/images/cookbook/Mock2.png' alt='mockup2'
                />
                <img 
                    className='image-full'
                    src='/images/cookbook/Mock3.png' alt='mockup3'
                />
                <img 
                    className='image-full'
                    src='/images/cookbook/Mock4.png' alt='mockup4'
                />
                <img 
                    className='image-full'
                    src='/images/cookbook/Mock5.png' alt='mockup5'
                />
            </div>
        );
    };

    return (
		<div className='cookbook'>
			<ProjectHeader
				heading='COLOR, COOK, & EAT'
				description='Color, Cook, & Eat is one-of-a-kind activity book is designed to engaged school-aged childre
                through a perfect blend of coloring and cooking. This book combines creativity with nutrition education for kids. '		
			/>
            <div className='container'>
                <div className='cookbook__pic'> {_renderImages()}</div>
                
            </div>       
        <LetConnect />
        </div>
    );
};