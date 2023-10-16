import React, { Fragment } from 'react';
import IconPartnering from '../../icons/IconPartnering';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useWindowSize } from '../../hooks/useWindowSize';

const Partnering = () => {
	const { width } = useWindowSize();
	const LIST_ITEM = [
		{
			id: 1,
			title: 'UX/UI Design',
			desc: 'Dedicate to elevating your brand through exceptional user experiences',
			icon: <IconPartnering />,
		},
		{
			id: 2,
			title: 'Web/Mobile Design',
			desc: 'Ensure your digital presence is user-friendly and unique',
			icon: <IconPartnering isWeb />,
		},
		{
			id: 3,
			title: 'Illustrations/ Graphics',
			desc: 'Bring your ideas and concepts to live in a visually appealing manner',
			icon: <IconPartnering isIllustrations />,
		},
	];

	const settings = {
		className: 'partnering__items',
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		arrows: false,
	};

	const _renderItems = () => {
		return LIST_ITEM.map(({ id, title, desc, icon }) => (
			<div key={id} className='partnering__item'>
				{icon}
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		));
	};

	const _renderSlide = () => {
		return <Slider {...settings}>{_renderItems()}</Slider>;
	};

	return (
		<Fragment>
			<div className='wrapper partnering'>
				<h2 className='partnering__title'>
					Partnering with brands and agencies to deliver impactful results.
				</h2>
				{width < 768 ? (
					_renderSlide()
				) : (
					<div className='partnering__items'>{_renderItems()}</div>
				)}
			</div>
		</Fragment>
	);
};

export default Partnering;
