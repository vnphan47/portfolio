import React, { Fragment } from 'react';

export const LetConnect = ({ isNotShowDesignedBy = false, isShowOnlyDesignedBy = false }) => {
	const _handleClickSocial = (url) => {
		window.open(url, '_blank');
	};
	const _renderContent = () => {
		if (isShowOnlyDesignedBy) return null;

		return (
			<Fragment>
				<h3 className='txt-title'>let’s connect</h3>
				<div className='letconnect__desc'>
					Any questions, collaboration inquiries, or simply wish to say hello, feel free
					to get in touch through:
				</div>
				<a className='letconnect__mail' href='mailto:syrenaphan47@gmail.com'>
					syrenaphan47@gmail.com
				</a>
				<div className='letconnect__social'>
					<img
						src='/images/main/ball.png'
						alt='ball'
						onClick={() => _handleClickSocial('https://dribbble.com/pn_lanvyy')}
					/>
					<img
						src='/images/main/ins.png'
						alt='ins'
						onClick={() => _handleClickSocial('https://www.instagram.com/pn_lanvyy/')}
					/>
				</div>
			</Fragment>
		);
	};

	const _renderDesignedBy = () => {
		if (isNotShowDesignedBy) return null;

		return (
			<p className='letconnect__designed'>
				Website is designed by <a href='#'>Vy Phan</a>
			</p>
		);
	};

	return (
		<div className='letconnect'>
			{_renderContent()}
			{_renderDesignedBy()}
		</div>
	);
};
