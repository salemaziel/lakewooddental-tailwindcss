import * as React from 'react';
import { Link } from 'gatsby';

import SidebarNav from './sidebarNav';

const Header = ({ siteTitle }) => (
	<header
	>
	<SidebarNav
	SiteTitle={siteTitle}
	 />

	</header>
);

export default Header;
