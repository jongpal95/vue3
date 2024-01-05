import { Timestamp } from 'firebase-admin/firestore';
import * as FIREBASE from '../common/admin'

interface Post{
  id:number,
  isVisible:boolean,
  title:string,
  content:string,
  author:string,
  createdAt:string
}

export async function GetPostList() {

  const response = await FIREBASE.db.collection('post').where('is_visible', '==', true).get();

  if(response && response.docs.length > 0){

    const postList:Post[] = [];

    response.docs.forEach(v => {

      const data = v.data();

      postList.push({
        id: data.id,
        isVisible: data.is_visible,
        title: data.title,
        content: data.content,
        author: data.author,
        createdAt: _getDate(data.created_at),
      } as Post);

    });

    console.log(postList)
    return postList;


  } else {
    return undefined;
  }
}

function _getDate(orgin:Timestamp){
  return orgin.toDate().toLocaleDateString();
}