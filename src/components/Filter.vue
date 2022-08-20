<template>
	<div
		ref="select"
		class="
			relative
			w-full
			max-w-29
			md:ml-4
			mt-11
			md:mt-0
			rounded
			text-content-dark
			dark:text-content-light
			text-sm
			font-semibold
		"
		@click.right="closeOptionsList"
	>
		<div
			:class="[
				'w-full h-full px-5 py-4 rounded shadow-custom-2',
				'bg-elements-light dark:bg-elements-dark',
				'z-10 outline-none cursor-pointer',
				'focus-visible:outline-elements-dark',
				'dark:focus-visible:outline-elements-light',
				'after:absolute after:top-0 after:right-5',
				'after:w-3 after:h-full',
				'after:bg-chevron-down-icon-dark',
				'after:dark:bg-chevron-down-icon-light',
				'after:bg-0.65 after:bg-center after:bg-no-repeat',
				'after:transition-transform motion-reduce:after:transition-none',
				!hideOptionList ? 'after:rotate-180' : '',
			]"
			role="combobox"
			aria-label="Filter by Region"
			:aria-expanded="hideOptionList ? 'false' : 'true'"
			aria-controls="optionList"
			aria-haspopup="listbox"
			:aria-activedescendant="fucusedOption ? fucusedOption.id : ''"
			@click.left="toggleOptionsList"
			@keydown.enter="toggleOptionsList"
			@keydown.prevent.space="toggleOptionsList"
			@keydown.prevent.escape="closeOptionsList"
			@keydown.tab="closeOptionsList"
			tabIndex="0"
		>
			{{ selectedOption ? selectedOption : 'Filter by Region' }}
		</div>
		<div
			ref="optionList"
			id="optionList"
			:aria-hidden="hideOptionList ? 'true' : 'false'"
			:class="[
				'absolute top-15 inset-x-0 block',
				'py-4 rounded shadow-custom-2',
				'bg-elements-light dark:bg-elements-dark',
				'z-10 scale-y-0 origin-top transition-all delay-150',
				'motion-reduce:transition-none',
				hideOptionList ? '' : 'scale-y-100',
			]"
			role="listbox"
			tabindex="-1"
		>
			<div
				:key="option.value"
				v-for="option in options"
				:id="option.value"
				:class="[
					'px-6 py-1',
					'z-20 cursor-pointer outline-none outline-offset-i-2',
					'opacity-0 transition-opacity motion-reduce:transition-none',
					'hover:text-content-light dark:hover:text-content-dark',
					'hover:bg-elements-dark dark:hover:bg-elements-light',
					'focus:text-content-light dark:focus:text-content-dark',
					'dark:focus:bg-elements-light focus:bg-elements-dark',
					hideOptionList ? '' : 'opacity-100 delay-200',
				]"
				role="option"
				:aria-selected="option.selected"
				@click="selectOption(option.value)"
				@keydown.enter="selectOption(option.value)"
				@keydown.prevent.space="selectOption(option.value)"
				@keydown.prevent.escape="closeOptionsList"
				@keydown.tab="closeOptionsList"
				@keydown.prevent.down="goDownOptionsList"
				@keydown.prevent.up="goUpOptionsList"
				@keydown.prevent.2="goDownOptionsList"
				@keydown.prevent.8="goUpOptionsList"
				tabindex="-2"
			>
				{{ option.text }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, nextTick } from 'vue'
import { onClickOutside } from '@vueuse/core'
import type { Option } from '../types'
export default defineComponent({
	name: 'Filter',

	setup(props, { emit }) {
		const select = ref<HTMLElement>()
		const optionList = ref<HTMLElement | null>(null)
		const hideOptionList = ref<boolean>(true)
		const options = ref<Option[]>([
			{ text: 'All Regions', value: 'Worldwide', selected: false },
			{ text: 'Africa', value: 'Africa', selected: false },
			{ text: 'America', value: 'Americas', selected: false },
			{ text: 'Asia', value: 'Asia', selected: false },
			{ text: 'Europe', value: 'Europe', selected: false },
			{ text: 'Oceania', value: 'Oceania', selected: false },
		])
		const selectedOption = ref<string | null>(null)

		const fucusedOption = ref<HTMLElement | null>(null)

		const toggleOptionsList = (): void => {
			hideOptionList.value = !hideOptionList.value
			if (fucusedOption.value !== null) {
				fucusedOption.value = null
				return
			}
			nextTick(() => moveFocusToSelectedOption())
		}

		const closeOptionsList = (): void => {
			hideOptionList.value = true
			fucusedOption.value = null
		}

		const moveFocusToSelectedOption = (): void => {
			if (optionList.value === null) return
			fucusedOption.value = Array.from(optionList.value.children).filter(
				(child) =>
					child.innerHTML ===
					(selectedOption.value !== null
						? selectedOption.value
						: options.value[0].text)
			)[0] as HTMLElement
		}

		const goDownOptionsList = (): void => {
			if (fucusedOption.value === null) return
			fucusedOption.value = fucusedOption.value.nextElementSibling
				? (fucusedOption.value.nextElementSibling as HTMLElement)
				: fucusedOption.value.parentElement
				? (fucusedOption.value.parentElement
						.firstElementChild as HTMLElement)
				: fucusedOption.value
		}

		const goUpOptionsList = (): void => {
			if (fucusedOption.value === null) return
			fucusedOption.value = fucusedOption.value.previousElementSibling
				? (fucusedOption.value.previousElementSibling as HTMLElement)
				: fucusedOption.value.parentElement
				? (fucusedOption.value.parentElement
						.lastElementChild as HTMLElement)
				: fucusedOption.value
		}

		const selectOption = (value: String): void => {
			selectedOption.value = options.value
				.map((option: Option) => {
					option.value === value
						? (option.selected = true)
						: (option.selected = false)
					return option
				})
				.filter((option: Option) => option.selected === true)[0].text
			fucusedOption.value = null
			emit('filter', value)
			closeOptionsList()
		}

		onClickOutside(select, (): void => {
			closeOptionsList()
		})

		watch(fucusedOption, (): void => {
			if (fucusedOption.value === null) return
			fucusedOption.value.focus()
		})

		return {
			select,
			optionList,
			closeOptionsList,
			toggleOptionsList,
			goDownOptionsList,
			goUpOptionsList,
			hideOptionList,
			options,
			selectedOption,
			fucusedOption,
			selectOption,
		}
	},
})
</script>