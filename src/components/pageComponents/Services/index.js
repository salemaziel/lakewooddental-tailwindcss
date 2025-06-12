import React from 'react';
import SerHero from './serhero';
import BG from '../../../images/serhero.png';
import Prevention from './sers2';
import Restoration from './s3service';
import Cosmetics from './s4service';
import Implants from './s5service';
import Whitening from './s7service';
import Footer from '../../layout/footer';
import SerBanner from './serbanner';
//import SerLast from './s6service';
import servbottom from '../../../images/botbg.png';

import CallToAction from '../../bottomCTA';

function ServicesPage() {
	return (
		<>
			<SerHero bgImage={BG} pageTitle="Services" />
			<SerBanner />
			<Prevention />
			<Restoration />
			<Cosmetics />
			<Implants />
			<Whitening />
			<CallToAction bgImage={servbottom} />
			<Footer />
		</>
	);
}

export default ServicesPage;
