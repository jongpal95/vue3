<template>
	<AppCard>
		<h5 class="card-title fw-bold text-truncate">{{ title }}</h5>
		<p class="card-text text-truncate mt-3">
			{{ content }}
		</p>
		<div class="container">
			<div class="row text-muted">
				<div class="col">
					<div class="row text-start">
						{{ createdAt }}
					</div>
				</div>
				<div class="col text-end">written by {{ author }}</div>
			</div>
		</div>
	</AppCard>
</template>

<script setup>
import AppCard from '../AppCard.vue';

defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Date, Number],
	},
	author: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.font-written {
	font-size: 1rem;
}
</style>
