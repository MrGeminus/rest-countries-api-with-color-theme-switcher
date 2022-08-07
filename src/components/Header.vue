<template>
	<header
		class="
			flex
			px-4
			py-8
			md:px-16 md:py-4
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
				class="
					pl-6
					rounded
					font-semibold
					bg-moon-icon-light
					dark:bg-moon-icon-dark
					bg-1 bg-no-repeat bg-left-center
					outline-none outline-offset-8
					hover:outline-elements-dark
					dark:hover:outline-elements-light
					focus-visible:outline-elements-dark
					dark:focus-visible:outline-elements-light
				"
				type="button"
				role="switch"
				:ariaChecked="[theme === 'dark']"
				@click="toggleTheme"
			>
				Dark Mode
			</button>
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