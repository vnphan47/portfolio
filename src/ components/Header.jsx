import React from 'react';
import { defaultRouter } from '../routes';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const Header = () => {
	const location = useLocation();

	return (
		<div className='header'>
			<div>
				<img className='logo' src='/images/main/logo.png' alt='log' />
			</div>
			<div className='nav'>
				{defaultRouter.map((item) => {
					if (!item.isNavlink) return null;

					return (
						<Link
							to={item.path}
							className={classNames('nav__link', {
								'--active': location.pathname === item.path,
							})}
						>
							{item.title}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
