<template>
	<div>
		<h2 v-if="visible">Hello Vue3!</h2>
		<h2 v-else>Good Bye!</h2>
		<template v-if="visible">
			<h1>Title</h1>
			<p>paragraph 1</p>
			<p>paragraph 2</p>
		</template>
		<button v-on:click="visible = !visible">toggle</button>
		<hr />
		<h2 v-if="type === 'A'">A</h2>
		<h2 v-else-if="type === 'B'">B</h2>
		<h2 v-else-if="type === 'C'">C</h2>
		<h2 v-else>Not A,B,C</h2>
		<button v-on:click="type = 'A'">change to A</button>
		<button v-on:click="type = 'B'">change to B</button>
		<button v-on:click="type = 'C'">change to C</button>
		<button v-on:click="type = 'D'">change to D</button>

		<hr />
		<h1 v-show="ok">Title</h1>
		<button v-on:click="ok = !ok">toggle</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(true);

		const type = ref('A');

		const ok = ref(true);

		return {
			visible,
			type,
			ok,
		};
	},
};
</script>

<style lang="scss" scoped></style>
