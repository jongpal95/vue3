<template>
	<div>
		<h2>About View</h2>
		<p>{{ $route.path }}</p>
		<p>name : {{ $route.name }}</p>
		<button class="btn btn-primary" @click="goHome">Go to Home</button>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
console.log('route path : ', route.path);

const router = useRouter();

const goHome = () =>
	router.push({
		name: 'Home',
	});
</script>

<style lang="scss" scoped></style>
