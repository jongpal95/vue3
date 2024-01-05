import { createRouter, createWebHistory } from 'vue-router';

import NotFoundView from '@/views/NotFoundView.vue';
import IndexView from '@/layouts/TheIndex.vue';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
// import LoginView from '@/views/login/LoginView.vue';

const routes = [
	{
		path: '/',
		redirect: '/home',
		component: IndexView,
		children: [
			{
				path: 'home',
				name: 'Home',
				component: HomeView,
			},
			{
				path: 'about',
				name: 'About',
				component: AboutView,
			},
			{
				path: 'posts',
				name: 'PostList',
				component: PostListView,
			},
			{
				path: 'posts/create',
				name: 'PostCreate',
				component: PostCreateView,
			},
			{
				path: 'posts/:id',
				name: 'PostDetail',
				component: PostDetailView,
				// props: true,
				props: route => ({
					id: parseInt(route.params.id),
				}),
			},
			{
				path: 'posts/:id/edit',
				name: 'PostEdit',
				component: PostEditView,
				props: route => ({
					id: parseInt(route.params.id),
				}),
			},
			{
				path: 'nested',
				name: 'Nested',
				component: NestedView,
				children: [
					{
						path: '',
						name: 'NestedHome',
						component: NestedHomeView,
					},
					{
						path: 'one',
						name: 'NestedOne',
						component: NestedOneView,
					},
					{
						path: 'two',
						name: 'NestedTwo',
						component: NestedTwoView,
					},
				],
			},
			// {
			// 	path: 'login',
			// 	name: 'Login',
			// 	component: LoginView,
			// },
		],
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404',
	},
	{
		path: '/404',
		component: NotFoundView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
