<script>
	export let text, donateBtnPress;
</script>

<button
	on:click={() => {
		donateBtnPress = true;
		console.log(donateBtnPress);
	}}
	class="big-btn background-primary text-primary hover:bg-neutral-200">{text} PLN</button
>

<style>
	.big-btn {
		display: block;
		text-align: center;
		text-transform: uppercase;
		padding: 1rem;
		cursor: pointer;
		font-size: 2rem;
		box-shadow: 0 0 0 6px #dec022;
	}

	@media (min-width: 550px) {
		.big-btn {
			padding: 1rem 2rem;
		}
	}
</style>
