<template>
	<main
		id="main"
		class="
			flex flex-col
			grow
			pt-9
			lg:pt-15
			pb-15
			px-7
			md:px-16
			text-content-dark
			dark:text-content-light
			text-sm
			lg:text-base
			bg-background-light
			dark:bg-background-dark
			shadow-md
		"
	>
		<Button />
		<div
			v-if="
				country &&
				country?.name &&
				country?.nativeName &&
				country?.flag &&
				country?.capital &&
				country?.population &&
				country?.region &&
				country?.subRegion &&
				country?.languages &&
				country?.currencies &&
				country?.topLevelDomain
			"
			class="
				mt-15
				flex flex-col
				lg:flex-row
				font-semibold font-nunitoSans
			"
		>
			<img
				:src="country.flag"
				:alt="`${country.name}'s flag`"
				class="w-full lg:w-6/12 xl:w-5/12 aspect-flag"
			/>
			<div
				class="
					lg:w-6/12
					xl:w-7/12
					lg:ml-16
					xl:ml-24
					flex flex-col
					justify-start
					lg:justify-center
				"
			>
				<h2 class="mt-9 lg:mt-0 text-1xl lg:text-3xl font-extrabold">
					{{ country.name }}
				</h2>
				<dl class="flex flex-col mt-5">
					<div class="flex flex-col xl:flex-row">
						<div class="xl:w-7/12 pr-8">
							<div class="flex">
								<dt class="min-w-max">Native Name:</dt>
								<dd class="ml-1 font-light">
									{{
										country.nativeName
											.toString()
											.replace(/[,]/g, ', ')
									}}
								</dd>
							</div>
							<div class="flex mt-2">
								<dt class="min-w-max">Population:</dt>
								<dd class="ml-1 font-light">
									{{ country.population }}
								</dd>
							</div>
							<div class="flex mt-2">
								<dt class="min-w-max">Region:</dt>
								<dd class="ml-1 font-light">
									{{ country.region }}
								</dd>
							</div>
							<div class="flex mt-2">
								<dt class="min-w-max">Sub Region:</dt>
								<dd class="ml-1 font-light">
									{{ country.subRegion }}
								</dd>
							</div>
							<div class="flex mt-2">
								<dt class="min-w-max">Capital:</dt>
								<dd class="ml-1 font-light">
									{{ country.capital }}
								</dd>
							</div>
						</div>
						<div class="xl:w-5/12 mt-9 xl:mt-0">
							<div class="flex">
								<dt class="min-w-max">Top Level Domain:</dt>
								<dd>
									<ul class="flex flex-wrap">
										<li
											:key="topLevelDomain"
											v-for="topLevelDomain in country.topLevelDomain"
											class="ml-1 font-light"
										>
											{{ topLevelDomain
											}}<span
												v-if="
													country.topLevelDomain
														.length > 1 &&
													topLevelDomain !=
														country.topLevelDomain[
															country
																.topLevelDomain
																.length - 1
														]
												"
												>,
											</span>
										</li>
									</ul>
								</dd>
							</div>
							<div class="flex mt-2">
								<dt class="min-w-max">Currencis:</dt>
								<dd>
									<ul class="flex flex-wrap">
										<li
											:key="currency"
											v-for="currency in country.currencies"
											class="ml-1 font-light"
										>
											{{ currency
											}}<span
												v-if="
													country.currencies.length >
														1 &&
													currency !=
														country.currencies[
															country.currencies
																.length - 1
														]
												"
												>,
											</span>
										</li>
									</ul>
								</dd>
							</div>
							<div class="flex mt-2">
								<dt class="min-w-max">Languages:</dt>
								<dd>
									<ul class="flex flex-wrap">
										<li
											:key="`${country.name}-${language}`"
											v-for="language in country.languages"
											class="ml-1 font-light"
										>
											{{ language
											}}<span
												v-if="
													country.languages.length >
														1 &&
													language !=
														country.languages[
															country.languages
																.length - 1
														]
												"
												>,
											</span>
										</li>
									</ul>
								</dd>
							</div>
						</div>
					</div>
					<div
						class="
							flex flex-col
							xl:flex-row xl:items-center
							mt-9
							xl:mt-16
						"
					>
						<dt class="xl:mr-4 text-base">Border Countries:</dt>
						<dd>
							<ul
								class="
									flex flex-wrap
									gap-2.5
									mt-4
									xl:mt-0
									list-none
								"
							>
								<router-link
									class="
										outline-none
										focus-visible:outline-elements-dark
										dark:focus-visible:outline-elements-light
									"
									:key="borderingCountry"
									v-for="borderingCountry in country.borderCountries"
									:to="{
										name: 'DetailPage',
										params: {
											countryName: borderingCountry,
										},
									}"
									><li
										class="
											min-w-6.1
											px-3
											py-1.5
											rounded
											shadow-md
											bg-elements-light
											dark:bg-elements-dark
											hover:bg-elements-dark
											dark:hover:bg-elements-light
											text-content-dark
											dark:text-content-light
											hover:text-content-light
											dark:hover:text-content-dark
											text-xs
											lg:text-xls
											font-light
											text-center
											transition-colors
										"
									>
										{{ borderingCountry }}
									</li>
								</router-link>
							</ul>
						</dd>
					</div>
				</dl>
			</div>
		</div>
		<div class="m-auto" v-else>
			<h2>Loading country details...</h2>
		</div>
	</main>
</template>
<script lang="ts">
import { defineComponent, computed, watchEffect } from 'vue'
import { CountryGetterTypes } from '../store/enums'
import { useStore } from '../store'
import Button from '../components/Button.vue'
export default defineComponent({
	name: 'CountryPage',
	components: {
		Button,
	},
	props: ['countryName'],
	setup(props: any) {
		const store = useStore()
		let country = computed(() =>
			store.getters[CountryGetterTypes.GET_COUNTRY_BY_NAME](
				props.countryName
			)
		)

		watchEffect(
			() =>
				(country = computed(() =>
					store.getters[CountryGetterTypes.GET_COUNTRY_BY_NAME](
						props.countryName
					)
				))
		)

		return { country }
	},
})
</script>