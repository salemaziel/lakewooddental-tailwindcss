import React from "react";
import aboutimg from '../../../images/2023/dentist-working-happy-patient-halfsize-crop.jpg';

const S4about = () => {
    return(
        <>
        <section className="relative left-0 w-full h-full bg-white">
            <div  className="container relative mx-auto lg:mr-0">
            <div className="flex flex-col items-center w-full md:flex-row">
               
                <div className="w-full p-10 md:w-3/5 md:pr-2">
                    <h2 className="text-4xl font-semibold leading-10  after:block after:border-2 after:border-[#4294C2] after:w-20 after:my-4" >About us</h2>
                  
                    <p className="mt-8 text-base font-normal leading-9 text-black md:pr-12">
                    Lakewood Dental Care and Dr James B Lee are dedicated to providing the optimal dental care for every patient. We have been in business and serving the Lakewood area for over 35 years. We are committed to providing high quality, comfortable, and lasting dental treatment.
                    </p>
                  
                </div>
                <div className="w-full md:w-2/5 md:pr-4 lg:pr-0">
                    <img className="w-full" src={aboutimg} alt="teamimg"/>
                </div>

            </div>
            </div>
        </section>
        
        </>
  
    )
}

export default S4about;