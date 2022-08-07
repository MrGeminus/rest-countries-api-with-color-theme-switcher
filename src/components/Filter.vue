<template>
	<select
		role="listbox"
		aria-roledescription="Region filter"
		aria-activedescendant="frst-option"
		tabindex="0"
		class="
			w-full
			max-w-29
			px-5
			py-4
			mt-11
			md:mt-0
			bg-elements-light bg-chevron-down-dark-icon
			dark:bg-elements-dark
			bg-0.65 bg-right-xs bg-no-repeat
			text-content-dark
			dark:text-content-light
			text-sm
			font-semibold font-nunitoSans
			rounded
			shadow-md
			outline-none
			focus-visible:outline-elements-dark
			dark:focus-visible:outline-elements-light
			appearance-none
		"
		name="filter"
		id="filter"
		v-model="selectedRegion"
		@change="$emit('filter', selectedRegion)"
	>
		<option
			id="frst-option"
			value="worldwide"
			selected
			role="option"
			aria-selected="true"
		>
			<p role="presentation">Filter by Region</p>
		</option>
		<option
			id="second-option"
			value="africa"
			role="option"
			aria-selected="false"
		>
			<p role="presentation">Africa</p>
		</option>
		<option
			id="third-option"
			value="americas"
			role="option"
			aria-selected="false"
		>
			<p role="presentation">America</p>
		</option>
		<option
			id="fourth-option"
			value="asia"
			role="option"
			aria-selected="false"
		>
			<p role="presentation">Asia</p>
		</option>
		<option
			id="fifth-option"
			value="europe"
			role="option"
			aria-selected="false"
		>
			<p role="presentation">Europe</p>
		</option>
		<option
			id="sixth-option"
			value="oceania"
			role="option"
			aria-selected="false"
		>
			<p role="presentation">Oceania</p>
		</option>
	</select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'Filter',

	setup() {
		const selectedRegion = ref<String>('worldwide')

		return { selectedRegion }
	},
})
</script>