<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button v-on:click="message = message + '!'">Click!</button>
		<hr />
		<h2>v-html</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<hr />
		<h2>속성 바인딩</h2>
		<div v-bind:title="dynamicTitle">마우스를 올려주세요.</div>
		<input type="text" value="jwhan" :disabled="isInputDisabled" />
		<input v-bind="attr" />
		<hr />
		<h2>java script</h2>
		{{ message.split('').reverse().join('') }}<br />
		{{ isInputDisabled ? '예' : '아니오' }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('hello vue3!');
		const rawHtml = ref('<strong>Hi~</strong>');

		const dynamicTitle = ref('안녕하세요~!');

		const isInputDisabled = ref(true);

		const attr = ref({
			type: 'text',
			value: '1234',
			disabled: false,
		});

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attr,
		};
	},
};
</script>

<style lang="scss" scoped></style>
