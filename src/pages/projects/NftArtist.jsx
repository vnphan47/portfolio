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

	const refSneak = useRef(null);

	useEffect(() => {
		fetchFileNames();
	}, []);

	const chippies = [
		{
			src: '/images/nft/0(1) Twitter.png',
		},
		{
			src: '/images/nft/7 ME.png',
		},
		{
			src: '/images/nft/16 Discord.png',
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
		const columns = chunkArray(sneaks, width > 768 ? 3 : 6);
		const column = chunkArray(sneaks, width <= 768 ? 2 : 10);

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

	const _renderButton = () => {
		return (
			<div className='nft__buttons'>
				<ButtonP
					text='view site'
					onClick={() =>
						window.open('https://magiceden.io/marketplace/chippies_nft', '_blank')
					}
				/>

			</div>
		);
	};

	return (
		<div className='nft'>
			<ProjectHeader
				heading='FREELANCE NFT ARTIST'
				description='The project attracted 5000 SOL trading volume in the first month ($1M at
					SOL all-time-high-price) and collaborated with multiple famous NFT
					Projects/DAOs (DeGods, SAC, Solana Yacht Club, etc.) '
				footer={_renderButton()}
			/>


			<div className='nft-about container'>
				<div className='nft-chippies'>{_renderChippies()}</div>
			</div>
			<div ref={refSneak}></div>
			<div className='container'>
				<div className='nft-sneak'>{_renderSneaks()}</div>
			</div>

			<LetConnect />
		</div>
	);
};
