<template>
	<select
		class="
			w-7/12
			md:w-1/5
			px-5
			py-4
			mt-11
			md:mt-0
			bg-elements-light
			dark:bg-elements-dark
			text-base
			font-light font-nunitoSans
			rounded
			shadow-md
		"
		name="filter"
		id="filter"
		v-model="selectedRegion"
		@change="$emit('myfilter', selectedRegion)"
	>
		<option value="worldwide" selected>Filter by Region</option>
		<option value="africa">Africa</option>
		<option value="americas">America</option>
		<option value="asia">Asia</option>
		<option value="europe">Europe</option>
		<option value="oceania">Oceania</option>
	</select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'RegionFilter',

	setup() {
		const selectedRegion = ref<String>('worldwide')

		return { selectedRegion }
	},
})
</script>