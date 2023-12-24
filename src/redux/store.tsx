
import { v1 } from 'uuid'
import { AddLikeACT, AddPostACT, ChangeTextACT, deletePostACT } from './profile-reducer'
import profileReducer from './profile-reducer'
import dialogReducer, { AddSMSACT, ChangeSMSACT } from './dialog-reducer'
import headerReducer from './header-reducer'

export type HeaderType = {
	link: string,
	name: string,
	id: string
}

export type HeaderBlock = {
	headerLink: Array<HeaderType>,

}

export type RootStateType = {
	headerBlock: HeaderBlock,
	dialogPage: DialogPageType,
	profilePage: ProfilePageType,
}

export type DialogType = {
	id: string,
	name: string,
	path: string
}
export type DialogPageType = {
	dialogs: Array<DialogType>,
	dialogMessages: Array<DialogMessagesType>
	newSms: string
}

export type DialogMessagesType = {
	id: string,
	message: string,

}
export type PostsType = {
	id: string,
	messageText: string,
	like: number,
}
export type ProfilePageType = {
	posts: Array<PostsType>,
	newValue: string,
}
export type RootStore = {
	state: RootStateType
	getState: () => RootStateType
	// addPost: (newValue: string) => void
	// deletePost: (id: string) => void
	// changeTextPost: (newMessage: string) => void
	subscribe: (callback: () => void) => void
	_callSubscriber: (state: RootStateType) => void
	// addLike: (id: string) => void
	dispatch: (action: ActionTypes) => void
}

// ACTypes


// export type AddPostACT = ReturnType<typeof addPostAC>
// export type ChangeTextACT = ReturnType<typeof changetAC>
// export type AddLikeACT = ReturnType<typeof AddLikeAC>
// export type deletePostACT = ReturnType<typeof deletePostAC>

export type ActionTypes = AddPostACT | ChangeTextACT | AddLikeACT | deletePostACT | AddSMSACT | ChangeSMSACT

// AC


// export const addPostAC = (newValue: string) => {
// 	return {
// 		type: "ADD_POST",
// 		newValue: newValue
// 	} as const
// }
// export const changetAC = (newMessage: string) => {
// 	return {
// 		type: "CHANGE_TEXT",
// 		newMessage: newMessage
// 	} as const
// }
// export const AddLikeAC = (id: string) => {
// 	return {
// 		type: "ADD_LIKE",
// 		id: id
// 	} as const
// }
// export const deletePostAC = (id: string) => {
// 	return {
// 		type: "DELETE_POST",
// 		id: id
// 	} as const
// }


// Store





let store: RootStore = {
	state: {
		headerBlock: {
			headerLink: [
				{ id: v1(), link: "/about", name: "О нас" },
				{ id: v1(), link: "/profile", name: "Профиль" },
				{ id: v1(), link: "/contact", name: "Контакты" },
				{ id: v1(), link: "/gallery", name: "Галлерея" },
				{ id: v1(), link: "/login", name: "Вход в аккаунт" },
			],
		},
		dialogPage: {
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

			],
			newSms: "",


		},
		profilePage: {
			posts: [
				{ id: v1(), messageText: "Из грязи в князи", like: 156 },
				{ id: v1(), messageText: "ни шагу назад", like: 56 },
				{ id: v1(), messageText: "Верю в Бога", like: 356 },
				{ id: v1(), messageText: "Гуднайт", like: 0 },
			],

			newValue: "",

		}

	},
	getState() {
		return this.state
	},
	dispatch(action) {
		this.getState().profilePage = profileReducer(this.getState().profilePage, action)
		this.getState().dialogPage = dialogReducer(this.getState().dialogPage, action)
		this.getState().headerBlock = headerReducer(this.getState().headerBlock, action)
		this._callSubscriber(this.getState());


	},

	_callSubscriber() {
		console.log('state chenged')
	},
	subscribe(observer) {
		this._callSubscriber = observer;

	}
}



export default store

