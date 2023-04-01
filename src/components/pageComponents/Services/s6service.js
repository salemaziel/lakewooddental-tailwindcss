import React from "react";

const SerLast = (props) => {
    return (
        <section classname="">
      
            <div className="w-full py-16 bg-center bg-cover sm:pt-36 backdrop-blur-md h-96"  style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${props.bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className="container px-4 mx-auto">
                    <div className="flex justify-center lg:flex-row">
                        <div className="flex flex-col justify-center w-full lg:w-1/2">
                            <div className="mb-3 text-3xl font-normal text-white" >Schedule An Appointment With Us Today!</div>
                        </div>
                        <div className="flex flex-col justify-center w-full lg:w-1/4">
                            <a href="tel:5628671753" type="button" className="mt-5 text-[#1F3B53] bg-white border-[#4294C2] border-2 hover:bg-logo-blue-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-14 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 text-center dark:border-gray-700">Call Now</a>
                        </div>
                    
                      

                    </div>
                </div>
            </div>
         

        </section>

    );
}

export default SerLast;