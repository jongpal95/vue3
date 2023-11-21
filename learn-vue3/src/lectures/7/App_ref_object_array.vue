<template>
	<div>
		<p>{{ message.value }}</p>
		<button v-on:click="addMessage">add Message</button>
		<hr />
		<p>{{ refMessage }}</p>
		<button v-on:click="addRefMessage">add refMessage</button>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		const message = reactive({
			value: 'Hello Vue!',
		});

		const addMessage = () => {
			message.value = message.value + '!';
		};

		const refMessage = ref('Hello Vue!');

		const addRefMessage = () => {
			refMessage.value += '!';
		};

		return {
			message,
			refMessage,
			addMessage,
			addRefMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
