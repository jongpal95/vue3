<template>
	<div :style="styleObject">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero
		necessitatibus eos omnis eveniet, quo suscipit repellat, voluptatibus quia
		vel nobis doloribus iste aut laboriosam doloremque fugit voluptates tenetur
		illum.
	</div>
	<button v-on:click="fontSize--">-</button>
	<button v-on:click="fontSize++">+</button>
</template>

<script>
import { computed, ref } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		// object binding
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });

		const fontSize = ref(13);

		// computed object binding
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		return {
			styleObject,
			fontSize,
		};
	},
};
</script>

<style lang="scss" scoped></style>
