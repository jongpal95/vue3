<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
import TheFooter from './layouts/TheFooter.vue';
</script>

<template>
	<TheHeader></TheHeader>
	<div class="view">
		<TheView></TheView>
	</div>
	<TheFooter></TheFooter>
</template>

<style scoped>
.view {
	min-height: 800px;
}
</style>
