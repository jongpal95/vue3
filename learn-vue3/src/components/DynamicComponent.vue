<template>
	<div class="container py-4">
		<button
			class="btn btn-primary me-2"
			@click="changeCurrentComp(DynamicApple)"
		>
			Apple
		</button>
		<button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">
			Banana
		</button>
		<hr />
		<component :is="cuurrentComp"></component>
		<hr />
		<p>
			{{ obj1 }}
		</p>
		<p>{{ obj2 }}</p>
	</div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

const cuurrentComp = shallowRef(DynamicApple);
const changeCurrentComp = comp => {
	cuurrentComp.value = comp;
};

// ref vs shallowRef
const obj1 = ref({ name: 'ref object' });
const obj2 = shallowRef({ name: 'shallow ref object' });
</script>

<style lang="scss" scoped></style>
