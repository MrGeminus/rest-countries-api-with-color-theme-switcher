<template>
	<h2 class="sr-only">Loading country details...</h2>
	<div class="flex flex-col xl:flex-row xl:items-center mt-15 animate-pulse">
		<div class="block w-full h-60 sm:h-96 bg-neutral-300"></div>
		<div class="flex flex-col xl:ml-24">
			<div class="block w-28 h-7 mt-11 xl:mt-0 bg-neutral-300"></div>
			<div class="flex flex-col md:flex-row">
				<div class="mt-7 md:mt-9 md:mr-32">
					<div class="block w-60 h-4 bg-neutral-300"></div>
					<div class="block w-60 h-4 mt-3 bg-neutral-300"></div>
					<div class="block w-60 h-4 mt-3 bg-neutral-300"></div>
					<div class="block w-60 h-4 mt-3 bg-neutral-300"></div>
					<div class="block w-60 h-4 mt-3 bg-neutral-300"></div>
				</div>
				<div class="mt-11 md:mt-9">
					<div class="block w-60 h-4 bg-neutral-300"></div>
					<div class="block w-60 h-4 mt-3 bg-neutral-300"></div>
					<div class="block w-60 h-4 mt-3 bg-neutral-300"></div>
				</div>
			</div>
			<div
				class="flex flex-col md:flex-row md:items-center mt-11 xl:mt-20"
			>
				<div class="block w-36 h-5 md:mr-4 bg-neutral-300"></div>
				<div class="flex mt-5 md:mt-0">
					<div
						class="
							inline-block
							w-24
							h-7
							mr-3
							rounded
							bg-neutral-300
						"
					></div>
					<div
						class="
							inline-block
							w-24
							h-7
							mr-3
							rounded
							bg-neutral-300
						"
					></div>
					<div
						class="
							inline-block
							w-24
							h-7
							mr-3
							rounded
							bg-neutral-300
						"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'CountryDetailsSkeleton',
})
</script>
