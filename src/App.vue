<template>
	<div
		:class="[
			darkMode ? 'dark' : '',
			'flex flex-col min-h-screen bg-background-light dark:bg-background-dark',
		]"
	>
		<router-view @toggleDarkMode="toggleDarkMode"></router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from "vue";
export default defineComponent({
	name: "App",
	setup() {
		const darkMode = ref<boolean>(false);
		const toggleDarkMode = () => {
			darkMode.value
				? (localStorage.theme = "light")
				: (localStorage.theme = "dark");
			darkMode.value = setTheme();
		};
		const setTheme = () => {
			if (
				localStorage.theme === "dark" ||
				(!("theme" in localStorage) &&
					window.matchMedia("(prefers-color-scheme: dark)").matches)
			) {
				return true;
			}
			return false;
		};
		onBeforeUnmount(() => localStorage.removeItem("countriesList"));
		return { darkMode, toggleDarkMode };
	},
});
</script>


