import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

// import {NavLink} from 'react-router-dom';


const Navbar = (props:any) => {
    let headerLink = [
        {link:"/profile", name: "Profile"},
        {link:"/dialogs", name: "Dialogs"},
        {link:"/news", name: "News"},
        {link:"/music", name: "Music"},
        {link:"/settings", name: "Settings"},
    ]

    type NavbarType = {
        link:string,
        name:string
    }
 
    
       let navbarItems = headerLink.map((item:NavbarType) => {
        return (
          <li className={s.item}><NavLink className={s.link} activeClassName={s.activeclass} to={item.link}>{item.name}</NavLink></li>
        )
       
      })
        
      
       
    


  return (

    <section className={s.navbar}>
      
     
        <ul className={s.list}>
       {navbarItems}
          
          {/* <li className={`${s.item} ${s.login}`}>{props.isAuth ? <div>{props.login} <button onClick={props.outLogin}>Выход</button></div> : <NavLink to='/login' className={({isActive, isPending}) =>
            isPending ? "pending" : isActive ? `${s.active}` : `${s.link}`
          } href="#">Вход</NavLink>}</li> */}
        </ul>
    

    </section >

  );
}

export {Navbar};
