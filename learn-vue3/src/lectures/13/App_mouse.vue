<template>
	<div>
		<div id="modifiers">
			<div @click="clickDiv">
				DIV section
				<p @click.self="clickP">
					P section
					<!-- <span @click.prevent.stop="clickSpan"> SPAN section </span> -->
					<span @click.prevent="clickSpan"> SPAN section </span>
					<a @click.prevent="clickA" href="https://naver.com">A section</a>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
			alert('like!');
		};
		const clickA = e => {
			alert('click A~');
		};

		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
		};
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}

#modifiers div {
	background-color: #ccc;
}

#modifiers p {
	background-color: #999;
}

#modifiers span {
	background-color: #666;
	display: block;
}
</style>
