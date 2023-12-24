import { v1 } from "uuid";
import { ActionTypes, HeaderType } from "./store";


let initialState = {
    headerLink: [
        { id: v1(), link: "/about", name: "О нас" },
        { id: v1(), link: "/profile", name: "Профиль" },
        { id: v1(), link: "/contact", name: "Контакты" },
        { id: v1(), link: "/gallery", name: "Галлерея" },
        { id: v1(), link: "/login", name: "Вход в аккаунт" },
    ],
}

const headerReducer = (state: { headerLink: Array<HeaderType> } = initialState, action: ActionTypes) => {
    return state
}
export default headerReducer