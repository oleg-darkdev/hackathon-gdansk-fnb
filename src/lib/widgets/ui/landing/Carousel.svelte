<script>
	import { i } from '@inlang/sdk-js';
	// import {HeadHrefLangs} from '$shared';
	import { Carousel, CarouselItem, Hero } from 'spaper';
</script>

<svelte:head>
	<title>SvelteKit + TypeScript + TailwindCSS starter</title>
	<!-- <HeadHrefLangs /> -->
</svelte:head>
<!-- `
<h1 class="text-5xl font-extralight">{i('welcome')}</h1>
<p>{@html i('description')}</p>` -->

<section>
	<Carousel bullets={false} interval={1400}>
		<CarouselItem>
			<Hero title="Hey there!" />
		</CarouselItem>
	</Carousel>
</section>
