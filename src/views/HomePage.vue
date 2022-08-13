<template>
	<div
		class="
			grow
			flex
			px-4
			py-7
			lg:py-10
			md:px-16
			text-content-dark
			dark:text-content-light
			font-semibold font-nunitoSans
			bg-background-light
			dark:bg-background-dark
		"
	>
		<div class="grow flex flex-col w-full xl:max-w-8xl mx-auto">
			<aside>
				<h2 class="sr-only">Filters</h2>
				<form
					class="flex flex-col md:flex-row md:justify-between mb-9"
					@submit.prevent
				>
					<Searchbar @search="filterCountiesByName" />
					<Filter @filter="filterCountiesByRegion" />
				</form>
			</aside>
			<main id="main" class="grow flex">
				<div v-if="loading" class="grow flex">
					<p class="m-auto text-xl">Loading, please wait...</p>
				</div>
				<div v-else class="grow flex flex-col">
					<h2 id="results" class="sr-only" aria-live="polite">
						{{ countriesList.length }}countries shown
					</h2>
					<p v-if="countriesList.length === 0" class="m-auto text-xl">
						Sorry, there is no such country.
					</p>
					<TransitionGroup
						v-else
						tag="ul"
						appear="true"
						mode="out-in"
						enter-active-class="animate__animated animate__bounceIn"
						leave-active-class="animate__animated animate__bounceOut"
						class="
							grid grid-cols-home
							justify-center
							gap-9
							md:gap-16
							w-full
						"
					>
						<li
							:key="country.id"
							v-for="country in countriesList.slice(
								0,
								loadAmount
							)"
						>
							<Card :country="country" />
						</li>
					</TransitionGroup>
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
		let query = ref<string>('')
		let region = ref<string>('worldwide')
		const loadAmount = ref<number>(16)
		let countriesList = ref(computed(() => store.state.country.countryList))

		const loading = computed(() => store.state.country.loading)
		const filterCountiesByName = (searchQuery: string): void => {
			query.value = searchQuery
		}

		const filterCountiesByRegion = (selectedRegion: string): void => {
			region.value = selectedRegion
		}

		const loadMore = (): void => {
			loadAmount.value += 16
		}

		countriesList = ref(
			computed(() =>
				store.getters[CountryGetterTypes.FILTER_COUNTRY_LIST](
					query.value,
					region.value
				)
			)
		)

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