import React from 'react';

import { Link } from 'gatsby';

const BlogExcerpt = props => {
	return (
		<>
			{props.items.map((item, index) => (
				<>
					<div
						className="flex flex-wrap mb-8 overflow-hidden rounded-lg shadow"
						key={index}
					>
						<div className="w-full rounded-l lg:w-1/2">
							<img
								className="object-cover"
								src={item.image}
								alt={item.imageAlt}
							/>
						</div>
						<div className="w-full px-6 py-6 bg-white rounded-r lg:w-1/2 lg:pt-10">
							{/*<span className="text-sm text-gray-400">24 Jan, 2021</span>*/}
							<h2 className="my-4 text-2xl font-bold text-logo-blue-500">
								{item.title}
							</h2>
							<p className="mb-4 leading-loose text-gray-700">
								{item.excerpt}
							</p>
							<Link
								to={`/dental-advice/${item.slug}`}
								className="font-bold text-logo-blue-500 hover:text-light-blue-500"
							>
								Learn More
							</Link>
						</div>
					</div>

					{item.title2 && (
						<div className="flex flex-wrap mb-8 overflow-hidden rounded-lg shadow">
							<div className="order-1 w-full px-6 py-6 bg-white rounded-r lg:w-1/2 lg:pt-10 lg:order-0">
								{/*<span className="text-sm text-gray-400">24 Jan, 2021</span>*/}
								<h2 className="my-4 text-2xl font-bold text-logo-blue-500">
									{item.title2}
								</h2>
								<p className="mb-4 leading-loose text-gray-700">
									{item.excerpt2}
								</p>
								<Link
									to={`/dental-advice/${item.slug2}`}
									className="font-bold text-logo-blue-500 hover:text-light-blue-500"
								>
									Learn More
								</Link>
							</div>
							<div className="w-full rounded-l lg:w-1/2 order-0 lg:order-1">
								<img
									className="object-cover"
									src={item.image2}
									alt={item.imageAlt2}
								/>
							</div>
						</div>
					)}
				</>
			))}
		</>
	);
};

export default BlogExcerpt;
