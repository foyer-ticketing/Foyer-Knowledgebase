// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://guide.foyerticketing.xyz',
	integrations: [
		starlight({
			title: 'Foyer Guide',
			logo: {
				src: './src/assets/foyer-logo.png',
				replacesTitle: true,
			},
		}),
	],
});
