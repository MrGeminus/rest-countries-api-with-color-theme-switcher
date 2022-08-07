<template>
	<footer
		class="
			flex flex-col
			sm:flex-row
			justify-center
			p-4
			text-content-dark
			dark:text-content-light
			text-sm
			font-semibold font-nunitoSans
			text-center
			bg-elements-light
			dark:bg-elements-dark
			border-t-2 border-t-[#e5e7eb]
		"
	>
		<p>
			Challenge by
			<a
				class="
					underline
					hover:no-underline
					outline-none
					focus-visible:outline-elements-dark
					dark:focus-visible:outline-elements-light
				"
				href="https://www.frontendmentor.io?ref=challenge"
				target="_blank"
				rel="noopener noreferrer external"
				>Frontend Mentor</a
			>.
		</p>
		<p class="sm:ml-1">
			Coded by
			<a
				class="
					underline
					hover:no-underline
					outline-none
					focus-visible:outline-elements-dark
					dark:focus-visible:outline-elements-light
				"
				href="https://mrgeminus.com/"
				target="_blank"
				rel="noopener noreferrer author external"
				>MrGeminus</a
			>.
		</p>
	</footer>
</template>
<script lang="ts">
export default {
	name: 'Footer',
}
</script>