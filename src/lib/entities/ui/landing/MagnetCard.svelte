<script>
	export let magnet;
</script>

<div
	style="border: 2px solid #41403e !important; 		box-shadow: 0 0 0 6px #dec022;"
	class="hover:delay-550 card background-primary hover:scale-120 lg:mx-2 xl:mx-2 mx-4 lg:my-2 xl:my-2 my-3 w-full max-w-sm overflow-y-hidden border hover:-translate-y-1 hover:bg-neutral-200 hover:transition hover:duration-1000 hover:ease-in-out"
>
	<div class="card-body">
		<h4 class="card-title text-primary">
			{magnet.title} <span class="badge warning svelte-lxlbcz rounded">{magnet.price}$</span>
		</h4>
	</div>
	<div
		style="background-image: url('/images/magnets/{magnet.img}');  background-position: center; background-size: contain;"
		class="-mt-4 h-[250px] w-full overflow-hidden"
	/>
</div>

<style>
</style>
