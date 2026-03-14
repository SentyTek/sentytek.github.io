interface SiteConfig {
	site: string
	base: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://sentytek.github.io', // Write here your website url
	base: '/sentytek', // Base name for the project. For example, if your website is https://example.com/my-blog/, then the base should be /my-blog/
	author: 'SentyTek', // Site author
	title: 'SentyTek', // Site title.
	description:
		"Discover the innovative world of SentyTek, and how we're shaping the future of technology. Explore our latest projects, insights, and innovations.", // Description to display in the meta tags
	lang: 'en-US',
	ogLocale: 'en_US',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
