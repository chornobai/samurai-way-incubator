import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { ActionTypes, PostsType } from '../../../redux/store';
import { v1 } from 'uuid'
import { changetAC, addPostAC } from '../../../redux/profile-reducer';
export type MyPostsTypeComponent = {
  posts: Array<PostsType>,
  // addPost: (newtext: string) => void
  // changeTextPost: (newtext: string) => void
  updateText: string
  // deletePost: (id: string) => void
  // addLike: (id: string) => void
  dispatch: (action: ActionTypes) => void
}

const MyPosts: React.FC<MyPostsTypeComponent> = (props) => {


  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let newValue = event.currentTarget.value
    // props.changeTextPost(newValue)
    props.dispatch(changetAC(newValue))
  }

  const addPost = () => {

    props.dispatch(addPostAC(props.updateText))
  }






  return (

    <div className={s.myposts}>

      <h2>My Post</h2>

      <div className='new_post'><textarea value={props.updateText} onChange={onChangeHandler} name="newpost" id="newpost" cols={30} rows={10}></textarea>
        <button onClick={addPost} type="button" aria-label="Добавить пост">ADD POST</button>

      </div>
      <ul>

      </ul>
      <Post posts={props.posts} dispatch={props.dispatch} />




    </div >

  );
}

export { MyPosts };
