<template>
	<header
		class="
			flex
			px-4
			py-8
			lg:px-16
			font-nunitoSans
			text-base
			bg-elements-light
			dark:bg-elements-dark
			border-b-2 border-b-[#e5e7eb]
		"
	>
		<h1 class="text-content-dark dark:text-content-light font-extrabold">
			Where in the world?
		</h1>
		<button
			class="
				pl-7
				ml-auto
				text-content-dark
				dark:text-content-light
				font-semibold
				bg-moon-light-icon
				dark:bg-moon-dark-icon
				bg-1 bg-no-repeat bg-left-center
			"
			@click="$emit('toggleTheme')"
		>
			Dark Mode
		</button>
	</header>
</template>

<script lang="ts">
export default {
	name: 'Header',
}
</script>