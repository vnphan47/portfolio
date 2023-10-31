import React from 'react';
import { useNavigate } from 'react-router';
import { ListSocial } from '../portfolio/LetConnect';

const Introduce = () => {
	const navigate = useNavigate();
	return (
		<div className='wrapper introduce'>
			<div className='container'>
				<div className='introduce__left' data-aos='fade-right' data-aos-duration='1500'>
					<h1 className='introduce__left--title'>HELLO, I’M VY PHAN</h1>
					<p className='introduce__left--desc'>
					As a freelance visual designer and student based in Massachusetts USA, I love working on projects that bring creativity to life and turning ideas into beautiful visuals. 
					</p>

				</div>
				<div className='introduce__right' data-aos='fade-left' data-aos-duration='1500'>
					<ListSocial />
				</div>
			</div>
		</div>
	);
};

export default Introduce;
