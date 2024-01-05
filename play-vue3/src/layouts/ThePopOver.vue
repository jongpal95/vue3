<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header text-truncate">
			<slot name="header"></slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot></slot>
		</div>
		<div v-if="$slots.footer" class="card-footer text-muted text-truncate">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
