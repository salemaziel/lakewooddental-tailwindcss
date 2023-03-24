import React from "react";
import SerHero from "./serhero";

import BG from "../../../images/serhero.png";

import { Link } from "gatsby";

const ServiceTemplate = (props) => {
    return (
      <>
      <SerHero
      bgImage={BG}
      pageTitle={props.title}
    />
  {/*<div className="pt-20 pb-8 mb-12 bg-no-repeat bg-cover" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${BG})` , backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
    <div className="container px-4 mx-auto">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-center">
          <span className="text-base md:text-lg">
            <Link to="/services" className="text-gray-200 hover:underline">Services</Link>
            {/*<span className="text-blueGray-200">24 Jan, 2020</span>* /}
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl font-heading">{props.title}</h2>
        </div>
        <div className="flex justify-center mb-8">
          {/*<img className="object-cover w-12 h-12 rounded-full" src={props.image}  /*src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"* / alt={props.imageAlt} />* /}
          <div className="pl-4">
            {/*<p className="mb-1 text-blueGray-100">Alice Bradley</p>
            <p className="text-xs font-semibold text-blueGray-200">Author</p>* /}
          </div>
        </div>
      </div>
    </div>
  </div>*/}
  <section className="relative py-10">
  <div className="container px-4 mx-auto">
    <div className="max-w-2xl mx-auto lg:max-w-5xl">
        <div className="mb-8 text-base font-normal leading-normal tracking-normal text-left">{props.post}
      {/*<p className="mb-6 leading-loose text-blueGray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla sed erat molestie, auctor mauris lobortis, iaculis justo.</p>
      <p className="leading-loose text-blueGray-400">Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt lorem cursus suscipit. Integer scelerisque sem et sem porta, eu volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam mattis, sapien a commodo ultrices, nunc orci tincidunt ante, tempus tempus turpis metus laoreet lacus. Praesent condimentum, arcu ut fringilla tincidunt, augue diam pretium augue, sit amet vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis. Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.</p>*/}
      </div>
    </div>
  </div>
</section>

</>
    );
}

export default ServiceTemplate;