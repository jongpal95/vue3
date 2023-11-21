<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('');

		watch(message, (newValue, oldValue) => {
			// DOM 조작 or API 호출 or state 변경
			console.log(newValue);
			console.log(oldValue);
		});

		return {
			message,
		};
	},
};
</script>

<style lang="scss" scoped></style>
