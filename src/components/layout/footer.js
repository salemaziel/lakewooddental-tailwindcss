import * as React from 'react';
import footerlogo from '../../images/footer-logo.png';

import { Link } from 'gatsby';

const Footer = () => (
	<>
		<div className=" bg-[#1F3B53] p-5 md:px-10 px-5">
			<div className="container flex flex-col items-center justify-center py-10 mx-auto md:flex-row md:justify-between">
				<div className="mb-4 border-gray-300 lg:mb-auto md:pr-10 lg:border-r-2">
					<img src={footerlogo} alt="footerlogo" />
				</div>

				<div className="flex flex-col mt-3 text-base border-gray-300 lg:flex-row lg:border-r-2 md:pr-10 md:mt-0">
					<div className="flex flex-col mt-3 text-center text-white lg:pr-8 md:text-start md:mt-0">
						<h4 className="mb-3 text-2xl font-semibold lg:-mt-2">
							Office <br className="hidden lg:inline" />
							Hours
						</h4>
					</div>
					<div className="flex flex-row text-white lg:flex-row lg:pr-4 ">
						<p className="mb-5 mr-5">
							<span className="font-bold underline">Monday:</span>
							<br /> 9am - 6pm
						</p>
						<p>
							{' '}
							<span className="font-bold underline">
								Tuesday:
							</span>
							<br /> 9am - 6pm{' '}
						</p>
					</div>
					<div className="flex flex-row text-white lg:flex-row lg:pl-4 ">
						<p className="mb-5 mr-5">
							<span className="font-bold underline">
								Thursday:
							</span>
							<br /> 9am - 6pm
						</p>
						<p>
							<span className="font-bold underline">
								{' '}
								Friday:
							</span>{' '}
							<br />
							9am - 5pm{' '}
						</p>
					</div>
				</div>
				<div className="flex flex-col mt-3 text-base text-center text-white md:text-start md:mt-0">
					<p className="mb-3">
						5828 Adenmoor Ave. Lakewood, CA 90713{' '}
					</p>
					<p className="mb-3"> Ph: (562) 867-1753 </p>
					<p> Email: jamesleedds@lakewooddental.com</p>
				</div>
			</div>
			<hr />
			<div className="flex flex-col pt-10">
				<div className="mt-3 text-center">
					<Link
						to="/"
						className="mr-3 text-base font-normal text-white"
						href=""
					>
						Home{' '}
					</Link>
					<Link
						to="/services"
						className="mr-3 text-base font-normal text-white"
						href=""
					>
						{' '}
						Services{' '}
					</Link>
					<Link
						to="/fees-and-insurance"
						className="mr-3 text-base font-normal text-white"
						href=""
					>
						Fees & Insurance{' '}
					</Link>
					<Link
						to="contact-us"
						className="mr-3 text-base font-normal text-white"
						href=""
					>
						Contact
					</Link>
					<Link
						to="/dental-advice"
						className="mr-3 text-base font-normal text-white"
						href=""
					>
						Dental Advice{' '}
					</Link>
				</div>
				<div className="mt-3 text-xs text-center text-gray-300">
					{' '}
					<p>
						{' '}
						{new Date().getFullYear()} ©{' '}
						<span>Lakewood Dental </span> . All rights reserved.
					</p>{' '}
				</div>
			</div>
		</div>
	</>
);

export default Footer;
