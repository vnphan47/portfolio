import React from 'react';
import { useNavigate } from 'react-router-dom';

export const RecentProject = () => {
	const navigate = useNavigate();

	const listProject = [
		{
			src: '/images/main/NFT.png',
			title: 'FREELANCE NFT ARTIST',
			hover: '/images/main/Property 1=hover2.png',
			path: '/nft',
		},
		{
			src: '/images/main/VGT.png',
			title: 'VEGGIES GOT TALENT!',
			hover: '/images/main/Property 1=hover-1.png',
			path: '/veggies',
		},
		{
			src: '/images/main/Talkshow.png',
			title: 'TALKSHOW “ABOUT ME”',
			hover: '/images/main/Property 1=hover-2.png',
			path: '/talkshow',
		},
		{
			src: '/images/main/Personal Art.png',
			title: 'PERSONAL ART',
			hover: '/images/main/Property 1=hover.png',
			path: '/art',
		},
	];

	const _renderProject = () => {
		return listProject.map((item, index) => (
			<div className='card'>
				<img
					key={index.toString()}
					src={item.src}
					alt={item.title}
					img-src={item.src}
					img-hover={item.hover}
					onMouseOver={_handleMouse}
					onMouseOut={_handleMouse}
					onClick={() => _handleClick(item.path)}
				/>
				<h5>{item.title}</h5>
			</div>
		));
	};

	const _handleMouse = (e) => {
		switch (e.type) {
			case 'mouseout':
				e.target.src = e.target.attributes['img-src'].value;
				break;
			case 'mouseover':
				e.target.src = e.target.attributes['img-hover'].value;
				break;
			default:
				return;
		}
	};

	const _handleClick = (path) => {
		navigate(path);
	};

	return (
		<div className='recent_projects container'>
			<h3 className='txt-title'>recent projects</h3>
			<div className='recent_projects__project'>{_renderProject()}</div>
		</div>
	);
};
