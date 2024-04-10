<script lang="ts">
	import '../app.postcss';
	import 'papercss/dist/paper.min.css';

	// export let data;
</script>


<div class="body">
	<slot />
</div>


<style>
	:global(a) {
		background-image: none;
	}

	.body {
		background: #e2dccc;
		line-height: 1.2;
		padding: 0.3rem;
	}
	@media (min-width: 880px) {
		.body {
			padding: 3rem;
		}
	}
</style>
