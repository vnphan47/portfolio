import React, { Fragment } from 'react';

export const LetConnect = ({ isNotShowDesignedBy = false, isShowOnlyDesignedBy = false }) => {
	const _renderContent = () => {
		if (isShowOnlyDesignedBy) return null;

		return (
			<Fragment>
				<h3 className='txt-title'>let’s connect</h3>
				<div className='letconnect--desc'>
					Any questions, collaboration inquiries, or simply wish to say hello, feel free
					to get in touch through:
				</div>
				<a className='letconnect--mail' href='mailto:syrenaphan47@gmail.com'>
					syrenaphan47@gmail.com
				</a>
				<div className='letconnect--social'>
					<img src='/images/main/ball.png' alt='ball' />
					<img src='/images/main/ins.png' alt='ins' />
				</div>
			</Fragment>
		);
	};

	const _renderDesignedBy = () => {
		if (isNotShowDesignedBy) return null;

		return (
			<p className='letconnect--designed'>
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
