<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option selected>Open this select menu</option>
				<option value="new">NEW</option>
				<option value="notice">NOTICE</option>
			</select>
		</div>
		<div class="col col-8">
			<input v-model="title" type="text" class="form-control" />
		</div>
		<div class="col col-2 d-grid gap-2">
			<!-- 컴포넌트 내장 method $emit 사용 -->
			<!-- <button
			class="btn btn-primary"
			@click="$emit('createPost', 1, 2, 3, 'component $emit')"
		> -->

			<!-- setup함수 파라미터인 context 객체의 emit method 사용 -->
			<button class="btn btn-primary" @click="createPost">ADD</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits option : string
	// emits: ['createPost'],

	// emtis option : object
	emits: {
		createPost: newPost => {
			//console.log('emits options validator');

			if (!newPost.title) {
				return false; // print warning
			} else if (!newPost.type) {
				return false;
			}

			return true;
		},
	},
	setup(props, { emit }) {
		// context.emit
		const createPost = () => {
			// emit('createPost', 1, 2, 3, 'context emit');
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);

			type.value = 'new';
			title.value = '';
		};

		const title = ref('');

		const type = ref('new');

		return {
			createPost,
			title,
			type,
		};
	},
};
</script>

<style lang="scss" scoped></style>
