import React from 'react';

//import Banner from "./banner";

const Hero = props => {
	return (
		<section className="relative">
			{/* <Banner /> */}
			<div
				className="pt-24 pb-16 bg-center bg-cover sm:pt-36 backdrop-blur-md"
				style={{
					backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props.bgImage})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					minHeight: '70vh'
				}}
			>
				<div className="container px-4 pt-12 mx-auto">
					<div className="max-w-3xl mx-auto text-center xl:max-w-4xl">
						<div className="mb-2 text-4xl font-normal tracking-widest text-white ">
							<span>Gentle Dental Care</span>
						</div>
						<h1 className="py-5 text-4xl font-semibold leading-loose tracking-widest text-white font-heading md:text-6xl font-poppins">
							Lakewood Dental Care
						</h1>
						<p className="max-w-md mx-auto mb-10 text-2xl leading-8 tracking-wide text-white uppercase md:max-w-4xl">
							Proudly Serving the Lakewood area for over 20 years.
						</p>

						<span className="inline-block text-white">
							<svg
								width={26}
								height={30}
								viewBox="0 0 26 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13 1V29M13 29L25 17M13 29L1 17"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
