<template>
	<div class="ani-target container bg-secondary-subtle pt-3 modal-content">
		<div v-show="isFinished">
			<div class="row mx-1 bg-primary modal-title">
				<h1 class="h3 py-1 fw-normal text-light text-center">
					Welcome Play Vue3!🤗
				</h1>
			</div>
			<div class="row m-4 text-center">
				<span class="text-muted fs-6 fw-bold">please sign in your account</span>
				<div class="text-primary signup mt-2" @click="goSignUp">
					<span>↪️ I do not have an account yet </span>
				</div>
			</div>

			<div class="mx-3 my-3">
				<div class="row mt-2 mx-1">
					<div class="col">
						<input
							v-model="inputEmail"
							class="form-control"
							type="email"
							placeholder="📧 email address"
						/>
					</div>
				</div>
				<div class="row mt-2 mx-1">
					<div class="col">
						<input
							v-model="inputPassword"
							class="form-control"
							type="password"
							placeholder="🔒 password"
						/>
					</div>
				</div>
				<div class="row mt-2 mx-3">
					<button class="btn btn-light" @click="clickSubmit">submit</button>
				</div>
			</div>

			<div class="row m-3 text-center">
				<div class="text-primary mt-2 signup" @click="goFotgetPassword">
					<span>Forgot a Password❓</span>
				</div>
			</div>
			<div class="button-container">
				<button
					class="btn btn-secondary my-2 me-1"
					data-bs-dismiss="modal"
					@click="clickCancel"
				>
					cancel
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import anime from 'animejs/lib/anime.es.js';
import { ref } from 'vue';

const inputEmail = ref('');
const inputPassword = ref('');

const isFinished = ref(false);

const playAnimation = () => {
	anime({
		targets: '.ani-target',
		width: ['0px', '100%'],
		easing: 'easeInOutQuad',
		direction: 'alternate',
		delay: '100s',
		loop: false,
		complete: () => {
			isFinished.value = true;
		},
	});
};

defineExpose({ playAnimation });

const goSignUp = () => {
	console.log('sign up');
};
const goFotgetPassword = () => {
	console.log('forgot password');
};

const clickCancel = () => {
	isFinished.value = false;
};
const clickSubmit = () => {
	console.log(`${inputEmail.value}, ${inputPassword.value}`);
};
</script>

<style lang="scss" scoped>
.ani-target {
	height: 420px;
	border-radius: 8px;
}

.modal-title {
	border-radius: 8px;
}

.button-container {
	display: flex;
	justify-content: end;
}

.signup {
	:hover {
		cursor: pointer;
	}
}
</style>
