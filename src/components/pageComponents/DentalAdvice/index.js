import React from 'react';
import SerHero from '../Services/serhero';
import BG from "../../../images/serhero.png";
import Footer from '../../layout/footer';


const DentalAdvice = () => {
    return (
        <>
            <SerHero
                bgImage={BG}
                pageTitle="Dental Advice"
            />
            <Footer />
        </>
    );
}

export default DentalAdvice;