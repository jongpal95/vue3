<template>
	<label class="form-label" id="child-id">
		{{ label }}
	</label>
	<input type="text" v-model="$attrs" class="form-control" />
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
