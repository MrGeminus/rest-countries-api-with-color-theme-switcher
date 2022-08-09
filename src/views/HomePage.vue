<template>
	<div
		class="
			grow
			py-7
			lg:py-10
			px-4
			md:px-16
			bg-background-light
			dark:bg-background-dark
		"
	>
		<div class="grow flex flex-col w-full xl:max-w-8xl mx-auto">
			<aside class="flex flex-col md:flex-row mb-9 md:justify-between">
				<Searchbar @search="filterCountiesByName" />
				<Filter @filter="filterCountiesByRegion" />
			</aside>
			<main id="main" aria-live="polite">
				<h2 id="results" class="sr-only">Search Results</h2>
				<div
					v-if="loading"
					class="flex-grow flex items-center justify-center"
				>
					<p
						class="
							flex
							items-center
							justify-center
							text-base
							font-extrabold font-nunitoSans
							space-x-2
						"
					>
						Loading, please wait...
					</p>
				</div>
				<div v-else>
					<p
						v-if="countriesList.length === 0"
						class="text-base font-semibold font-nunitoSans"
						aria-labelledby="results"
					>
						Sorry, there is no such country.
					</p>
					<ul
						v-else
						class="
							grid grid-cols-home
							gap-9
							md:gap-16
							justify-center
							w-full
						"
						aria-labelledby="results"
					>
						<li
							:key="country.id"
							v-for="(country, index) in countriesList"
							:class="[
								'animate__animated animate__bounceIn',
								`animate__delay-${index + 1}s`,
							]"
						>
							<router-link
								class="
									outline-none
									focus-visible:outline-elements-dark
									dark:focus-visible:outline-elements-light
								"
								:aria-label="[
									'Card linking to additional information about ' +
										country.name,
								]"
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
			</main>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '../store'
import { CountryGetterTypes } from '../store/enums'
import Searchbar from '../components/Searchbar.vue'
import Card from '../components/Card.vue'
import Filter from '../components/Filter.vue'
export default defineComponent({
	name: 'HomePage',
	components: {
		Searchbar,
		Card,
		Filter,
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