<template>
	<Header @toggleDarkMode="$emit('toggleDarkMode')" />
	<Button />
	<main class="grow py-7 lg:py-7 px-4 md:px-16">
		<div
			v-if="country"
			class="mt-14 flex flex-col md:flex-row font-semibold font-nunitoSans"
		>
			<img
				:src="country.flag"
				:alt="`${country.name}'s flag`"
				class="w-full md:w-5/12 md:h-96"
			/>
			<div
				class="md:w-6/12 md:ml-24 flex flex-col justify-start lg:justify-center"
			>
				<h1 class="mt-9 lg:mt-0 text-3xl font-extrabold">{{ country.name }}</h1>
				<div class="flex flex-col lg:flex-row">
					<dl class="mt-4">
						<div class="flex">
							<dt>Native Name:</dt>
							<dd class="ml-1 font-light">{{ country.nativeName }}</dd>
						</div>
						<div class="flex">
							<dt>Population:</dt>
							<dd class="ml-1 font-light">{{ country.population }}</dd>
						</div>
						<div class="flex">
							<dt>Region:</dt>
							<dd class="ml-1 font-light">{{ country.region }}</dd>
						</div>
						<div class="flex">
							<dt>Sub Region:</dt>
							<dd class="ml-1 font-light">{{ country.subRegion }}</dd>
						</div>
						<div class="flex">
							<dt>Capital:</dt>
							<dd class="ml-1 font-light">{{ country.capital }}</dd>
						</div>
					</dl>
					<div>
						<div class="mt-4 mx-4 flex">
							<dt>Top Level Domain:</dt>
							<dd>
								<span
									:key="topLevelDomain"
									v-for="topLevelDomain in country.topLevelDomain"
									class="ml-1"
								>
									{{ topLevelDomain }}
								</span>
								<span v-if="country.topLevelDomain.lenght > 1">, </span>
							</dd>
						</div>
						<div class="mt-4 mx-4 flex">
							<dt>Currencis:</dt>
							<dd>
								<span
									:key="currency"
									v-for="currency in country.currencies"
									class="ml-1"
								>
									{{ currency }} </span
								><span v-if="country.currencies.lenght > 1">, </span>
							</dd>
						</div>
						<div class="mt-4 mx-4 flex">
							<dt>Languages:</dt>
							<dd>
								<span
									:key="language"
									v-for="language in country.languages"
									class="ml-1"
									><span v-if="country.languages.lenght > 1"
										>{{ language }},</span
									>
									<span v-else>{{ language }}</span>
								</span>
							</dd>
						</div>
					</div>
				</div>
				<div class="mt-9">
					<h3>Border Countries:</h3>
					<ul
						class="
							mt-3
							grid
							gap-3
							grid-flow-col
							auto-cols-max
							list-none
							text-base
						"
					>
						<router-link
							:key="borderingCountry"
							v-for="borderingCountry in country.borderCountries"
							:to="{
								name: 'DetailPage',
								params: { countryName: borderingCountry },
							}"
							><li
								class="w-32 px-3 py-1 rounded shadow-md bg-element text-center"
							>
								{{ borderingCountry }}
							</li>
						</router-link>
					</ul>
				</div>
			</div>
		</div>
		<div class="m-auto" v-else>
			<h2>Loading country details...</h2>
		</div>
	</main>
	<Footer />
</template>
<script lang="ts">
import { defineComponent, computed, watchEffect } from "vue";
import { ActionTypes } from "../store/actions";
import { useStore } from "../store";
import Header from "../components/Header.vue";
import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";
export default defineComponent({
	name: "CountryPage",
	components: {
		Header,
		Button,
		Footer,
	},
	props: ["countryName"],
	setup(props: any) {
		const store = useStore();
		const country = computed(() => store.state.country);
		watchEffect(() =>
			store.dispatch(ActionTypes.GET_COUNTRY_BY_NAME, props.countryName)
		);
		return { country };
	},
	emits: ["toggleDarkMode"],
});
</script>