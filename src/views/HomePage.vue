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
			<ul
				class="
					grid grid-cols-1
					sm:grid-cols-2
					lg:grid-cols-3
					xl:grid-cols-4
					2xl:grid-cols-5
					gap-9
					lg:gap-16
					justify-items-center
					lg:justify-items-start
				"
			>
				<li :key="country.id" v-for="country in countriesList">
					<router-link
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
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { ActionTypes } from '../store/actions'
import { useStore } from '../store'
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
		let countriesList = computed(() => store.state.displayedCountriesList)
		const loading = computed(() => store.state.loading)
		if (store.state.displayedCountriesList.length == 0) {
			onMounted(() => store.dispatch(ActionTypes.GET_FULL_COUNTRIES_LIST))
		}
		const filterCountiesByName = (searchQuery: string): void => {
			store.dispatch(ActionTypes.FILTER_COUNTRIES_BY_NAME, searchQuery)
		}
		const filterCountiesByRegion = (selectedRegion: string): void => {
			store.dispatch(
				ActionTypes.FILTER_COUNTRIES_BY_REGION,
				selectedRegion
			)
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