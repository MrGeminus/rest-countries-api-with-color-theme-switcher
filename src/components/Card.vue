<template>
	<article
		class="
			pb-11
			font-nunitoSans
			bg-element
			rounded
			shadow-md
			transform
			transition-transform
			hover:rotate-3 hover:scale-105
		"
	>
		<figure class="block w-full h-40">
			<img
				class="block w-full h-full object-cover rounded-t"
				:src="country.flag"
				:alt="country.name + ' ' + 'flag'"
			/>
		</figure>
		<h3 class="mt-4 mx-4 font-extrabold">{{ country.name }}</h3>
		<ul class="mt-4 mx-4 list-none text-base">
			<li>
				Population:
				<span class="font-light">{{ country.population }}</span>
			</li>
			<li>
				Region: <span class="font-light">{{ country.region }}</span>
			</li>
			<li>
				Capital: <span class="font-light">{{ country.capital }}</span>
			</li>
		</ul>
	</article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Country from '../interfaces/Country'
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
