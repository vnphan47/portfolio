import React from 'react';

export const PersonalArt = () => {
	return (
		<div className='personal container'>
			<div className='personal__art'>
				<div className='circle--green'></div>
				<div className='circle--image'>
					<img src='/images/main/Ellipse 15.png' alt='personal_art' />
				</div>
			</div>
			<div className='personal__desc'>
				<div className='personal__desc--first'>Hi there,</div>
				<div className='personal__desc--second'>
					I’m <span>Vy Phan</span>, a freelance illustrator and graphic designer based in
					the United States.
				</div>
			</div>
		</div>
	);
};
