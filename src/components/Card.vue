<template>
	<article
		class="
			pb-11
			font-nunitoSans
			bg-element
			rounded
			text-content-dark
			dark:text-content-light
			bg-elements-light
			dark:bg-elements-dark
			shadow-md
			transform
			transition-transform
			hover:scale-105
		"
	>
		<figure class="block h-40">
			<img
				class="block w-full h-full object-cover rounded-t"
				:src="country.flag"
				:alt="country.name + ' ' + 'flag'"
			/>
		</figure>
		<h3 class="pt-4 px-5 font-extrabold">{{ country.name }}</h3>
		<dl class="pt-4 px-5 text-sm">
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
import { defineComponent } from 'vue'
import { Country } from '../types'
export default {
	name: 'Card',
	props: {
		country: {},
	},
	setup() {
		return {}
	},
}
</script>
