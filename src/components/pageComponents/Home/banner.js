import React from 'react';

const Banner = () => {
	return (
		<div className="top-0 left-0 right-0 w-full py-2 mx-0 bg-logo-blue-500">
			<div className="flex flex-row justify-center text-center">
				<div className="flex items-center align-baseline lg:pr-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</div>
				<div className="flex text-base font-semibold leading-loose tracking-wider text-white">
					20% Senior Discount (from usual and customary fees) for
					those 65 and over with no insurance!
				</div>

				<div className="flex items-center align-baseline lg:pl-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Banner;
