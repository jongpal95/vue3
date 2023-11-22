<template>
	<main>
		<div id="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>

			<hr class="my-4" />

			<div class="row g-3">
				<div class="col col-4">
					<!-- <AppCard></AppCard> -->
					<!-- props 직접 전달 -->
					<app-card title="TITLE1" content="CONTENT1"></app-card>
				</div>
				<div class="col col-4">
					<!-- props 반응형 객체 전달 -->
					<AppCard :title="obj.title" :content="obj.content"></AppCard>
				</div>
				<!-- use v-for directive -->
				<div class="col col-4" v-for="post in posts" :key="post.id">
					<AppCard
						:type="post.type"
						:title="post.title"
						:content="post.content"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
					></AppCard>
					<!-- <button @click="post.isLike = !post.isLike">toggle</button> -->
				</div>
				<!-- <div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div>
				<div class="col col-4">
					<AppCard></AppCard>
				</div> -->
			</div>

			<hr />
			<!-- 
				사용자 정의 컴포넌트에서 v-model 동작
				modelValue
				update:modelValue
			 -->

			<!-- 이벤트 구현 -->
			<!-- <LabelInput
				:model-value="userName"
				@update:model-value="value => (userName = value)"
			></LabelInput> -->

			<!-- v-model 구현 -->
			<LabelInput v-model="userName" label="이름"></LabelInput>
			<LabelTitle v-model:title="title" label="NAME"></LabelTitle>
			<UserName
				v-model:firstName="firstName"
				v-model:lastName="lastName"
			></UserName>
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import LabelTitle from './LabelTitle.vue';
import UserName from './UserName.vue';

export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
		LabelTitle,
		UserName,
	},
	setup() {
		const obj = reactive({
			title: 'TITLE2',
			content: 'CONTENT2',
		});

		const posts = reactive([
			{
				id: 1,
				type: 'notice',
				title: 'TITLE3',
				content: 'CONTENT3',
				isLike: true,
			},
			{
				id: 2,
				type: 'notice',
				title: 'TITLE4',
				content: 'CONTENT4',
				isLike: true,
			},
			{ id: 3, title: 'TITLE5', content: 'CONTENT5' },
			{ id: 4, title: 'TITLE6', content: 'CONTENT6' },
		]);

		const createPost = newPost => {
			// console.log('createPost');

			// emit method parameter
			// console.log(a);
			// console.log(b);
			// console.log(c);
			// console.log(d);

			console.log(newPost);

			posts.push(newPost);
		};

		const userName = ref('');
		const title = ref('');

		const firstName = ref('');
		const lastName = ref('');

		return {
			obj,
			posts,
			createPost,
			userName,
			title,
			firstName,
			lastName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
