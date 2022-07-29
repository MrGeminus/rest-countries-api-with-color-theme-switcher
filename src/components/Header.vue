<template>
	<header
		class="
			px-4
			lg:px-16
			py-8
			flex
			font-nunitoSans
			text-base
			bg-elements-light
			dark:bg-elements-dark
			shadow-md
		"
	>
		<h1 class="text-text-light dark:text-text-dark font-extrabold">
			Where in the world?
		</h1>
		<button
			class="
				pl-7
				ml-auto
				text-text-light
				dark:text-text-dark
				font-semibold
				bg-moon-light-icon
				dark:bg-moon-dark-icon
				bg-1 bg-no-repeat bg-left-center
			"
			@click="$emit('toggleDarkMode')"
		>
			Dark Mode
		</button>
	</header>
</template>

<script lang="ts">
export default {
	name: "Header",
};
</script>