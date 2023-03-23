import React, { useState, useEffect, useCallback } from "react";
import { Link, navigate, } from "gatsby";
import Logo from "../../images/logo.svg";


import ADA from "../../images/ada-logo.png";
import CDA from "../../images/cda-logo.png";
import Harbor from "../../images/harbor-logo.png";
import CarePay from "../../images/carecredit.svg";
import facebook from '../../images/social/facebook.svg';

import linkedin from '../../images/social/linkdin.svg';

//function SidebarNav(props) {
const SidebarNav = (props) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
//  const [bodyOverflow, setBodyOverflow] = useState('auto');

/*  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
*/

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const handleScroll = useCallback(() => {
  setScroll(window.scrollY > 10);
}, []);
/*
  useEffect(() => {
    setBodyOverflow(show ? 'hidden' : 'auto');
  }, [show]);

*
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);
*/

  return (
    <>


      {/*Top Bar */}
      <nav className="">
        <div className={(scroll ? ` ` : " ") + (show ? `fixed  ` : " fixed " ) + "z-50 flex rounded-b-lg items-center justify-between w-full p-4 text-gray-800 bg-white lg:hidden hover:text-black focus:outline-none focus:text-black"}>
          <Link to="/" className="flex items-center justify-between space-x-3">
            <div className="block w-full">
              <img src={Logo} alt="Logo" className="block h-auto w-44" /*style={{width: '160px'}}*/ />
            </div>
            <p className="text-2xl leading-6 sr-only ">{props.SiteTitle}</p>
          </Link>
          <div aria-label="toggler" className="flex items-center justify-center">
            <button id="open" onClick={() => setShow(!show)} aria-label="open" className={(show ? "hidden" : "") + " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"}>
              <svg className="text-gray-800" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button id="close" onClick={() => setShow(!show)} aria-label="close" className={(show ? "" : "hidden") + " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"}>
              <svg className="text-gray-800" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        {/* End of Top Bar */}

        {/* Start Sidebar */}
        {/* Top Half of Sidebar */}
       <div className="relative">
        <div id="Main" className={(show ? "translate-x-0 pt-28 lg:pt-0 " : " -translate-x-full ") + "bg-white lg:shadow-lg transform lg:translate-x-0 ease-in-out transition duration-500 flex lg:mt-0 fixed lg:w-72 justify-start lg:justify-evenly overflow-y-hidden overscroll-y-contain bg-fixed container items-start w-full z-40 flex-col max-h-fit h-full"}>
          {/* Logo */}
          <Link to="/" className={(show ? "hidden " : "flex " ) + ` items-center justify-start w-full px-6 pt-6 space-x-3 text-gray-800 xl:flex hover:text-black focus:outline-none focus:text-black`}>
            <div className="flex justify-between w-full">
              <img src={Logo} alt="Logo" className="block h-auto w-44" /*style={{width: '160px'}}*/ />
              <div aria-label="toggler" className="flex items-center justify-center md:hidden">
            <button id="open" onClick={() => setShow(!show)} aria-label="open" className={`${show ? "hidden" : ""} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}>
              <svg className="text-gray-800" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button id="close" onClick={() => setShow(!show)} aria-label="close" className={`${show ? "" : "hidden"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}>
              <svg className="text-gray-800" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
            </div>
            <p className="text-2xl leading-6 sr-only ">{props.SiteTitle}</p>
          </Link>    

          
          {/* End of Logo */}
          <div className="flex flex-col items-start justify-start w-full px-4 py-3">


            {/* Nav Links */}
            <Link to="/" activeClassName=" underline text-[#4294C2]" className="flex items-center justify-start w-full py-3 pl-4 space-x-6 text-gray-600 rounded hover:underline focus:outline-none ">

              <span className="text-base leading-4 md:text-md ">Home</span>
            </Link>
            <Link to="/services" activeClassName=" underline text-[#4294C2]" className="flex items-center justify-start w-full py-3 pl-4 space-x-6 text-gray-600 rounded hover:underline focus:outline-none ">

              <p className="text-base leading-4 md:text-md ">  Services</p>
            </Link>
            <Link to="/fees-and-insurance" activeClassName=" underline text-[#4294C2]" className="flex items-center justify-start w-full py-3 pl-4 space-x-6 text-gray-600 rounded hover:underline focus:outline-none ">

              <p className="text-base leading-4 md:text-md">Fees &amp; Insurance</p>
            </Link>
            <Link to="/dental-advice" activeClassName=" underline text-[#4294C2]" className="flex items-center justify-start w-full py-3 pl-4 space-x-6 text-gray-600 hover:underline roundedfocus:outline-none ">

              <p className="text-base leading-4 md:text-md ">Dental Advice</p>
            </Link>
            <Link to="/contact-us" activeClassName=" underline text-[#4294C2]" className="flex items-center justify-start w-full py-3 pl-4 space-x-6 text-gray-600 hover:underline roundedfocus:outline-none ">

              <p className="text-base leading-4 md:text-md ">Contact Us</p>
            </Link>
          </div>

          {/* End of Nav Links */}
          {/* Top Half of Sidebar End */}

          {/* Bottom Half of Sidebar Start */}
          <div className="w-full px-4">
            <hr className="w-full border-gray-100 " />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start justify-start w-full px-4 pb-5 mt-2 space-y-3 ">
            <div className="flex items-center justify-start w-full p-3 py-1 pl-4 text-gray-600 rounded focus:outline-none ">
              <div className="flex items-center justify-start w-full">

                <p className="text-sm leading-4 lg:text-md"> <span className="text-[#4294C2]">PH:  </span>   (562) 867-1753</p>
              </div>
            </div>
            <div className="flex items-center justify-start w-full py-1 pl-4 space-x-6 text-gray-600 rounded focus:outline-none">
              <p className="text-sm leading-4 lg:text-md "> <span className="text-[#4294C2]">FAX:  </span> (555)555-5555</p>
            </div>
          </div>

          {/* End of Contact Info */}

          {/* Insurance Logos */}
          <div className="w-full px-4">
            <hr className="w-full border-gray-100 " />
          </div>
          <div className="flex flex-col items-start justify-start w-full px-4 mt-2 space-x-6 space-y-3 text-left lg:pb-5 lg:mt-6 ">
            <div className="flex flex-col items-start justify-start w-full text-gray-600">

              <p className="pb-4 pl-4 text-base leading-4 text-left">Member of</p>
              <div className="flex flex-wrap items-center w-full justify-evenly lg:justify-evenly">
                <img src={ADA} alt="ADA" className="inline-flex pr-2" />
                <img src={CDA} alt="CDA" className="inline-flex pl-2" />
                <img src={Harbor} alt="Harbor" className="inline-flex px-2 py-4" />
              </div>
            </div>
          </div>
          {/* End of Insurance Logos */}
          {/* follow us start */}
          <div className="flex flex-col items-center justify-center w-full px-4 text-center">
            <h3 className="text-lg md:mb-2"> Follow Us</h3>
            <div className="flex ">
            <img className="mr-5 text-white" src={facebook} alt="footerlogo" />
                <img src={linkedin} alt="footerlogo" />
               </div>
         
               
        
          </div>

          <div className=" mt-0 py-0  flex bg-white justify-center text-center space-x-2 align-top items-center h-auto  px-3.5 w-full">
            <div className="flex flex-col items-center justify-center align-top">
              <img src={CarePay} alt="CarePayment" className="p-4 lg:p-4" />
              <Link to="#" aria-label="visit" className="w-full focus:ring-2 text-white p-2.5 border-2 hover:border-logo-blue-500 hover:bg-white hover:text-logo-blue-500 bg-logo-blue-500 rounded-full">
                Pay Now
              </Link>
            </div>

          </div>
        </div>
      </div>
      </nav>
    </>
  );
}


export default SidebarNav