import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$icons: 'src/static/icons',
			$images: 'src/static/images',
			$stores: 'src/lib/shared/stores',
			$shared: 'src/lib/shared',
			// $svelteThemes: 'src/lib/shared/svelteThemes',
			// svelteThemes
			$actions: 'src/lib/shared/actions'
		}
	},

	vitePlugin: {
		inspector: {
			holdMode: true,
			toggleKeyCombo: 'meta-shift'
		}
	}
};

export default config;
