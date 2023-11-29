import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostsType } from '../../../redux/store';
import { v1 } from 'uuid'
export type MyPostsTypeComponent = {
  posts: Array<PostsType>,
 
}

const MyPosts:React.FC<MyPostsTypeComponent> = (props) => {
   
let [textArea, setTextArea]=useState("")

let [posts, setNewPost]=useState(props.posts)


const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.currentTarget.value )
  
}

const addPost = (message:string) => {
  if(textArea.trim() !== '') {
  let post = {id:v1(), messageText:message, like: 156}
let postNew=[post,...posts]
setNewPost(postNew)
setTextArea('')  
  }


}

const deletePost = (id:string) => {
  let filteredPost = posts.filter(i=> i.id !== id)
  setNewPost(filteredPost) 
}


  return (
   
    <div className={s.myposts}>
   
    <h2>My Post</h2>
     <div className='new_post'><textarea value={textArea} onChange={onChangeHandler} name="newpost" id="newpost" cols={30} rows={10}></textarea>
     <button onClick={()=> {addPost(textArea.trim())}} type ="button" aria-label="Добавить пост">ADD POST</button>
     <button onClick={()=> {setTextArea("")}}type ="button" aria-label="Очистить сообщение">Clean</button>
     </div>
     <ul>
      
     </ul>
     <Post posts = {posts} deletePost= {deletePost} />
     
       

    </div >

  );
}

export {MyPosts};
