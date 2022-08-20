<template>
	<div class="relative w-full md:max-w-30">
		<label for="search" class="sr-only">Search for a country name</label>
		<input
			id="search"
			class="
				w-full
				md:max-w-30
				px-20
				py-4
				rounded
				shadow-custom-2
				text-content-dark
				dark:text-content-light
				text-sm
				font-semibold
				bg-elements-light
				dark:bg-elements-dark
				bg-search-icon-dark
				dark:bg-search-icon-light
				bg-1 bg-left-sm bg-no-repeat
				placeholder:text-gray-600
				dark:placeholder:text-gray-300
				placeholder:font-light
				outline-none
				focus:outline-elements-dark
				dark:focus:outline-elements-light
			"
			type="search"
			placeholder="Search for a country..."
			v-model="searchQuarry"
			@keyup="handleChange"
		/>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'Searchbar',
	setup(props, { emit }) {
		const searchQuarry = ref<String>('')

		const handleChange = (): void => {
			emit('search', searchQuarry.value)
		}

		return { searchQuarry, handleChange }
	},
})
</script>