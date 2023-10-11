import classNames from 'classnames';
import React, { useState } from 'react';
import { LIST_BUTTON, LIST_ILLUSTRATION, LIST_UI_PORTFOLIO } from './constants';

const PortfolioHomePage = () => {
	const [active, setActive] = useState(LIST_BUTTON[0]);

	const _renderContent = () => {
		switch (active.id) {
			case 1:
				return (
					<div className='portfolio-intro__content--ui'>
						{LIST_UI_PORTFOLIO.map(({ id, title, sub, img }) => (
							<div
								key={id}
								className='item'
								style={{ backgroundImage: `url("${img}")` }}
								data-aos='fade-zoom-in'
								data-aos-duration='1000'
							>
								<div className='item__text'>
									<h4 className='item__text--title'>{title}</h4>
									<p className='item__text--sub'>{sub}</p>
								</div>
							</div>
						))}
					</div>
				);

			case 2: {
				return (
					<div className='portfolio-intro__content--illustration'>
						{LIST_ILLUSTRATION.map(({ id, title, src }) => (
							<div
								key={id}
								className='item'
								style={{ backgroundImage: `url("${src}")` }}
								data-aos='fade-zoom-in'
								data-aos-duration='1000'
							>
								<div className='item__text'>
									<h4 className='item__text--title'>{title}</h4>
								</div>
							</div>
						))}
					</div>
				);
			}

			default:
				return null;
		}
	};

	return (
		<div className='container portfolio-intro'>
			<div className='portfolio-intro__header'>
				<h2 className='portfolio-intro__header--title'>Portfolio</h2>
				<div className='portfolio-intro__header--buttons'>
					{LIST_BUTTON.map((item) => (
						<div
							key={item.id}
							className={classNames('btn-flat', { active: item.id === active.id })}
							onClick={() => setActive(item)}
						>
							{item.title}
						</div>
					))}
				</div>
			</div>
			<div className='portfolio-intro__content'>{_renderContent()}</div>
		</div>
	);
};

export default PortfolioHomePage;
