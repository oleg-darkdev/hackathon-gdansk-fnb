<script>
	export let magnet;
</script>

<div
	class="hover:delay-550 card background-primary mx-2 mb-2 w-full max-w-sm border hover:-translate-y-1 hover:scale-105 hover:bg-neutral-200 hover:transition hover:duration-1000 hover:ease-in-out"
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
