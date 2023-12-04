<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button" v-bind="$attrs">
			MyButton {{ message }}
		</button>
	</div>
</template>

<!-- normal script -->
<script>
export default {
	// setup script에서 선언하지 못하는 속성값 설정을 위한 normal script 선언
	inheritAttrs: false,
};
</script>

<!-- setup script -->
<script setup>
import { ref } from 'vue';

const message = ref('message');
</script>

<style lang="scss" scoped></style>
