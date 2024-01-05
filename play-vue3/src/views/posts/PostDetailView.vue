<template>
	<div>
		<div class="contianer m-1">
			<div class="row">
				<div class="col text-end">author: {{ post?.author }}</div>
			</div>
		</div>

		<AppCard>
			<template v-slot:header>{{ post?.title }}</template>
			<template v-slot:default>{{ post?.content }}</template>
			<template v-slot:footer>{{ post?.createdAt }}</template>
		</AppCard>

		<hr class="my-4" />
		<PostController
			@go-post-list="goPostList"
			@go-post-edit="goPostEdit"
			@go-post-next="goPostNext"
			@go-post-previous="goPostPrevious"
			@delete-post="deletePost"
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
import { getPostById, setPostVisible, getPostByOrder } from '@/api/post';
import { ScrollToTop } from '@/main';

const props = defineProps({
	id: {
		type: Number,
		required: true,
	},
});

// const id = useRoute().params.id;
const router = useRouter();

const post = ref({});

const fetchData = async () => {
	const data = await getPostById(props.id);
	if (data) {
		post.value = { ...data };
	} else {
		alert('This post is the Last!');

		goPostDetail(props.id - 1);
	}

	ScrollToTop();
};
fetchData();

const goPostList = () => {
	router.push({
		name: 'PostList',
	});
	ScrollToTop();
};
const goPostEdit = () => {
	router.push({
		name: 'PostEdit',
		params: {
			id: props.id,
		},
	});

	ScrollToTop();
};

const goPostNext = async () => {
	const data = await getPostByOrder('next', props.id);

	if (data === undefined) {
		alert('Sorry, Try again few minutes later😅');
		ScrollToTop();
		return;
	}

	if (data === -1) {
		alert('This post is the Last!');
		ScrollToTop();
		return;
	}

	goPostDetail(data.id);
};
const goPostPrevious = async () => {
	if (props.id === 1) {
		alert('This post is the First!');
		ScrollToTop();
		return;
	}

	const data = await getPostByOrder('prev', props.id);
	if (data === undefined) {
		alert('Sorry, Try again few minutes later😅');
		ScrollToTop();
		return;
	}

	if (data === -1) {
		alert('This post is the First!');
		ScrollToTop();
		return;
	}

	goPostDetail(data.id);
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

const deletePost = async () => {
	const result = await setPostVisible(props.id);
	if (result) {
		goPostList();
	}
};
</script>

<style lang="scss" scoped></style>
