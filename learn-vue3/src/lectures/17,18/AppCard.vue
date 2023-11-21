<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title red">Card title</h5>
			<!-- css클래스 객체 바인딩-->
			<!-- <p class="card-text" :class="$style.yello">
				{{ $style }}
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p> -->

			<!-- css클래스 커스텀 -->
			<!-- <p class="card-text" :class="classes.green">
				{{ classes }}
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p> -->

			<!-- v-bind in CSS -->
			<p class="card-text blue">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
import { ref, useCssModule } from 'vue';

console.log('AppCard Module');
export default {
	setup() {
		// 컴포넌트 생성마다 setup함수 실행
		console.log('AppCard setup()');

		// css모듈 가져오기(내장 $style 객체)
		const style = useCssModule();
		console.log(style);

		// v-bind in CSS
		const color = ref('blue');
		color.value = 'pink';
		return {
			color,
		};
	},
};
</script>

<!-- scoped 속성 사용으로 현재 컴포넌트 요소에만 적용됨 -->
<style scoped>
.red {
	color: red !important;
}
</style>

<!-- module 속성 사용으로 css클래스 객체화 -->
<style module>
.yello {
	color: yellow !important;
}
</style>

<!-- module 속성값 지정으로 키 설정-->
<style module="classes">
.green {
	color: green !important;
}
</style>

<!-- v-bind in CSS -->
<style>
.blue {
	color: v-bind(color) !important;
}
</style>
