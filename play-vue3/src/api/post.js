// axios
const posts = [
	{ id: 1, title: 'title1', content: 'content1', createdAt: '2020-01-01' },
	{ id: 2, title: 'title2', content: 'content2', createdAt: '2020-02-02' },
	{ id: 3, title: 'title3', content: 'content3', createdAt: '2020-03-03' },
	{ id: 4, title: 'title4', content: 'content4', createdAt: '2020-04-04' },
	{ id: 5, title: 'title5', content: 'content5', createdAt: '2020-05-05' },
];

export function getPosts() {
	return posts;
}

export function getPostById(id) {
	return posts.find(item => item.id === id);
}
