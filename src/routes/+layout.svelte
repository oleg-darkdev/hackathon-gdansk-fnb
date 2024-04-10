<script lang="ts">
	import '../app.postcss';
	import 'papercss/dist/paper.min.css';
</script>


<div class="body bg-neutral-100">
	<slot />
</div>


<style>
	:global(a) {
		background-image: none;
	}

	.body {
		/* background: #e2dccc; */
		line-height: 1.2;
		padding: 0 0.3rem 2rem 0.3rem ;
	}
	@media (min-width: 880px) {
		.body {
			padding: 3rem;
		}
	}
</style>
