<template>
	<div>
		<button v-on:click="increament">Counter : {{ counter }}</button>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
	setup() {
		const counter = ref(0);

		const increament = () => counter.value++;

		onMounted(() => {
			console.log('on mounted!');
		});

		return {
			counter,
			increament,
		};
	},
};
</script>

<style lang="scss" scoped></style>
