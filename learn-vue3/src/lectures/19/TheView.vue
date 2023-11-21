<template>
	<main>
		<div id="container py-4">
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
		</div>
	</main>
</template>

<script>
import { reactive } from 'vue';
import AppCard from './AppCard.vue';
export default {
	components: {
		AppCard,
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
		return {
			obj,
			posts,
		};
	},
};
</script>

<style lang="scss" scoped></style>
