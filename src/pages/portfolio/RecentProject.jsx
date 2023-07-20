import React from 'react';

export const RecentProject = () => {
	const listProject = [
		{
			src: '/images/main/NFT.png',
			title: 'FREELANCE NFT ARTIST',
		},
		{
			src: '/images/main/VGT.png',
			title: 'VEGGIES GOT TALENT!',
		},
		{
			src: '/images/main/Talkshow.png',
			title: 'TALKSHOW “ABOUT ME”',
		},
		{
			src: '/images/main/Personal Art.png',
			title: 'PERSONAL ART',
		},
	];

	const _renderProject = () => {
		return listProject.map((item, index) => (
			<div className='card'>
				<img src={item.src} alt={item.title} />
				<h5>{item.title}</h5>
			</div>
		));
	};

	return (
		<div className='recent_projects'>
			<h3 className='txt-title'>recent projects</h3>
			<div className='recent_projects--project'>{_renderProject()}</div>
		</div>
	);
};
