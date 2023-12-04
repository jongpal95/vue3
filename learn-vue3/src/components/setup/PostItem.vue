<template>
	<div class="card">
		<div class="card-body">
			<!-- type: news or notice -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text blue">
				{{ content }}
			</p>
			<!-- <a v-if="isLike" href="#" class="btn btn-danger">LIKE!!!</a>
			<a v-else href="#" class="btn btn-outline-danger">LIKE!!!</a> -->

			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>LIKE!!!</a
			>
			<br />
			{{ obj }}
		</div>
	</div>
</template>

<!-- normal script / 한번만 실행됨 -->
<script>
console.log('script - normal');
</script>

<!-- setup script / 인스턴스가 생성될 때마다 실행됨 -->
<script setup>
import { computed } from 'vue';

console.log('script - setup');

const props = defineProps({
	type: {
		type: String,
		default: 'new',
		validator: value => {
			return ['new', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		// required: true,
	},
	isLike: {
		type: Boolean,
		default: false,
	},
	obj: {
		type: Object,
		default: () => {},
	},
});

const emits = defineEmits(['toggleLike']);

const isLikeClass = computed(() => {
	return props.isLike === true ? 'btn-danger' : 'btn-outline-danger';
});

const typeName = computed(() => (props.type === 'new' ? 'NEW' : 'NOTICE'));

const toggleLike = () => {
	// props.isLike = !props.isLike;
	emits('toggleLike');
};
</script>

<style></style>
