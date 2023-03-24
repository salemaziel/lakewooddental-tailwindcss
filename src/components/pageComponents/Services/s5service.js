import React from "react";
import implantsimg from '../../../images/Services/serv4.png';

import { Link } from 'gatsby';


const Implants = () => {
    return(
        <>
        <section className="relative left-0 w-full h-full bg-[#EEF5FF]">
            <div  className="container relative mx-auto">
            <div className="flex flex-col items-center w-full md:flex-row">
            <div className="w-full md:w-1/2">
                    <img className="w-full " src={implantsimg} alt="teamimg"/>
                </div>
               
                <div className="w-full p-10 md:w-1/2 ">
                    <h2 className="mb-3 text-4xl font-semibold leading-10" >Implants</h2>
                  
                    <p className="pr-12 mt-8 text-base font-normal leading-9 text-black">
                    Missing teeth can be replaced by dental implants that do not require alterations to your other natural teeth.
                    </p>
                    <Link to="/services/dental-implants" type="button" className="mt-8 text-white bg-[#1F3B53] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-16 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Know More</Link>
                </div>
                

            </div>
            </div>
        </section>
        
        </>
  
    )
}

export default Implants;