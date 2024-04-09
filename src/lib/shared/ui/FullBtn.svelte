<script>
	export let text;
</script>

<button class="menu-download background-primary  hover:bg-neutral-200 text-primary">{text}</button>

<style>
	.menu-download {
		display: block;
		text-align: center;
		text-transform: uppercase;
		padding: 1rem;
		cursor: pointer;
		font-size: 1.6rem;
		box-shadow: 0 0 0 6px #dec022;
	}
	
	@media (min-width: 550px) {
		.menu-download {
			padding: 2rem 4rem;
		}
	}
</style>
