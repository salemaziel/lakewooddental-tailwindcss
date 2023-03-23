import React from 'react';
import SerHero from '../Services/serhero';
import BG from "../../../images/serhero.png";
import Footer from '../../layout/footer';

import S1Blog from './s1Blog';

const DentalAdvice = () => {
    return (
        <>
            <SerHero
                bgImage={BG}
                pageTitle="Dental Advice"
            />
            <S1Blog />
            <Footer />
        </>
    );
}

export default DentalAdvice;