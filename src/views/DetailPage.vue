<template>
	<main
		id="main"
		class="
			flex
			grow
			pt-9
			sm:pt-15
			pb-15
			px-7
			sm:px-16
			text-content-dark
			dark:text-content-light
			text-sm
			sm:text-base
			bg-background-light
			dark:bg-background-dark
			shadow-md
		"
	>
		<div class="flex flex-col max-w-2xl xl:max-w-8xl mx-auto">
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
						<div class="flex flex-col md:flex-row xl:flex-row">
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
														country.topLevelDomain
															.length > 1 &&
														topLevelDomain !=
															country
																.topLevelDomain[
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
														country.currencies
															.length > 1 &&
														currency !=
															country.currencies[
																country
																	.currencies
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
														country.languages
															.length > 1 &&
														language !=
															country.languages[
																country
																	.languages
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
											'relative',
											'min-w-6.1',
											'px-3',
											'py-1.5',
											'rounded',
											'shadow-md',
											'bg-elements-light',
											'dark:bg-elements-dark',
											'hover:bg-elements-dark',
											'dark:hover:bg-elements-light',
											'text-content-dark',
											'dark:text-content-light',
											'hover:text-content-light',
											'dark:hover:text-content-dark',
											'text-xs',
											'sm:text-xls',
											'font-light',
											'text-center',
											'outline-none focus-within:outline-elements-dark',
											'dark:focus-within:outline-elements-light',
											'transition-colors',
											'animate__animated animate__fadeInDown',
											`animate__delay-${index + 8}s`,
										]"
										:key="country"
										v-for="(
											country, index
										) in country.borderCountries"
									>
										<router-link
											class="
												focus:underline
												outline-none
												after:absolute after:inset-0
												supports-focus-within:focus:no-underline
											"
											:to="{
												name: 'DetailPage',
												params: {
													countryName: country,
												},
											}"
											>{{ country }}</router-link
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
			<div class="m-auto" v-else>
				<h2>Loading country details...</h2>
			</div>
		</div>
	</main>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { CountryGetterTypes } from '../store/enums'
import { useStore } from '../store'
import Button from '../components/Button.vue'
export default defineComponent({
	name: 'CountryPage',
	components: {
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
		const country = ref(
			computed(() =>
				store.getters[CountryGetterTypes.GET_COUNTRY_BY_NAME](
					props.countryName
				)
			)
		)
		const loading = computed(() => store.state.country.loading)

		return { country, loading }
	},
})
</script>