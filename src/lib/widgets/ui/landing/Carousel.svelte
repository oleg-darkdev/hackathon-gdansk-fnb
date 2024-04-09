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
				<Hero style=" height:480px;" title={text} />
			</CarouselItem>
		{/each}
	</Carousel>
</div>
