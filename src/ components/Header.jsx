import React from 'react';
import { defaultRouter } from '../routes';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<div className='header'>
			<div>
				<img className='logo' src='/images/main/logo.png' alt='log' />
			</div>
			<div className='nav'>
				{defaultRouter.map((item) => (
					<Link to={item.path} className='nav__link'>
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
};
