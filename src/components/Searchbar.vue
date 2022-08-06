<template>
	<form class="w-full md:max-w-30">
		<label for="search" class="sr-only">Search for a country:</label>
		<input
			type="search"
			id="search"
			class="
				w-full
				md:max-w-30
				py-4
				px-20
				bg-elements-light
				bg-search-light-icon
				bg-1
				bg-left-sm
				bg-no-repeat
				dark:bg-elements-dark dark:bg-search-dark-icon
				text-content-dark
				dark:text-content-light
				text-xsm
				md:text-sm
				placeholder:text-content-dark
				dark:placeholder:text-content-light
				placeholder:font-light
				font-light font-nunitoSans
				rounded
				shadow-md
				outline-none
				focus:outline-elements-dark
				dark:focus:outline-elements-light
			"
			placeholder="Search for a country..."
			v-model="searchQuarry"
			@keyup="$emit('search', searchQuarry)"
		/>
	</form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'Searchbar',
	setup() {
		const searchQuarry = ref<String>('')

		return { searchQuarry }
	},
})
</script>