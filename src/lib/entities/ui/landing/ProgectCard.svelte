<script>
	export let progectData;
</script>

<a class="mx-4 mb-2 w-full px-10" target="_blank" href={progectData.link}>
	<div
		style="padding: 0 2rem;"
		class="hover:delay-550 hover:background-primary hover:translate-x-2 hover:scale-100 hover:transition hover:duration-1000 hover:ease-in-out"
	>
		<div class="">
			<h4 class="card-title text-primary">{progectData.title}</h4>
			<p class="text-primary card-text">
				{progectData.desc}
			</p>
		</div>
	</div>
</a>

<style>
</style>
