<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<form @submit.prevent>
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input
					v-model="inputTitle"
					type="text"
					class="form-control"
					id="title"
					placeholder="제목을 입력하세요."
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					v-model="inputContent"
					class="form-control"
					id="content"
					rows="3"
					placeholder="내용을 입력하세요."
				></textarea>
			</div>
			<p class="fs-6 text-end mt-0">{{ inputContent?.length }} / 100</p>
			<div class="pt-4 d-grid d-md-flex justify-content-md-end">
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goPostDetail"
				>
					Cancel
				</button>
				<button class="btn btn-outline-primary" @click="clickSave">Save</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { getPostById, setPostValue } from '@/api/post';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// const id = useRoute().params.id;

const props = defineProps({
	id: {
		type: Number,
	},
});

const goPostDetail = () => {
	router.push({
		name: 'PostDetail',
		params: {
			id: props.id,
		},
	});
};

const inputTitle = ref();
const inputContent = ref();

const post = ref();

const fetchData = async () => {
	const data = await getPostById(props.id);
	if (data) {
		post.value = { ...data };
	}
};
fetchData();

watch(post, () => {
	inputTitle.value = post.value.title;
	inputContent.value = post.value.content;
});

const clickSave = async () => {
	if (!inputTitle.value) {
		alert("please input this Post's title!");
	}
	if (!inputContent.value) {
		alert("please input this Post's content!");
	}

	const post = {
		id: props.id,
		title: inputTitle.value,
		content: inputContent.value,
	};

	const result = await setPostValue(post);
	if (result) {
		goPostDetail();
	}
};
</script>

<style lang="scss" scoped></style>
