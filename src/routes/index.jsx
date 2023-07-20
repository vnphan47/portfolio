import { AboutPage } from '../pages/about';
import { ContactPage } from '../pages/contact';
import { Portfolio } from '../pages/portfolio';

export const defaultRouter = [
	{
		path: '/',
		component: <Portfolio />,
		exact: true,
		icon: null,
		title: 'Portfolio',
		isLayout: false,
		isSideBar: false,
	},
	{
		path: '/about',
		component: <AboutPage />,
		exact: true,
		icon: null,
		title: 'About',
		isLayout: false,
		isSideBar: false,
	},
	{
		path: '/contact',
		component: <ContactPage />,
		exact: true,
		icon: null,
		title: 'Contact',
		isLayout: false,
		isSideBar: false,
	},
];
