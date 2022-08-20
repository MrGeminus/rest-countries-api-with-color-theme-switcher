<template>
	<div class="grow flex flex-col px-4 py-7 sm:py-10 sm:px-16">
		<aside class="flex flex-col w-full xl:max-w-8xl mx-auto">
			<h2 class="sr-only">Filters</h2>
			<form
				class="flex flex-col md:flex-row md:justify-between mb-9"
				@submit.prevent
				aria-controls="results"
			>
				<Searchbar @search="filterCountiesByName" />
				<Filter @filter="filterCountiesByRegion" />
			</form>
		</aside>
		<main id="main" class="grow flex flex-col w-full xl:max-w-8xl mx-auto">
			<Suspense>
				<template v-if="!loading">
					<h2 id="results" class="sr-only" aria-live="polite">
						{{ countriesList.length + 'countries shown' }}
					</h2>
					<TransitionGroup
						v-if="countriesList.length !== 0"
						tag="ul"
						appear
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
						<li :key="country.id" v-for="country in countriesList">
							<Card :country="country" />
						</li>
					</TransitionGroup>
					<p v-else>Such a country doesn't exist</p>
				</template>
				<template v-else>
					<HomeSkeleton />
				</template>
			</Suspense>
		</main>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import type { ComputedRef } from 'vue'
import { useStore } from '../store'
import { CountryGetterTypes } from '../store/enums'
import HomeSkeleton from './HomeSkeleton.vue'
import Searchbar from '../components/Searchbar.vue'
import Card from '../components/Card.vue'
import Filter from '../components/Filter.vue'
import type { Country } from '../types'
export default defineComponent({
	name: 'Home',
	components: {
		HomeSkeleton,
		Searchbar,
		Card,
		Filter,
	},
	setup() {
		const store = useStore()
		let query = ref<string>('')
		let region = ref<string>('worldwide')
		let countriesList = ref<ComputedRef<Country[]>>(
			computed(() => store.state.country.countryList)
		)

		const loading = computed(() => store.state.country.loading)
		const filterCountiesByName = (searchQuery: string): void => {
			query.value = searchQuery
		}

		const filterCountiesByRegion = (selectedRegion: string): void => {
			region.value = selectedRegion
		}

		countriesList = ref<ComputedRef<Country[]>>(
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
		}
	},
})
</script>