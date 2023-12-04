<template>
	<div class="container py-4">
		{{ msg }}
		<br />
		{{ message }}
		<input v-model="message" type="text" />
		<button @click="sayHello">Click</button>
		<PostItem
			type="new"
			title="TITLE"
			content="CONTENT"
			:is-like="true"
		></PostItem>
		<PostItem
			type="new"
			title="TITLE"
			content="CONTENT"
			:is-like="true"
		></PostItem>
		<PostItem
			type="new"
			title="TITLE"
			content="CONTENT"
			:is-like="true"
		></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from './setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';

const msg = 'Hello World!';
const sayHello = () => {
	alert('Hello~!');
};
const message = ref('');

const child = ref(null);

defineExpose({
	msg,
});

const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employees',
);
console.log(response);
</script>

<style lang="scss" scoped></style>
