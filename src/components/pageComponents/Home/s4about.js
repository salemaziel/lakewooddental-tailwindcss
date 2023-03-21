import React from "react";
import aboutimg from '../../../images/about.png';

const S4about = () => {
    return(
        <>
        <section className="relative left-0 w-full h-full bg-white">
            <div  className="container relative  mx-auto">
            <div className="flex md:flex-row flex-col w-full items-center">
               
                <div className="md:w-3/5 w-full p-10">
                    <h2 className="text-4xl font-semibold leading-10  after:block after:border-2 after:border-[#4294C2] after:w-20 after:my-4" >About us</h2>
                  
                    <p className="text-black text-base font-normal leading-9 mt-8 pr-12">
                    Lakewood Dental Care and Dr James B Lee are dedicated to providing the optimal dental care for every patient. We have been in business and serving the Lakewood area for over 35 years. We are committed to providing high quality, comfortable, and lasting dental treatment.
                    </p>
                  
                </div>
                <div className="md:w-2/5 w-full">
                    <img className="w-full " src={aboutimg} alt="teamimg"/>
                </div>

            </div>
            </div>
        </section>
        
        </>
  
    )
}

export default S4about;