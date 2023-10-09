import React, { useEffect, useRef, useState } from 'react';
import { defaultRouter } from '../routes';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useWindowSize } from '../hooks/useWindowSize';
import IconMail from '../icons/IconMail';

export const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const refDropdown = useRef(null);
	const refButton = useRef(null);

	const { width } = useWindowSize();

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (visible) {
			document.addEventListener('click', handleClickOutside, true);
			document.addEventListener('keydown', handleHideDropdown, true);
		} else {
			document.removeEventListener('click', handleClickOutside, true);
			document.removeEventListener('keydown', handleHideDropdown, true);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
			document.removeEventListener('keydown', handleHideDropdown, true);
		};
	}, [visible]);

	const handleClickOutside = (event) => {
		const elPrevent = refDropdown.current;
		const buttonPrevent = refButton.current;

		if (
			elPrevent &&
			!elPrevent.contains(event.target) &&
			buttonPrevent &&
			!buttonPrevent.contains(event.target)
		) {
			_handleCloseMenu();
		}
	};

	const handleHideDropdown = (event) => {
		const elPrevent = refDropdown.current;
		if (event.keyCode === 27 && elPrevent) {
			_handleCloseMenu();
		}
	};

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
					src='/images/main/logo_vyphan.png'
					alt='log'
					onClick={() => navigate('/')}
				/>
			</div>
			<div className='menu-wrapper'>
				{width <= 768 && (
					<div ref={refButton} className='menu-toggle' onClick={_handleClickMenu}></div>
				)}

				<div ref={refDropdown} className={classNames('nav', { active: visible })}>
					{defaultRouter.map((item) => {
						if (!item.isNavlink) return null;

						return (
							<Link
								key={item.path}
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

					<div className='nav__link box btn-flat' onClick={_handleClickContact}>
						<span>Let’s Connect</span>
						<IconMail />
					</div>
				</div>
			</div>
		</div>
	);
};
