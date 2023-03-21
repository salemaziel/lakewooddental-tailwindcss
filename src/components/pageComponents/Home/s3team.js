import React from "react";
import teamImg from '../../../images/teamim.png';

const S3teams = () => {
    return(
        <>
        <section className="relative left-0 w-full h-full bg-[#EEF5FF]">
            <div  className="container relative px-4 py-12 mx-auto">
            <div className="flex md:flex-row flex-col w-full items-center">
                <div className="md:w-2/5 w-full">
                    <img className="w-full p-5" src={teamImg} alt="teamimg"/>
                </div>
                <div className="md:w-3/5 w-full">
                    <h2 className="text-4xl font-semibold leading-10 " >Meet Our Staff</h2>
                    <h4 className="text-[#4294C2] text-2xl font-normal mt-5 after:block after:border-2 after:border-[#4294C2] after:w-24 after:my-5"> Our hardworking dentists and hygienists</h4>
                    <p className="text-black text-base font-normal leading-9 mt-8">
                  <span className="text-[#1F3B53] font-semibold"> James B. Lee, D.D.S. </span>   is a 1978 graduate of the UCLA School of Dentistry and has been practicing in our Lakewood practice since 1981. Dr. Lee has extensive experience in all aspects of clinical dentistry, including endodontic (root canal) treatment and crown and bridge restorations. Dr. Lee’s leisure pursuits include hiking, sailing, and Aikido.
                    </p>
                    <button type="button" className="mt-5 text-white bg-[#1F3B53] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-20 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Doctor & Staff</button>
                </div>

            </div>
            </div>
        </section>
        
        </>
  
    )
}

export default S3teams;