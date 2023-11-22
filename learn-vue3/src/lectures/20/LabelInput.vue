<template>
	<!-- v-model="userName" -->
	<label>
		{{ label }}

		<!-- v-model의 event 구현 -->
		<!-- <input
			type="text"
			:value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)"
	  /> -->

		<!-- computed 객체 사용 -->
		<input type="text" v-model="value" />
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'], // 부모 컴포넌트로 전달 받은 값
	emits: ['update:modelValue'], // 이벤트 선언
	setup(props, context) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				context.emit('update:modelValue', value);
			},
		});
		return {
			value,
		};
	},
};
</script>

<style lang="scss" scoped></style>
