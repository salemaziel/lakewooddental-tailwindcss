import * as React from 'react';
import footerlogo from '../../images/footer-logo.png';
import facebook from '../../images/social/fb.png';

import linkedin from '../../images/social/linkedin.png';

import { Link } from 'gatsby';

// import SidebarNav from './sidebarNav';

const Footer = () => (
    <>
        <div className=" bg-[#1F3B53] p-5 md:px-10 px-5">
            {/*<div className="container relative flex flex-col items-center justify-center w-full py-10 mx-auto md:flex-row md:justify-between">
                <div className="w-full md:w-2/5">
                    <h3 className="text-xl font-medium text-white "> Patient Referrals</h3>
                    <p className="mt-4 text-xs font-normal leading-5 text-white ">We thank you for expressing confidence in us by your kind referrals of friends and relatives! Please let us know if you have referred a friend or relative so that we may express our appreciation to you. </p>

                </div>


                <form
                    className="flex flex-wrap items-center w-full px-1 mx-auto mt-4 lg:pl-6 md:w-2/5 md:mt-0"
                    name="referralform"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    action="/#"
                >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="referralform" />


                    <input type="email" id="email" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-slate-500 focus:border-slate-500 block  p-2.5 my-4 lg:my-auto md:pr-20 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-600 dark:text-white  placeholder:text-sm" placeholder="Enter Your Email Address" required />

                    <button type="submit" className="p-2.5 px-7 ml-2 text-sm font-medium text-white bg-slate-700 rounded-full border border-white hover:bg-white hover:text-logo-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                        Submit
                    </button>
                </form>


            </div>
            <hr />*/}
            <div className="container flex flex-col items-center justify-center py-10 mx-auto md:flex-row md:justify-between">
                <div className="mb-4 border-gray-300 lg:mb-auto md:pr-10 lg:border-r-2">
                    <img src={footerlogo} alt="footerlogo" />
                </div>

                <div className="flex flex-col mt-3 text-base border-gray-300 lg:flex-row lg:border-r-2 md:pr-10 md:mt-0">
                    <div className="flex flex-col mt-3 text-center text-white lg:pr-8 md:text-start md:mt-0">
                        <h4 className="mb-3 text-2xl font-semibold lg:-mt-2">Office <br className='hidden lg:inline' />Hours</h4>
                    </div>
                    <div className="flex flex-row text-white lg:flex-row lg:pr-4 ">
                        <p className="mb-5 mr-5"><span className="font-bold underline">Monday:</span><br /> 9am - 6pm</p>
                        <p> <span className="font-bold underline">Tuesday:</span><br /> 9am - 6pm </p>
                    </div>
                    <div className="flex flex-row text-white lg:flex-row lg:pl-4 ">
                        <p className="mb-5 mr-5"><span className="font-bold underline">Thursday:</span><br /> 9am - 6pm</p>
                        <p><span className="font-bold underline"> Friday:</span> <br />9am - 5pm </p>

                    </div>
                </div>
                <div className="flex flex-col mt-3 text-base text-center text-white md:text-start md:mt-0">
                    <p className="mb-3">5828 Adenmoor Ave. Lakewood, CA 90713 </p>
                    <p className="mb-3"> Ph: (562) 867-1753 </p>
                    <p> Email: jamesleedds@lakewooddental.com</p>
                </div>

            </div>
            <hr />
            <div className="flex flex-col pt-10">
                {/*<div className='flex flex-row justify-center mb-4'>
                    <a className="flex items-center justify-center text-white" href="https://www.facebook.com/JamesLeeDDS" rel="noopener nofollow" target="_blank">
                        <img className="mr-5 text-white" src={facebook} alt="footerlogo" />
                    </a>
                    <a className="flex items-center justify-center text-white" href="https://www.linkedin.com/pub/james-lee/74/316/415" rel="noopener nofollow" target="_blank">
                        <img src={linkedin} alt="footerlogo" />
                    </a>
                </div>*/}
                <div className="mt-3 text-center">
                    <Link to="/" className="mr-3 text-base font-normal text-white" href="">Home </Link>
                    {/*<a className="mr-3 text-base font-normal text-white" href=""> Doctor & Staff  </Link>*/}
                    <Link to="/services" className="mr-3 text-base font-normal text-white" href="">  Services  </Link>
                    <Link to="/fees-and-insurance" className="mr-3 text-base font-normal text-white" href="">Fees & Insurance </Link>
                    <Link to="contact-us" className="mr-3 text-base font-normal text-white" href="">Contact</Link>
                    <Link to="/dental-advice" className="mr-3 text-base font-normal text-white" href="">Dental Advice </Link>

                </div>
                <div className="mt-3 text-xs text-center text-gray-300"> <p> 2023 © <a href="">Lakewood Dental  </a> . All rights reserved.</p> </div>

            </div>

        </div>
    </>
);

export default Footer;