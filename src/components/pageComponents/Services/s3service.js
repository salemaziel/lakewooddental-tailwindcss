import React from "react";
import restorationimg from '../../../images/Services/serv2.png';

const Restoration = () => {
    return(
        <>
        <section className="relative left-0 w-full h-full bg-[#EEF5FF]">
            <div  className="container relative  mx-auto">
            <div className="flex md:flex-row flex-col w-full items-center">
            <div className="md:w-1/2 w-full">
                    <img className="w-full " src={restorationimg} alt="teamimg"/>
                </div>
               
                <div className="md:w-1/2 w-full p-10 ">
                    <h2 className="text-4xl font-semibold leading-10 mb-3" >Restoration</h2>
                  
                    <p className="text-black text-base font-normal leading-9 mt-8 pr-12">
                    At Lakewood Dental Care, we work to restore your teeth back to their original state.
                    </p>
                    <button type="button" className="mt-8 text-white bg-[#1F3B53] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-16 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Know More</button>
                </div>
                

            </div>
            </div>
        </section>
        
        </>
  
    )
}

export default Restoration;