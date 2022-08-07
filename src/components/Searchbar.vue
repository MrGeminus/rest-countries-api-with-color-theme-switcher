<template>
	<form
		class="relative w-full md:max-w-30"
		role="search"
		@submit="handleSubmit"
	>
		<input
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
			type="search"
			placeholder="Search for a country..."
			v-model="searchQuarry"
			required
			aria-label="Search for a country"
		/>
		<button
			class="
				absolute
				top-3.5
				left-7.5
				w-6
				h-6
				bg-search-icon-dark
				dark:bg-search-icon-light
				bg-1 bg-center bg-no-repeat
				outline-none
				focus-visible:outline-elements-dark
				dark:focus-visible:outline-elements-light
			"
			type="submit"
		>
			<span class="sr-only">Search</span>
		</button>
	</form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from './Button.vue'
export default defineComponent({
	components: { Button },
	name: 'Searchbar',
	setup(props, { emit }) {
		const searchQuarry = ref<String>('')

		const handleSubmit = (event: Event): void => {
			event.preventDefault()
			emit('search', searchQuarry.value)
		}

		return { searchQuarry, handleSubmit }
	},
})
</script>