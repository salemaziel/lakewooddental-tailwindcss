import * as React from 'react';
import Footer from '../components/layout/footer';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';

import SerHero from '../components/pageComponents/Services/serhero';
import BG from '../images/serhero.png';

import { Link } from 'gatsby';

const NotFoundPage = () => (
	<Layout>
		<SerHero bgImage={BG} pageTitle="404: Page Not Found" />
		<section
			className="relative py-8 bg-white md:py-44 lg:py-16"
			style={{
				backgroundImage:
					'url("flex-ui-assets/elements/pattern-white.svg")',
				backgroundPosition: 'center'
			}}
		>
			<div className="container relative z-10 px-4 mx-auto">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="mb-4 text-4xl font-bold leading-tight tracking-wide md:text-4xl">
						Oops, this page doesn't exist!
					</h2>
					<p className="mb-12 text-lg md:text-xl text-coolGray-500"></p>
					<div className="flex flex-wrap justify-center">
						<div className="w-full py-1 md:w-auto md:py-0 md:mr-6">
							<Link
								to="/"
								className="inline-block w-full py-5 text-base font-medium leading-4 text-center border rounded-md shadow-sm bg-logo-blue-500 border-logo-blue-500 hover:border-light-blue-500 px-7 md:text-lg text-green-50 hover:bg-light-blue-500 focus:ring-2 focus:ring-light-blue-500 focus:ring-opacity-50"
								href="#"
							>
								Go back to Homepage
							</Link>
						</div>
						{/*<div className="w-full py-1 md:w-auto md:py-0"><a className="inline-block w-full py-5 text-base font-medium leading-4 text-center bg-white border rounded-md shadow-sm px-7 md:text-lg text-coolGray-800 hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border-coolGray-200" href="#">Try Again</a></div>*/}
					</div>
				</div>
			</div>
		</section>

		<Footer />
	</Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
