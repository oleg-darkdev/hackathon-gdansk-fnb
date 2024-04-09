<script>
	import { Carousel, CarouselItem, Hero } from 'spaper';

	const data = [
		'Działamy na terenie Gdańska od 2004 roku.',
		'Przygotowaliśmy ponad 7000 litrów zupy i 2000 litrów herbaty.',
		'Nasz zespół składa się z osób różnych narodowości.',
		'Możesz wesprzeć nasze działania w kolejnym bloku.'
	];
</script>

<div class="p-10">
	<Carousel bullets={false} interval={1800}>
		{#each data as text}
			<CarouselItem style="">
				<div
					style=""
					class="slide-wrap hero hero-default hero-secondary border"
				>
					<div class="hero-body">
						<h2 class="hero-title lg:text-5xl text-3xl md:text-4xl">{text}</h2>
						<!-- <p class="hero-text-lead ">{text}</p> -->
						<div />
					</div>
				</div>
			</CarouselItem>
		{/each}
	</Carousel>
</div>


<style>
  @media (min-width: 800px) {
		.slide-wrap {
      width: 450px;
      height: 450px;
      padding: 2rem 3rem;
    }
	}
  @media (max-width: 800px) {
		.slide-wrap {
      width: 270px;
      height: 260px;
      padding: 0.6rem 1rem;
    }
	}
</style>
