import { appReducer, INI, initialStateTypeApp } from "../redux/app-reducer";
import { AUTH, authReducer, initialStateTypeAuth } from "../redux/auth-reducer";
import dialogReducer, {
  ADD_SMS,
  initialStateDialogPageType,
} from "../redux/dialog-reducer";
import { v1 } from "uuid";
import profileReducer, {
  ADD_POST,
  initialProfilePageType,
} from "../redux/profile-reducer";
import {
  initialStateUsersType,
  SET_TOTAL_COUNT,
  usersReducer,
} from "../redux/users-reducer";

test("ini should be true", () => {
  //data; //
  const state: initialStateTypeApp = {
    initialize: false,
  };

  //action; //

  const newState = appReducer(state, { type: INI });
  //expectation; //

  expect(newState.initialize).toBe(true);
});
test("authReducer should set isAuth to true", () => {
  // Начальное состояние для authReducer
  const state: initialStateTypeAuth = {
    id: 1,
    email: "bobobobob@gmail.com",
    login: "true",
    isAuth: false,
    captcha: null,
  };

  // Выполняем действие
  const newState = authReducer(state, { type: AUTH });

  // Проверка (меняется свойство isAuth)
  expect(newState.isAuth).toBe(true);
});
test("dialogReducer should change", () => {
  // Начальное состояние для authReducer
  const state: initialStateDialogPageType = {
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
  };

  // Выполняем действие
  const newState = dialogReducer(state, {
    type: ADD_SMS,
    newSms: "Vудем учиться",
  });

  expect(newState.dialogMessages.length).toBe(4);
});
test("profile-reducer should change", () => {
  // Начальное состояние для authReducer
  const state: initialProfilePageType = {
    profile: {
      aboutMe: null,
      contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null,
      },
      lookingForAJob: false,
      lookingForAJobDescription: null,
      fullName: "bombeze",
      userId: 29966,
      photos: {
        small: null,
        large: null,
      },
    },
    status: "kuku",

    posts: [
      { id: v1(), messageText: "Из грязи в князи", like: 156 },
      { id: v1(), messageText: "ни шагу назад", like: 56 },
      { id: v1(), messageText: "Верю в Бога", like: 356 },
      { id: v1(), messageText: "Гуднайт", like: 0 },
    ],
    error: false,
  };

  // Выполняем действие
  const newState = profileReducer(state, {
    type: ADD_POST,
    newValue: "TAHAHA",
  });

  expect(newState.posts.length).toBe(5);
});
test("userReducer should set isAuth to true", () => {
  // Начальное состояние для authReducer
  const state: initialStateUsersType = {
    users: [],
    totalCount: 0,
    page: 1,
    isFetching: true,
    disabled: false,
  };
  // Выполняем действие
  const newState = usersReducer(state, {
    type: SET_TOTAL_COUNT,
    totalCount: 10,
  });

  // Проверка (меняется свойство isAuth)
  expect(newState.totalCount).toBe(10);
});
