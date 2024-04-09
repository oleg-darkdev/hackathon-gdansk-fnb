<script>
	export let text;
</script>

<button class="menu-download">{text}</button>

<style>
	.menu-download {
		display: block;
		background: #6f7bd0;
		text-align: center;
		color: #e2dccc;
		text-transform: uppercase;
		font-family: Syncopate;
		font-weight: 700;
		padding: 1rem;
		cursor: pointer;
		font-size: 1.6rem;
		box-shadow: 0 0 0 6px #04110f;
	}
	.menu-download:hover {
		background: #04110f;
	}
	@media (min-width: 550px) {
		.menu-download {
			padding: 2rem 4rem;
		}
	}
</style>
