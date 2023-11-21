<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		const original = reactive({
			count: 0,
		});

		const copy = readonly(original);

		original.count++;
		copy.count++;

		console.log(original.count);
		console.log(copy.count); // Set operation on key "count" failed: target is readonly

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
