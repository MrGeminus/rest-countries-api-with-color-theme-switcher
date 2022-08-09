<template>
	<button
		type="button"
		@click="goBack"
		class="
			relative
			pl-12
			sm:pl-16
			pr-6
			sm:pr-10
			py-1.5
			mr-auto
			rounded
			shadow-md
			text-content-dark
			dark:text-content-light
			hover:text-content-light
			dark:hover:text-content-dark
			text-sm
			sm:text-base
			font-light font-nunitoSans
			bg-elements-light
			dark:bg-elements-dark
			hover:bg-elements-dark
			dark:hover:bg-elements-light
			transition-colors
			bg-arrow-left-icon-dark
			hover:bg-arrow-left-icon-light
			dark:bg-arrow-left-icon-light dark:hover:bg-arrow-left-icon-dark
			bg-1
			sm:bg-1.2
			bg-left-6-top-2
			sm:bg-left-9-top-2
			bg-no-repeat
			outline-none
			focus-visible:outline-elements-dark
			dark:focus-visible:outline-elements-light
		"
	>
		Back
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '../router'
export default defineComponent({
	name: 'Button',
	setup() {
		const goBack = (): void => {
			router.go(-1)
		}
		return { goBack }
	},
})
</script>