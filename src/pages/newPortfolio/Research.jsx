import React from 'react';
import TitlePortfolio from './TitlePortfolio';

const Research = () => {
	return (
		<div className='container research'>
			<TitlePortfolio number={'03'} title={'UX Research'} />
			<div className='box__research'>
				<h3 className='box__research--text'>User Research</h3>
				<div className='box__research--desc'>
					<p>
						By conducting User Research with individuals from a diverse range of NFT
						community, we have learned that they expressed a need for a centralized
						platform that aggregates and simplifies sentiment data that show correlation
						with prices.
					</p>
					<br />
					<p>
						Investors are more interested in long-term sentiment trends, while
						collectors may prioritize community engagement and artist reputation. Yet,
						both investors and collectors are interested in the correlation between
						communities (Twitter, Discord, etc.) sentiments and the NFT price.
					</p>
				</div>
			</div>
			<div className='box__research'>
				<h3 className='box__research--text'>User Personal</h3>
				<div className='box__research--desc'>
					<p>
						These two personas are hypothetical characters that we created based on User
						Research in order to represent our target audience. Creating personas helps
						us to understand our users’ perspectives and pain points.
					</p>
				</div>
			</div>

			<div className='box__personal'>
				<div className='wrap-card'>
					<div className='card'>
						<p className='card__name'>Sarah Johnson</p>
						<img
							src='/images/newPortfolio/Ellipse 27.png'
							alt=''
							className='card__avt'
						/>
						<div className='card__info'>
							<div className='row-info'>
								<span className='card__info--key'>Age</span>
								<span className='card__info--value'>25</span>
							</div>
							<div className='row-info'>
								<span className='card__info--key'>Occupation</span>
								<span className='card__info--value'>Marketing specialist</span>
							</div>
							<div className='row-info'>
								<span className='card__info--key'>Location</span>
								<span className='card__info--value'>Austin, Texas</span>
							</div>
							<div className='row-info'>
								<span className='card__info--key'>Education</span>
								<span className='card__info--value'>
									Bachelor's Degree in Marketing
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='description'>
					<div className='box__desc'>
						<h4 className='box__desc--title'>Bio</h4>
						<p>
							Sarah is a marketing specialist from Austin, Texas, who is relatively
							new to the world of Non-Fungible Tokens (NFTs). She's eager to explore
							the potential of NFT investments but approaches this space with limited
							knowledge and experience.
						</p>
					</div>
					<div className='box__desc'>
						<h4 className='box__desc--title'>Goal</h4>
						<ul>
							<li>
								Find the products quickly, compare options, and make
								informedpurchase decisions
							</li>
							<li>Spend less money and get the best value for purchases</li>
							<li>Discover new products and trends in the market</li>
							<li>Seek for products and brands that align with sustainability</li>
						</ul>
					</div>
					<div className='box__desc'>
						<h4 className='box__desc--title'>Pain Point</h4>
						<ul>
							<li>Struggle to narrow down options and make confident choices</li>
							<li>Experience unreliable online sellers</li>
							<li>
								Doubt to try new e-commerce websites or brands Difficult to verify
								the authenticity of sustainability claims made by brands
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='box__personal'>
				<div className='wrap-card'>
					<div className='card'>
						<p className='card__name'>Alex Martines</p>
						<img
							src='/images/newPortfolio/Ellipse 28.png'
							alt=''
							className='card__avt'
						/>
						<div className='card__info'>
							<div className='row-info'>
								<span className='card__info--key'>Age</span>
								<span className='card__info--value'>25</span>
							</div>
							<div className='row-info'>
								<span className='card__info--key'>Occupation</span>
								<span className='card__info--value'>Graphic Designer</span>
							</div>
							<div className='row-info'>
								<span className='card__info--key'>Location</span>
								<span className='card__info--value'>Seattle, Washington</span>
							</div>
							<div className='row-info'>
								<span className='card__info--key'>Education</span>
								<span className='card__info--value'>
									Bachelor's Degree in Fine Arts
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='description'>
					<div className='box__desc'>
						<h4 className='box__desc--title'>Bio</h4>
						<p>
							Alex is a digital art enthusiast who has been captivated by the world of
							Non-Fungible Tokens (NFTs). Max's passion lies in collecting unique
							digital assets, ranging from digital art and music to virtual real
							estate. His deep interest in NFTs has led him to explore this innovative
							space with enthusiasm.
						</p>
					</div>
					<div className='box__desc'>
						<h4 className='box__desc--title'>Goal</h4>
						<ul>
							<li>
								Curate a diverse and valuable collection of digital art and NFTs
							</li>
							<li>Build connections with fellow collectors and creators</li>
							<li>Support emerging artists by purchasing their NFTs</li>
							<li>Seek platforms and financial tools that cater to NFT investors</li>
						</ul>
					</div>
					<div className='box__desc'>
						<h4 className='box__desc--title'>Pain Point</h4>
						<ul>
							<li>Uncertain about the long-term value of the NFT investments</li>
							<li>Concern about counterfeit or plagiarized digital art</li>
							<li>
								Want to ensure the investments comply with current and future
								regulations
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Research;
