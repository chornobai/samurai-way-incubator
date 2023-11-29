import React from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { PostsType } from '../../redux/store';

// import {NavLink} from 'react-router-dom';

 export type ProfileComponentType = {
  profilePosts: Array<PostsType>
 }
const Profile:React.FC<ProfileComponentType> = (props) => {
    


  return (

    <section className={s.profile}>
     <img className={s.profile_img} src="https://gamerwall.pro/uploads/posts/2022-02/thumbs/1645537004_1-gamerwall-pro-p-krasivaya-luna-krasivie-oboi-1.jpg" alt="Wallpaper" width="100" height="200" /> 
     <p>ava+decription</p>
     <MyPosts posts={props.profilePosts}/>
       

    </section >

  );
}

export {Profile};
