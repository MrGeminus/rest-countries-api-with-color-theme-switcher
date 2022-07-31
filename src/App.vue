<template>
	<div
		:class="[
			darkMode ? 'dark' : '',
			'flex flex-col min-h-screen bg-background-light dark:bg-background-dark',
		]"
	>
		<Header @toggleDarkMode="toggleDarkMode" />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default defineComponent({
	name: 'App',
	components: {
		Header,
		Footer,
	},
	setup() {
		const darkMode = ref<boolean>(false)
		const toggleDarkMode = () => {
			darkMode.value
				? (localStorage.theme = 'light')
				: (localStorage.theme = 'dark')
			darkMode.value = setTheme()
		}
		const setTheme = () => {
			if (
				localStorage.theme === 'dark' ||
				(!('theme' in localStorage) &&
					window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				return true
			}
			return false
		}
		onBeforeUnmount(() => localStorage.removeItem('countriesList'))
		return { darkMode, toggleDarkMode }
	},
})
</script>


