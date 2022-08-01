<template>
	<main
		class="
			grow
			flex flex-col
			items-center
			justify-center
			w-full
			py-7
			lg:py-10
			px-4
			md:px-16
			text-content-dark
			dark:text-content-light
			bg-background-light
			dark:bg-background-dark
		"
	>
		<img
			class=""
			src="../assets/page_not_found-light.svg"
			alt="Error code 404 illustration"
		/>
		<h2 class="mt-9 text-2xl font-semibold">Page Not Found!</h2>
		<p class="mt-4 text-base font-light font-semibold">
			Sorry, that page never returned from a walk around Novi Sad.
		</p>
		<router-link
			class="
				d-block
				px-6
				py-4
				rounded
				mt-7
				text-base
				font-light font-semibold
				text-content-dark
				dark:text-content-light
				bg-elements-light
				dark:bg-elements-dark
				hover:bg-elements-dark hover:text-elements-light
				dark:hover:bg-elements-light dark:hover:text-elements-dark
				shadow-md
				transition-colors
			"
			to="/"
			>Take me back home</router-link
		>
	</main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'NotFound',
})
</script>