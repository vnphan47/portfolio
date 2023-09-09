import React, { useEffect, useRef, useState } from 'react';
import { ProjectHeader } from './ProjectHeader';
import { ButtonP } from '../../ components/ButtonP';
import { LineDots } from '../../ components/LineDots';
import { TitleBox } from '../../ components/TitleBox';
import { chunkArray } from '../../helpers';
import { LetConnect } from '../portfolio/LetConnect';
import { useWindowSize } from '../../hooks/useWindowSize';

export const NftArtist = () => {
	const { width } = useWindowSize();
	const [sneaks, setSneaks] = useState([]);
	const [attributes, setAttributes] = useState([]);

	const refSneak = useRef(null);

	useEffect(() => {
		fetchFileNames();
	}, []);

	const chippies = [
		{
			src: '/images/nft/0(1) Twitter.png',
			title: 'Twitter',
		},
		{
			src: '/images/nft/7 ME.png',
			title: 'Magic Eden',
		},
		{
			src: '/images/nft/16 Discord.png',
			title: 'Discord',
		},
	];

	const fetchFileNames = () => {
		const fileContext = require.context(
			'/public/images/nft/sneak',
			false,
			/\.(pdf|jpg|jpeg|png|gif)$/
		);
		const fileNames = fileContext.keys().map(fileContext);
		setSneaks(fileNames);
	};

	const _renderChippies = () => {
		return chippies.map((item, index) => {
			return (
				<div key={index.toString()} className='chippy'>
					<img src={item.src} alt={item.title} />
					<span>{item.title}</span>
				</div>
			);
		});
	};


	const _renderSneaks = () => {
		const columns = chunkArray(sneaks, width > 768 ? 1 : 1);

		return columns.map((column, indexCol) => (
			<div key={indexCol.toString()} className='nft-sneak__column'>
				{column.map((item, index) => (
					<img
						className='image--full'
						src={item}
						key={index.toString()}
						alt={index.toString()}
					/>
				))}
			</div>
		));
	};

	const _renderAttributes = () => {
		const columns = chunkArray(attributes, width > 768 ? 3 : 9);

		return columns.map((column, indexCol) => (
			<div key={indexCol.toString()} className='nft-attributes__column'>
				{column.map((item, index) => (
					<img
						className='image--full'
						src={item}
						key={index.toString()}
						alt={index.toString()}
					/>
				))}
			</div>
		));
	};

	const _renderButton = () => {
		return (
			<div className='nft__buttons'>
				<ButtonP
					text='view site'
					onClick={() =>
						window.open('https://magiceden.io/marketplace/chippies_nft', '_blank')
					}
				/>
				<ButtonP text='sneak peak' onClick={() => refSneak.current.scrollIntoView()} />
			</div>
		);
	};

	return (
		<div className='nft'>
			<ProjectHeader
				heading='FREELANCE NFT ARTIST'
				description='Co-Founded and led the art team of an NFT Collection on Solana Blockchain from pre-money valuation to post-money valuation '
				footer={_renderButton()}
			/>

			<LineDots />

			<div className='nft-about container'>
				<div className='row__first'>
					<div className='nft-about__left'>
						<TitleBox title='about' boxColor='#565B87' boxWidth='100px' />
						<p className='nft-about__left--desc'>
							The project attracted 5000 SOL trading volume in the first month ($1M at
							SOL all-time-high-price) and collaborated with multiple famous NFT
							Projects/DAOs (DeGods, SAC, Solana Yacht Club, etc.)
							<br />
							<br />I worked with cross-functional team that consists of crypto gurus,
							entrepreneurs, elite AI students, and 5 developers working for major
							tech companies.
						</p>
					</div>
					<div className='nft-about__right'>
						<img className='image--full' src='/images/nft/ChippiesLogo.png' alt='chippieslogo' />
					</div>
				</div>
				<div className='nft-chippies'>{_renderChippies()}</div>
			</div>
			<LineDots />
			<div ref={refSneak}></div>
			<div className='container'>
				<TitleBox title='sneak peak' boxColor='#565B87' boxWidth='100px' />
				<div className='nft-sneak'>{_renderSneaks()}</div>
			</div>

			<LineDots />
			<LetConnect />
		</div>
	);
};