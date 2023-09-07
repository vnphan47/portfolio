import { AboutPage } from '../pages/about';
import { ContactPage } from '../pages/contact';
import { Portfolio } from '../pages/portfolio';
import { NftArtist } from '../pages/projects/NftArtist';
import { PersonalArt } from '../pages/projects/PersonalArt';
import { TalkShow } from '../pages/projects/TalkShow';
import { VeggiesPage } from '../pages/projects/VeggiesPage';
import { BlenderPage } from '../pages/projects/BlenderPage';
import { CookBook } from '../pages/projects/CookBook';

export const defaultRouter = [
	{
		path: '/',
		component: <Portfolio />,
		exact: true,
		icon: null,
		title: 'Portfolio',
		isNavlink: true,
	},
	{
		path: '/about',
		component: <AboutPage />,
		exact: true,
		icon: null,
		title: 'About',
		isNavlink: true,
	},
	{
		path: '/veggies',
		component: <VeggiesPage />,
		exact: true,
		icon: null,
		title: 'veggies',
		isNavlink: false,
	},
	{
		path: '/nft',
		component: <NftArtist />,
		exact: true,
		icon: null,
		title: 'NftArtist',
		isNavlink: false,
	},
	{
		path: '/talkshow',
		component: <TalkShow />,
		exact: true,
		icon: null,
		title: 'Talkshow',
		isNavlink: false,
	},
	{
		path: '/art',
		component: <PersonalArt />,
		exact: true,
		icon: null,
		title: 'Art',
		isNavlink: false,
	},
	{
		path: '/blender',
		component: <BlenderPage />,
		exact: true,
		icon: null,
		title: 'blender',
		isNavlink: false,
	},
	{
		path: '/cookbook',
		component: <CookBook />,
		exact: true,
		icon: null,
		title: 'cookbook',
		isNavlink: false,
	},
];
