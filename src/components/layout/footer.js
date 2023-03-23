import * as React from 'react';
import footerlogo from '../../images/footer-logo.png';
import facebook from '../../images/social/fb.png';

import linkedin from '../../images/social/linkedin.png';

// import SidebarNav from './sidebarNav';

const Footer = () => (
    <>
        <div className=" bg-[#1F3B53] p-5 md:px-10 px-5">
            <div className="container relative flex flex-col items-center justify-center w-full py-10 mx-auto md:flex-row md:justify-between">
                <div className="w-full md:w-2/5">
                    <h3 className="text-xl font-medium text-white "> Patient Referrals</h3>
                    <p className="mt-4 text-xs font-normal leading-5 text-white ">We thank you for expressing confidence in us by your kind referrals of friends and relatives! Please let us know if you have referred a friend or relative so that we may express our appreciation to you. </p>

                </div>


                <form className="flex flex-wrap items-center w-full px-1 mx-auto mt-4 lg:pl-6 md:w-2/5 md:mt-0">

                  

                        <input type="text" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-slate-500 focus:border-slate-500 block  p-2.5 my-4 lg:my-auto md:pr-20 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-600 dark:text-white  placeholder:text-sm" placeholder="Enter Your Email Address" required />
                    
                    <button type="submit" className="p-2.5 px-7 ml-2 text-sm font-medium text-white bg-slate-700 rounded-full border border-white hover:bg-white hover:text-logo-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                        Submit
                    </button>
                </form>


            </div>
            <hr />
            <div className="container flex flex-col items-center justify-center py-10 mx-auto md:flex-row md:justify-between">
                <div className="border-gray-300 md:pr-10 lg:border-r-2">
                    <img src={footerlogo} alt="footerlogo" />
                </div>
                <div className="flex mt-3 text-base border-gray-300 lg:border-r-2 md:pr-10 md:mt-0">
                    <div className="flex flex-col text-white ">
                        <p className="mb-5 mr-5">Monday: 9-6</p>
                        <p> Tuesday: 9-6 </p>
                    </div>
                    <div className="flex flex-col text-white ">
                        <p className="mb-5 mr-5">Thursday: 9-6</p>
                        <p> Friday: 9-5 </p>

                    </div>
                </div>
                <div className="flex flex-col mt-3 text-base text-center text-white md:text-start md:mt-0">
                    <p className="mb-3">5828 Adenmoor Ave. Lakewood, CA 90713 </p>
                    <p className="mb-3"> Ph: (562) 867-1753 </p>
                    <p> Email: jamesleedds@lakewooddental.com</p>
                </div>

            </div>
            <hr/>
            <div className="flex flex-col pt-10">
                <div className="flex items-center justify-center text-white">
                <img className="mr-5 text-white" src={facebook} alt="footerlogo" />
                <img src={linkedin} alt="footerlogo" />
                </div>
                <div className="mt-3 text-center">
                    <a className="mr-3 text-base font-normal text-white" href="">Home </a>
                    <a className="mr-3 text-base font-normal text-white" href=""> Doctor & Staff  </a>
                    <a className="mr-3 text-base font-normal text-white" href="">  Services  </a>
                    <a className="mr-3 text-base font-normal text-white" href="">Fees & Insurance </a>
                    <a className="mr-3 text-base font-normal text-white" href="">Contact Us  </a>
                    <a className="mr-3 text-base font-normal text-white" href="">Dental Advice </a>
            
                </div>
                <div className="mt-3 text-xs text-center text-gray-500"> <p> 2022 © <a href="">Lakewood Dental  </a> . All rights reserved.</p> </div>

            </div>

        </div>
    </>
);

export default Footer;