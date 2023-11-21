<template>
	<div>
		<h2>input value</h2>
		<!-- 이벤트 핸들러 구현 -->
		<!-- <input type="text" :value="inputValue" @input="event => (inputValue = event.target.value)" /> -->
		<!-- 양방향 바인딩 -->
		<!-- <input type="text" v-model.lazy="inputValue" />
		<input type="text" v-model.number="inputValue" /> -->
		<input type="text" v-model.trim="inputValue" />
		<div>{{ inputValue }}</div>
		<!-- <div>{{ typeof inputValue }}</div> -->

		<hr />
		<h2>textarea value</h2>
		<!-- 이벤트 핸들러 구현 -->
		<!-- <textarea :value="textareaValue" @input="event => (textareaValue = event.target.value)" ></textarea> -->
		<!-- 양방향 바인딩 -->
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>

		<hr />
		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<!-- 이벤트 핸들러 구현 -->
		<!-- <input type="checkbox" id="checkbox" :value="checkboxValue" @change="(event) => (checkboxValue = event.target.checked)" /> -->
		<!-- 양방향 바인딩 -->
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="Yes"
			false-value="No"
		/>

		<hr />
		<h3>checkbox values</h3>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			CSS
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			JAVASCRIPT
		</label>
		<div>{{ checkboxValues }}</div>

		<hr />
		<h2>raidobutton value</h2>
		<label>
			O
			<!-- 이벤트 핸들러 구현 -->
			<!-- <input type="radio" name="type" value="O" :checked="radiobuttonValue === 'O'" @change="event => (radiobuttonValue = event.target.value)" /> -->
			<!-- 양방향 바인딩 -->
			<input type="radio" name="type" value="O" v-model="radiobuttonValue" />
		</label>
		<label>
			A
			<input type="radio" name="type" value="A" v-model="radiobuttonValue" />
		</label>
		<div>{{ radiobuttonValue }}</div>

		<hr />
		<div>select value</div>
		<!-- 이벤트 핸들러 구현 -->
		<!-- <select :value="selectValue" @change="event => (selectValue = event.target.value)"> -->
		<!-- 양방향 바인딩 -->
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref(null);
		const textareaValue = ref('');
		const checkboxValue = ref('Yes');
		const checkboxValues = ref([]);
		const radiobuttonValue = ref('O');
		const selectValue = ref('html');

		return {
			inputValue,
			textareaValue,
			checkboxValue,
			checkboxValues,
			radiobuttonValue,
			selectValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
