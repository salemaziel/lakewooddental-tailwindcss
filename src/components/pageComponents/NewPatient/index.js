import React from 'react';
import SerHero from '../Services/serhero';
import BG from "../../../images/serhero.png";
import Footer from '../../layout/footer';


import CTA from "../../bottomCTA"
import BGCTA from '../../../images/botbg.png';

import S1NewPatient from './s1Patient';

const Intake = () => {
    return (
        <>
            <SerHero
                bgImage={BG}
                pageTitle="New Patients"
            />

            <S1NewPatient />

            <CTA
          bgImage={BGCTA}
        />
            <Footer />
        </>
    );
}

export default Intake;