<script>
	// import { Hero } from 'spaper';

	import { Carousel, Header, Navigation, Footer } from '$widgets';
	import { magnets, news, projects, FullBtn, navLinks as links, DonateBtn } from '$shared';
	import { ProgectCard, MagnetCard, NewsCard, DarkDevCard, DonateBlock } from '$entities';

	// news
	let visibleNews = news.slice(0, 4);
	let currentIndex = 4;
	const blockSize = 3;

	// magnets
	let currentIndexMagnet = 4;
	const blockSizeMagnets = 2;
	let visibleMagnets = magnets.slice(0, 4);

	let hideMoreBtn = true;

	// donate
	const donate = [3, 5, 15, 20, 30, 50, 100];
	let donateBtnPress = false;

	function loadMore() {
		// news
		let newsData = news.slice(currentIndex, currentIndex + blockSize);
		visibleNews = [...visibleNews, ...newsData];
		currentIndex += blockSize;

		// magnets
		let magnetsData = magnets.slice(currentIndexMagnet, currentIndexMagnet + blockSizeMagnets);
		visibleMagnets = [...visibleMagnets, ...magnetsData];
		currentIndexMagnet += blockSizeMagnets;

		if (news.length < visibleNews.length + 2) hideMoreBtn = false;
	}
</script>

<svelte:head>
	<title>Food Not Bombs - Gdans</title>
	<HeadHrefLangs />
</svelte:head>
`
<h1 class="text-5xl font-extralight">{i('welcome')}</h1>
<p>{@html i('description')}</p>
`

<Header />

<main>
	<Navigation {links} />
	<div class="menu">
		<a name="news" />

		<section class="news w-full">
			<h3>Aktualności</h3>

			<Carousel />

			{#each visibleNews as data (data.id)}
				<NewsCard {data} />
			{/each}

			<div
				on:click={loadMore}
				class="hover:delay-550 m-4 flex min-h-[350px] max-w-sm items-center hover:-translate-y-1 hover:scale-105 hover:transition hover:duration-1000 hover:ease-in-out"
			>
				{#if hideMoreBtn}
					<FullBtn on:click={loadMore} text="Pokaż więcej newsów" />
				{/if}
			</div>
		</section>
		<section class="support pb-4">
			<!-- <a name="" /> -->

			<h3 class="">Wspieraj nas</h3>
			<h4 class="mb-2 px-2">Wspieraj nas - kupując nasze drewniane magnesy na lodówkę!</h4>

			{#each visibleMagnets as magnet}
				<MagnetCard {magnet} />
			{/each}
		</section>
		<section class="other-projects">
			<a name="projects" />
			<h3>Inne projekty</h3>
			{#each projects as progectData}
				<ProgectCard {progectData} />
			{/each}

			<DarkDevCard />
		</section>

		<section class="team">
			<a name="support" />

			<h3>Wspieraj nas</h3>
			{#if !donateBtnPress}
				{#each donate as donateText}
					<DonateBtn text={donateText} bind:donateBtnPress />
				{/each}
			{:else}
				<DonateBlock />
			{/if}
		</section>
	</div>
</main>

<Footer />

<style>
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

	@media (max-width: 550px) {
		h3 {
			text-align: center;
		}
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
			grid-row: 3/5;
			align-self: flex-end;
		}
		.menu .team {
			grid-column: 1/4;
			grid-row: 4/6;
			border: 6px solid #04110f;
			border-width: 6px 6px 0 0;
		}
		.menu .support {
			grid-column: 4/5;
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
			/* padding-bottom: 2rem; */
			box-shadow: 0 -6px 0 0 #333, 0 6px 0 0 #333, -6px 0 0 0 #04110f;
			text-align: right;
		}
	}
</style>
