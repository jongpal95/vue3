<template>
	<div class="container py-4">
		<input type="text" ref="inputRef" value="vue3" />
		<hr />
		<button @click="visible = !visible">Toggle Child</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifecycleChild from './LifecycleChild.vue';

export default {
	components: {
		LifecycleChild,
	},
	setup() {
		// console.log('set up');

		const inputRef = ref(null);

		const message = ref('');

		const visible = ref(false);
		// mount
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount, inputRef : ', inputRef.value);
		// });

		// onMounted(() => {
		// 	console.log('onMounted, inputRef : ', inputRef.value.value);
		// });

		// update
		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate', message.value);
		// 	console.log(
		// 		'DOM content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });

		// onUpdated(() => {
		// 	console.log('onUpdated', message.value);
		// 	console.log(
		// 		'DOM content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });

		return {
			inputRef,
			message,
			visible,
		};
	},
	// beforeCreate() {
	// 	console.log('beforeCreate');
	// },
	// created() {
	// 	console.log('created');
	// },
};
</script>

<style lang="scss" scoped></style>
