<template>
	<header
		class="
			px-4
			py-8
			sm:px-16 sm:py-4
			shadow-custom-1
			text-xs
			sm:text-base
			text-content-dark
			dark:text-content-light
			bg-elements-light
			dark:bg-elements-dark
			z-10
		"
	>
		<div class="flex max-w-8xl mx-auto">
			<h1 class="text-sm sm:text-2xl font-extrabold">
				Where in the world?
			</h1>
			<div class="flex items-center ml-auto">
				<button
					id="switch"
					class="
						pl-5
						sm:pl-6
						rounded
						font-semibold
						bg-moon-icon-light
						dark:bg-moon-icon-dark
						bg-0.8
						sm:bg-1
						bg-left-center bg-no-repeat
						outline-none outline-offset-8
						hover:outline-elements-dark
						dark:hover:outline-elements-light
						focus-visible:outline-elements-dark
						dark:focus-visible:outline-elements-light
					"
					type="button"
					role="switch"
					aria-label="Dark Mode"
					:ariaChecked="[theme === 'dark']"
					@click="toggleTheme"
				>
					<span aria-hidden="true">Dark Mode</span>
				</button>
				<label for="switch" class="sr-only">Dark Mode</label>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useStore } from '../store'
import { ThemeActionTypes } from '../store/enums'
export default defineComponent({
	name: 'Header',
	setup() {
		const store = useStore()
		const theme = ref<ComputedRef<string>>(
			computed(() => store.state.theme.theme)
		)
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