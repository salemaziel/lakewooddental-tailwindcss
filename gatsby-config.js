// gatsby-config.js
module.exports = {
	siteMetadata: {
		title: `Lakewood Dental | Serving Lakewood, CA area for over 30 years.`,
		description: `Lakewood Dental has been serving the Lakewood, CA area for over 30 years.`,
		author: `@jamesleedds`,
		siteUrl: `https://dev.lakewooddental.com`,
		ogimage: `https://dev.lakewooddental.com/static/images/favion.png`
	},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet-async`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `forms`,
				path: `${__dirname}/src/forms`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Lakewood Dental | Serving Lakewood, CA Area for over 30 years`,
				short_name: `Lakewood Dental`,
				start_url: `/`,
				description: `Lakewood Dental has been serving the Lakewood, CA area for over 30 years.`,
				background_color: `#4294C2`,
				theme_color: `#1F3B53`,
				display: `minimal-ui`,
				icon: `src/images/favion.png` // This path is relative to the root of the site.
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
