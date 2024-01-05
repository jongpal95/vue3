import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
// import { InitFirebaseApp } from './api/firebase.js';
//import { GetPostList } from '@/../play-vue-codebase/src/post/readPostList.f.ts';

createApp(App).use(router).mount('#app');
//InitFirebaseApp();

//console.log(GetPostList());

export function ScrollToTop() {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

import 'bootstrap/dist/js/bootstrap.js';
import 'animejs/lib/anime.es.js';
