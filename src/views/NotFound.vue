<template>
	<main class="grow flex">
		<div
			class="
				flex flex-col
				items-center
				justify-center
				w-full
				xl:max-w-8xl
				py-7
				lg:py-10
				px-7
				sm:px-16
				mx-auto
			"
		>
			<div class="order-2">
				<h2 class="mt-9 text-2xl font-semibold">Page Not Found!</h2>
				<p class="mt-4 text-base font-light">
					Sorry, that page never returned from a walk around Novi Sad.
				</p>
				<Button
					:to="{ name: 'Home' }"
					classes="px-6 py-3 mt-7 text-sm sm:text-base"
					>Take me back home</Button
				>
			</div>
			<img
				class="order-1 w-full max-w-xl"
				:src="illustration"
				alt="Error code 404 illustration"
			/>
		</div>
	</main>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '../store'
import Button from '../components/Button.vue'
export default defineComponent({
	name: 'NotFound',
	components: {
		Button,
	},
	setup() {
		const store = useStore()

		const theme = ref(computed(() => store.state.theme.theme))

		const illustration = computed(() =>
			theme.value === 'dark'
				? new URL('../assets/page_not_found-light.svg', import.meta.url)
						.href
				: new URL('../assets/page_not_found-dark.svg', import.meta.url)
						.href
		)

		return { illustration }
	},
})
</script>