import React from 'react';
import SerHero from '../Services/serhero';
import BG from "../../../images/serhero.png";

import ContactInfo from './s1contactInfo';

import Footer from '../../layout/footer';


function Contact() {
  return (
    <>
      <SerHero
        bgImage={BG}
        pageTitle="Contact"
      />
      <ContactInfo/>
      <Footer/>
    </>
  );
}

export default Contact;
