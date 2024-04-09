import adapter from '@sveltejs/adapter-auto';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$entities: 'src/lib/entities',
			$features: 'src/lib/features',
			$processes: 'src/lib/processes',
			$widgets: 'src/lib/widgets',
			$icons: 'src/static/icons',
			$images: 'src/static/images',
			$stores: 'src/lib/shared/stores',
			$shared: 'src/lib/shared',
			$actions: 'src/lib/shared/actions'
		}
	}
};

export default config;
