<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button" v-bind="$attrs">
			MyButton
		</button>
		<!-- {{ $attrs }} -->
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	setup(props, context) {
		// console.log(context.attrs);
		// console.log(context.attrs.class);
		// console.log(context.attrs.id);
		// console.log(context.attrs.onClick);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
