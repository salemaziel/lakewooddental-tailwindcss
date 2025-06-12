import React from 'react';

// https://www.affordablefamilydentistry.com/wp-content/uploads/2021/03/Group-1.png

const S2Icons = props => {
	return (
		<section className="relative left-0 w-full h-full bg-white">
			<div className="container relative px-4 py-12 mx-auto">
				<div className="flex flex-wrap -mx-4">
					{props.items.map((item, index) => (
						<div
							className="w-full px-4 mb-6 md:w-1/5 md:mb-0"
							key={index}
						>
							<div className="flex flex-col justify-center mx-auto text-center max-w-xxs sm:max-w-sm">
								<div className="flex items-center justify-center flex-shrink-0 h-16 mx-auto text-white rounded-md w-14 lg:w-16 lg:h-16">
									<img
										src={item.Icon}
										alt={item.IconAlt}
										className="h-14 text-light-blue-500" /*width="24px" height="24px"*/
									/>
								</div>
								<div>
									<h4 className="mb-2 text-lg text-[#1F3B53] font-semibold font-heading">
										{item.IconTitle}
									</h4>
									<p className="text-[#323232]">
										{item.IconSubtitle}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default S2Icons;
