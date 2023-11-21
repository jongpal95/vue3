import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
// import AppCard from '@/components/AppCard.vue';

// import AppOptionsAPI from './App_OptionsAPI.vue';
//import AppCompositionAPI from './App.vue';

// createApp(AppOptionsAPI).mount('#app');
//createApp(AppComposition).mount('#app');

const app = createApp(App);

// app.component('AppCard', AppCard);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
