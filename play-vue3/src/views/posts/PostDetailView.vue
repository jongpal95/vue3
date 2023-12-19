<template>
	<div>
		<h2>제목</h2>
		<p>내용</p>
		<p class="text-muted"></p>
		<hr class="my-4" />
		<div class="row">
			<div class="col-auto">
				<button class="btn btn-outline-dark">Previous</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">Next</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goPostList">
					Back to List
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goPostEdit">
					Edit
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">Delete</button>
			</div>
		</div>
		<!-- <p>params : {{ $route.params }}</p>
		<p>query : {{ $route.query }}</p>
		<p>hash : {{ $route.hash }}</p> -->
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const id = useRoute().params.id;
const router = useRouter();

const goPostList = () => {
	router.push({
		name: 'PostList',
	});
};
const goPostEdit = () => {
	router.push({
		name: 'PostEdit',
		id,
	});
};
</script>

<style lang="scss" scoped></style>
