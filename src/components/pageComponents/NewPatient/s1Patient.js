import React from "react";

import { Link } from "gatsby";

import AdultForm from "../../../forms/Adult-NewPatient-Intake-Form.pdf"
import ChildForm from "../../../forms/Child-NewPatient-Intake-Form.pdf"
import PrivacyPolicy from "../../../forms/NoticeOfPrivacyPractices.pdf"

const S1NewPatient = () => {
    return (
  <section className="relative block px-0 py-16 pb-16 m-0 font-sans leading-6 text-left lg:pt-24 " >
  <div className="container w-full max-w-2xl px-4 py-0 mx-auto my-0 leading-6 lg:max-w-5xl">
    <div className="flex-wrap block clear-both p-0 my-0 -mx-4 text-left" >
      <div className="relative w-full px-4 py-0 m-0 sm:max-w-full sm:flex-shrink-0 sm:flex-grow-0 sm:basis-full md:flex-shrink-0 md:flex-grow-0 lg:flex-shrink-0 lg:flex-grow-0 lg:basis-3/4">
        <div className="relative p-0 m-0" >
          <div className="relative p-0 mx-0 mt-0 mb-4">
            <h2 className="p-0 mx-0 mt-0 mb-2 text-4xl font-semibold text-center text-logo-blue-500">
              Patient Forms
            </h2>
          </div>
          <h3 className="relative p-0 mx-0 mt-0 mb-2 text-xl text-dark-blue-500" /*text-[#4294C2]"*/>
            We offer our patient forms online for you to fill out and complete
            in the comfort of your own home prior to your office visit.
            <br className="p-0 m-0 leading-8"/><br className="p-0 m-0 leading-8" />We look forward to treating you!
          </h3>
          <hr style={{borderWidth: '1px 0px 0px', borderImage: 'initial'}} className="box-content w-1/2 h-0 p-0 mx-auto my-4 overflow-visible border-t border-b-0 border-solid border-x-0 border-neutral-200" />
          <div className="relative p-4 mx-0 mt-0 mb-4 leading-7 text-center">
            <h4 className="text-[#4294C2] underline text-xl">
              Patient Forms include:
            </h4>
            <ul className="p-0 mx-0 mt-0 mb-4" style={{listStyle: 'none', textDecoration: 'none'}}>
              <li className="p-0 m-0 list-disc list-outside" style={{listStyle: 'none', textDecoration: 'none'}}>
                New Patient Information
              </li>
              <li className="p-0 m-0 list-disc list-outside" style={{listStyle: 'none', textDecoration: 'none'}}>
                Patient Health History
              </li>
              <li className="p-0 m-0 list-disc list-outside" style={{listStyle: 'none', textDecoration: 'none'}}>
                Financial Policy Agreement
              </li>
              <li className="p-0 m-0 list-disc list-outside" style={{listStyle: 'none', textDecoration: 'none'}}>
                Notice of Privacy Practices
              </li>
              <li className="p-0 m-0 list-disc list-outside" style={{listStyle: 'none', textDecoration: 'none'}}>
                Acknowledgement of Receipt of Notice of Privacy Practices
              </li>
            </ul>
          </div>
          <div className="relative p-0 mx-0 mt-0 mb-10" >
            <p className="relative py-0 pl-6 pr-0 mx-auto mt-0 mb-2 text-base font-normal text-center text-neutral-500">
              All forms are PDF files. Please download to print and bring with you to your appointment.
            </p>
          </div>

          <div className="relative flex flex-col p-0 mx-auto mt-0 mb-10 md:flex-row">
            <div className="relative p-0 mx-auto mt-0 mb-5">
              <a href={AdultForm} rel="noopener" target="_blank" className="relative inline-block w-full px-5 py-3 m-0 text-lg font-semibold leading-7 text-center text-white cursor-pointer bg-sky-600 hover:text-white hover:bg-logo-blue-500" style={{borderRadius: 50, maxWidth: 360, transition: 'all 0.3s ease 0s'}}>Adult New Patient Forms</a>
            </div>
            <div className="relative p-0 mx-auto mt-0 mb-5">
              <a href={ChildForm} rel="noopener" target="_blank"  className="relative inline-block w-full px-5 py-3 m-0 text-lg font-semibold leading-7 text-center text-white cursor-pointer bg-sky-600 hover:text-white hover:bg-logo-blue-500" style={{borderRadius: 50, maxWidth: 360, transition: 'all 0.3s ease 0s'}}>Child New Patient Forms</a>
            </div>
          </div>
 



          <br className="p-0 m-0" />
          <hr className="box-content h-0 p-0 mx-auto my-4 overflow-visible border-t border-b-0 border-solid border-x-0 border-neutral-200" style={{borderWidth: '1px 0px 0px', borderImage: 'initial'}} />
          <div className="relative justify-center p-4 mx-auto mt-0 mb-4 text-base leading-7 text-center text-neutral-500" >
            Your privacy is important to us.
            <br className="p-0 m-0" />Any information gathered from the above forms or through any
            communications is subject to our Patient Privacy Policy.
            <div className="p-0 mx-0 mt-0 mb-4" style={{listStyle: 'none', textDecoration: 'none'}}>
              <div className="p-0 m-0 list-disc list-outside" style={{listStyle: 'none', textDecoration: 'none'}}>
                <a href={PrivacyPolicy} rel="noopener" target="_blank"   className="p-0 m-0 text-blue-600 bg-transparent cursor-pointer hover:text-sky-700" >HIPAA Notice of Privacy Practices</a>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/*} <div className="relative w-full px-4 py-0 m-0 sm:flex-shrink-0 sm:flex-grow-0 md:flex-shrink-0 md:flex-grow-0 lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/4" style={{listStyle: 'none', textDecoration: 'none'}}>
        <div className="relative p-0 mx-0 mt-0 mb-10 bg-cover bg-sky-600" style={{listStyle: 'none', textDecoration: 'none'}}>
          <div className="relative px-6 py-12 m-0 text-justify" style={{listStyle: 'none', textDecoration: 'none'}}>
            <h2 className="relative p-0 mx-0 mt-0 mb-2 text-3xl font-bold leading-5 text-white" style={{listStyle: 'none', textDecoration: 'none'}}>
              Contact Info
            </h2>
            <hr style={{width: '50%', listStyle: 'none', textDecoration: 'none', borderWidth: '1px 0px 0px', borderImage: 'initial'}} className="box-content w-1/2 h-0 p-0 mx-0 my-4 overflow-visible border-t border-b-0 border-solid border-x-0 border-neutral-200" />
            <ul className="p-0 mx-0 mt-0 mb-4 text-neutral-800" style={{listStyle: 'none', textDecoration: 'none'}}>
              <li className="p-0 m-0" style={{listStyle: 'none', textDecoration: 'none'}}>
                <a href="tel:760-710-1901" className="p-0 m-0 text-black bg-transparent cursor-pointer hover:text-sky-700" style={{listStyle: 'none', textDecoration: 'none'}}>
                  <h4 className="relative px-0 pt-0 pb-5 mx-0 mt-0 mb-4 text-xl font-medium leading-5 text-white" style={{listStyle: 'none', textDecoration: 'none'}}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="p-0 m-0 overflow-hidden align-middle" style={{listStyle: 'none', textDecoration: 'none'}}>
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" className="p-0 m-0" style={{listStyle: 'none', textDecoration: 'none'}} />
                    </svg>
                    760 710-1901
                  </h4></a>
              </li>
              <li className="p-0 m-0" style={{listStyle: 'none', textDecoration: 'none'}}>
                <a href="tel:760-710-1901" className="p-0 m-0 text-black bg-transparent cursor-pointer hover:text-sky-700" style={{listStyle: 'none', textDecoration: 'none'}}>
                  <h4 className="relative px-0 pt-0 pb-5 mx-0 mt-0 mb-4 text-xl font-medium leading-5 text-white" style={{listStyle: 'none', textDecoration: 'none'}}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="p-0 m-0 overflow-hidden align-middle" style={{listStyle: 'none', textDecoration: 'none'}}>
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" className="p-0 m-0" style={{listStyle: 'none', textDecoration: 'none'}} />
                    </svg>
                    760 710-1901
                  </h4></a>
              </li>
              <li className="p-0 m-0" style={{listStyle: 'none', textDecoration: 'none'}}>
                <a href="https://www.google.com/maps/place/Elite+Care+Chiropractic+Center/@33.054452,-117.26086,16z/data=!4m5!3m4!1s0x0:0x8acc9cf120956245!8m2!3d33.0544518!4d-117.2608602?hl=en-US" className="p-0 m-0 text-black bg-transparent cursor-pointer hover:text-sky-700" style={{listStyle: 'none', textDecoration: 'none'}}>
                  <h4 className="relative px-0 pt-0 pb-5 mx-0 mt-0 mb-4 text-xl font-medium leading-5 text-white" style={{listStyle: 'none', textDecoration: 'none'}}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="p-0 m-0 overflow-hidden align-middle" style={{listStyle: 'none', textDecoration: 'none'}}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" className="p-0 m-0" style={{listStyle: 'none', textDecoration: 'none'}} /></svg>317 N El Camino Real
                    <br className="p-0 m-0" style={{listStyle: 'none', textDecoration: 'none'}} />
                    Encinitas, CA 92024
                  </h4></a>
              </li>
            </ul>
          </div>
        </div>
      </div>*/}
    </div>
  </div>
</section>

    )
}

export default S1NewPatient