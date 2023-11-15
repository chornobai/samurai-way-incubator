import React from 'react';
import s from './Header.module.css';
import logo from '../../img/icon-svg/logo.svg'
import {NavLink} from 'react-router-dom';


const Header = (props:any) => {
    let headerLink = [
        {link:"/about", name: "О нас"},
        {link:"/profile", name: "Профиль"},
        {link:"/contact", name: "Контакты"},
        {link:"/login", name: "Вход в аккаунт"},
    ]

    type HeaderType = {
        link:string,
        name:string
    }
 
    
       let headerItems = headerLink.map((item:HeaderType) => {
        return (
          <li className={s.item}><NavLink activeClassName={s.active} className={s.link}  to={item.link}>{item.name}</NavLink></li>
        )
       
      })
        
      
       
    


  return (

    <header className={s.header}>
      <img src={logo} alt="logo" width="50" height="50" />
      <nav className={s.nav}>
        <ul className={s.list}>
       {headerItems}
          
          {/* <li className={`${s.item} ${s.login}`}>{props.isAuth ? <div>{props.login} <button onClick={props.outLogin}>Выход</button></div> : <NavLink to='/login' className={({isActive, isPending}) =>
            isPending ? "pending" : isActive ? `${s.active}` : `${s.link}`
          } href="#">Вход</NavLink>}</li> */}
        </ul>
      </nav>

    </header >

  );
}

export {Header};
