import React from "react";

// https://www.affordablefamilydentistry.com/wp-content/uploads/2021/03/Group-1.png

const PPoInsurance = (props) => {
    return (
        <section className="relative left-0 w-full h-full bg-[#EEF5FF]">
            <div className="container relative px-4 py-12 mx-auto">
            <div className="text-center md:w-3/4 mx-auto w-full">
                    <h1 className="text-4xl font-semibold leading-10  "> PPO Insurance</h1>
                    <p className="text-[#4294C2] text-lg font-normal leading-9 mt-4 after:block after:border-2 after:border-[#4294C2] after:w-20 after:mt-4 after:mb-10 after:mx-auto">In addition to accepting your indemnity dental insurance we are happy to be Preferred Providers for the following dental insurance companies:</p>
                </div>
                <div className="flex flex-wrap -mx-4 mt-5">

                    {props.items.map((item, index) => (
                        <div className="w-full px-4 mb-6 md:w-1/4 md:mb-0" key={index}>
                            <div className="flex flex-col justify-center mx-auto text-center max-w-xxs sm:max-w-sm" >
                                <div className="flex items-center justify-center flex-shrink-0  mx-auto text-white ">
                                 
                                    <img src={item.Icon} alt={item.IconAlt} className=" text-light-blue-500"  />
                                </div>
                                <div>
                                    <h4 className="mb-2 text-lg text-[#1F3B53] font-semibold font-heading">{item.IconTitle}</h4>
                                    <p className="text-[#323232]">{item.IconSubtitle}</p>
                                </div>
                            </div>


                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default PPoInsurance;