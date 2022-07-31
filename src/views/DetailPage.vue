<template>
	<Button />
	<main class="grow py-7 lg:py-7 px-6 md:px-16 shadow-md">
		<div
			v-if="country"
			class="mt-9 flex flex-col md:flex-row font-semibold font-nunitoSans"
		>
			<img
				:src="country.flag"
				:alt="`${country.name}'s flag`"
				class="w-full h-60 md:w-5/12 md:h-96"
			/>
			<div
				class="
					md:w-6/12 md:ml-24
					flex flex-col
					justify-start
					lg:justify-center
				"
			>
				<h2 class="mt-9 lg:mt-0 text-2xl font-extrabold">
					{{ country.name }}
				</h2>
				<dl class="flex flex-col">
					<div class="flex flex-col lg:flex-row">
						<div class="mt-4">
							<div class="flex">
								<dt>Native Name:</dt>
								<dd class="ml-1 font-light">
									{{
										country.nativeName
											.toString()
											.replace(/[,]/g, ' ,')
									}}
								</dd>
							</div>
							<div class="flex">
								<dt>Population:</dt>
								<dd class="ml-1 font-light">
									{{ country.population }}
								</dd>
							</div>
							<div class="flex">
								<dt>Region:</dt>
								<dd class="ml-1 font-light">
									{{ country.region }}
								</dd>
							</div>
							<div class="flex">
								<dt>Sub Region:</dt>
								<dd class="ml-1 font-light">
									{{ country.subRegion }}
								</dd>
							</div>
							<div class="flex">
								<dt>Capital:</dt>
								<dd class="ml-1 font-light">
									{{ country.capital }}
								</dd>
							</div>
						</div>
						<div>
							<div class="mt-4 flex">
								<dt>Top Level Domain:</dt>
								<dd>
									<ul class="flex">
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
							<div class="mt-4 flex">
								<dt>Currencis:</dt>
								<dd>
									<ul class="flex">
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
							<div class="mt-4 flex">
								<dt>Languages:</dt>
								<dd>
									<ul class="flex">
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
												>,</span
											>
										</li>
									</ul>
								</dd>
							</div>
						</div>
					</div>
					<div class="mt-9">
						<dt class="">Border Countries:</dt>
						<dd>
							<ul
								class="
									flex flex-wrap
									gap-2.5
									mt-3
									text-base
									list-none
								"
							>
								<router-link
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
											min-w-28
											px-3
											py-2
											rounded
											shadow-md
											bg-elements-light
											dark:bg-elements-dark
											hover:bg-content-light
											hover:text-content-dark
											dark:hover:bg-content-dark
											dark:hover:text-content-light
											text-content-light
											dark:text-content-dark
											text-xsm
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
import { ActionTypes } from '../store/actions'
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
		const country = computed(() => store.state.country)
		watchEffect(() =>
			store.dispatch(ActionTypes.GET_COUNTRY_BY_NAME, props.countryName)
		)
		return { country }
	},
	emits: ['toggleDarkMode'],
})
</script>