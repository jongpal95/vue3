<template>
	<div class="row">
		<div class="col-auto">
			<button class="btn btn-outline-dark" @click="clickPrevious">
				Previous
			</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-outline-dark" @click="clickNext">Next</button>
		</div>
		<div class="col-auto me-auto"></div>
		<div class="col-auto">
			<button class="btn btn-outline-dark" @click="clickBackToList">
				Back to List
			</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-outline-primary" @click="clickEdit">Edit</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-outline-danger" @click="clickDelete">
				Delete
			</button>
		</div>
	</div>
</template>

<script setup>
const emit = defineEmits({
	goPostList: 'goPostList',
	goPostEdit: 'goPostEdit',
	goPostNext: 'goPostNext',
	goPostPrevious: 'goPostPrevious',
	delPost: 'delPost',
});

const clickBackToList = () => {
	emit('goPostList');
};
const clickEdit = () => {
	emit('goPostEdit');
};
const clickNext = () => {
	emit('goPostNext');
};
const clickPrevious = () => {
	emit('goPostPrevious');
};

const clickDelete = () => {
	emit('deletePost');
};
</script>

<style lang="scss" scoped></style>
