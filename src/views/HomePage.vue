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
			<aside>
				<h2 class="sr-only">Filters</h2>
				<form
					class="flex flex-col md:flex-row mb-9 md:justify-between"
					@submit.prevent
				>
					<Searchbar @search="filterCountiesByName" />
					<Filter @filter="filterCountiesByRegion" />
				</form>
			</aside>
			<main id="main">
				<h2 id="results" class="sr-only" aria-live="polite">
					{{ countriesList.length }}countries shown
				</h2>
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
							v-for="country in countriesList.slice(
								0,
								loadAmount
							)"
							class="animate__animated animate__bounceIn"
						>
							<Card :country="country" />
						</li>
					</ul>
					<button
						v-if="countriesList.length > 16 && loadAmount < 250"
						@click="loadMore"
					>
						Load More
					</button>
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
		const loadAmount = ref(16)
		const countriesList = ref(
			computed(() => {
				if (query.value !== '')
					return store.getters[
						CountryGetterTypes.GET_COUNTRIES_BY_NAME
					](query.value)
				else if (region.value !== 'worldwide')
					return store.getters[
						CountryGetterTypes.GET_COUNTRIES_BY_REGION
					](region.value)
				else return store.state.country.countryList
			})
		)

		let loading = computed(() => store.state.country.loading)
		const filterCountiesByName = (searchQuery: string): void => {
			query.value = searchQuery
		}

		const filterCountiesByRegion = (selectedRegion: string): void => {
			region.value = selectedRegion
		}

		const loadMore = (): void => {
			loadAmount.value += 16
		}

		return {
			loading,
			countriesList,
			filterCountiesByName,
			filterCountiesByRegion,
			loadAmount,
			loadMore,
		}
	},
})
</script>