<template>
	<div>
		<p>author : {{ author }}</p>
		<p>title : {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 이 책을 지금 바로 읽습니다 ;)',
			price: '무료',
		});

		// 반응형 객체에서 일반 문자열로 재할당됨
		// const { author, title } = book;

		// 반응형 구조 분해 할당, 반응형 상태가 서로 동기화 됨
		// const { author, title } = toRefs(book);

		// 반응형 구조 분해 할당(단수)
		const author = toRef(book, 'author');
		const title = toRef(book, 'title');

		return {
			author,
			title,
			book,
		};
	},
};
</script>

<style lang="scss" scoped></style>
