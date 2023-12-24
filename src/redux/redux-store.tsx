import { combineReducers } from "redux"
import { legacy_createStore as createStore } from 'redux'
import dialogReducer from "./dialog-reducer"
import profileReducer from "./profile-reducer";
import headerReducer from "./header-reducer";
import { RootStore } from "./store";



let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    headerBlock: headerReducer
}

)

let store: RootStore = createStore(reducers)

export default store