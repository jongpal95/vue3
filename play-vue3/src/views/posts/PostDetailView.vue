<template>
	<div>
		<AppCard>
			<template v-slot:header>{{ form?.title }}</template>
			<template v-slot:default>{{ form?.content }}</template>
			<template v-slot:footer>{{ form?.createdAt }}</template>
		</AppCard>
		<hr class="my-4" />
		<PostController
			@go-post-list="goPostList"
			@go-post-edit="goPostEdit"
			@go-post-next="goPostNext"
			@go-post-previous="goPostPrevious"
		></PostController>
		<!-- <p>params : {{ $route.params }}</p>
		<p>query : {{ $route.query }}</p>
		<p>hash : {{ $route.hash }}</p> -->
	</div>
</template>

<script setup>
import PostController from '@/components/posts/PostController.vue';
import AppCard from '@/components/AppCard.vue';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { getPosts, getPostById } from '@/api/post';

const props = defineProps({
	id: Number,
});

// const id = useRoute().params.id;
const router = useRouter();

const form = ref({});

const fetchData = () => {
	const data = getPostById(props.id);
	form.value = { ...data };
};
fetchData();

const goPostList = () => {
	router.push({
		name: 'PostList',
	});
};
const goPostEdit = () => {
	router.push({
		name: 'PostEdit',
		params: {
			id: props.id,
		},
	});
};

const goPostNext = () => {
	const postCount = getPosts().length;
	if (props.id === postCount) {
		alert('This post is Last Post!');
		return;
	}

	goPostDetail(props.id + 1);
};
const goPostPrevious = () => {
	if (props.id === 1) {
		alert('This post is First Post!');
		return;
	}

	goPostDetail(props.id - 1);
};

const goPostDetail = id => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};

watch(props, () => fetchData());
</script>

<style lang="scss" scoped></style>
