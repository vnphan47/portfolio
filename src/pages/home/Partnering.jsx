import React from 'react';
import IconPartnering from '../../icons/IconPartnering';

const Partnering = () => {
	const LIST_ITEM = [
		{
			id: 1,
			title: 'UX/UI Design',
			desc: 'Dedicate to elevating your brand through exceptional user experiences',
			icon: <IconPartnering />,
		},
		{
			id: 2,
			title: 'UX/UI Design',
			desc: 'Dedicate to elevating your brand through exceptional user experiences',
			icon: <IconPartnering isWeb />,
		},
		{
			id: 3,
			title: 'UX/UI Design',
			desc: 'Dedicate to elevating your brand through exceptional user experiences',
			icon: <IconPartnering isIllustrations />,
		},
	];

	return (
		<div className='wrapper partnering'>
			<h2 className='partnering__title'>
				Partnering with brands and agencies to deliver impactful results.
			</h2>
			<div className='partnering__items'>
				{LIST_ITEM.map(({ id, title, desc, icon }) => (
					<div key={id} className='partnering__item'>
						{icon}
						<h3>{title}</h3>
						<p>{desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Partnering;
