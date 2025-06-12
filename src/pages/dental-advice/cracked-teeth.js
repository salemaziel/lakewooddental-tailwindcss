import React from 'react';
import Layout from '../../components/layout/layout';
import Seo from '../../components/seo';

import BlogPost from '../../components/pageComponents/DentalAdvice/blogPost';

import Footer from '../../components/layout/footer';

import CallToAction from '../../components/bottomCTA';
import BGCTA from '../../images/botbg.png';

const CrackedTeeth = () => (
	<Layout>
		<BlogPost
			title="Cracked Teeth"
			image="https://images.unsplash.com/photo-1589950000000-0c0c0c0c0c0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
			imageAlt="Cracked Teeth"
			post={[
				<>
					<h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
						{' '}
						What does a cracked tooth feel like?
					</h3>
					<p>
						Many teeth, when carefully viewed, may exhibit small
						crack lines in the enamel. A more deeply cracked tooth
						may become noticeable when you feel a sharp pain when
						chewing food or with having a hot or cold drink. It is
						sometimes difficult to tell which tooth hurts or whether
						the pain comes from an upper or lower tooth.
					</p>
					<p>
						A crack in a tooth may appear nearly invisible as a
						hairline fracture or, if prominent, as a stained
						vertical line. Fractures are generally not visible on
						X-rays and are diagnosed and located by selective bite
						and temperature testing of teeth, trans-illumination,
						visual detection, and by the history of symptoms.
					</p>
					<h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
						Why does a cracked tooth hurt?
					</h3>
					<p>
						A cracked tooth may hurt because the pressure of biting
						causes the crack to open. When the biting pressure is
						released a sharp pain results as the crack quickly
						closes. When a crack opens, the pulp (nerve) tissue may
						become irritated. This irritation and inflammation to
						the pulp may cause the tooth to become sensitive to
						temperature extremes as well. If the pulp becomes
						irreversibly damaged as a result of the crack endodontic
						(root canal) treatment may become necessary. In extreme
						cases a crack can develop deeper, splitting the tooth.
						In this case, the tooth must be removed.
					</p>
					<h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
						What causes cracks to develop?
					</h3>
					<p>A tooth may crack due to:</p>
					<ul>
						<li>
							Chewing on hard objects or foods such as ice, nuts,
							or hard candy
						</li>
						<li>Tooth weakened by large restorations</li>
						<li>
							Tooth structure weakened by significant wear and
							fatigue
						</li>
						<li>Grinding and clenching of teeth</li>
						<li>
							Uneven chewing pressure from uneven bite, tipped
							tooth position, or chewing on one side
						</li>
						<li>
							Exposure of tooth enamel to temperature extremes
							such as hot coffee and ice water
						</li>
						<li>Accidental injury to the teeth</li>
					</ul>

					<h3 className="py-4 my-2 text-xl font-bold leading-normal tracking-normal text-center text-dark-blue-500 lg:mb-4">
						How are cracked teeth treated?
					</h3>
					<p>
						A cracked tooth is treated by replacing the cracked
						enamel in a way to engulf the entire crack and prevent
						further splitting of the tooth. Depending on the tooth
						and on the size and location of the crack, treatment
						typically involves making a crown or a bonded porcelain
						veneer to replace the enamel of the tooth and hold the
						crack together. Endodontic treatment may become
						necessary if the pulp is irreversibly damaged. If the
						crack is extremely deep, the only option may be
						extraction.
					</p>
				</>
			]}
		/>
		<CallToAction bgImage={BGCTA} />
		<Footer />
	</Layout>
);

export default CrackedTeeth;

export const Head = () => <Seo title="Cracked Teeth" />;
