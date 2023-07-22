import React, { useState } from 'react';
import { defaultRouter } from '../routes';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useWindowSize } from '../hooks/useWindowSize';

export const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { width } = useWindowSize();

	const [visible, setVisible] = useState(false);

	const _handleClickMenu = () => {
		setVisible((prev) => !prev);
	};

	const _handleCloseMenu = () => {
		setVisible(false);
	};

	const _handleClickContact = () => {
		document.querySelector('.letconnect').scrollIntoView();
		_handleCloseMenu();
	};

	return (
		<div className='header'>
			<div>
				<img
					className='logo'
					src='/images/main/Logo.png'
					alt='log'
					onClick={() => navigate('/')}
				/>
			</div>
			<div className='menu-wrapper'>
				{width <= 768 && <div class='menu-toggle' onClick={_handleClickMenu}></div>}

				<div className={classNames('nav', { active: visible })}>
					{defaultRouter.map((item) => {
						if (!item.isNavlink) return null;

						return (
							<Link
								to={item.path}
								className={classNames('nav__link', {
									'--active': location.pathname === item.path,
								})}
								onClick={_handleCloseMenu}
							>
								{item.title}
							</Link>
						);
					})}

					<div className='nav__link' onClick={_handleClickContact}>
						Contact
					</div>
				</div>
			</div>
		</div>
	);
};
