// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Foyer Guide',
			logo: {
        	src: './src/assets/foyer-logo.png',
			replacesTitle: true,
      		},	
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'Foyer',
					items: [{ autogenerate: { directory: 'Foyer' } }],
				},
			],
		}),
	],
});
