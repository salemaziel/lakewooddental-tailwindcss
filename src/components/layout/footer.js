import * as React from 'react';
import footerlogo from '../../images/footer-logo.png';
import facebook from '../../images/social/fb.png';

import linkedin from '../../images/social/linkedin.png';

// import SidebarNav from './sidebarNav';

const Footer = () => (
    <>
        <div className=" bg-[#1F3B53] p-5 md:px-10 px-5">
            <div className=" container mx-auto relative w-full flex md:flex-row flex-col  md:justify-between justify-center py-10 items-center">
                <div className=" md:w-3/5 w-full">
                    <h3 className=" text-xl font-medium text-white"> Patient Referrals</h3>
                    <p className=" text-white font-normal text-xs mt-4 leading-5">We thank you for expressing confidence in us by your kind referrals of friends and relatives! Please let us know if you have referred a friend or relative so that we may express our appreciation to you. </p>

                </div>


                <form className="flex items-center md:mt-0 mt-4">

                    <div className="relative ">

                        <input type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-slate-500 focus:border-slate-500 block  p-2.5  pr-20 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-600 dark:text-white  placeholder:text-sm" placeholder="Enter Your Email Address" required />
                    </div>
                    <button type="submit" className="p-2.5 px-7 ml-2 text-sm font-medium text-white bg-slate-700 rounded-full border border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                        Go
                    </button>
                </form>


            </div>
            <hr />
            <div className=" container mx-auto flex  md:flex-row flex-col  md:justify-between justify-center items-center py-10">
                <div className=" md:pr-10 lg:border-r-2 border-gray-300 ">
                    <img src={footerlogo} alt="footerlogo" />
                </div>
                <div className="flex text-base  lg:border-r-2 border-gray-300 md:pr-10 md:mt-0 mt-3">
                    <div className=" flex flex-col text-white">
                        <p className="mb-5 mr-5">Monday: 9-6</p>
                        <p> Tuesday: 9-6 </p>
                    </div>
                    <div className=" flex flex-col text-white">
                        <p className="mb-5 mr-5">Thursday: 9-6</p>
                        <p> Friday: 9-5 </p>

                    </div>
                </div>
                <div className="flex flex-col text-white text-base md:text-start text-center md:mt-0 mt-3">
                    <p className="mb-3">5828 Adenmoor Ave. Lakewood, CA 90713 </p>
                    <p className="mb-3"> Ph: (562) 867-1753 </p>
                    <p> Email: jamesleedds@lakewooddental.com</p>
                </div>

            </div>
            <hr/>
            <div className="flex flex-col pt-10">
                <div className="flex items-center justify-center text-white">
                <img className="text-white mr-5" src={facebook} alt="footerlogo" />
                <img src={linkedin} alt="footerlogo" />
                </div>
                <div className="text-center mt-3">
                    <a className="text-white text-base font-normal mr-3" href="">Home </a>
                    <a className="text-white text-base font-normal mr-3" href=""> Doctor & Staff  </a>
                    <a className="text-white text-base font-normal mr-3" href="">  Services  </a>
                    <a className="text-white text-base font-normal mr-3" href="">Fees & Insurance </a>
                    <a className="text-white text-base font-normal mr-3" href="">Contact Us  </a>
                    <a className="text-white text-base font-normal mr-3" href="">Dental Advice </a>
            
                </div>
                <div className="text-center mt-3 text-xs text-gray-500"> <p> 2022 © <a href="">Lakewood Dental  </a> . All rights reserved.</p> </div>

            </div>

        </div>
    </>
);

export default Footer;