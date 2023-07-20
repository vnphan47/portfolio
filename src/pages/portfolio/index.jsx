import React from 'react';
import { PersonalArt } from './PersonalArt';
import { LineDots } from '../../ components/LineDots';
import { RecentProject } from './RecentProject';
import { LetConnect } from './LetConnect';

export const Portfolio = () => {
	return (
		<div className='wrapper'>
			<PersonalArt />
			<LineDots />
			<RecentProject />
			<LineDots />
			<LetConnect />
		</div>
	);
};
