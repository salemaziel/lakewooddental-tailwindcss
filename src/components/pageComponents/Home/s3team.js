import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const S3teams = () => {
	return (
		<>
			<section className="relative left-0 w-full h-full bg-[#EEF5FF]">
				<div className="container relative px-4 py-12 mx-auto">
					<div className="flex flex-col items-center w-full md:flex-row">
						<div className="w-full md:w-2/5">
							<StaticImage
								src="../../../images/teamim.png"
								alt="Head Dentist James Lee"
								formats={['auto', 'webp', 'avif']}
								className="h-full px-5"
								imgClassName="w-full h-full"
								placeholder="blurred"
								loading="lazy"
							/>
						</div>
						<div className="w-full md:w-3/5">
							<h2 className="text-4xl font-semibold leading-10 ">
								Meet Our Head Dentist
							</h2>
							<h4 className="text-[#4294C2] text-2xl font-normal mt-5 after:block after:border-2 after:border-[#4294C2] after:w-24 after:my-5">
								James B. Lee, D.D.S.
							</h4>
							<p className="mt-8 text-base font-normal leading-9 text-black">
								<span className="text-[#1F3B53] font-semibold">
									{' '}
									James Lee{' '}
								</span>{' '}
								is a graduate of the UCLA School of Dentistry
								and has been practicing in our Lakewood practice
								since 1981. Dr. Lee has extensive experience in
								all aspects of clinical dentistry, including
								endodontic (root canal) treatment and crown and
								bridge restorations. Dr. Lee's leisure pursuits
								have included hiking, sailing, and Aikido.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default S3teams;
