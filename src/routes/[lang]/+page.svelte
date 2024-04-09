<script>
	import { i } from '@inlang/sdk-js';
	// import {HeadHrefLangs} from '$shared';
	import { Carousel, Header, Navigation, Footer } from '$widgets';
	import { magnets, news, projects, FullBtn } from '$shared';
	import { ProgectCard, MagnetCard, NewsCard, DarkDevCard } from '$entities';

	const links = [
		{
			title: 'News',
			link: '#news'
		},
		{
			title: 'Other projects',
			link: '#projects'
		},
		{
			title: 'Support us',
			link: '#support'
		},
		{
			title: 'Our team',
			link: '#support'
		},
		{
			title: 'Contact',
			link: '#contact'
		}
	];
	// import {} from 'spaper';
</script>

<svelte:head>
	<title>SvelteKit + TypeScript + TailwindCSS starter</title>
	<!-- <HeadHrefLangs /> -->
</svelte:head>
<!-- `
<h1 class="text-5xl font-extralight">{i('welcome')}</h1>
<p>{@html i('description')}</p>` -->

<!-- <Carousel /> -->

<Header />

<main>
	<Navigation {links} />
	<div class="menu">
		<section class="news w-full">
			<h3>News</h3>
			<a name="news" />

			<!-- <div class="flex w-full flex-row flex-wrap p-2"> -->
				{#each news as data}
					<NewsCard {data} />
				{/each}
			<!-- </div> -->
		</section>
		<section class="other-projects">
			<a name="projects" />
			<h3>Other projects</h3>
			{#each projects as progect}
				<ProgectCard {progect} />
			{/each}
		</section>
		<section class="support">
			<a name="support" />

			<h3>Support US</h3>
	<h4 class='px-2 mb-2 mt-4'>Wspieraj nas - kupując nasze drewniane magnesy na lodówkę!</h4>

			{#each magnets as magnet}
				<MagnetCard {magnet} />
			{/each}

			<DarkDevCard />
		</section>

		<section class="team">
			<a name="team" />

			<h3>Our team</h3>

			<!-- {#each magnets as magnet}
				<MagnetCard {magnet} />
			{/each} -->
			<FullBtn />
		</section>
	</div>
</main>

<Footer />

<style>
	/* * {
		box-sizing: border-box;
	} */

	/* body {
		background: #e2dccc;
		font-family: 'Mclaren', sans-serif;
		font-weight: 300;
		line-height: 1.2;
		padding: 1rem;
	}
	@media (min-width: 880px) {
		body {
			padding: 3rem;
		}
	} */

	h3 {
		letter-spacing: 0.2rem;
		padding: 1rem 2rem;
		text-transform: uppercase;
		font-size: 1.5rem;
		background: #dec022;
		color: #04110f;
		box-shadow: 0 -6px 0 0 #333, 0 6px 0 0 #333;
	}
	@media (min-width: 550px) {
		h3 {
			font-size: 2.5rem;
		}
	}

	span.allergen {
		display: inline-block;
		width: 30px;
		height: 30px;
		text-align: center;
		font: 800 0.8rem Syncopate;
		padding-top: 7px;
		color: #e2dccc;
		background: #00acc1;
		border: 2px solid #04110f;
		margin-top: 4px;
	}
	span.allergen:not(:first-child) {
		margin-left: -2px;
	}
	span.allergen.eggs {
		background: #931a47;
	}
	span.allergen.wheat {
		background: #e88c30;
	}
	span.allergen.dairy {
		background: #009688;
	}
	span.allergen.sea {
		background: #ca3101;
	}

	.menu {
		border: 6px solid #04110f;
		border-width: 0 6px 6px;
	}
	@media (min-width: 1200px) {
		.menu {
			display: grid;
			width: 100%;
			grid-template-columns: repeat(4, 1fr);
			align-items: stretch;
		}
		.menu .news {
			grid-column: 1/4;
			grid-row: 1/4;
			border-right: 6px solid #04110f;
		}
		.menu .other-projects {
			grid-column: 4/5;
		}
		.menu .team {
			grid-column: 1/4;
			grid-row: 4/6;
			border: 6px solid #04110f;
			border-width: 6px 6px 0 0;
		}
		.menu .support {
			grid-column: 4/5;
			grid-row: 3/5;
			align-self: flex-start;
		}
		.menu .menu-download {
			grid-column: 4/5;
			grid-row: 5/6;
		}
	}

	@media (min-width: 550px) {
		.news {
			grid-template-columns: repeat(2, 1fr);
			display: grid;
			grid-auto-flow: dense;
			align-items: flex-start;
		}
		.news h3 {
			grid-column: 1/-1;
		}
	}
	@media (min-width: 1500px) {
		.news {
			grid-column-gap: 20px;
		}
	}

	.other-projects {
		padding-bottom: 1rem;
	}
	.other-projects .item {
		padding: 1rem 2rem;
	}
	.other-projects h3 {
		margin-bottom: 0.8rem;
	}

	.support {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		/* padding-bottom: 1.5rem; */
	}
	.support h3 {
		width: 100%;
		margin-bottom: 1rem;
	}

	.team {
		display: grid;
		grid-column-gap: 20px;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		padding: 1rem;
	}
	.team h3 {
		grid-column: 1/-1;
		margin-bottom: 1rem;
		transform: translate(-1rem, -1rem);
		width: calc(100% + 2rem);
	}
	@media (min-width: 1500px) {
		.team {
			grid-template-columns: min-content repeat(4, 1fr);
		}
		.team h3 {
			grid-column: 1/2;
			grid-row: 1/3;
			writing-mode: tb-rl;
			transform: translate(-1rem, -1rem) rotate(-180deg);
			width: calc(100%);
			height: calc(100% + 2rem);
			padding-bottom: 2rem;
			box-shadow: 0 -6px 0 0 #333, 0 6px 0 0 #333, -6px 0 0 0 #04110f;
			text-align: right;
		}
	}
</style>
