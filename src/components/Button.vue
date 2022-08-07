<template>
	<button
		type="button"
		@click="goBack"
		class="
			relative
			pl-11
			pr-6
			py-1.5
			mt-8
			ml-6
			md:ml-16
			mr-auto
			rounded
			shadow-md
			text-content-dark
			dark:text-content-light
			hover:text-content-light
			dark:hover:text-content-dark
			text-base
			font-light font-nunitoSans
			bg-elements-light
			dark:bg-elements-dark
			hover:bg-elements-dark
			dark:hover:bg-elements-light
			transition-colors
			before:absolute
			before:top-2.5
			before:left-5
			before:w-4
			before:h-4
			before:bg-arrow-left-dark-icon
			before:bg-cover
			before:bg-center
			before:bg-no-repeat
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