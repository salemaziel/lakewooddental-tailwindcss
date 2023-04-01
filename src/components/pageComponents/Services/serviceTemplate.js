import React from "react";
import SerHero from "./serhero";

import BG from "../../../images/serhero.png";



const ServiceTemplate = (props) => {
    return (
      <>
      <SerHero
      bgImage={BG}
      pageTitle={props.title}
    />
  <section className="relative py-10">
  <div className="container px-4 mx-auto">
    <div className="max-w-2xl mx-auto lg:max-w-5xl">
        <div className="mb-8 text-base font-normal leading-normal tracking-normal text-left">{props.post}

      </div>
    </div>
  </div>
</section>

</>
    );
}

export default ServiceTemplate;