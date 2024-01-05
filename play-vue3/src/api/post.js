import { Exception } from 'sass';
import { Firestore } from './firebase';
import {
	Timestamp,
	addDoc,
	collection,
	doc,
	getDocs,
	limit,
	orderBy,
	query,
	updateDoc,
	where,
} from 'firebase/firestore';

// axios
// const posts = [
// 	{ id: 1, title: 'title1', content: 'content1', createdAt: '2020-01-01' },
// 	{ id: 2, title: 'title2', content: 'content2', createdAt: '2020-02-02' },
// 	{ id: 3, title: 'title3', content: 'content3', createdAt: '2020-03-03' },
// 	{ id: 4, title: 'title4', content: 'content4', createdAt: '2020-04-04' },
// 	{ id: 5, title: 'title5', content: 'content5', createdAt: '2020-05-05' },
// ];

export async function getPostList() {
	const postList = [];

	try {
		const q = query(
			collection(Firestore.db, 'post'),
			where('is_visible', '==', true),
			orderBy('created_at', 'asc'),
		);

		const response = await getDocs(q).then();

		if (response) {
			response.docs.forEach(v => {
				const data = v.data();

				postList.push({
					id: data.id,
					title: data.title,
					content: data.content,
					createdAt: data.created_at.toDate().toLocaleDateString(),
					author: data.author,
				});
			});

			postList.sort((a, b) => a.id - b.id);
		}
	} catch (e) {
		console.log(`error : ${e}`);
		return postList;
	}

	return postList;
}

export async function getPostById(id) {
	const post = {
		id: '',
		title: '',
		content: '',
		createdAt: '',
		author: '',
	};

	try {
		const q = query(
			collection(Firestore.db, 'post'),
			where('id', '==', id),
			where('is_visible', '==', true),
		);

		const response = await getDocs(q).then();

		if (response && response.docs.length > 0) {
			response.docs.forEach(v => {
				const data = v.data();

				post.id = data.id;
				post.title = data.title;
				post.content = data.content;
				post.createdAt = data.created_at.toDate().toLocaleDateString();
				post.author = data.author;
			});
		} else {
			throw new Exception();
		}
	} catch (e) {
		console.log(`error : ${e}`);
		return undefined;
	}

	return post;
}

export async function getPostByOrder(order, id) {
	const output = {};

	try {
		const condition = order === 'next' ? '>' : '<';

		const q = query(
			collection(Firestore.db, 'post'),
			where('id', condition, id),
			where('is_visible', '==', true),
			limit(1),
		);

		const response = await getDocs(q).then();

		if (response && response.docs.length > 0) {
			response.docs.forEach(v => {
				const data = v.data();

				output.data = { ...data };
			});
		} else {
			output.data = -1;
		}
	} catch (e) {
		console.log(`error : ${e}`);
		return undefined;
	}

	return output.data;
}

export async function addPost(post) {
	try {
		const len = await getPostListCount();

		const q = query(collection(Firestore.db, 'post'));

		await addDoc(q, {
			id: len + 1,
			title: post.title,
			content: post.content,
			created_at: Timestamp.now(),
			author: 'admin',
			is_visible: true,
		}).then();
	} catch (e) {
		alert('posting is Failed!\ntry after few minutes😅');
		console.log(`error: ${e}`);
		return false;
	}

	return true;
}

export async function setPostVisible(id) {
	try {
		const q = query(collection(Firestore.db, 'post'), where('id', '==', id));

		const target = (await getDocs(q).then()).docs[0];

		await updateDoc(doc(Firestore.db, 'post', target.id), {
			is_visible: false,
		});
	} catch (e) {
		alert('posting delete is Failed!\ntry after few minutes😅');
		console.log(`error: ${e}`);
		return false;
	}

	return true;
}

export async function setPostValue(post) {
	try {
		const q = query(
			collection(Firestore.db, 'post'),
			where('id', '==', post.id),
		);

		const target = (await getDocs(q).then()).docs[0];

		await updateDoc(doc(Firestore.db, 'post', target.id), {
			title: post.title,
			content: post.content,
		});
	} catch (e) {
		alert('posting update is Failed!\ntry after few minutes😅');
		console.log(`error: ${e}`);
		return false;
	}

	return true;
}

//// local ////

async function getPostListCount() {
	let len = -1;

	try {
		const q = query(collection(Firestore.db, 'post'));

		const response = await getDocs(q).then();
		if (response) {
			len = response.docs.length;
		}
	} catch (e) {
		console.log(`error: ${e}`);
		return len;
	}

	return len;
}

// (async () =>
// 	await addDoc(collection(db, 'post'), {
// 		id: 1,
// 		content: 'asdfasdfasdasdf',
// 	}))().catch(err => console.log(err));
