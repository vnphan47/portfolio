import React, { Fragment } from 'react';
import IconSocial from '../../icons/IconSocial';

export const LetConnect = ({ isNotShowDesignedBy = false, isShowOnlyDesignedBy = false }) => {
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
				<ListSocial />
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

export const ListSocial = () => {
	const _handleClickSocial = (url) => {
		window.location.href = url;
	};

	return (
		<Fragment>
			<div className='letconnect__social'>
				<div
					className='letconnect__social--item'
					onClick={() => _handleClickSocial('https://dribbble.com/pn_lanvyy')}
				>
					<IconSocial isDribble />
				</div>
				<div
					className='letconnect__social--item'
					onClick={() => _handleClickSocial('https://www.instagram.com/pn_lanvyy/')}
				>
					<IconSocial />
				</div>
				<div
					className='letconnect__social--item'
					onClick={() => _handleClickSocial('https://www.behance.net/vyphannn')}
				>
					<IconSocial isBe />
				</div>
			</div>
		</Fragment>
	);
};
