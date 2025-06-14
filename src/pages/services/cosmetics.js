import React from 'react';
import Layout from '../../components/layout/layout';
import Seo from '../../components/seo';

import ServiceTemplate from '../../components/pageComponents/Services/serviceTemplate';
import Footer from '../../components/layout/footer';

import CallToAction from '../../components/bottomCTA';
import BGCTA from '../../images/botbg.png';

const Cosmetics = () => (
	<Layout>
		<ServiceTemplate
			title="Cosmetic Dentistry"
			post={[
				<>
					<h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
						{' '}
						Cosmetic dentistry is a branch of dentistry that focuses
						on improving the appearance of your teeth, gums, and
						smile.
					</h3>
					<h4 className="py-4 my-2 text-lg font-semibold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
						{' '}
						At Lakewood Dental Care, we offer a range of cosmetic
						dentistry services to help our patients achieve the
						smile they desire.
					</h4>
					<p></p>
					<p className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
						Some of our cosmetic dentistry services include:
					</p>
					<p>
						<h5 className="">
							{' '}
							<strong>Teeth whitening: </strong>
						</h5>{' '}
						Teeth whitening is a procedure that uses a special
						bleaching agent to remove stains and discoloration from
						your teeth, resulting in a brighter, more youthful
						smile.
					</p>
					<p>
						<h5 className="">
							{' '}
							<strong>Dental veneers:</strong>
						</h5>{' '}
						Dental veneers are thin, custom-made shells that are
						bonded to the front surface of your teeth. They can be
						used to cover a variety of cosmetic flaws, including
						chips, cracks, and discoloration.
					</p>
					<p>
						<h5 className="">
							{' '}
							<strong>Dental bonding:</strong>
						</h5>{' '}
						Dental bonding is a procedure that uses a tooth-colored
						resin material to repair minor chips, cracks, and gaps
						in your teeth. It can also be used to improve the
						appearance of discolored or misshapen teeth.
					</p>
					<p>
						<h5 className="">
							{' '}
							<strong>Porcelain Crowns: </strong>
						</h5>{' '}
						Crowns are used to strengthen, cover, and change the
						shape and shade of discolored or damaged teeth. Our team
						is able to create custom crowns that match the size,
						shape, and color of your desired look.{' '}
					</p>
					<p>
						By offering these cosmetic dentistry services, we aim to
						help our patients achieve a smile that is healthy,
						functional, and aesthetically pleasing. Our team will
						work with you to determine the best cosmetic dentistry
						options for your individual needs and goals.
					</p>
				</>
			]}
		/>
		<CallToAction bgImage={BGCTA} />
		<Footer />
	</Layout>
);

export default Cosmetics;

export const Head = () => <Seo title="Dental Services: Cosmetics" />;
