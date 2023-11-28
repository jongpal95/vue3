<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
			<LabelInput label="이름" data-id="id"></LabelInput>
			<hr />
			<FancyButton>Click!!! <span style="color: red">@@@</span></FancyButton>
			<FancyButton #="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
		</div>
		<hr />
		<AppCard>
			<!-- <template #header>제목입니다</template> -->
			<!-- <template #default>내용입니다</template> -->
			<!-- 암시적으로 디폴트 슬롯
			<template #footer>푸터입니다</template> -->

			<!-- 동적으로 전달인자 할당 -->
			<!-- <template #[slotArgs]>전달인자 동적 할당</template> -->

			<!-- slot 컨텐츠의 하위 컴포넌트 영역 접근 -->
			<template #header="{ headerMessage }">
				{{ headerMessage }}
			</template>
			<template #default="{ childMessage, helloMessage }">
				디폴트 {{ message }}
				{{ childMessage }}
				{{ helloMessage }}
			</template>
			<template #footer="{ footerMessage }">
				{{ footerMessage }}
			</template>
		</AppCard>
		<hr />
		<AppCard>게시글 입니다</AppCard>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('Hello!');
		};

		const slotArgs = ref('header');

		const message = ref('hello~~');
		return {
			sayHello,
			slotArgs,
			message,
		};
	},
};
</script>

<style lang="scss" scoped></style>
