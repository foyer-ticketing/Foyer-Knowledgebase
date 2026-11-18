// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkSteps from './src/plugins/remark-steps.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://guide.foyerticketing.xyz',
	markdown: {
		remarkPlugins: [remarkSteps],
	},
	integrations: [
		starlight({
			title: 'Foyer Guide',
			logo: {
				src: './src/assets/foyer-logo.png',
				replacesTitle: true,
			},
			customCss: ['./src/styles/steps.css'],
		}),
	],
});
