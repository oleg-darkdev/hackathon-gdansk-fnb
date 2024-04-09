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
	<img src="./images/news/{data.img}" class="max-h-[450px] grayscale filter" alt="" />
</div>
