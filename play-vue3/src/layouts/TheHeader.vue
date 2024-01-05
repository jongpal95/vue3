<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
				<RouterLink class="navbar-brand" to="/home">PLAY VUE3</RouterLink>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<RouterLink
								class="nav-link"
								active-class="active"
								to="/home"
								@click="clickMenu"
								>Home</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink
								class="nav-link"
								active-class="active"
								to="/about"
								@click="clickMenu"
								>About</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink
								class="nav-link"
								active-class="active"
								to="/posts"
								@click="clickMenu"
								>Posts</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink
								class="nav-link"
								active-class="active"
								to="/nested"
								@click="clickMenu"
								>Nested</RouterLink
							>
						</li>
					</ul>
					<div>
						<button
							type="button"
							class="btn btn-success"
							data-bs-toggle="modal"
							data-bs-target="#my-modal"
							@click="clickLogin"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-check-circle-fill"
								viewBox="0 0 16 16"
							>
								<path
									d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
								></path>
							</svg>
							Login
						</button>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
const emit = defineEmits('clickLogin');

const clickMenu = () => {
	const toggle = document.querySelector('.navbar-toggler');
	if (toggle.attributes['aria-expanded'].value === 'true') {
		toggle.click();
	}
};

const clickLogin = () => {
	emit('clickLogin');
	clickMenu();
};
</script>

<style lang="scss" scoped></style>
