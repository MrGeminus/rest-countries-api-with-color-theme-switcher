<template>
	<article
		class="
			relative
			flex flex-col
			pb-11
			rounded
			font-nunitoSans
			text-content-dark
			dark:text-content-light
			bg-elements-light
			dark:bg-elements-dark
			shadow-md
			transform
			transition-transform
			hover:scale-105
			outline-none
			focus-within:outline-elements-dark
			dark:focus-within:outline-elements-light
		"
	>
		<h3 class="order-2 pt-4 px-5 font-extrabold">
			<router-link
				class="
					focus:underline
					outline-none
					after:absolute after:inset-0
					supports-focus-within:focus:no-underline
				"
				:to="{
					name: 'DetailPage',
					params: { countryName: country.name },
				}"
				>{{ country.name }}</router-link
			>
		</h3>
		<img
			class="block order-1 w-full object-cover rounded-t aspect-flag"
			:src="country.flag"
			:alt="country.name + ' ' + 'flag'"
		/>
		<dl class="order-3 pt-4 px-5 text-sm">
			<div class="flex">
				<dt class="font-semibold">Population:</dt>
				<dd class="ml-1 font-light">{{ country.population }}</dd>
			</div>
			<div class="flex">
				<dt class="font-semibold">Region:</dt>
				<dd class="ml-1 font-light">{{ country.region }}</dd>
			</div>
			<div class="flex">
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
