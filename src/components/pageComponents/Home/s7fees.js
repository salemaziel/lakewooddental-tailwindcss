import React from "react";
//import fessimg from '../../../images/fees.png';
import fessimg from '../../../images/2023/dentist-smiling-patient.jpg';


import {Link} from "gatsby";

const S7fees = () => {
    return(
        <>
        <section className="relative left-0 w-full h-full bg-white">
            <div  className="container relative pt-12 mx-auto">
            <div className="flex flex-col items-center w-full md:flex-row">
                <div className="w-full xl:w-3/5">
                    <img className="w-full px-5 pt-5" src={fessimg} alt="teamimg"/>
                </div>
                <div className="flex  flex-col text-start   xl:w-2/5 w-full   bg-white xl:absolute left-1/2  lg:top-[30%]  p-9  ">
                  
                <h2 className="text-4xl font-semibold leading-10  after:block after:border-2 after:border-[#4294C2] after:w-20 after:my-4" > Fees & Insurance</h2>
                  
                  <p className="mt-6 text-base font-normal leading-9 text-black ">
                  Our fees reflect the value of the services that we provide. Fees and specific financial arrangements, including dental insurance benefits, should be discussed with the receptionist before treatment begins.
                  </p>
                  <Link to="/fees-and-insurance" type="button" className="mt-5 text-white bg-[#1F3B53] hover:bg-white hover:text-logo-blue-500 focus:outline-logo-blue-500 focus:ring-4 border-logo-blue-500 hover:border-logo-blue-500 border-2 lg:w-3/5 text-center font-medium rounded-full text-base uppercase px-14 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Find Out More</Link>
                </div>

            </div>
            {/*<div className="flex flex-col justify-center md:flex-row">
            <button type="button" className="mt-5 text-[#1F3B53] bg-white border-[#1F3B53] border-2 hover:bg-logo-blue-500 hover:text-white focus:outline-logo-blue-500 hover:border-logo-blue-500 focus:ring-4 focus:ring-logo-blue-500 font-medium rounded-full text-base uppercase px-14 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Fees & Insurance</button>
            <button type="button" className="mt-5 text-white bg-[#1F3B53] hover:bg-white hover:text-logo-blue-500 focus:outline-logo-blue-500 focus:ring-4 border-logo-blue-500 hover:border-logo-blue-500 border-2 font-medium rounded-full text-base uppercase px-14 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dental Advice</button>
            </div>*/}
            </div>
        </section>
        
        </>
  
    )
}

export default S7fees;