<template>
	<a v-if="href" :href="href" :class="[baseStyles, classes]" target="_blank"
		><slot
	/></a>
	<router-link
		v-else-if="to"
		:to="to"
		:class="[baseStyles, classes]"
		tabindex="0"
		><slot
	/></router-link>
	<button v-else type="button" :class="[baseStyles, classes]">
		<slot />
	</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'Button',
	props: {
		to: {
			type: Object,
			default: null,
		},
		href: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: '',
		},
	},
	setup() {
		const baseStyles = ref<string>(
			`relative inline-block rounded shadow-custom-2
			text-content-dark dark:text-content-light font-light
		    bg-elements-light dark:bg-elements-dark
			outline-none cursor-pointer
			transition-colors motion-reduce:transition-none
			hover:text-content-light dark:hover:text-content-dark
			hover:bg-elements-dark dark:hover:bg-elements-light
			focus-visible:outline-elements-dark
			dark:focus-visible:outline-elements-light
			supports-focus-visible:focus:outline-elements-dark
			supports-focus-visible:dark:focus:outline-elements-light`
		)

		return {
			baseStyles,
		}
	},
})
</script>