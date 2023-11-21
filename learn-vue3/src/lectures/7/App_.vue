<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// ref -> Object
		// const count = ref(0);
		// const state = reactive({
		// 	count,
		// });

		// count.value++;

		// console.log('count.value: ', count.value);
		// console.log('state.count: ', state.count);

		// ref -> Array / 반응형 객체 배열
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log('arr[0] : ', arr[0].value);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
