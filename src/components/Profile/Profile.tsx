import React from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';

// import {NavLink} from 'react-router-dom';


const Profile = (props:any) => {
    


  return (

    <section className={s.profile}>
     <img className={s.profile_img} src="https://gamerwall.pro/uploads/posts/2022-02/thumbs/1645537004_1-gamerwall-pro-p-krasivaya-luna-krasivie-oboi-1.jpg" alt="Wallpaper" width="100" height="200" /> 
     <p>ava+decription</p>
     <MyPosts/>
       

    </section >

  );
}

export {Profile};
