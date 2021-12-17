<template>
	<input
		type="text"
		class="
			w-full
			md:w-2/5
			py-4
			px-20
			bg-elements-light bg-search-light-icon bg-1.3 bg-left-sm bg-no-repeat
			dark:bg-elements-dark dark:bg-search-dark-icon
			text-base
			font-light font-nunitoSans
			rounded
			shadow-md
			outline-none
		"
		placeholder="Search for a country..."
		v-model="searchQuarry"
		@keyup="$emit('search', searchQuarry)"
	/>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "Searchbar",
	data() {
		return {
			searchQuarry: "",
		};
	},
});
</script>