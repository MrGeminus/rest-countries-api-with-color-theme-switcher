<template>
	<div
		class="
			block
			pb-11
			rounded
			bg-elements-light
			dark:bg-elements-dark
			shadow-md
			animate-pulse
		"
	>
		<div class="block w-full h-44 bg-neutral-300"></div>

		<div class="block pt-7 px-5">
			<div class="block w-24 h-6 bg-neutral-300"></div>
			<div class="block w-36 h-4 mt-7 bg-neutral-300"></div>
			<div class="block w-36 h-4 mt-2 bg-neutral-300"></div>
			<div class="block w-36 h-4 mt-2 bg-neutral-300"></div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'CardSkeleton',
})
</script>

