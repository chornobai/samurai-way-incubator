import { combineReducers } from "redux";
import dialogReducer, { ActionTypesDialog } from "./dialog-reducer";
import profileReducer, {
  ActionTypesProfile,
  ProfileType,
} from "./profile-reducer";
import headerReducer from "./header-reducer";
import { ActionTypesReducer, usersReducer } from "./users-reducer";
import { ActionTypesAuth, authReducer } from "./auth-reducer";
import { ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { reducer as formReducer } from "redux-form";
import { ActionTypesApp, appReducer } from "./app-reducer";
import { ActionTypesNav, navReducer } from "./navbar-reducer";

// ACT

export type ActionTypes =
  | ActionTypesAuth
  | ActionTypesProfile
  | ActionTypesReducer
  | ActionTypesDialog
  | ActionTypesApp
  | ActionTypesNav;

//
// TYPES
export type HeaderType = {
  link: string;
  name: string;
  id: string;
};

export type HeaderBlock = {
  headerLink: Array<HeaderType>;
};

export type DialogType = {
  id: string;
  name: string;
  path: string;
};
export type DialogPageType = {
  dialogs: Array<DialogType>;
  dialogMessages: Array<DialogMessagesType>;
  newSms: string;
};

export type DialogMessagesType = {
  id: string;
  message: string;
};
export type PostsType = {
  id: string;
  messageText: string;
  like: number;
};
export type ProfilePageType = {
  posts: Array<PostsType>;
  newValue: string;
  profile: ProfileType;
  status: string;
};

let rootReducer = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  headerBlock: headerReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  nav: navReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer });

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, ActionTypes>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

//@ts-ignore
window.store = store;
export default store;
