/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ description, title, children, ogImage }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						ogimage
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;
	const defaultogImage = ogImage || site.siteMetadata.ogimage;

	return (
		<>
			<title>{defaultTitle || title}</title>
			<meta name="description" content={metaDescription} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
			<meta name="og:image" content={defaultogImage || ogImage} />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary" />
			<meta
				name="twitter:creator"
				content={site.siteMetadata?.author || ``}
			/>
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={metaDescription} />
			{children}
		</>
	);
}

export default Seo;
