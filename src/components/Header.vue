<template>
	<header
		class="
			flex
			px-4
			py-8
			lg:px-16 lg:py-4
			text-sm
			font-nunitoSans
			text-content-dark
			dark:text-content-light
			bg-elements-light
			dark:bg-elements-dark
			border-b-2 border-b-[#e5e7eb]
		"
	>
		<h1 class="md:text-2xl font-extrabold">Where in the world?</h1>
		<div class="flex items-center ml-auto">
			<button
				id="themeSwitch"
				class="
					w-4
					h-4
					mr-3
					text-content-dark
					dark:text-content-light
					font-semibold
					bg-moon-light-icon
					dark:bg-moon-dark-icon
					bg-1 bg-no-repeat bg-center
					outline-none
					focus-within:outline-elements-dark
					dark:focus-within:outline-elements-light
				"
				@click="toggleTheme"
				role="switch"
				:aria-checked="[theme === 'dark' ? true : false]"
			></button>
			<label for="themeSwitch" class="font-semibold">Dark Mode</label>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '../store'
import { ThemeActionTypes } from '../store/enums'
export default defineComponent({
	name: 'Header',
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
		return { theme, toggleTheme }
	},
})
</script>