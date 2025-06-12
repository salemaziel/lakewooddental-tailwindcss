import React from 'react';

import { Link } from 'gatsby';
import BG from '../../../images/serhero.png';

const BlogPost = props => {
	return (
		<section className="pb-20">
			<div
				className="pt-20 pb-8 mb-12 bg-no-repeat bg-cover"
				style={{
					backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${BG})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<div className="container px-4 mx-auto">
					<div className="max-w-2xl mx-auto">
						<div className="mb-6 text-center">
							<span className="text-base md:text-lg">
								<Link
									to="/dental-advice"
									className="text-gray-200 hover:underline"
								>
									Dental Advice
								</Link>
								{/*<span className="text-blueGray-200">24 Jan, 2020</span>*/}
							</span>
							<h2 className="mt-4 text-4xl font-bold text-white md:text-5xl font-heading">
								{props.title}
							</h2>
						</div>
						<div className="flex justify-center mb-8">
							{/*<img className="object-cover w-12 h-12 rounded-full" src={props.image}  /*src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"* / alt={props.imageAlt} />*/}
							<div className="pl-4">
								{/*<p className="mb-1 text-blueGray-100">Alice Bradley</p>
            <p className="text-xs font-semibold text-blueGray-200">Author</p>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container px-4 mx-auto">
				<div className="max-w-2xl mx-auto lg:max-w-5xl">
					<div className="mb-8 text-base font-normal leading-normal tracking-normal text-left">
						{props.post}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogPost;
