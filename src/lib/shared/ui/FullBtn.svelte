<script>
	export let text;
</script>

<button class="-mt-20 lg:mt-0 xl:mt-0 md:mt-0 big-btn background-primary  hover:bg-neutral-200 text-primary">{text}</button>

<style>
	.big-btn {
		display: block;
		text-align: center;
		text-transform: uppercase;
		padding: 1rem;
		cursor: pointer;
		font-size: 1.6rem;
		box-shadow: 0 0 0 6px #dec022;
	}
	
	@media (min-width: 550px) {
		.big-btn {
			padding: 2rem 4rem;
		}
	}

	
</style>
