<template>
	<div>
		<!-- for, if 디렉티브 동시 사용 / template tag 사용 -->
		<!-- <template v-for="(item, index) in items" :key="item.id">
			<li v-if="item.id % 2 === 0">
				ID : {{ item.id }} / INDEX : {{ index }}, {{ item.message }}
			</li>
		</template> -->

		<!-- for, if 디렉티브 동시 사용 / 컴퓨티드 객체 -->
		<template v-for="(item, index) in eventItems" :key="item.id">
			<li>ID : {{ item.id }} / INDEX : {{ index }}, {{ item.message }}</li>
		</template>

		<!-- 객체 속성 반복 -->
		<ul>
			<li v-for="(value, key, index) in myObj" :key="key">
				{{ index }}-{{ key }}-{{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'java' },
			{ id: 2, message: 'html' },
			{ id: 3, message: 'css' },
			{ id: 4, message: 'javascript' },
		]);

		// for, if 디렉티브 동시 사용 / 컴퓨티드 객체
		const eventItems = computed(() => items.filter(item => item.id % 2 === 0));

		// 객체 속성 반복
		const myObj = reactive({
			title: 'title',
			author: 'jwhan',
			publishedAt: '2023-11-20',
		});
		return {
			items,
			eventItems,
			myObj,
		};
	},
};
</script>

<style lang="scss" scoped></style>
