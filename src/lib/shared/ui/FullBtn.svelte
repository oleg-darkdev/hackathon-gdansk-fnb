<script>
	export let text;
</script>

<button class=" big-btn background-primary  hover:bg-neutral-200 text-primary">{text}</button>

<style>
	.big-btn {
		display: block;
		text-align: center;
		text-transform: uppercase;
		padding: 1rem;
		cursor: pointer;
    margin-top: 0.6rem;
		font-size: 1.6rem;
		box-shadow: 0 0 0 6px #dec022;
	}

	@media (min-width: 550px) {
		.big-btn {
			padding: 2rem 4rem;
      
		}
	}


</style>
