import React from 'react';
import { ListSocial } from '../pages/portfolio/LetConnect';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='wrapper'>
				<div className='footer__desc'>© 2023 Vy Phan. All rights reserved.</div>
				<div className='footer__social'>
					<ListSocial />
				</div>
			</div>
		</div>
	);
};

export default Footer;
