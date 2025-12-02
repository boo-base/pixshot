import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	site: "https://example.com",
	title: "Title",
	subtitle: "Demo Site",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 300, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/demo.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Demo", // Credit text to be displayed
			url: "https://example.com", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/Trash.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Basement",
	bio: "Meow to be let out.",
	links: [
		{
			name: "Github",
			icon: "fa6-brands:github", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://github.com/boo-base",
		},
		{
			name: "X",
			icon: "fa6-brands:x-twitter",
			url: "https://x.com",
		},
		{
			name: "Discord",
			icon: "fa6-brands:discord",
			url: "https://discord.app",
		},
		{
			name: "Patreon",
			icon: "fa6-brands:patreon",
			url: "https://patreon.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "© ARR",
	url: "https://www.ipos.gov.sg/about-ip/copyright/introduction-copyright/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.ts file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "monokai",
};
