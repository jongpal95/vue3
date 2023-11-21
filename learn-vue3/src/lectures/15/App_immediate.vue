<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('hello vue3');
		const reverseMessage = ref('');

		// immediate option
		// watch(
		// 	message,
		// 	newValue => {
		// 		console.log('use immediate option!!!');
		// 		reverseMessage.value = newValue.split('').reverse().join('');
		// 	},
		// 	{
		// 		immediate: true,
		// 	},
		// );

		// use function(== use option)
		const reverseFunction = () => {
			reverseMessage.value = message.value.split('').reverse().join('');
		};

		watch(message, reverseFunction);
		reverseFunction();

		return {
			message,
			reverseMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
