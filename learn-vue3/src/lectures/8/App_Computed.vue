<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h2>강의가 있습니까?</h2>
		<p>{{ hasLectures }}</p>
		<p>{{ existLectures() }}</p>
		<button v-on:click="counter++">Counter : {{ counter }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: 'jwhan',
			lectures: ['html/css', 'javascript', 'vue3'],
		});

		const hasLectures = computed(() =>
			teacher.lectures.length > 0 ? 'Yes' : 'No',
		);

		const existLectures = () => {
			return teacher.lectures.length > 0 ? 'Yes' : 'No';
		};

		const counter = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');

		// const fullName = computed(() => firstName.value + ' ' + lastName.value);
		// console.log('console print: ', fullName.value);
		// fullName.value = 'jwhan'; // computed value is readonly

		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				// console.log('value: ', value);
				// console.log(value.split(' '));

				// 구조분해할당
				[firstName.value, lastName.value] = value.split(' ');
			},
		});

		console.log('console print: ', fullName.value);
		fullName.value = '한 종원';

		return {
			teacher,
			hasLectures,
			existLectures,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
