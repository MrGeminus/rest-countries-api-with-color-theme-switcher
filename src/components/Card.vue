<template>
	<article
		class="
			relative
			flex flex-col
			pb-11
			rounded
			text-content-dark
			dark:text-content-light
			bg-elements-light
			dark:bg-elements-dark
			shadow-custom-2
			outline-none
			scale-100
			transition-transform
			motion-reduce:after:transition-none
			hover:scale-105
			focus-within:outline-elements-dark
			dark:focus-within:outline-elements-light
		"
	>
		<h3 class="order-2 pt-5 px-5 text-base font-extrabold">
			<router-link
				class="
					outline-none
					focus:underline
					after:absolute after:inset-0
					supports-focus-within:focus:no-underline
				"
				:to="{
					name: 'CountryDetails',
					params: { countryName: country.name },
				}"
				>{{ country.name }}</router-link
			>
		</h3>
		<img
			class="order-1 block w-full rounded-t object-cover aspect-flag"
			:src="country.flag"
			:alt="country.name + ' ' + 'flag'"
		/>
		<dl class="order-3 pt-4 px-5 text-sm">
			<div class="flex">
				<dt class="font-semibold">Population:</dt>
				<dd class="ml-1 font-light">{{ country.population }}</dd>
			</div>
			<div class="flex mt-1">
				<dt class="font-semibold">Region:</dt>
				<dd class="ml-1 font-light">{{ country.region }}</dd>
			</div>
			<div class="flex mt-1">
				<dt class="font-semibold">Capital:</dt>
				<dd class="ml-1 font-light">{{ country.capital }}</dd>
			</div>
		</dl>
	</article>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Country } from '../types'
export default defineComponent({
	name: 'Card',
	props: {
		country: {
			type: Object as () => Country,
			required: true,
		},
	},
	setup(props) {
		const country = ref<Country>(props.country)

		return { country }
	},
})
</script>
