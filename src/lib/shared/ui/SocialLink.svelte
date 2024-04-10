<script>
	export let link, image, bg;
</script>

<a  class="social-item" href={link} target="_blank">
	<img
		src="./images/social/{image}"
		style='border: 2px solid #41403e !important; 		box-shadow: 0 0 0 6px #dec022;' class="border hover:delay-550 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:transition hover:duration-1000 hover:ease-in-out {bg} h-20 w-20"
		alt=""
	/>
</a>
