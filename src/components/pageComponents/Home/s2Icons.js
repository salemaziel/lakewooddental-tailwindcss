import React from "react";

// https://www.affordablefamilydentistry.com/wp-content/uploads/2021/03/Group-1.png

const S2Icons = (props) => {
    return(
        <section className="relative left-0 w-full h-full bg-white">
        <div className="container relative px-4 py-12 mx-auto">
            <div className="flex flex-wrap -mx-4">

            {props.items.map((item, index) => (
                <div className="w-full px-4 mb-6 md:w-1/5 md:mb-0" key={index}>
                    <div className="flex flex-col justify-center mx-auto text-center max-w-xxs sm:max-w-sm" >
                        <div className="flex items-center justify-center flex-shrink-0 h-16 mx-auto text-white rounded-md w-14 lg:w-16 lg:h-16">
                                    {/*<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.9976 20.7529C16.5294 20.7529 20.6745 17.4945 23.0082 12.063C20.6745 6.63142 16.5294 3.37297 11.9976 3.37297H12.0023C7.47051 3.37297 3.32545 6.63142 0.991699 12.063C3.32545 17.4945 7.47051 20.7529 12.0023 20.7529H11.9976Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path fillRule="evenodd" clipRule="evenodd" d="M15.7622 12.0632C15.7622 14.1411 14.077 15.825 11.9992 15.825C9.92127 15.825 8.2373 14.1411 8.2373 12.0632C8.2373 9.98412 9.92127 8.30016 11.9992 8.30016C14.077 8.30016 15.7622 9.98412 15.7622 12.0632Z" stroke="#2B3031" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>*/}
                            <img src={item.Icon} alt={item.IconAlt} className="h-14 text-light-blue-500" /*width="24px" height="24px"*/ />
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

export default S2Icons;