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

<script>
import { computed } from 'vue';

export default {
	// props: ['title', 'content'],
	props: {
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
	},
	emits: ['toggleLike'],
	setup(props, context) {
		//console.log(props.title);

		const isLikeClass = computed(() => {
			return props.isLike === true ? 'btn-danger' : 'btn-outline-danger';
		});

		const typeName = computed(() => (props.type === 'new' ? 'NEW' : 'NOTICE'));

		const toggleLike = () => {
			// props.isLike = !props.isLike;
			context.emit('toggleLike');

			// javascript 언어 특성상 레퍼런스 타입(객체, 배열)의 속성에 직접 접근하여 값을 변경할 수 있지만
			// 단방향 데이터 흐름을 생각하여 context.emit으로 변경하는 것이 기본
			// props.obj.title = 'change';
			// context.emit('changeTitle');
		};

		return {
			isLikeClass,
			typeName,
			toggleLike,
		};
	},
};
</script>

<style></style>
