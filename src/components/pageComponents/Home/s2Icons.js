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
                
                
               {/* <div className="w-full px-4 mb-6 md:w-1/3 md:mb-0">
                    <div className="flex mx-auto max-w-xxs sm:max-w-sm">
                        <div className="flex items-center justify-center flex-shrink-0 mr-4 text-white rounded-md bg-light-blue-500 w-14 lg:w-16 h-14 lg:h-16 lg:mr-8">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.544 9.53998V10.7466C12.544 11.1299 12.6205 11.4514 12.7716 11.7019C12.9799 12.0476 13.322 12.2457 13.7103 12.2457C14.0908 12.2457 14.469 12.0604 14.8341 11.6953L18.8195 7.70984C19.6946 6.83478 19.6946 5.41095 18.8195 4.53589L14.8341 0.550415C14.469 0.18512 14.0908 0 13.7103 0C13.1297 0 12.544 0.463623 12.544 1.49908V2.59497C6.88564 2.92914 2.20144 7.27148 1.50527 12.9567C1.46627 13.2742 1.64681 13.5782 1.94436 13.6959C2.02859 13.7292 2.11629 13.7454 2.2029 13.7454C2.42226 13.7454 2.63503 13.6426 2.77053 13.4575C4.63784 10.9061 7.63601 9.38287 10.7905 9.38287C11.375 9.38287 11.9628 9.43561 12.544 9.53998Z" fill="currentColor" /><path d="M22.043 10.304C21.7455 10.1861 21.406 10.2843 21.2169 10.5426C19.3497 13.0938 16.3516 14.6171 13.197 14.6171C12.6126 14.6171 12.0248 14.5643 11.4436 14.46V13.2533C11.4436 12.2178 10.8577 11.7542 10.2772 11.7542C9.89674 11.7542 9.51862 11.9395 9.15333 12.3048L5.16785 16.2901C4.29298 17.1652 4.29298 18.589 5.16804 19.4642L9.15333 23.4495C9.51862 23.8148 9.89674 24 10.2772 24C10.8577 24 11.4436 23.5363 11.4436 22.5009V21.405C17.1021 21.0708 21.7861 16.7285 22.4823 11.0434C22.5213 10.7257 22.3408 10.4218 22.043 10.304Z" fill="currentColor" /><defs><rect width={24} height={24} fill="white" /></defs></svg></div>
                        <div>
                            <h4 className="mb-2 text-lg text-logo-blue-500 font-heading" contentEditable="false">Easy changes</h4>
                            <p className="text-light-blue-500">Options settings for customers convenience.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/3">
                    <div className="flex mx-auto max-w-xxs sm:max-w-sm">
                        <div className="flex items-center justify-center flex-shrink-0 mr-4 text-white rounded-md bg-light-blue-500 w-14 lg:w-16 h-14 lg:h-16 lg:mr-8">
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20.4446 14.7579C20.4446 18.336 18.336 20.4446 14.7579 20.4446H6.97173C3.38444 20.4446 1.27588 18.336 1.27588 14.7579V6.9626C1.27588 3.38444 2.59031 1.27588 6.16847 1.27588H8.16749C8.88576 1.27588 9.56212 1.61406 9.99308 2.18868L10.9059 3.40269C11.3378 3.97618 12.0135 4.31406 12.7315 4.31549H15.5611C19.1484 4.31549 20.472 6.14108 20.472 9.79227L20.4446 14.7579Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.05908 13.4891H15.6526" stroke="#2B3031" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                        <div>
                            <h4 className="mb-2 text-lg text-logo-blue-500 font-heading">Place storage</h4>
                            <p className="text-light-blue-500">Store projects in easily accessible catalogs.</p>
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    </section>
    )
}

export default S2Icons;