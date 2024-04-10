<script>
	export let links;
</script>

<div class="legend">
	{#each links as link, i}
		<a class="" href={link.link}>
			<div class="legend__item"><i>{i + 1}</i><span>{link.title}</span></div>
		</a>
	{/each}
</div>

<style>
	.legend {
		border: 6px solid #04110f;
		border-width: 0 6px 6px 0;
		background: repeating-linear-gradient(
			90deg,
			transparent 0px,
			transparent 5px,
			#04110f 5px,
			#04110f 10px
		);
	}
	@media (min-width: 880px) {
		.legend {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;
			border-width: 6px;
		}
	}
	.legend__item {
		display: block;
		background: #e2dccc;
	}
	.legend__item span {
		display: inline-block;
		height: 40px;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 1.5rem;

		padding: 12px 20px 12px 12px;
		flex: auto;
		color: #04110f;
	}
	.legend__item i {
		display: inline-block;
		width: 55px;
		height: 45px;
		font-family: Syncopate, sans-serif;
		font-size: 1.3rem;
		font-weight: 700;
		text-align: center;
		line-height: 2.3;
		color: #e2dccc;
		border: 6px solid #04110f;
		border-width: 0 6px;
	}
	.legend__item:nth-child(1) {
		color: #00acc1;
	}
	.legend__item:nth-child(1) i {
		/* background: #00acc1; */
		background: #04110f;
	}
	.legend__item:nth-child(2) {
		color: #931a47;
	}
	.legend__item:nth-child(2) i {
		background: #931a47;
	}
	.legend__item:nth-child(3) {
		color: #e88c30;
	}
	.legend__item:nth-child(3) i {
		background: #e88c30;
	}
	.legend__item:nth-child(4) {
		color: #009688;
	}
	.legend__item:nth-child(4) i {
		background: #009688;
	}
	.legend__item:nth-child(5) {
		color: #ca3101;
	}
	.legend__item:nth-child(5) i {
		background: #ca3101;
	}
</style>
