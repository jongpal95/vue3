<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<form @submit.prevent>
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input
					type="text"
					class="form-control"
					id="title"
					placeholder="제목을 입력하세요."
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					class="form-control"
					id="content"
					rows="3"
					placeholder="내용을 입력하세요."
				></textarea>
			</div>
			<div class="pt-4 d-grid d-md-flex justify-content-md-end">
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goPostDetail"
				>
					Cancel
				</button>
				<button class="btn btn-outline-primary">Save</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const id = useRoute().params.id;

const goPostDetail = () => {
	router.push({
		name: 'PostDetail',
		id,
	});
};
</script>

<style lang="scss" scoped></style>
