<script>
	export let text;
</script>

<button
	class="		big-btn
 background-primary text-primary cursor-pointer hover:bg-neutral-200">{text}</button
>

<style>
	.big-btn {
		display: block;
		text-align: center;
		text-transform: uppercase;
		padding: 1rem;
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
