<template>
	<main
		class="
			grow
			flex flex-col
			w-full
			py-7
			lg:py-10
			px-4
			md:px-16
			bg-background-light
			dark:bg-background-dark
		"
	>
		<div class="flex flex-col md:flex-row mb-9 md:justify-between">
			<Searchbar @search="filterCountiesByName" />
			<RegionFilter @myfilter="filterCountiesByRegion" />
		</div>
		<div v-if="loading" class="flex-grow flex items-center justify-center">
			<h2 class="text-4xl font-extrabold font-nunitoSans">
				Loading, please wait...
			</h2>
		</div>
		<div v-else>
			<div v-if="countriesList.length === 0">
				<h2 class="text-2xl font-semibold font-nunitoSans">
					Sorry, no countries found.
				</h2>
			</div>
			<div v-else>
				<ul
					class="
						grid grid-cols-home
						gap-9
						md:gap-16
						justify-center
						w-full
					"
				>
					<li :key="country.id" v-for="country in countriesList">
						<router-link
							class="
								outline-none
								focus-within:outline-elements-dark
								dark:focus-within:outline-elements-light
							"
							:to="{
								name: 'DetailPage',
								params: { countryName: country.name },
							}"
						>
							<Card :country="country" />
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '../store'
import { CountryGetterTypes } from '../store/enums'
import Searchbar from '../components/Searchbar.vue'
import Card from '../components/Card.vue'
import RegionFilter from '../components/RegionFilter.vue'
export default defineComponent({
	name: 'HomePage',
	components: {
		Searchbar,
		Card,
		RegionFilter,
	},
	setup() {
		const store = useStore()
		let query = ref('')
		let region = ref('worldwide')
		let countriesList = computed(() => {
			if (query.value !== '')
				return store.getters[CountryGetterTypes.GET_COUNTRIES_BY_NAME](
					query.value
				)
			else if (region.value !== 'worldwide')
				return store.getters[
					CountryGetterTypes.GET_COUNTRIES_BY_REGION
				](region.value)
			else return store.state.country.countryList
		})

		let loading = computed(() => store.state.country.loading)
		const filterCountiesByName = (searchQuery: string): void => {
			query.value = searchQuery
		}

		const filterCountiesByRegion = (selectedRegion: string): void => {
			region.value = selectedRegion
		}

		return {
			loading,
			countriesList,
			filterCountiesByName,
			filterCountiesByRegion,
		}
	},
})
</script>