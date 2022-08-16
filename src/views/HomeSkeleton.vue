<template>
	<h2 class="sr-only">Loading countries, please wait...</h2>
	<ul
		class="grid grid-cols-home justify-center gap-9 md:gap-16 w-full"
		aria-hidden="true"
	>
		<li :key="i" v-for="i in 16">
			<CardSkeleton />
		</li>
	</ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CardSkeleton from '../components/CardSkeleton.vue'

export default defineComponent({
	name: 'HomeSkeleton',
	components: {
		CardSkeleton,
	},
})
</script>
