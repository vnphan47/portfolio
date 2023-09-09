import React from 'react';
import { ProjectHeader } from './ProjectHeader';
import { TitleBox } from '../../ components/TitleBox';
import { LineDots } from '../../ components/LineDots';
import { LetConnect } from '../portfolio/LetConnect';
import { useWindowSize } from '../../hooks/useWindowSize';

export const CookBook = () => {
	const { width } = useWindowSize();


    return (
		<div className='cookbook'>
			<ProjectHeader
				heading='COLOR, COOK, & EAT'
				description='An activity book combines creativity with nutrition education for kids. '		
			/>
            <LineDots />

            <div className='cookbook-about container'>
            <div className='row__first'>
					<div className='nft-about__left'>
						<TitleBox title='about' boxColor='#c7e0be' boxWidth='100px' />
						<p className='nft-about__left--desc'>
							<strong>Color, Cook, & Eat</strong> is one-of-a-kind activity book is designed to engaged school-aged 
                            children through a perfect blend of coloring and cooking.
							<br />
							<br />There's a total of 45 coloring pages, including 31 Vegetable and 14 Group Act illustrations with
                            easy-to-follow recipes that kids can prepare with their families.
                            
						</p>
					</div>
					<div className='nft-about__right'>
						<img className='image--full' src='/images/cookbook/CoverMockup.png' alt='covermockup' />
                    
					</div>
                    </div>
                    
            <LineDots />
                    
                    <br />
                    <br />
                
                <div className='cookbook__pic'> 
                    <div className='illustrations'>
                    <TitleBox title='illustrations' boxColor='#c7e0be' boxWidth='100px' />
                        <div className='vegetables'>
                            <h5>Vegetables with Recipes</h5>
                            
                            <img 
                                className='image--full'
                                src='/images/cookbook/Mock8.png'
								alt='mockup8'
							/>
                            <img 
                                className='image--full'
                                src='/images/cookbook/Mock2.png'
								alt='mockup2'
							/>
                            <img 
                                className='image--full'
                                src='/images/cookbook/Mock7a.png'
								alt='mockup7a'
							/>
                             <img 
                                className='image--full'
                                src='/images/cookbook/Mock3.png'
								alt='mockup3'
							/> 
                        </div>
                        <div className='groupact'>
                            <h5> Group Acts with Instructions</h5>
                            <img 
                                className='image--full'
                                src='/images/cookbook/Mock6.png'
								alt='mockup6'
							/> 
                            <img 
                                className='image--full'
                                src='/images/cookbook/Mock4.png'
								alt='mockup4'
							/> 
                            <img 
                                className='image--full'
                                src='/images/cookbook/Mock5.png'
								alt='mockup5'
							/> 
                        </div>
                    </div>
                    
                
                <br />
                <br />

                </div>
                
            </div>  
            <LineDots />     
        <LetConnect />
        </div>
    );
};