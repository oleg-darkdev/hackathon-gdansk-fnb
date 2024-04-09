<script>
	import { EmailLink, SocialLink } from '$shared';
</script>

<header>
	<div class="name">
		<span>G</span><span>D</span><span>A</span><span>N</span><span>S</span><span>K</span><span
			>F</span
		> <span>N</span> <span>B</span>
	</div>
	<div class="opening-hours">
		Gorącą zupę rozdajemy o 12:00.
		<br />
		<a class="text-black" href="https://maps.app.goo.gl/awbGNCfjkpkRVQRXA">Przy fontannie Neptuna</a
		>
	</div>

	<div class="location flex flex-col items-center justify-center">
		<p class="w-full text-center">fnbgdansk@zieloni.pl</p>
		<div class="mx-auto flex w-full max-w-[230px] flex-row justify-between">
			<SocialLink
				bg={'background-primary'}
				link="https://www.facebook.com/FNBgdansk/"
				image="facebook.svg"
			/>
			<EmailLink bg={'background-primary'} />
		</div>
	</div>
	<div class="special-announcements" />
</header>

<style>
	header {
		display: grid;
		grid-template-columns: min-content 2fr 1.3fr;
	}

	.name {
		display: grid;
		grid: repeat(2, 60px) / repeat(3, 60px);
		font-family: Syncopate, sans-serif;
		font-weight: 700;
		font-size: 2.5rem;
		border: 6px solid #04110f;
		border-width: 6px 6px 0;
		color: #dec022;
		text-align: center;
		grid-column: span 3;
		background: repeating-linear-gradient(
			90deg,
			#04110f 0px,
			#04110f 5px,
			transparent 5px,
			transparent 10px
		);
	}
	@media (min-width: 550px) {
		.name {
			grid-column: span 1;
			background: #04110f;
		}
	}
	.name span {
		padding-top: 0.5rem;
	}
	.name span:nth-child(odd) {
		background: #04110f;
	}
	.name span:nth-child(even) {
		background: #dec022;
		color: #04110f;
	}

	.opening-hours {
		border: 6px solid #04110f;
		border-width: 6px 6px 0;
		grid-column: span 3;
		background: #6f7bd0;
		color: #e2dccc;
		padding: 1rem 1.6rem;
		font-size: 1.3rem;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		line-height: 1.1;
	}
	@media (min-width: 550px) {
		.opening-hours {
			grid-column: span 1;
			border-width: 6px 6px 0 0;
		}
	}
	@media (min-width: 880px) {
		.opening-hours {
			grid-column: span 1;
			border-width: 6px 0 0;
		}
	}
	@media (min-width: 1200px) {
		.opening-hours {
			font-size: 1.8rem;
		}
	}

	.location {
		border: 6px solid #04110f;
		border-width: 6px 6px 0;
		grid-column: 1/-1;
		background: #04110f;
		color: #e2dccc;
		padding: 0.6rem;
	}
	.location p:nth-child(1) {
		font-family: Syncopate;
		font-weight: 700;
		font-size: 1.4rem;
		margin: 0 0.5rem 0.5rem;
	}
	@media (min-width: 1400px) {
		.location p:nth-child(1) {
			font-size: 1.6rem;
		}
	}
	@media (min-width: 550px) {
		.location {
			display: flex;
			align-items: center;
		}
		.location p:nth-child(1) {
			margin: 0.3rem 0.8rem 0.3rem 0.3rem;
		}
	}
	@media (min-width: 880px) {
		.location {
			grid-column: 3/4;
		}
	}
</style>
