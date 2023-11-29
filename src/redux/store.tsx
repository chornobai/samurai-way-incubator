import { message } from 'antd'
import { v1 } from 'uuid'

export type HeaderType = {
	link:string,
	name:string,
	id:string
}

type HeaderBlock = {
	headerLink: Array<HeaderType>,
	
}

type RootStateType = {
	headerBlock: HeaderBlock,
	dialogPage:  DialogPageType,
	profilePage: ProfilePageType,
}

export type DialogType = {
	id: string,
	name: string,
	path: string
}
export type DialogPageType = {
	dialogs:Array<DialogType>,
	dialogMessages: Array<DialogMessagesType>
}

export type DialogMessagesType={
	id: string,
	message: string,

}
export type PostsType ={
	id: string,
	messageText:string,
	like:number,
}
type ProfilePageType = {
	posts: Array<PostsType>
}

 let state:RootStateType = {
	headerBlock :{
				headerLink:[
			{id:v1(),link:"/about", name: "О нас"},
			{id:v1(),link:"/profile", name: "Профиль"},
			{id:v1(),link:"/contact", name: "Контакты"},
			{id:v1(),link:"/gallery", name: "Галлерея"},
			{id:v1(),link:"/login", name: "Вход в аккаунт"},
		],
	},
	dialogPage :{
		dialogs: [
			{ id: v1(), name: "Петя", path: "petya" },
			{ id: v1(), name: "Таня", path: "tanya" },
			{ id: v1(), name: "Вася", path: "vasya" },
			{ id: v1(), name: "Лида", path: "lida" },
			{ id: v1(), name: "Тонз", path: "tonz" },
		],
		dialogMessages: [
			{ id: v1(), message: "Будем учиться" },
			{ id: v1(), message: "НЕ бросай" },
			{ id: v1(), message: "Все получиться" },
	
		]
	
	
	},
	profilePage : {
		posts:[
			{id:v1(), messageText:"Из грязи в князи", like: 156},
			{id:v1(), messageText:"ни шагу назад", like: 56},
			{id:v1(), messageText:"Верю в Бога", like: 356},
		]
	}

	}  


export{state}