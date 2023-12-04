<template>
	<div>
		<TheNav></TheNav>
		<TheView></TheView>
		<!-- <AppCard></AppCard> -->
	</div>
</template>

<script>
// import AppCard from './components/AppCard.vue';
import { ref } from 'vue';
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';

export default {
	components: {
		TheNav, // local
		TheView, // local
		// AppCard, // global
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
