import React from 'react';
import { ProjectHeader } from './ProjectHeader';
import { useWindowSize } from '../../hooks/useWindowSize';
import { LineDots } from '../../ components/LineDots';
import { TitleBox } from '../../ components/TitleBox';
import { ButtonP } from '../../ components/ButtonP';

export const FoodPlay = () => {
	const { width } = useWindowSize();
	const _renderButton = () => {
		return (
			<div className='foodplay_buttons'>
				<ButtonP
					text='original site'	
					onClick={() =>
						window.open('https://www.foodplay.com/', '_blank')
					}
					/>
			</div>
		);
	};

	return (
		<div className='foodplay'>
			<ProjectHeader
			heading='WEBSITE REDESIGN'
			description='FOODPLAY PRODUCTIONS LANDING PAGE'
			/> 
		<div className='foodplay_pictures'>
			<div className='foodplay_pic'>
			<img 
                className='image--full'
            	src='/images/foodplay/Group 108.png'
				alt='fpredesign'
		 	/>
			</div>
			{_renderButton()}
		</div>
		<br />
        <br />
		<br />
		<LineDots />
		<br />
        <br />
		<div className='foodplay-overview container'>
		<TitleBox title='Project Overview' boxColor='#DE5A41' boxWidth='94px' />
			<div className='grid'>
				<div className='overview__box'>
				<h4 className='overview__box--title'>Background</h4>
					<p className='overview__box--desc'>
						This is a personal project. <strong>FoodPlay Productions</strong> is an Emmy Award-winning 
						nutrition education organization that offers live theater shows, virtual programming, and video kits to kids.
					</p>
				</div>
			<div className='foodplay_logo'>
				<div className='foodplay_logo'>
				<img
                	className='img-full'
            		src='/images/foodplay/FP-logo.png'
					alt='fplogo'
		 		/>
			</div>
		</div>
		</div>
		
			<div className='grid'>
				<div className='overview__box'>
				<h4 className='overview__box--title'>Problem</h4>
					<p className='overview__box--desc'>
						The original page seems outdated and inconsistent between objects 
					and layouts. The lack of visual appealing can make it less attractive 
					to users. Moreover, the information is placed chaotically which is not user-friendly.
					</p>
				</div>
				<div className='overview__box'>
					<h4 className='overview__box--title'>Goal</h4>
					<p className='overview__box--desc'>
					The goal is to redesign and create a simpler but playful and eye-catching website
					 while preserving the artistic of a nutrition education center. 
					</p>
				</div>
			</div>
			
			
			
		</div>
		<LineDots />  
		<br />
        <br />
		<div className='foodplay-about container'>
		<TitleBox title='Visual Design' boxColor='#DE5A41' boxWidth='94px' />
		</div>
		<div className='foodplay_pictures'>
			<div className='foodplay_pic'>
			<img 
                className='image--full'
            	src='/images/foodplay/FPvisual.png'
				alt='fpredesign'
		 	/>
			<img
                className='img-full'
            	src='/images/foodplay/DesktopFP.png'
				alt='fpredesign2'
		 	/>
			</div>
		</div>
		<br />
        <br />
		<br />
		<LineDots />  
		<br />
		<br />
		
		</div>
	);
};


