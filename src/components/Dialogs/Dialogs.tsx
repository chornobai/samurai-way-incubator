import React from 'react';
import s from './Dialogs.module.css';

import {NavLink} from 'react-router-dom';


const Dialogs = (props:any) => {
    let dialogs = [
      {id:1, name: "Петя", path:"petya"},
      {id:2, name: "Таня", path:"tanya"},
      {id:3, name: "Вася", path:"vasya"},
      {id:4, name: "Лида", path:"lida"},
    ]
  type DialogType = {
    id:number,
    name:string,
    path:string
}


let dialogItems = dialogs.map((item:DialogType) => {
  return (
    <li className={s.dialogitem} key={item.id}><NavLink className={s.link} activeClassName={s.active} to={'/dialogs/' + item.path}>{item.name}</NavLink></li>
  )
 
})


let dialogMessages = [
  {id:1, message: "Будем учиться"},
  {id:2, message: "НЕ бросай"},
  {id:3, message: "Все получиться"},

]
type DialogMessageType = {
id:number,
message: string,
}

let dialogMessageItem = dialogMessages.map((item:DialogMessageType) => {
  return (
    <li className={s.dialogMessagetem} key={item.id}>{item.message}</li>
  )

})
  
  return (

    <section className={s.dialogs}>
      <ul className={s.dialog}>
{dialogItems}
      </ul>
      <ul className={s.messages}>
{dialogMessageItem}
      </ul>
      
    </section>
  );
}

export {Dialogs};
