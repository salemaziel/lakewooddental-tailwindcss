import React from "react";

const SerHero = (props) => {
    return (
        <section classname="">
      
            <div className="pt-24 pb-16 bg-center bg-cover  sm:pt-36 backdrop-blur-md w-full" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${props.bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", minHeight: '60vh'}}>
                <div className="container px-4  mx-auto">
                    <div className=" text-start">
                        
                        <h1 className="py-8 mb-6 text-5xl font-semibold text-start  tracking-widest text-white font-heading font-poppins">{props.pageTitle}</h1>
                      

                    </div>
                </div>
            </div>
         

        </section>

    );
}

export default SerHero;