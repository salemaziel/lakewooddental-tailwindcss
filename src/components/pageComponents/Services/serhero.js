import React from "react";

const SerHero = (props) => {
    return (
        <section classname="">
      
            <div className="w-full pt-24 pb-16 bg-center bg-cover sm:pt-36 backdrop-blur-md lg:h-128 h-96" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${props.bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className="container px-4 mx-auto">
                    <div className=" text-start">
                        
                        <h1 className="py-12 pb-8 pl-4 mb-6 text-5xl font-medium tracking-wide text-white lg:font-semibold text-start font-heading font-poppins">{props.pageTitle}</h1>
                      

                    </div>
                </div>
            </div>
         

        </section>

    );
}

export default SerHero;