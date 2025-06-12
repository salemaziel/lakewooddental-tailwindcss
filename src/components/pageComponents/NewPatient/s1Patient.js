import React from 'react';

import AdultForm from '../../../forms/Adult-NewPatient-Intake-Form.pdf';
import ChildForm from '../../../forms/Child-NewPatient-Intake-Form.pdf';
import PrivacyPolicy from '../../../forms/NoticeOfPrivacyPractices.pdf';

const S1NewPatient = () => {
	return (
		<section className="relative block px-0 py-16 pb-16 m-0 font-sans leading-6 text-left lg:pt-24 ">
			<div className="container w-full max-w-2xl px-4 py-0 mx-auto my-0 leading-6 lg:max-w-5xl">
				<div className="flex-wrap block clear-both p-0 my-0 -mx-4 text-left">
					<div className="relative w-full px-4 py-0 m-0 sm:max-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:basis-full md:flex-shrink-0 md:flex-grow-0 lg:flex-shrink-0 lg:flex-grow-0 lg:basis-3/4">
						<div className="relative p-0 m-0">
							<div className="relative p-0 mx-0 mt-0 mb-4">
								<h2 className="p-0 mx-0 mt-0 mb-2 text-4xl font-semibold text-center text-logo-blue-500">
									Patient Forms
								</h2>
							</div>
							<h3
								className="relative p-0 mx-0 mt-0 mb-2 text-xl text-dark-blue-500" /*text-[#4294C2]"*/
							>
								We offer our patient forms online for you to
								fill out and complete in the comfort of your own
								home prior to your office visit.
								<br className="p-0 m-0 leading-8" />
								<br className="p-0 m-0 leading-8" />
								We look forward to treating you!
							</h3>
							<hr
								style={{
									borderWidth: '1px 0px 0px',
									borderImage: 'initial'
								}}
								className="box-content w-1/2 h-0 p-0 mx-auto my-4 overflow-visible border-t border-b-0 border-solid border-x-0 border-neutral-200"
							/>
							<div className="relative p-4 mx-0 mt-0 mb-4 leading-7 text-center">
								<h4 className="text-[#4294C2] no-underline text-xl">
									Patient Forms include:
								</h4>
								<ul className="p-0 mx-0 mt-0 mb-4 list-none no-underline">
									<li className="p-0 m-0 list-outside list-none">
										New Patient Information
									</li>
									<li className="p-0 m-0 list-outside list-none no-underline">
										Patient Health History
									</li>
									<li className="p-0 m-0 list-none no-underline list-outside">
										Financial Policy Agreement
									</li>
									<li className="p-0 m-0 list-none no-underline list-outside">
										Notice of Privacy Practices
									</li>
									<li className="p-0 m-0 list-none no-underline list-outside">
										Acknowledgement of Receipt of Notice of
										Privacy Practices
									</li>
								</ul>
							</div>
							<div className="relative p-0 mx-0 mt-0 mb-10">
								<p className="relative py-0 pl-6 pr-0 mx-auto mt-0 mb-2 text-base font-normal text-center text-neutral-500">
									All forms are PDF files. Please download to
									print and bring with you to your
									appointment.
								</p>
							</div>

							<div className="relative flex flex-col p-0 mx-auto mt-0 mb-10 md:flex-row">
								<div className="relative p-0 mx-auto mt-0 mb-5">
									<a
										href={AdultForm}
										rel="noopener noreferrer"
										target="_blank"
										aria-label="Download Adult New Patient Forms PDF"
										className="relative inline-block w-full px-5 py-3 m-0 text-lg font-semibold leading-7 text-center text-white cursor-pointer bg-sky-600 hover:text-white hover:bg-logo-blue-500"
										style={{
											borderRadius: 50,
											maxWidth: 360,
											transition: 'all 0.3s ease 0s'
										}}
									>
										Adult New Patient Forms
									</a>
								</div>
								<div className="relative p-0 mx-auto mt-0 mb-5">
									<a
										href={ChildForm}
										rel="noopener noreferrer"
										target="_blank"
										aria-label="Download Child New Patient Forms PDF"
										className="relative inline-block w-full px-5 py-3 m-0 text-lg font-semibold leading-7 text-center text-white cursor-pointer bg-sky-600 hover:text-white hover:bg-logo-blue-500"
										style={{
											borderRadius: 50,
											maxWidth: 360,
											transition: 'all 0.3s ease 0s'
										}}
									>
										Child New Patient Forms
									</a>
								</div>
							</div>

							<br className="p-0 m-0" />
							<hr
								className="box-content h-0 p-0 mx-auto my-4 overflow-visible border-t border-b-0 border-solid border-x-0 border-neutral-200"
								style={{
									borderWidth: '1px 0px 0px',
									borderImage: 'initial'
								}}
							/>
							<div className="relative justify-center p-4 mx-auto mt-0 mb-4 text-base leading-7 text-center text-neutral-500">
								Your privacy is important to us.
								<br className="p-0 m-0" />
								Any information gathered from the above forms or
								through any communications is subject to our
								Patient Privacy Policy.
								<div className="p-0 mx-0 mt-0 mb-4 list-none no-underline">
									<div className="p-0 m-0 list-none no-underline list-outside">
										<a
											href={PrivacyPolicy}
											rel="noopener noreferrer"
											target="_blank"
											aria-label="Download HIPAA Notice of Privacy Practices PDF"
											className="p-0 m-0 text-blue-600 bg-transparent cursor-pointer hover:text-sky-700"
										>
											HIPAA Notice of Privacy Practices
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default S1NewPatient;
