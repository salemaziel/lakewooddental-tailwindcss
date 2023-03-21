import React from 'react';
import SerHero from './serhero';
import BG from "../../../images/serhero.png";
import Prevention from './sers2';
import Restoration from './s3service';
import Cosmetics from './s4service';
import Implants from './s5service';
import Footer from '../../layout/footer';
import SerBanner from './serbanner';
import SerLast from './s6service';
import servbottom from '../../../images/botbg.png';
function ServicesPage() {
    return (<>
   <SerHero
        bgImage={BG}
        pageTitle="Services"
      />
      <SerBanner/>
      <Prevention/>
      <Restoration/>
      <Cosmetics/>
      <Implants/>
      <SerLast
         bgImage={servbottom}
      />
      <Footer/>
    </>  );
}

export default ServicesPage;