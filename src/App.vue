<template>
	<div
		:class="[
			theme === 'dark' ? 'dark' : '',
			'flex flex-col min-h-screen bg-background-light dark:bg-background-dark',
		]"
	>
		<a class="sr-only" href="#main">Skip to content</a>
		<Header />
		<router-view v-slot="{ Component, route }">
			<Transition
				mode="out-in"
				enter-active-class="animate__animated animate__fadeIn"
				leave-active-class="animate__animated animate__fadeOut"
			>
				<component :is="Component" :key="route.path" />
			</Transition>
		</router-view>
		<Footer />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useStore } from './store'
import { CountryActionTypes, ThemeActionTypes } from './store/enums'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default defineComponent({
	name: 'App',
	components: {
		Header,
		Footer,
	},
	setup() {
		const store = useStore()
		const theme = ref<ComputedRef<string>>(
			computed(() => store.state.theme.theme)
		)
		onMounted(() => {
			store.dispatch(ThemeActionTypes.UPDATE_THEME)
			store.dispatch(CountryActionTypes.FETCH_COUNTRY_LIST)
		})
		return { theme }
	},
})
</script>