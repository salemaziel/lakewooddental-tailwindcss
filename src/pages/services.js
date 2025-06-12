import React from 'react';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import ServicesPage from '../components/pageComponents/Services';

const ServicesMain = () => (
	<Layout>
		<ServicesPage />
	</Layout>
);

export default ServicesMain;

export const Head = () => <Seo title="Services" />;
