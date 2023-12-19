<template>
	<div>
		<h2>Home View</h2>
		<p>{{ $route.path }}</p>
		<p>name : {{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAbout">Go to About</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goAbout = () =>
	router.push({
		name: 'About',
	});
</script>

<style lang="scss" scoped></style>
