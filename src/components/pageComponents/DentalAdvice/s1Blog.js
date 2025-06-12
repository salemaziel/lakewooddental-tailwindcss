import React from 'react';

import BlogExcerpt from './blogExcerpt';
import Crown from '../../../images/2023/crown.jpg';
import Cracked from '../../../images/2023/cracked-tooth.jpg';
import Flossing from '../../../images/2023/floss.jpg';

const S1Blog = props => {
	return (
		<section>
			{/*<div className="skew skew-top mr-for-radius">
            <svg className="w-full h-8 md:h-12 lg:h-20 text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 10 0 10" /></svg></div>*/}
			{/*<div className="skew skew-top ml-for-radius">
                <svg className="w-full h-8 md:h-12 lg:h-20 text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 10 10 0 10 10" /></svg></div>*/}
			<div className="py-20 bg-gray-50 radius-for-skewed">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap items-center mb-16">
						<div className="w-full text-center lg:w-1/2 lg:text-left">
							{/*<h2 className="text-4xl font-bold lg:text-5xl font-heading">Our Blog</h2>*/}
						</div>
					</div>
					<BlogExcerpt
						items={[
							{
								title: 'Crowns',
								image: Crown,
								imageAlt: 'Dental Crowns',
								excerpt:
									'A dental crown, sometimes referred to as a cap, is a tooth-shaped cover that is placed over a tooth to restore its shape, size, strength, and improve its appearance. Crowns are typically used to restore a tooth that is badly decayed or becomes damaged.',
								slug: 'crowns',
								title2: 'Cracked Teeth',
								image2: Cracked,
								imageAlt2: 'Cracked Teeth',
								excerpt2:
									'Many teeth, when carefully viewed, may exhibit small crack lines in the enamel. A more deeply cracked tooth may become noticeable when you feel a sharp pain when chewing food or with having a hot or cold drink. It is sometimes difficult to tell which tooth hurts or whether the pain comes from an upper or lower tooth.',
								slug2: 'cracked-teeth'
							},
							{
								title: 'Importance of Flossing',
								image: Flossing,
								imageAlt: 'Flossing',
								excerpt:
									'When we eat, some of the food that is not digested stays trapped in the cavities of your teeth. If these particles stay there for a long time, this can result in the growth of bacteria and decay of teeth. Knowing this, now we can see the benefits of flossing in day to day life.',
								slug: 'importance-of-flossing'
							}
						]}
					/>
				</div>
			</div>
			<div className="skew skew-bottom mr-for-radius">
				<svg
					className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
					viewBox="0 0 10 10"
					preserveAspectRatio="none"
				>
					<polygon fill="currentColor" points="0 0 10 0 0 10" />
				</svg>
			</div>
			<div className="skew skew-bottom ml-for-radius">
				<svg
					className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
					viewBox="0 0 10 10"
					preserveAspectRatio="none"
				>
					<polygon fill="currentColor" points="0 0 10 0 10 10" />
				</svg>
			</div>
		</section>
	);
};

export default S1Blog;
