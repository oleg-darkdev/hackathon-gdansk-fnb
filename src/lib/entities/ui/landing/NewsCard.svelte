<script>
	export let data;
</script>

<div
	class="hover:delay-550 card m-4 max-w-sm border hover:-translate-y-1 hover:scale-105 hover:bg-white hover:transition hover:duration-1000 hover:ease-in-out"
>
	<div class="card-body background-primary">
		<h5 style="margin-bottom:20px; " class="card-subtitle">{data.date}</h5>

		<h4 class="card-title text-primary">{data.title}</h4>
		<!-- <p class="card-text" /> -->
		<p class="text-primary">
			{data.desc}
		</p>
	</div>
	<div
		style="background-image: url('./images/news/{data.img}');  background-position: center; background-repeat: no-repeat; background-size: cover;"
		class="-mt-4 max-h-[450px] min-h-[400px] w-full overflow-hidden grayscale filter"
	/>
</div>
