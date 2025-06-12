import React from 'react';

import Footer from '../../layout/footer';
import SerHero from '../Services/serhero';
import BG from '../../../images/serhero.png';
import InsuranceS1 from './insurances1';
import PPoInsurance from './insurances2';
import aetna from '../../../images/ppo-insurance/Group 51.png';
import amer from '../../../images/ppo-insurance/Group 52.png';
import anthem from '../../../images/ppo-insurance/Group 53.png';
import cigna from '../../../images/ppo-insurance/Group 54.png';
import deltadental from '../../../images/ppo-insurance/Group 55.png';
import dentalbenefitproviders from '../../../images/ppo-insurance/Group 56.png';
import fortis from '../../../images/ppo-insurance/Group 57.png';
import westlife from '../../../images/ppo-insurance/Group 58.png';
import guardian from '../../../images/ppo-insurance/Group 59.png';
import humana from '../../../images/ppo-insurance/Group 60.png';
import mutual from '../../../images/ppo-insurance/Group 61.png';
import metlife from '../../../images/ppo-insurance/Group 62.png';
import omana from '../../../images/ppo-insurance/Group 63.png';
import pacific from '../../../images/ppo-insurance/Group 64.png';
import phoenix from '../../../images/ppo-insurance/Group 65.png';
import principal from '../../../images/ppo-insurance/Group 66.png';
import prudential from '../../../images/ppo-insurance/Group 67.png';
import safehealth from '../../../images/ppo-insurance/Group 68.png';
import united from '../../../images/ppo-insurance/Group 69.png';

import CallToAction from '../../bottomCTA';
import BGCTA from '../../../images/botbg.png';

function InsurancePage() {
	return (
		<>
			<SerHero bgImage={BG} pageTitle="Fees & Insurance" />
			<InsuranceS1 />
			<PPoInsurance
				items={[
					{
						Icon: `${aetna}`,
						IconAlt: 'Aetna Insurance Logo'
					},
					{
						Icon: `${amer}`,
						IconAlt: 'Ameritas Insurance Logo'
					},
					{
						Icon: `${anthem}`,
						IconAlt: 'Anthem Insurance Logo'
					},
					{
						Icon: `${cigna}`,
						IconAlt: 'Cigna Insurance Logo'
					},
					{
						Icon: `${deltadental}`,
						IconAlt: 'Delta Dental Insurance Logo'
					},
					{
						Icon: `${dentalbenefitproviders}`,
						IconAlt: 'Dental Benefit Providers Logo'
					},
					{
						Icon: `${fortis}`,
						IconAlt: 'Fortis Insurance Logo'
					},
					{
						Icon: `${westlife}`,
						IconAlt: 'Great-Westlife Insurance Logo'
					},
					{
						Icon: `${guardian}`,
						IconAlt: 'Guardian Insurance Logo'
					},
					{
						Icon: `${humana}`,
						IconAlt: 'Humana Insurance Logo'
					},
					{
						Icon: `${mutual}`,
						IconAlt: 'Mass Mutual Insurance Logo'
					},
					{
						Icon: `${metlife}`,
						IconAlt: 'MetLife Insurance Logo'
					},
					{
						Icon: `${omana}`,
						IconAlt: 'Mutual of Omaha Insurance Logo'
					},
					{
						Icon: `${pacific}`,
						IconAlt: 'Pacific Life Insurance Logo'
					},
					{
						Icon: `${phoenix}`,
						IconAlt: 'Phoenix Insurance Logo'
					},
					{
						Icon: `${principal}`,
						IconAlt: 'Principal Insurance Logo'
					},
					{
						Icon: `${prudential}`,
						IconAlt: 'Prudential Insurance Logo'
					},
					{
						Icon: `${safehealth}`,
						IconAlt: 'SafeHealth Insurance Logo'
					},
					{
						Icon: `${united}`,
						IconAlt: 'United Concordia Insurance Logo'
					}
				]}
			/>
			<CallToAction bgImage={BGCTA} />
			<Footer />
		</>
	);
}

export default InsurancePage;
