import React from 'react';

import Hero from './s1Hero';
import BG from '../../../images/container02.jpg';
import S2Icons from './s2Icons';

import Chair from '../../../images/icons/icon5.png';
import DrillTooth from '../../../images/icons/icon2.png';
import Toothbrush from '../../../images/icons/icon3.png';

import ShinyTooth from '../../../images/icons/icon4.png';
import ToothCheckup from '../../../images/icons/icon1.png';
//import ToothChart from '../../../images/icons/tooth-chart.svg'
//import Tools from '../../../images/icons/dental-tools.svg'
import Footer from '../../layout/footer';
import S3teams from './s3team';
import S4about from './s4about';
import S5services from './s5services';
import service1img from '../../../images/service1.png';
import service2img from '../../../images/2023/dentist-working-behind-patient.jpg';
import service3img from '../../../images/2023/smiling-patient-cosmetics-2-crop.jpg';
import S6testinomial from './s6testinomial';
import S7fees from './s7fees';

import CallToAction from '../../bottomCTA';
import BGCTA from '../../../images/botbg.png';

const Home = () => {
	return (
		<>
			<Hero bgImage={BG} />
			<S2Icons
				items={[
					{
						Icon: `${ToothCheckup}`,
						IconAlt: 'Tooth Icon',
						IconTitle: 'Prevention',
						IconSubtitle:
							'Ensuring that your tooth and gums stay healthy.'
					},
					{
						Icon: `${DrillTooth}`,
						IconAlt: 'Tooth Icon',
						IconTitle: 'Restoration',
						IconSubtitle:
							'Restoring your teeth back to their original state.'
					},
					{
						Icon: `${Toothbrush}`,
						IconAlt: 'Tooth Icon',
						IconTitle: 'Cosmetics',
						IconSubtitle: 'Making your teeth look their very best.'
					},
					{
						Icon: `${ShinyTooth}`,
						IconAlt: 'Tooth Icon',
						IconTitle: 'Whitening',
						IconSubtitle: 'For a brighter, whiter smile.'
					},
					{
						Icon: `${Chair}`,
						IconAlt: 'Tooth Icon',
						IconTitle: 'Implants',
						IconSubtitle:
							'Installing and maintainng cosmetic dental implants.'
					}
				]}
			/>
			<S3teams />
			<S4about />

			<S5services
				items={[
					{
						Icon: `${service1img}`,
						IconAlt: 'Prevention',
						IconTitle: 'Prevention',
						IconSubtitle:
							'Preventative dentistry is the use of dental procedures to ensure that your teeth and gums',
						slug: 'prevention'
					},
					{
						Icon: `${service2img}`,
						IconAlt: 'Restoration',
						IconTitle: 'Restoration',
						IconSubtitle:
							'At Lakewood Dental Care, we work to restore your teeth back to their original state.',
						slug: 'restoration'
					},
					{
						Icon: `${service3img}`,
						IconAlt: 'Cosmetics',
						IconTitle: 'Cosmetics',
						IconSubtitle:
							'At Lakewood Dental Care we make sure that your teeth look their best.',
						slug: 'cosmetics'
					}
				]}
			/>
			<S6testinomial />
			<S7fees />
			<CallToAction bgImage={BGCTA} />
			<Footer />
		</>
	);
};

export default Home;
