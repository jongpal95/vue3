<template>
	<div>
		<button v-on:click="increament">Counter : {{ counter }}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		increament() {
			this.counter++;
		},
	},
	mounted() {
		console.log('on mounted!');
	},
};
</script>

<style lang="scss" scoped></style>
