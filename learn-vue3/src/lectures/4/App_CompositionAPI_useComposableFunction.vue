<template>
	<div>
		<h2>Reactive Message</h2>
		<p>{{ reactiveMsg }}</p>
		<button v-on:click="addReactiveMessage">+add reactive message+</button>
		<h2>Normal Message</h2>
		<p>{{ normalMsg }}</p>
		<button v-on:click="addNormalMessage">+add normal message+</button>
	</div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue';

export default {
	setup() {
		// reactive API
		const reactiveMsg = ref('meactive message!');
		const addReactiveMessage = () => {
			reactiveMsg.value = reactiveMsg.value + '!';
		};
		// console.log(`isRef? - reactiveMsg ${isRef(reactiveMsg)}`);

		let normalMsg = 'normal message!';
		const addNormalMessage = () => {
			normalMsg = normalMsg + '!';
		};
		// console.log(`isRef? - normalMsg ${isRef(normalMsg)}`);

		// Lifecycle Hook API
		console.log('setup()');

		onMounted(() => {
			console.log('onMounted!!!');
		});

		onBeforeMount(() => {
			console.log('OnBeforeMounted!!!');
		});

		return {
			reactiveMsg,
			normalMsg,
			addReactiveMessage,
			addNormalMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
