import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../ components/Header';
import Footer from '../ components/Footer';

export const Template = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		document.documentElement.scrollIntoView();
	}, [location.pathname]);

	return (
		<Fragment>
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};
