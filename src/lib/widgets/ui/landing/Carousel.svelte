<script>
	import { Carousel, CarouselItem } from 'spaper';
	import { about } from '$shared';
</script>

<div class="w-full py-6 lg:p-10 xl:p-10">
	<a name="about" />

	<div class="flex items-center justify-center">
		<Carousel bullets={false} interval={1800}>
			{#each about as text}
				<CarouselItem style="">
					<div style="" class="slide-wrap hero hero-default hero-secondary border">
						<div class="hero-body">
							<h2 class="hero-title text-3xl md:text-4xl lg:text-5xl">{text}</h2>
							<div />
						</div>
					</div>
				</CarouselItem>
			{/each}
		</Carousel>
	</div>
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
			width: 300px;
			height: 280px;
			padding: 0.6rem 1rem;
		}
	}
</style>
