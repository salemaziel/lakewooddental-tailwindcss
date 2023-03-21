import React from "react";

const SerLast = (props) => {
    return (
        <section classname="">
      
            <div className="pt-24 pb-16 bg-center bg-cover  sm:pt-36 backdrop-blur-md w-full" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${props.bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", minHeight: '60vh'}}>
                <div className="container px-4  mx-auto">
                    <div className=" ">
                        
                    <div className="flex justify-center md:flex-row flex-col">
            <button type="button" className="mt-5 text-[#1F3B53] bg-white border-[#4294C2] border-2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-14 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Fees & Insurance</button>
            <button type="button" className="mt-5 text-white bg-[#4294C2] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-14 py-2.5 mr-2 mb-2  dark:border-gray-700">Dental Advice</button>
            </div>
                      

                    </div>
                </div>
            </div>
         

        </section>

    );
}

export default SerLast;