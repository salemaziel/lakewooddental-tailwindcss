import React from 'react';

const SerBanner = () => {
	return (
		<section className="relative left-0 w-full h-full bg-white">
			<div className="container relative px-4 py-12 mx-auto">
				<div className="text-center">
					<h1 className="text-4xl font-semibold leading-10 ">
						James B. Lee, DDS
					</h1>
					<p className="text-[#4294C2] text-lg font-normal leading-9 mt-4 after:block after:border-2 after:border-[#4294C2] after:w-20 after:my-4 after:mx-auto">
						Proudly serving the Lakewood Area for over 20 years
					</p>
				</div>
			</div>
		</section>
	);
};

export default SerBanner;
