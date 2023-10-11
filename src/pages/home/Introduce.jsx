import React from 'react';

const Introduce = () => {
	return (
		<div className='wrapper introduce'>
			<div className='container'>
				<div className='introduce__left' data-aos='fade-right' data-aos-duration='1500'>
					<h1 className='introduce__left--title'>HELLO, I’M VY PHAN</h1>
					<p className='introduce__left--desc'>
						As a freelance visual designer with 5+ years of experience, I take pride in
						transforming ideas into visual masterpieces! Currently based in
						Massachusetts, USA.
					</p>
					<div className='introduce__left--btn btn-flat'>Portfolio</div>
				</div>
				<div className='introduce__right' data-aos='fade-left' data-aos-duration='1500'>
					<img src='/images/main/profile pic 1.png' alt='vyphan' className='img-vyphan' />
				</div>
			</div>
			<img src='/images/main/Ellipse_1.png' alt='ellipse' className='img-ellipse' />
		</div>
	);
};

export default Introduce;
