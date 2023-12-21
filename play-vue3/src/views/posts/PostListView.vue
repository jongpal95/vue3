<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4 post-card">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goPostDetail(post.id)"
					@mouseover="mouseOverPostItem(post.id)"
				></PostItem>
			</div>
		</div>
		<div v-if="previewItem !== undefined">
			<hr class="my-4" />
			<div>
				<span class="badge text-bg-primary fs-6">Preview</span>
				<div class="mt-4">
					<AppCard>
						<template v-slot:header>{{ previewItem?.title }}</template>
						<template v-slot:default>{{ previewItem?.content }}</template>
						<template v-slot:footer>{{ previewItem?.createdAt }}</template>
						<!-- <PostDetail :id="previewId" use-controller="false"></PostDetail> -->
					</AppCard>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/post';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/post';

const router = useRouter();
const posts = ref([]);

const previewItem = ref();

(() => {
	posts.value = getPosts();
})();

const goPostDetail = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		// query: {
		// 	searchText: 'hello',
		// },
		// hash: '#world',
	});
};

const mouseOverPostItem = id => {
	if (id === previewItem.value?.id) {
		return;
	}

	const data = getPostById(id);

	previewItem.value = { ...data };

	console.log(previewItem.value);
};
</script>

<style lang="scss" scoped>
.post-card {
	:hover {
		border-color: var(--bs-dark);
	}
}
</style>
