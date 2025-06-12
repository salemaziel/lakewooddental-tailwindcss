import React from 'react';
import Layout from '../../components/layout/layout';
import Seo from '../../components/seo';

import ServiceTemplate from '../../components/pageComponents/Services/serviceTemplate';
import Footer from '../../components/layout/footer';

import CallToAction from '../../components/bottomCTA';
import BGCTA from '../../images/botbg.png';

const TeethWhitening = () => (
	<Layout>
		<ServiceTemplate
			title="Zoom! Teeth Whitening"
			post={[
				<>
					<h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
						{' '}
						Philips Zoom is a leading professional teeth whitening
						brand that is highly requested by patients seeking to
						improve the appearance of their smile. The Zoom teeth
						whitening system is designed to provide fast, effective,
						and safe teeth whitening results, using advanced
						technology and professional-grade products.
					</h3>
					<h4 className="py-4 my-2 text-lg font-semibold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
						{' '}
						At Lakewood Dental Care, we offer Philips Zoom teeth
						whitening services to help our patients achieve a
						brighter, more confident smile. Our team will work with
						you to determine the best whitening options for your
						individual needs and goals.
					</h4>
					<p></p>
					<p className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
						The Philips Zoom teeth whitening process typically
						involves:
					</p>
					<p>
						<h5 className="">
							{' '}
							<strong>Consultation:</strong>
						</h5>{' '}
						During your initial consultation, our team will evaluate
						your dental health and determine if teeth whitening is
						right for you. We will also discuss the Zoom teeth
						whitening process and answer any questions you may have.
					</p>
					<p>
						<h5 className="">
							{' '}
							<strong>Treatment:</strong>
						</h5>{' '}
						The Zoom teeth whitening treatment typically takes about
						an hour to complete. Our team will apply a
						professional-strength whitening gel to your teeth and
						activate it using a special light.
					</p>
					<p>
						<h5 className="">
							{' '}
							<strong>Results:</strong>
						</h5>{' '}
						After the treatment, you will immediately notice a
						significant improvement in the color of your teeth. Your
						teeth may continue to whiten over the next few days, as
						the whitening gel continues to work.
					</p>

					<p>
						Philips Zoom teeth whitening is a safe, effective, and
						fast way to improve the appearance of your smile. Our
						team at Lakewood Dental Care is committed to providing
						the highest quality teeth whitening services to our
						patients, using the most advanced technology and
						professional-grade products available.
					</p>
				</>
			]}
		/>

		<CallToAction bgImage={BGCTA} />

		<Footer />
	</Layout>
);

export default TeethWhitening;

export const Head = () => (
	<Seo title="Dental Services: Zoom! Teeth Whitening" />
);
