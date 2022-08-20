<template>
	<main
		id="main"
		class="grow pt-9 sm:pt-15 pb-15 px-7 sm:px-16 text-sm sm:text-base"
	>
		<div class="grow flex flex-col max-w-2xl xl:max-w-8xl mx-auto">
			<Button
				@click="goBack"
				classes="pl-12 sm:pl-16 pr-6 sm:pr-10 py-1.5 mr-auto
			             text-sm sm:text-base 
			             bg-arrow-left-icon-dark dark:bg-arrow-left-icon-light
			             bg-1 sm:bg-1.2 bg-left-6-top-2 sm:bg-left-9-top-2 bg-no-repeat 
			             hover:bg-arrow-left-icon-light dark:hover:bg-arrow-left-icon-dark 
			"
				>Back
			</Button>
			<Suspense>
				<template v-if="!loading">
					<div
						v-if="country"
						class="
							mt-15
							flex flex-col
							xl:flex-row
							font-semibold font-nunitoSans
						"
					>
						<div
							class="
								order-2
								xl:w-7/12 xl:ml-24
								flex flex-col
								justify-start
								lg:justify-center
							"
						>
							<h2
								class="
									mt-9
									xl:mt-0
									text-1xl
									sm:text-3xl
									font-extrabold
									animate__animated
									animate__fadeInDown
									animate__delay-1s
								"
							>
								{{ country.name }}
							</h2>
							<dl class="flex flex-col mt-5">
								<div
									class="
										flex flex-col
										md:flex-row
										xl:flex-row
									"
								>
									<div class="md:w-7/12 pr-8">
										<div class="flex">
											<dt
												class="
													min-w-max
													animate__animated
													animate__fadeInDown
													animate__delay-2s
												"
											>
												Native Name:
											</dt>
											<dd
												class="
													ml-1
													font-light
													animate__animated
													animate__fadeInDown
													animate__delay-2s
												"
											>
												{{
													country.nativeName
														.toString()
														.replace(/[,]/g, ', ')
												}}
											</dd>
										</div>
										<div class="flex mt-2">
											<dt
												class="
													min-w-max
													animate__animated
													animate__fadeInDown
													animate__delay-3s
												"
											>
												Population:
											</dt>
											<dd
												class="
													ml-1
													font-light
													animate__animated
													animate__fadeInDown
													animate__delay-3s
												"
											>
												{{ country.population }}
											</dd>
										</div>
										<div class="flex mt-2">
											<dt
												class="
													min-w-max
													animate__animated
													animate__fadeInDown
													animate__delay-4s
												"
											>
												Region:
											</dt>
											<dd
												class="
													ml-1
													font-light
													animate__animated
													animate__fadeInDown
													animate__delay-4s
												"
											>
												{{ country.region }}
											</dd>
										</div>
										<div class="flex mt-2">
											<dt
												class="
													min-w-max
													animate__animated
													animate__fadeInDown
													animate__delay-5s
												"
											>
												Sub Region:
											</dt>
											<dd
												class="
													ml-1
													font-light
													animate__animated
													animate__fadeInDown
													animate__delay-5s
												"
											>
												{{ country.subRegion }}
											</dd>
										</div>
										<div class="flex mt-2">
											<dt
												class="
													min-w-max
													animate__animated
													animate__fadeInDown
													animate__delay-6s
												"
											>
												Capital:
											</dt>
											<dd
												class="
													ml-1
													font-light
													animate__animated
													animate__fadeInDown
													animate__delay-6s
												"
											>
												{{ country.capital }}
											</dd>
										</div>
									</div>
									<div class="md:w-5/12 mt-9 md:mt-0">
										<div class="flex">
											<dt
												class="
													min-w-max
													animate__animated
													animate__fadeInDown
													animate__delay-2s
												"
											>
												Top Level Domain:
											</dt>
											<dd>
												<ul
													class="
														flex flex-wrap
														animate__animated
														animate__fadeInDown
														animate__delay-2s
													"
												>
													<li
														:key="topLevelDomain"
														v-for="topLevelDomain in country.topLevelDomain"
														class="ml-1 font-light"
													>
														{{ topLevelDomain
														}}<span
															v-if="
																country
																	.topLevelDomain
																	.length >
																	1 &&
																topLevelDomain !=
																	country
																		.topLevelDomain[
																		country
																			.topLevelDomain
																			.length -
																			1
																	]
															"
															>,
														</span>
													</li>
												</ul>
											</dd>
										</div>
										<div class="flex mt-2">
											<dt
												class="
													min-w-max
													animate__animated
													animate__fadeInDown
													animate__delay-3s
												"
											>
												Currencis:
											</dt>
											<dd>
												<ul
													class="
														flex flex-wrap
														animate__animated
														animate__fadeInDown
														animate__delay-3s
													"
												>
													<li
														:key="currency"
														v-for="currency in country.currencies"
														class="ml-1 font-light"
													>
														{{ currency
														}}<span
															v-if="
																country
																	.currencies
																	.length >
																	1 &&
																currency !=
																	country
																		.currencies[
																		country
																			.currencies
																			.length -
																			1
																	]
															"
															>,
														</span>
													</li>
												</ul>
											</dd>
										</div>
										<div class="flex mt-2">
											<dt
												class="
													min-w-max
													animate__animated
													animate__fadeInDown
													animate__delay-4s
												"
											>
												Languages:
											</dt>
											<dd>
												<ul
													class="
														flex flex-wrap
														animate__animated
														animate__fadeInDown
														animate__delay-4s
													"
												>
													<li
														:key="`${country.name}-${language}`"
														v-for="language in country.languages"
														class="
															ml-1
															font-light
															min-w-max
														"
													>
														{{ language
														}}<span
															v-if="
																country
																	.languages
																	.length >
																	1 &&
																language !=
																	country
																		.languages[
																		country
																			.languages
																			.length -
																			1
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
										md:flex-row md:items-center
										mt-9
										md:mt-16
									"
								>
									<dt
										class="
											min-w-max
											md:mt-1 md:mb-auto md:mr-4
											text-base
											animate__animated
											animate__fadeInDown
											animate__delay-7s
										"
									>
										Border Countries:
									</dt>
									<dd>
										<ul
											class="
												flex flex-wrap
												gap-2.5
												mt-4
												md:mt-0
												list-none
											"
										>
											<li
												:class="[
													'rounded',
													'animate__animated animate__fadeInDown',
													`animate__delay-${
														index + 8
													}s`,
												]"
												:key="borderCountry"
												v-for="(
													borderCountry, index
												) in country.borderCountries"
											>
												<Button
													classes="
													min-w-6.1
													px-3
													py-1.5
													text-xs sm:text-xls text-center
													"
													:to="{
														name: 'CountryDetails',
														params: {
															countryName:
																borderCountry,
														},
													}"
													>{{ borderCountry }}</Button
												>
											</li>
										</ul>
									</dd>
								</div>
							</dl>
						</div>
						<img
							:src="country.flag"
							:alt="`${country.name}'s flag`"
							class="
								order-1
								xl:w-5/12
								aspect-flag
								animate__animated animate__fadeInLeft
							"
						/>
					</div>
				</template>
				<template v-else>
					<CountryDetailsSkeleton />
				</template>
			</Suspense>
		</div>
	</main>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onUpdated } from 'vue'
import { useRouter } from 'vue-router'
import { CountryGetterTypes } from '../store/enums'
import { useStore } from '../store'
import CountryDetailsSkeleton from './CountryDetailsSkeleton.vue'
import Button from '../components/Button.vue'
export default defineComponent({
	name: 'CountryDetails',
	components: {
		CountryDetailsSkeleton,
		Button,
	},
	props: {
		countryName: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const store = useStore()
		const router = useRouter()
		const countryName = ref(props.countryName)
		const country = ref(
			computed(() =>
				store.getters[CountryGetterTypes.GET_COUNTRY_BY_NAME](
					countryName.value
				)
			)
		)

		const loading = computed(() => store.state.country.loading)

		const goBack = () => {
			router.go(-1)
		}

		onUpdated(() => {
			if (!country.value) {
				router.push({
					name: 'NotFound',
					params: {
						pathMatch: router.currentRoute.value.path
							.substring(1)
							.split('/'),
					},
					query: router.currentRoute.value.query,
					hash: router.currentRoute.value.hash,
				})
			}
		})

		return { country, loading, goBack }
	},
})
</script>