<template>
	<TheHeader @click-login="showLoginModal"></TheHeader>

	<div class="container py-4">
		<RouterView class="router-view"></RouterView>
	</div>

	<div
		class="modal fade my-5"
		data-bs-backdrop="static"
		id="my-modal"
		tabindex="-1"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<LoginView ref="refLoginView" :is-show="isShow"></LoginView>
		</div>
	</div>

	<TheFooter></TheFooter>
</template>

<script setup>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
import LoginView from '@/views/login/LoginView.vue';
import { ref } from 'vue';

const refLoginView = ref();

const showLoginModal = () => refLoginView.value.playAnimation();
</script>

<style scoped>
.router-view {
	min-height: 600px;
}
</style>
