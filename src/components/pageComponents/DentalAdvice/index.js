import React from 'react';
import SerHero from '../Services/serhero';
import BG from "../../../images/serhero.png";
import Footer from '../../layout/footer';

import S1Blog from './s1Blog';

import CTA from "../../bottomCTA"
import BGCTA from '../../../images/botbg.png';

const DentalAdvice = () => {
    return (
        <>
            <SerHero
                bgImage={BG}
                pageTitle="Dental Advice"
            />
            <S1Blog />
            <CTA
          bgImage={BGCTA}
        />
            <Footer />
        </>
    );
}

export default DentalAdvice;