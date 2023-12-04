<template>
	<div class="card">
		<div class="card-body">
			Lifecycle Child
			<input id="input" type="text" />
		</div>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
	setup() {
		console.log('[Child] setup');
		// mount
		onBeforeMount(() => {
			console.log('[Child] onBeforeMount');
		});
		onMounted(() => {
			console.log('[Child] onMounted');
		});

		// unmount
		onBeforeUnmount(() => {
			console.log('[Child] onBeforeUnmount');

			// DOM을 소멸시키기 전으로 접근할 수 있음
			console.log(document.querySelector('#input'));
		});

		onUnmounted(() => {
			console.log('[Child] onUnmounted');

			// DOM을 소멸시킨 후로 접근할 수 없음
			console.log(document.querySelector('#input'));
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
