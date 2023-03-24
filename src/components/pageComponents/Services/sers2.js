import React from "react";
import preventionimg from '../../../images/Services/serv1.png';

import { Link } from 'gatsby';

const Prevention = () => {
    return(
        <>
        <section className="relative left-0 w-full h-full bg-white">
            <div  className="container relative mx-auto">
            <div className="flex flex-col items-center w-full md:flex-row">
               
                <div className="w-full p-10 md:w-1/2">
                    <h2 className="text-4xl font-semibold leading-10" > Prevention</h2>
                  
                    <p className="mt-8 text-base font-normal leading-9 text-black ">
                    Preventative dentistry is the use of dental procedures to ensure that your teeth and gums remain healthy. At Lakewood Dental Care, our team will provide you with the best care to ensure your oral health.
                    </p>
                    <Link to="/services/prevention" type="button" className="mt-5 text-white bg-[#1F3B53] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-16 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Know More</Link>
                  
                </div>
                <div className="w-full md:w-1/2">
                    <img className="w-full " src={preventionimg} alt="teamimg"/>
                </div>

            </div>
            </div>
        </section>
        
        </>
  
    )
}

export default Prevention;