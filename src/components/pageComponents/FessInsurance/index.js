import React from 'react';


import Footer from '../../layout/footer';
import SerHero from '../Services/serhero';
import BG from '../../../images/serhero.png'
import InsuranceS1 from './insurances1';
import PPoInsurance from './insurances2';
import atena from '../../../images/ppo-insurance/Group 51.png';
import amer from '../../../images/ppo-insurance/Group 52.png';
import antherm from '../../../images/ppo-insurance/Group 53.png';
import cigna from '../../../images/ppo-insurance/Group 54.png';
import dentalimg from '../../../images/ppo-insurance/Group 55.png';
import fortis from '../../../images/ppo-insurance/Group 56.png';
import westlife from '../../../images/ppo-insurance/Group 57.png';
import dental from '../../../images/ppo-insurance/Group 58.png';
import guardian from '../../../images/ppo-insurance/Group 59.png';
import humana from '../../../images/ppo-insurance/Group 60.png';
import mutual from '../../../images/ppo-insurance/Group 61.png';
import metlife from '../../../images/ppo-insurance/Group 62.png';
import omana from '../../../images/ppo-insurance/Group 63.png';
import pacific from '../../../images/ppo-insurance/Group 64.png';
import phoencis from '../../../images/ppo-insurance/Group 65.png';
import principal from '../../../images/ppo-insurance/Group 66.png';
import prudical from '../../../images/ppo-insurance/Group 67.png';
import safehealth from '../../../images/ppo-insurance/Group 68.png';
import united from '../../../images/ppo-insurance/Group 69.png';

function InsurancePage() {
    return (<>
   <SerHero
        bgImage={BG}
        pageTitle="Fees & Insurance"
      />
      <InsuranceS1/>
      <PPoInsurance
      items={[
      
        
        {
          Icon: `${atena}`,
          IconAlt: "Tooth Icon",
        },
        {
          Icon: `${amer}`,
          IconAlt: "Tooth Icon",
        },
        {
          Icon: `${antherm}`,
          IconAlt: "Tooth Icon",
        },
        {
          Icon: `${cigna}`,
          IconAlt: "Tooth Icon",
        },
        {
          Icon: `${dentalimg}`,
          IconAlt: "Tooth Icon",

        },
        {
            Icon: `${fortis}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${westlife}`,
            IconAlt: "Tooth Icon",
  
          },
          {
            Icon: `${dental}`,
            IconAlt: "Tooth Icon",
  
          },
          {
            Icon: `${guardian}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${humana}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${mutual}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${metlife}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${omana}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${pacific}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${phoencis}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${principal}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${prudical}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${safehealth}`,
            IconAlt: "Tooth Icon",
          },
          {
            Icon: `${united}`,
            IconAlt: "Tooth Icon",
          },
        ]}
       />
      <Footer/>
    </>  );
}

export default InsurancePage;