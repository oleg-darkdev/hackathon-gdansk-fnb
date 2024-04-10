<script>
	import { EmailLink, SocialLink } from '$shared';
</script>

<footer class="justiy-between flex flex-wrap items-center">
	<a name="contact" />

	<p class="mb-2 w-full">Dołącz do nas <br /> na kanałach <br class='lg:hidden xl:hidden md:hidden' />społecznościowych!</p>
	<div class="mx-auto flex w-full max-w-[230px] flex-row justify-between">
		<SocialLink link="https://www.facebook.com/FNBgdansk/" image="facebook.svg" />
		<EmailLink />
	</div>
</footer>

<style>
	footer {
		margin-top: 1rem;
		font-weight: 700;
		text-transform: uppercase;
		font-size: 1.3rem;
	}

	@media (min-width: 550px) {
		footer {
			font-size: 1.5rem;
		}
		footer p {
			flex: 1;
			margin: 0;
		}
	}
	@media (max-width: 550px) {
		footer p {
			text-align: center;
		}
	}
</style>
