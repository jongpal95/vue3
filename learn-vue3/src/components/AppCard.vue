<template>
	<div class="card">
		<!-- <div class="card-header">
			<slot name="header" header-message="Header Message~~">#Header</slot>
		</div>
		<div class="card-body">
			<slot :child-message="childMessage" hello-message="helloMessage"
				>#Body</slot
			>-->
		<!-- default -->
		<!--</div>
		<div class="card-footer text-muted">
			<slot name="footer" footer-message="Footer Message~~!!~~">#Footer</slot>
		</div> -->

		<!-- {{ $slots }} 내장객체 활용 -->
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="Header Message~~">#Header</slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot :child-message="childMessage" hello-message="helloMessage"
				>#Body</slot
			>
			<!-- default -->
		</div>
		<div v-if="hasFooter" class="card-footer text-muted">
			<slot name="footer" footer-message="Footer Message~~!!~~">#Footer</slot>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';

export default {
	setup(props, { slots }) {
		const childMessage = ref('child component message');

		const hasFooter = computed(() => !!slots.footer);
		return {
			childMessage,
			hasFooter,
		};
	},
};
</script>

<style lang="scss" scoped></style>
