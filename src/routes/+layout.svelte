<script lang="ts">
	import '../app.postcss';
	import 'papercss/dist/paper.min.css';

	import { language } from '@inlang/sdk-js';
	import { ThemeSwitcher, SvelteTheme, LocaleSwitcher } from '$shared/';

	export let data;
</script>

<!-- <a href="/{language}">
		<h1>Home</h1>
	</a> -->

<!-- <LocaleSwitcher />

<ThemeSwitcher /> -->

<div class="body">
	<slot />
</div>

<!-- <SvelteTheme attribute="data-theme" /> -->

<style>
	:global(a) {
		background-image: none;
	}


	.body {
		background: #e2dccc;
		line-height: 1.2;
		padding: 1rem;
	}
	@media (min-width: 880px) {
		.body {
			padding: 3rem;
		}
	}
</style>
