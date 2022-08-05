<template>
	<div
		:class="[
			theme === 'dark' ? 'dark' : '',
			'flex flex-col min-h-screen bg-background-light dark:bg-background-dark',
		]"
	>
		<Header @toggleTheme="toggleTheme" />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
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
		const theme = ref(computed(() => store.state.theme.theme))
		const toggleTheme = () => {
			if (theme.value === 'dark') {
				localStorage.theme = 'light'
				store.dispatch(ThemeActionTypes.UPDATE_THEME)
			} else {
				localStorage.theme = 'dark'
				store.dispatch(ThemeActionTypes.UPDATE_THEME)
			}
		}
		onMounted(() => {
			store.dispatch(ThemeActionTypes.UPDATE_THEME)
			store.dispatch(CountryActionTypes.FETCH_COUNTRY_LIST)
		})
		return { theme, toggleTheme }
	},
})
</script>


