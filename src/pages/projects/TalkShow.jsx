import React from 'react';
import { ProjectHeader } from './ProjectHeader';
import { LetConnect } from '../portfolio/LetConnect';
import { useWindowSize } from '../../hooks/useWindowSize';

export const TalkShow = () => {
	const { width } = useWindowSize();

	const _renderTicket = () => {
		return (
			<div className='talkshow__second--right'>
				<img
					className='image--full'
					src='/images/talkshow/VeTruoc.png'
					alt='ve_mat_truoc'
				/>
				<img
					className='image--full'
					src='/images/talkshow/VeSau.png'
					alt='ve_mat_sau'
				/>
			</div>
		);
	};
	return (
		<div className='talkshow'>
			<ProjectHeader heading='TALKSHOW “ABOUT ME”' />

			<div className='container'>
				<div className='talkshow__first'>
					<img src='/images/talkshow/7mineava 2.png' alt='7mineava' />
					<img src='/images/talkshow/7minebia 1.png' alt='7mineava' />
				</div>
			</div>


			<div className='container'>
				<div className='talkshow__second'>
					<div className='talkshow__second--left'>
						<p>
							<span>Talkshow "About me"</span> is an offline event that 7MINE held in
							Hanoi, Vietnam for not only the LGBT+ community but also for people who
							are interested in it to connect, gain knowledge, and listen to the guest
							stories.
						</p>
						{width <= 768 && _renderTicket()}

						<div className='row__image'>
							<img
								className='image--full'
								src='/images/talkshow/IMG_2584_JPG 1.png'
								alt=''
							/>
							<img
								className='image--full'
								src='/images/talkshow/IMG_2585_JPG 1.png'
								alt=''
							/>
						</div>
					</div>
					{width > 768 && _renderTicket()}
				</div>
			</div>


			<div className='container'>
				<div className='talkshow__third'>
					<img className='img-full' src='/images/talkshow/pic1 1.png' alt='' />
					<img className='' src='/images/talkshow/pic2 1.png' alt='' />
					<img className='' src='/images/talkshow/pic3 1.png' alt='' />
					<img className='img-full' src='/images/talkshow/pic4 1.png' alt='' />
				</div>
			</div>

			<LetConnect />
		</div>
	);
};
