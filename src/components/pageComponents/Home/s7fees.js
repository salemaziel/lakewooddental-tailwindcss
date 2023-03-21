import React from "react";
import fessimg from '../../../images/fees.png';

const S7fees = () => {
    return(
        <>
        <section className="relative left-0 w-full h-full bg-white">
            <div  className="container relative  py-12 mx-auto">
            <div className="flex md:flex-row flex-col w-full items-center">
                <div className="  xl:w-3/5 w-full">
                    <img className="w-full p-5" src={fessimg} alt="teamimg"/>
                </div>
                <div className="flex  flex-col text-start   xl:w-2/5 w-full   bg-white xl:absolute left-1/2  lg:top-[30%]  p-9  ">
                  
                <h2 className="text-4xl font-semibold leading-10  after:block after:border-2 after:border-[#4294C2] after:w-20 after:my-4" > Fees & Insurance</h2>
                  
                  <p className="text-black text-base font-normal leading-9 mt-6 ">
                  Our fees reflect the value of the services that we provide. Fees and specific financial arrangements, including dental insurance benefits, should be discussed with the receptionist before treatment begins.
                  </p>
                
                </div>

            </div>
            <div className="flex justify-center md:flex-row flex-col">
            <button type="button" className="mt-5 text-[[#1F3B53] bg-white border-[#1F3B53] border-2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-14 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Fees & Insurance</button>
            <button type="button" className="mt-5 text-white bg-[#1F3B53] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-14 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dental Advice</button>
            </div>
            </div>
        </section>
        
        </>
  
    )
}

export default S7fees;