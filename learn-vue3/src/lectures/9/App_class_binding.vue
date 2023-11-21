<template>
	<div>
		<!-- inline binding -->
		<!-- <div class="text" :class="{ active: isAcitve, 'text-danger': hasError }">
			텍스트 입니다.
		</div> -->

		<!-- object binding -->
		<!-- <div class="text" :class="classObject">텍스트 입니다.</div> -->

		<!-- object array binding -->
		<div
			class="text"
			:class="[isAcitve ? 'active-class' : 'class', errorClass, classObject]"
		>
			텍스트 입니다.
		</div>

		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggle Error</button>
	</div>
</template>

<script>
import { computed } from 'vue';
import { reactive, ref } from 'vue';

export default {
	setup() {
		// 속성 단일 바인딩
		const isAcitve = ref(true);
		const hasError = ref(false);

		const toggle = () => {
			isAcitve.value = !isAcitve.value;
		};

		// 오브젝트 바인딩

		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		return {
			isAcitve,
			toggle,
			hasError,
			classObject,
			activeClass,
			errorClass,
		};
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}

.text-danger {
	color: red;
}
</style>
