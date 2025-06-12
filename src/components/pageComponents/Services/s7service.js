import React from 'react';

import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

const Whitening = () => {
	return (
		<>
			<section className="relative left-0 w-full h-full bg-white">
				<div className="container relative mx-auto">
					<div className="flex flex-col items-center w-full md:flex-row">
						<div className="w-full p-10 md:w-1/2 ">
							<h2 className="mb-3 text-4xl font-semibold leading-10">
								Zoom! Whitening
							</h2>

							<p className="pr-12 mt-8 text-base font-normal leading-9 text-black">
								Get your most confident smile today with the #1
								most patient-requested professional whitening
								brand — Philips Zoom.
							</p>
							<Link
								to="/services/teeth-whitening"
								className="mt-8 text-white bg-[#1F3B53] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-16 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
							>
								{' '}
								Know More
							</Link>
						</div>

						<div className="w-full md:w-1/2">
							<StaticImage
								src="../../../images/Services/serv3.png"
								alt="Teeth Whitening"
								formats={['auto', 'webp']}
								className="w-full h-full"
								imgclassName="w-full h-full"
								placeholder="blurred"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Whitening;
