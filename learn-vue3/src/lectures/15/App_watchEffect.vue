<template>
	<div>
		<form @submit.prevent="save(title, content)">
			<input type="text" v-model.lazy="title" placeholder="title" />
			<textarea v-model.lazy="content" placeholder="content"></textarea>
			<hr />
			<button>save</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const content = ref('');

		const save = (title, content) => {
			console.log(`saved!!! title: ${title}, content: ${content}`);
		};

		watchEffect(() => {
			console.log('call watchEffect');
			// save(title.value, content.value);
		});

		return {
			title,
			content,
			save,
		};
	},
};
</script>

<style lang="scss" scoped></style>
