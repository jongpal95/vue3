<template>
	<footer
		class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
	>
		<p class="col-md-4 m-4 text-body-secondary">© 2023 jongpal95</p>
		<p class="mt-4 fs-3 fw-bold text-center text-body-secondary">PLAY VUE3</p>

		<ul class="nav col-md-4 m-4 justify-content-end">
			<li class="nav-item">
				<RouterLink class="nav-link px-2 text-body-secondary" to="/"
					>Home</RouterLink
				>
			</li>
			<li class="nav-item">
				<RouterLink class="nav-link px-2 text-body-secondary" to="/about"
					>About</RouterLink
				>
			</li>
			<li class="nav-item">
				<RouterLink class="nav-link px-2 text-body-secondary" to="/posts"
					>Posts</RouterLink
				>
			</li>
			<li class="nav-item">
				<RouterLink class="nav-link px-2 text-body-secondary" to="/nested"
					>Nested</RouterLink
				>
			</li>
		</ul>
	</footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
