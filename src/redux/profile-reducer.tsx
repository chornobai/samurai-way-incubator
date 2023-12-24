import { v1 } from "uuid";
import { ActionTypes, PostsType } from "./store";

const ADD_POST = "ADD_POST";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_LIKE = "ADD_LIKE";
const DELETE_POST = "DELETE_POST";

let initialState = {
    posts: [
        { id: v1(), messageText: "Из грязи в князи", like: 156 },
        { id: v1(), messageText: "ни шагу назад", like: 56 },
        { id: v1(), messageText: "Верю в Бога", like: 356 },
        { id: v1(), messageText: "Гуднайт", like: 0 },
    ],

    newValue: "",

}




const profileReducer = (state: { posts: Array<PostsType>; newValue: string; } = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = { id: v1(), messageText: action.newValue, like: 156 }
            state.posts.push(newPost)
            state.newValue = ""
            return state
        case CHANGE_TEXT:
            state.newValue = action.newMessage
            return state
        case ADD_LIKE:


            let likeNew = state.posts.find(i => i.id == action.id)
            if (likeNew) {
                likeNew.like++
            }
            return state

        case DELETE_POST:
            state.posts = state.posts.filter(i => i.id !== action.id)
            return state








        default: return state
    }
}
export const addPostAC = (newValue: string) => {
    return {
        type: "ADD_POST",
        newValue: newValue
    } as const
}
export const changetAC = (newMessage: string) => {
    return {
        type: "CHANGE_TEXT",
        newMessage: newMessage
    } as const
}
export const AddLikeAC = (id: string) => {
    return {
        type: "ADD_LIKE",
        id: id
    } as const
}
export const deletePostAC = (id: string) => {
    return {
        type: "DELETE_POST",
        id: id
    } as const
}

export type AddPostACT = ReturnType<typeof addPostAC>
export type ChangeTextACT = ReturnType<typeof changetAC>
export type AddLikeACT = ReturnType<typeof AddLikeAC>
export type deletePostACT = ReturnType<typeof deletePostAC>

export default profileReducer