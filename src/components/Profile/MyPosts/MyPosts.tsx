import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

// import {NavLink} from 'react-router-dom';


const MyPosts = (props:any) => {
    


  return (
   
    <div className={s.myposts}>
   
    <h2>My Post</h2>
     <div className='new_post'><textarea name="newpost" id="newpost" cols={30} rows={10}></textarea>
     <button type ="button" aria-label="Добавить пост">ADD POST</button>
     <button type ="button" aria-label="Очистить сообщение">Clean</button>
     </div>
     <ul><Post/></ul>
     
       

    </div >

  );
}

export {MyPosts};
