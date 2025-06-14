import React, { useState } from 'react';

import { FaFax } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const ContactInfo = () => {
	const [copySuccess, setCopySuccess] = useState('');

	const handleCopy = () => {
		const phoneNumber = '562-867-2091';
		navigator.clipboard
			.writeText(phoneNumber)
			.then(() => {
				setCopySuccess('Copied!');
				setTimeout(() => {
					setCopySuccess('');
				}, 5000);
			})
			.catch(() => setCopySuccess('Failed to copy'));
	};

	const handleCopyKeyDown = event => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleCopy();
		}
	};

	return (
		<section
			className="pt-20 bg-white"
			style={{
				backgroundImage:
					'url("flex-ui-assets/elements/pattern-white.svg")',
				backgroundPosition: 'center'
			}}
		>
			<div className="container px-4 mx-auto">
				<div className="max-w-4xl mx-auto mb-16 text-center">
					<h3 className="mb-4 text-4xl font-bold leading-normal tracking-normal md:text-5xl text-darkCoolGray-900">
						Contact Our Office
					</h3>
					<p className="text-lg font-medium md:text-xl text-coolGray-500"></p>
				</div>
				<div className="flex flex-wrap pb-16 -mx-4">
					<div className="w-full px-4 mb-10 md:w-1/3 md:mb-0">
						<div className="max-w-xs mx-auto text-center">
							<a
								href="mailto:jamesleedds@lakewooddental.com"
								aria-label="Send email to jamesleedds@lakewooddental.com"
								className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-logo-blue-500"
							>
								<svg
									className="h-6 text-white"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20.21 8.82L14 2.78C13.474 2.27986 12.7759 2.00095 12.05 2.00095C11.3241 2.00095 10.626 2.27986 10.1 2.78L3.89 8.78C3.61408 9.02087 3.39216 9.31731 3.23879 9.64991C3.08541 9.98251 3.00404 10.3438 3 10.71V19.29C3.01054 20.0176 3.30904 20.7114 3.83012 21.2193C4.35119 21.7273 5.05235 22.008 5.78 22H18.22C18.9476 22.008 19.6488 21.7273 20.1699 21.2193C20.691 20.7114 20.9895 20.0176 21 19.29V10.71C20.9992 10.3585 20.929 10.0106 20.7935 9.68623C20.6579 9.36189 20.4596 9.06752 20.21 8.82V8.82ZM11.44 4.22C11.593 4.08016 11.7927 4.00262 12 4.00262C12.2073 4.00262 12.407 4.08016 12.56 4.22L18 9.5L12.53 14.78C12.377 14.9198 12.1773 14.9974 11.97 14.9974C11.7627 14.9974 11.563 14.9198 11.41 14.78L6 9.5L11.44 4.22ZM19 19.29C18.9871 19.4863 18.8987 19.6699 18.7532 19.8023C18.6078 19.9347 18.4166 20.0056 18.22 20H5.78C5.58338 20.0056 5.39225 19.9347 5.24678 19.8023C5.10132 19.6699 5.01286 19.4863 5 19.29V11.35L9.05 15.25L7.39 16.85C7.20375 17.0374 7.09921 17.2908 7.09921 17.555C7.09921 17.8192 7.20375 18.0726 7.39 18.26C7.48295 18.3575 7.59463 18.4352 7.71836 18.4885C7.84208 18.5418 7.97529 18.5695 8.11 18.57C8.36747 18.569 8.61462 18.4687 8.8 18.29L10.57 16.59C11.0096 16.8586 11.5148 17.0008 12.03 17.0008C12.5452 17.0008 13.0504 16.8586 13.49 16.59L15.26 18.29C15.4454 18.4687 15.6925 18.569 15.95 18.57C16.0847 18.5695 16.2179 18.5418 16.3416 18.4885C16.4654 18.4352 16.5771 18.3575 16.67 18.26C16.8563 18.0726 16.9608 17.8192 16.9608 17.555C16.9608 17.2908 16.8563 17.0374 16.67 16.85L15 15.25L19 11.35V19.29Z"
										fill="currentColor"
									/>
								</svg>
							</a>
							<a href="mailto:jamesleedds@lakewooddental.com">
								<h3 className="mb-2 text-2xl font-bold leading-9 md:text-3xl text-coolGray-800">
									Email
								</h3>
							</a>
							<a
								className="text-xl font-medium break-words lg:break-normal text-coolGray-500 hover:text-coolGray-600"
								href="mailto:jamesleedds@lakewooddental.com"
							>
								jamesleedds@lakewooddental.com
							</a>
						</div>
					</div>
					<div className="w-full px-4 mb-10 md:w-1/3 md:mb-0">
						<div className="max-w-xs mx-auto text-center">
							<a
								href="tel:5628671753"
								aria-label="Call 562-867-1753"
								className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full cursor-pointer bg-logo-blue-500"
							>
								<svg
									className="h-6 text-white"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.41 13C19.1901 13 18.96 12.93 18.74 12.88C18.2949 12.7805 17.8572 12.6501 17.43 12.49C16.9661 12.3212 16.4562 12.33 15.9984 12.5146C15.5405 12.6992 15.1671 13.0466 14.95 13.49L14.73 13.95C13.7589 13.3992 12.8617 12.7271 12.0601 11.95C11.2829 11.1484 10.6108 10.2512 10.0601 9.28L10.5201 9.07C10.9634 8.85292 11.3108 8.47953 11.4954 8.02169C11.6801 7.56385 11.6888 7.05391 11.5201 6.59C11.3612 6.15903 11.231 5.71808 11.13 5.27C11.08 5.05 11.04 4.82 11.01 4.6C10.8886 3.89562 10.5197 3.25774 9.96967 2.80124C9.41967 2.34474 8.72475 2.09961 8.01005 2.11H5.00005C4.5773 2.10945 4.1592 2.19825 3.77317 2.37058C3.38714 2.54292 3.04189 2.7949 2.76005 3.11C2.47237 3.43365 2.25817 3.81575 2.13215 4.23004C2.00614 4.64432 1.97131 5.08098 2.03005 5.51C2.57364 9.67214 4.47526 13.5387 7.44005 16.51C10.4114 19.4748 14.2779 21.3764 18.4401 21.92C18.5699 21.9299 18.7002 21.9299 18.83 21.92C19.5675 21.9211 20.2794 21.6505 20.83 21.16C21.1452 20.8782 21.3971 20.5329 21.5695 20.1469C21.7418 19.7609 21.8306 19.3428 21.83 18.92V15.92C21.8247 15.229 21.5809 14.5611 21.14 14.0291C20.6991 13.4971 20.088 13.1336 19.41 13ZM19.9 19C19.8997 19.1395 19.8702 19.2775 19.8134 19.4049C19.7565 19.5324 19.6736 19.6465 19.57 19.74C19.4604 19.8399 19.33 19.9141 19.1882 19.9573C19.0464 20.0006 18.8967 20.0117 18.75 19.99C15.0183 19.5026 11.5503 17.802 8.88005 15.15C6.20752 12.4775 4.49208 8.99737 4.00005 5.25C3.97833 5.10333 3.98949 4.95367 4.03272 4.81185C4.07596 4.67003 4.1502 4.5396 4.25005 4.43C4.34467 4.32515 4.46043 4.24154 4.5897 4.18466C4.71897 4.12778 4.85882 4.09892 5.00005 4.1H8.00005C8.23121 4.09435 8.45719 4.16898 8.63951 4.3112C8.82184 4.45341 8.94925 4.65442 9.00005 4.88C9.00005 5.15 9.09005 5.43 9.15005 5.7C9.26563 6.22386 9.41937 6.73857 9.61005 7.24L8.21005 7.9C7.96941 8.01046 7.78241 8.21185 7.69005 8.46C7.59003 8.70346 7.59003 8.97654 7.69005 9.22C9.12925 12.3028 11.6073 14.7808 14.69 16.22C14.9335 16.32 15.2066 16.32 15.45 16.22C15.6982 16.1276 15.8996 15.9406 16.01 15.7L16.64 14.3C17.156 14.4881 17.6838 14.6418 18.22 14.76C18.48 14.82 18.76 14.87 19.0301 14.91C19.2556 14.9608 19.4566 15.0882 19.5989 15.2705C19.7411 15.4529 19.8157 15.6788 19.81 15.91L19.9 19ZM14 2C13.7701 2 13.53 2 13.3 2C13.0348 2.02254 12.7894 2.14952 12.6178 2.353C12.4462 2.55647 12.3625 2.81978 12.385 3.085C12.4076 3.35022 12.5346 3.59562 12.738 3.76721C12.9415 3.93881 13.2048 4.02254 13.47 4H14C15.5913 4 17.1175 4.63214 18.2427 5.75736C19.3679 6.88258 20 8.4087 20 10C20 10.18 20 10.35 20 10.53C19.9779 10.7938 20.0612 11.0556 20.2318 11.2581C20.4024 11.4606 20.6463 11.5871 20.91 11.61H20.99C21.2404 11.611 21.482 11.5181 21.6671 11.3496C21.8523 11.1811 21.9675 10.9493 21.99 10.7C21.99 10.47 21.99 10.23 21.99 10C21.9901 7.88 21.1486 5.84668 19.6504 4.34668C18.1523 2.84667 16.12 2.00265 14 2ZM16 10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4805 10.8946 16.7348 11 17 11C17.2653 11 17.5196 10.8946 17.7072 10.7071C17.8947 10.5196 18 10.2652 18 10C18 8.93913 17.5786 7.92172 16.8285 7.17157C16.0783 6.42143 15.0609 6 14 6C13.7348 6 13.4805 6.10536 13.2929 6.29289C13.1054 6.48043 13 6.73478 13 7C13 7.26522 13.1054 7.51957 13.2929 7.70711C13.4805 7.89464 13.7348 8 14 8C14.5305 8 15.0392 8.21071 15.4143 8.58579C15.7893 8.96086 16 9.46957 16 10Z"
										fill="currentColor"
									/>
								</svg>
							</a>
							<a className="cursor-pointer" href="tel:5628671753">
								<h3 className="mb-2 text-2xl font-bold leading-9 md:text-3xl text-coolGray-800">
									Phone
								</h3>
							</a>
							<a
								href="tel:5628671753"
								className="text-xl font-medium cursor-pointer text-coolGray-500"
								aria-label="Call 562-867-1753"
							>
								(562) 867-1753
							</a>
						</div>
					</div>
					<div
						className="w-full px-4 mb-10 md:w-1/3 md:mb-0"
						data-tooltip-id="click2copy"
						data-tooltip-content="Click to Copy"
					>
						{/*	<div
							className="max-w-xs mx-auto text-center cursor-pointer"
							onClick={handleCopy}
						>
							{' '}
							<span
								className={
									(copySuccess
										? 'flex text-light-blue-500 font-semibold text-base text-center justify-center -mt-6 '
										: 'hidden ') + ' text-[#4294C2]'
								}
							>
								{' '}
								{copySuccess}
							</span>
							<div
								href="tel:5628671753"
								className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-logo-blue-500"
							>
								<FaFax className="h-6 text-white" />
							</div>
							<div className="">
								<h3 className="mb-2 text-2xl font-bold leading-9 md:text-3xl text-coolGray-800">
									Fax
								</h3>
							</div>
							<p
								href="tel:5628671753"
								className="text-xl font-medium text-coolGray-500"
							>
								(562) 867-2091
							</p>
							<Tooltip id="click2copy" />
						</div>*/}
						<div className="max-w-xs mx-auto text-center">
							<span
								className={
									(copySuccess
										? 'flex text-light-blue-500 font-semibold text-base text-center justify-center -mt-6 '
										: 'hidden ') + ' text-[#4294C2]'
								}
							>
								{' '}
								{copySuccess}
							</span>
							<button
								className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-logo-blue-500 border-none cursor-pointer"
								onClick={handleCopy}
								onKeyDown={handleCopyKeyDown}
								aria-label="Copy fax number to clipboard"
							>
								<FaFax className="h-6 text-white" />
							</button>
							<div className="">
								<h3 className="mb-2 text-2xl font-bold leading-9 md:text-3xl text-coolGray-800">
									Fax
								</h3>
							</div>
							<p className="text-xl font-medium text-coolGray-500">
								(562) 867-2091
							</p>
							<Tooltip id="click2copy" />
						</div>
					</div>
					{/*<div className="w-full px-4 md:w-1/4">
        <div className="max-w-xs mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-logo-blue-500">
            <svg className="h-6 text-white" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM8 20H4V16H8V20ZM8 14H4V10H8V14ZM8 8H4V4H8V8ZM14 20H10V16H14V20ZM14 14H10V10H14V14ZM14 8H10V4H14V8ZM20 20H16V16H20V20ZM20 14H16V10H20V14ZM20 8H16V4H20V8Z" fill="currentColor" />
            </svg>
          </div>
          <h3 className="mb-3 text-2xl font-bold leading-9 md:text-3xl text-coolGray-900">Socials</h3>
          <a className="inline-block mr-8 text-logo-blue-500 hover:text-dark-blue-500" href="https://www.facebook.com/JamesLeeDDS" rel="noopener nofollow" target="_blank">
            <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.63482 17.7273V9.76603H9.35818L9.76676 6.66246H6.63482V4.68129C6.63482 3.78302 6.88809 3.17086 8.20285 3.17086L9.877 3.17018V0.394245C9.58748 0.357342 8.59366 0.272736 7.43696 0.272736C5.02158 0.272736 3.36797 1.71881 3.36797 4.37392V6.66246H0.636353V9.76603H3.36797V17.7273H6.63482Z" fill="currentColor" />
            </svg>
          </a>
          {/* Twitter * /}
          {/*<a className="inline-block mr-8 text-logo-blue-500 hover:text-dark-blue-500" href="#">
            <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14598C18.1356 2.44844 17.4032 2.65356 16.6336 2.74513C17.4194 2.27462 18.0208 1.52831 18.3059 0.641769C17.5689 1.0775 16.7553 1.39389 15.8885 1.56541C15.1943 0.82489 14.2069 0.363647 13.1118 0.363647C11.0108 0.363647 9.30722 2.06719 9.30722 4.16707C9.30722 4.46489 9.34083 4.75577 9.40574 5.03392C6.24434 4.87513 3.44104 3.3605 1.56483 1.05895C1.23686 1.61986 1.05028 2.27344 1.05028 2.9711C1.05028 4.29107 1.72243 5.45574 2.74225 6.13713C2.11877 6.11628 1.53237 5.94477 1.01901 5.65968V5.70719C1.01901 7.5498 2.33086 9.08762 4.07031 9.43762C3.75161 9.52337 3.41555 9.57089 3.06789 9.57089C2.82222 9.57089 2.58464 9.54656 2.35171 9.50019C2.8361 11.0125 4.24068 12.1123 5.90483 12.1424C4.6034 13.1623 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4279 6.10416 15.4279C13.1026 15.4279 16.928 9.63116 16.928 4.60398L16.9153 4.11147C17.6627 3.57834 18.3094 2.90853 18.8181 2.14598Z" fill="currentColor" />
            </svg>
          </a>* /}
          
          {/*Instagram* /}
         {/* <a className="inline-block mr-8 text-logo-blue-500 hover:text-dark-blue-500" href="#">
            <svg width={20} height={20} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.60057 2.18182H16.3991C19.3872 2.18182 21.8182 4.61282 21.8181 7.60075V16.3993C21.8181 19.3872 19.3872 21.8182 16.3991 21.8182H7.60057C4.61264 21.8182 2.18176 19.3873 2.18176 16.3993V7.60075C2.18176 4.61282 4.61264 2.18182 7.60057 2.18182ZM16.3992 20.076C18.4266 20.076 20.076 18.4266 20.076 16.3993H20.0759V7.60075C20.0759 5.57349 18.4265 3.92406 16.3991 3.92406H7.60057C5.57331 3.92406 3.924 5.57349 3.924 7.60075V16.3993C3.924 18.4266 5.57331 20.0761 7.60057 20.076H16.3992ZM6.85709 12.0001C6.85709 9.16424 9.16413 6.85715 11.9999 6.85715C14.8358 6.85715 17.1428 9.16424 17.1428 12.0001C17.1428 14.8359 14.8358 17.1429 11.9999 17.1429C9.16413 17.1429 6.85709 14.8359 6.85709 12.0001ZM8.62792 12C8.62792 13.8593 10.1407 15.3719 11.9999 15.3719C13.8592 15.3719 15.372 13.8593 15.372 12C15.372 10.1406 13.8593 8.62791 11.9999 8.62791C10.1406 8.62791 8.62792 10.1406 8.62792 12Z" fill="currentColor" />
              <mask id="mask0_382_5883" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={2} y={2} width={20} height={20}>
                <path fillRule="evenodd" clipRule="evenodd" d="M7.60057 2.18182H16.3991C19.3872 2.18182 21.8182 4.61282 21.8181 7.60075V16.3993C21.8181 19.3872 19.3872 21.8182 16.3991 21.8182H7.60057C4.61264 21.8182 2.18176 19.3873 2.18176 16.3993V7.60075C2.18176 4.61282 4.61264 2.18182 7.60057 2.18182ZM16.3992 20.076C18.4266 20.076 20.076 18.4266 20.076 16.3993H20.0759V7.60075C20.0759 5.57349 18.4265 3.92406 16.3991 3.92406H7.60057C5.57331 3.92406 3.924 5.57349 3.924 7.60075V16.3993C3.924 18.4266 5.57331 20.0761 7.60057 20.076H16.3992ZM6.85709 12.0001C6.85709 9.16424 9.16413 6.85715 11.9999 6.85715C14.8358 6.85715 17.1428 9.16424 17.1428 12.0001C17.1428 14.8359 14.8358 17.1429 11.9999 17.1429C9.16413 17.1429 6.85709 14.8359 6.85709 12.0001ZM8.62792 12C8.62792 13.8593 10.1407 15.3719 11.9999 15.3719C13.8592 15.3719 15.372 13.8593 15.372 12C15.372 10.1406 13.8593 8.62791 11.9999 8.62791C10.1406 8.62791 8.62792 10.1406 8.62792 12Z" fill="white" />
              </mask>
            </svg>
          </a>* /}
          <a className="inline-block text-logo-blue-500 hover:text-dark-blue-500" href="https://www.linkedin.com/pub/james-lee/74/316/415" rel="noopener nofollow" target="_blank">
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>*/}
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0991211091873!2d-118.12580078478994!3d33.8613362806583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd328550d82d57%3A0xcd6e873311a753e1!2s5828%20Adenmoor%20Ave%2C%20Lakewood%2C%20CA%2090713!5e0!3m2!1sen!2sus!4v1679526373624!5m2!1sen!2sus"
					title="Lakewood Dental Office Location - 5828 Adenmoor Ave, Lakewood, CA 90713"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="relative object-cover w-full mx-auto -mb-32 border-0 rounded-lg shadow-xl h-72 md:h-128 md:-mb-80"
				/>
			</div>
			<div
				className="py-24 md:py-64 bg-logo-blue-500"
				style={{
					backgroundImage:
						'url("../../flex-uii-assets/elements/pattern-dark.svg")',
					backgroundPosition: 'center'
				}}
			/>
		</section>
	);
};

export default ContactInfo;
