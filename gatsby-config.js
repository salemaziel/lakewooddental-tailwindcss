// gatsby-config.js
module.exports = {
	siteMetadata: {
		title: `Lakewood Dental`,
		description: `Lakewood Dental has been serving the Lakewood, CA area for over 30 years.`,
		author: `@jamesleedds`
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
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Lakewood Dental`,
				short_name: `Lakewood Dental`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favion.png` // This path is relative to the root of the site.
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};