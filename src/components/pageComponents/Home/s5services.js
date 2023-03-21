import React from "react";

// https://www.affordablefamilydentistry.com/wp-content/uploads/2021/03/Group-1.png

const S5services = (props) => {
    return (
        <section className="relative left-0 w-full h-full bg-[#EEF5FF]">
            <div className="container relative px-4 py-12 mx-auto">
                <h1 className="text-center text-4xl font-semibold text-[#1E1852] ">Our Services</h1>
                <p className="text-[#4294C2] text-base font-normal text-center mt-3 mb-5" >Dental Treatments We Provide</p>
                <div className="flex flex-wrap -mx-4">


                    {props.items.map((item, index) => (
                        <div className="w-full px-4 mb-6 md:w-1/3 md:mb-0" key={index}>
                            <div className="flex flex-col justify-center mx-auto text-center max-w-xxs sm:max-w-sm" >
                                <div className="flex items-center justify-center flex-shrink-0  mx-auto text-white rounded-md ">

                                    <img src={item.Icon} alt={item.IconAlt} />
                                </div>
                                <div>
                                    <h4 className="mb-2 mt-2 text-lg text-[#1F3B53] font-heading font-semibold">{item.IconTitle}</h4>
                                    <p className="text-[#323232] text-base">{item.IconSubtitle}</p>
                                </div>
                            </div>


                        </div>
                    ))}

                </div>
                <div className=" flex mx-auto justify-center">  <button type="button" className=" text-center mt-5 text-white bg-[#1F3B53] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base uppercase px-16 py-2.5 mr-2 mb-2 dark:bg-[#1F3B53] dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View all Services</button> </div>
               
            </div>
        </section>
    )
}

export default S5services;