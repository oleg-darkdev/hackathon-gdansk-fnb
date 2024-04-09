<script>
	export let link, image, bg;
</script>

<a class=" social-item" href={link} target="_blank">
	<img
		src="./images/social/{image}"
		class="hover:delay-550 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:transition hover:duration-1000 hover:ease-in-out {bg} h-20 w-20"
		alt=""
	/>
</a>
