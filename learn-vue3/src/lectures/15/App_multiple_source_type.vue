<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log(oldValue);
		// 		console.log(sum);
		// 	},
		// );

		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		// 객체의 속성은 반응형 데이터가 아니므로 getter 함수 사용
		// watch(
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log(newValue);
		// 	},
		// );

		// 객체가 감시 대상일 경우 newValue와 oldValue가 같은 곳을 가리키고 있음
		// watch(obj, (newValue, oldValue) => {
		// 	console.log(newValue);
		// 	console.log(oldValue);
		// });

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// watch(person, newValue => {
		// 	console.log('newValue: ', newValue);
		// });

		// getter 함수로 object를 반환한 경우 해당 object 자체가 변경될때만 변경을 감지하는 경우
		watch(
			() => person.obj,
			newValue => {
				console.log('newValue: ', newValue);
			},
		);

		return {
			x,
			y,
			obj,
			person,
		};
	},
};
</script>

<style lang="scss" scoped></style>
