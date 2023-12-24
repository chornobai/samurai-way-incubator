import { v1 } from "uuid";
import { ActionTypes, DialogMessagesType, DialogType, PostsType } from "./store";

const ADD_SMS = "ADD_SMS";
const CHANGE_AREA = "CHANGE_AREA";

let initialState = {
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


}




const dialogReducer = (state: { dialogs: Array<DialogType>; dialogMessages: Array<DialogMessagesType>; newSms: string; } = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADD_SMS:
            const newSMS: DialogMessagesType = { id: v1(), message: action.newSms }
            state.dialogMessages.push(newSMS)
            state.newSms = ""
            return state
        case CHANGE_AREA:
            state.newSms = action.messages
            return state

        default: return state
    }
}
export const addSMSAC = (newSms: string) => {
    return {
        type: "ADD_SMS",
        newSms: newSms
    } as const
}
export const changeSMSAC = (messages: string) => {
    return {
        type: "CHANGE_AREA",
        messages: messages
    } as const
}

export type AddSMSACT = ReturnType<typeof addSMSAC>
export type ChangeSMSACT = ReturnType<typeof changeSMSAC>

export default dialogReducer