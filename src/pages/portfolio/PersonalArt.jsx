import React from 'react';

export const PersonalArt = () => {
	return (
		<div className='personal'>
			<div className='personal--art'>
				<div className='circle__green'></div>
				<div className='circle__image'>
					<img src='/images/main/Ellipse 15.png' alt='personal_art' />
				</div>
			</div>
			<div className='personal--desc'>
				<div className='personal--desc__first'>Hi there,</div>
				<div className='personal--desc__second'>
					I’m <span>Vy Phan</span>, a freelance illustrator and graphic designer based in
					Massachusetts.
				</div>
			</div>
		</div>
	);
};
