<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<!-- 렌더링 된 이후 접근이 가능하므로 v-if 디렉티브 사용 -->
		<p v-if="input">
			input.value: {{ input.value }}
			,
			<!-- 내장 api $refs -->
			$refs.input.value: {{ $refs.input.value }}
			,
			<!-- 내장 api에서 접근한 값과 동일 여부 -->
			$refs.input === input: {{ $refs.input === input }}
		</p>
		<hr />
		<ul>
			<!-- 문자열 바인딩 -->
			<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
			<!-- 함수 바인딩 -->
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="element => itemRefs.push(element.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';
export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		const input = ref(null);

		// before mount
		console.log('onMounted: ', input.value);

		// onMounted
		onMounted(() => {
			input.value.value = 'hello vue3!';
			console.log('onMounted: ', input.value);

			// 문자열 바인딩
			// itemRefs.value.forEach(item => console.log('item: ', item.textContent));

			// 함수 바인딩
			itemRefs.value.forEach(item => console.log('item: ', item));

			console.log(`child.value.message: ${child.value.message}`);
			child.value.sayHello();
		});

		const fruits = ref(['apple', 'banana', 'grape']);
		const itemRefs = ref([]); // 렌더링 되면서 요소가 채워지게 됨

		const child = ref(null);
		return {
			input,
			fruits,
			itemRefs,
			child,
		};
	},
};
</script>

<style lang="scss" scoped></style>
