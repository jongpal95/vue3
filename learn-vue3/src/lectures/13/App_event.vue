<template>
	<div>
		<button @click="printEventInfo('hello vue', $event)">
			inline event handler
		</button>
		<input type="text" @keyup="onKeyUpEventHandler" />
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (message, event) => {
			console.log('message: ', message);
			console.log('event.target: ', event.target);
			console.log('event.target.tagName: ', event.target.tagName);
		};

		const onKeyUpEventHandler = event => {
			console.log('event.key ', event.key);
		};
		return {
			printEventInfo,
			onKeyUpEventHandler,
		};
	},
};
</script>

<style lang="scss" scoped></style>
