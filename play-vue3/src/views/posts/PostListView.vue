<template>
	<div>
		<div class="row justify-content-between">
			<div class="col-4">
				<h2>📝Posts</h2>
			</div>
			<div class="col create-post-container">
				<button
					class="btn btn-outline-primary"
					type="button"
					@click="goCreatePost"
				>
					Create Post
				</button>
			</div>
		</div>
		<hr class="mt-3 mb-4" />
		<div v-if="postList.length > 0">
			<div class="row g-3">
				<div v-for="post in postList" :key="post.id" class="col-4 post-card">
					<PostItem
						:title="post.title"
						:content="post.content"
						:created-at="post.createdAt"
						:author="post.author"
						@click="goPostDetail(post.id)"
						@mouseenter="mouseEnterPostItem(post)"
						@mouseleave="mouseleavePostItem"
						@mousemove="mousemovePostItem"
					>
					</PostItem>
				</div>
			</div>
		</div>
		<div class="text-center" v-else>
			<h5 class="card-title fw-bold">⚠️ No Posts ⚠️</h5>
			<p class="card-text text-muted mt-2">please wirte your posting,,✏️</p>
		</div>
		<hr class="my-4" />

		<div class="preview-radio-container">
			<div class="form-check form-switch">
				<input
					class="form-check-input"
					type="checkbox"
					role="switch"
					id="switch-check-box"
					:checked="isUsePreview"
					:unchecked="!isUsePreview"
					@change="changeChecked"
				/>
				<label class="form-check-label" for="switch-check-box"
					>use preview</label
				>
			</div>
		</div>

		<div
			v-show="isUsePreview && previewItem !== undefined"
			class="preview-popover"
		>
			<div>
				<span class="badge text-bg-primary fs-6">Preview</span>
				<div class="mt-2">
					<ThePopOver>
						<template v-slot:header>{{ previewItem?.title }}</template>
						<template v-slot:default>{{ previewItem?.content }}</template>
						<template v-slot:footer>{{ previewItem?.createdAt }}</template>
					</ThePopOver>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
// import AppCard from '@/components/AppCard.vue';
import ThePopOver from '@/layouts/ThePopOver.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostList } from '@/api/post';

const router = useRouter();
const postList = ref([]);

const previewItem = ref();

(async () => {
	postList.value = await getPostList();
})().catch(error => console.log(error));

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

// const mouseOverPostItem = post => {
// 	if (post) {
// 		previewItem.value = { ...post };
// 	}
// };

const mouseEnterPostItem = post => {
	if (post) {
		previewItem.value = { ...post };
	}
};
const mouseleavePostItem = () => {
	previewItem.value = undefined;
};

const pointX = ref();
const pointY = ref();

const mousemovePostItem = e => {
	pointX.value = e.pageX + 10 + 'px';
	pointY.value = e.pageY + 10 + 'px';
};

const isUsePreview = ref(true);

const changeChecked = () => {
	isUsePreview.value = !isUsePreview.value;
};

const goCreatePost = () => {
	router.push({
		name: 'PostCreate',
	});
};
</script>

<style lang="scss" scoped>
.post-card {
	:hover {
		border-color: var(--bs-dark);
		cursor: pointer;
	}
}

.preview-popover {
	background-color: white;
	border: 1px solid black;
	padding: 8px;
	border-radius: 8px;
	width: 400px;
	position: absolute;
	left: v-bind(pointX);
	top: v-bind(pointY);
	z-index: 999;
}

.preview-radio-container {
	display: flex;
	justify-content: end;
}

.create-post-container {
	display: flex;
	height: 25%;
	justify-content: end;
}
</style>
