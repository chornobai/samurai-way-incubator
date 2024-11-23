import { AppThunkDispatch } from "./redux-store";
import { API_USERS } from "../components/api/API";

const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const SET_USERS = "SET_USERS";
const ADD_USERS = "ADD_USERS";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const IS_FETCHING = "IS_FETCHING";
const DISABLED = "DISABLED";
const ON_DISABLE = "ON_DISABLE";
const ADD_USERS_PAGINATION = "ADD_USERS_PAGINATION";

// TYPES
export type initialStateUsersType = {
  users: Array<UserType>;
  totalCount: number;
  page: number;
  isFetching: boolean;
  disabled: boolean;
};

export type UserType = {
  name: string;
  id: string;
  uniqueUrlName: null;
  photos: {
    small: null;
    large: null;
  };
  status: null;
  followed: boolean;
  onDisable?: boolean;
};
export type ActionTypesReducer =
  | FollowACType
  | SetUsersACType
  | AddUsersACType
  | setTotalCountACType
  | setFetchingACType
  | SetDisabledACType
  | SetOnDisabledACType
  | AddUsersPaginationACType;
export type FollowACType = ReturnType<typeof FollowAC>;
export type SetUsersACType = ReturnType<typeof SetUsersAC>;
export type AddUsersACType = ReturnType<typeof AddUsersAC>;
export type setTotalCountACType = ReturnType<typeof setTotalCountAC>;
export type setFetchingACType = ReturnType<typeof setFetchingAC>;
export type SetDisabledACType = ReturnType<typeof SetDisabledAC>;
export type SetOnDisabledACType = ReturnType<typeof SetOnDisabledAC>;
export type AddUsersPaginationACType = ReturnType<typeof AddUsersPaginationAC>;

//

export const initialStateUser: initialStateUsersType = {
  users: [],
  totalCount: 0,
  page: 1,
  isFetching: true,
  disabled: false,
};

export const usersReducer = (
  state: initialStateUsersType = initialStateUser,
  action: ActionTypesReducer
): initialStateUsersType => {
  switch (action.type) {
    case FOLLOW_TOGGLE:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, followed: !u.followed } : u
        ),
      };
    case SET_USERS:
      return { ...state, users: [...action.users], page: 1 };
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.usersAdded], // Добавляем новых пользователей
        page: action.page,

        // Обновляем номер страницы
      };
    case ADD_USERS_PAGINATION:
      return {
        ...state,
        users: action.usersAddedPagination,
        page: action.page,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case DISABLED:
      return {
        ...state,
        disabled: action.disabled,
      };
    case ON_DISABLE:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, onDisable: action.disable } : u
        ),
      };
    default:
      return state;
  }
};

export const AddUsersPaginationAC = (
  usersAddedPagination: Array<UserType>,
  page: number
) =>
  ({
    type: ADD_USERS_PAGINATION,
    usersAddedPagination,
    page,
  } as const);

export const SetUsersAC = (users: Array<UserType>) =>
  ({
    type: SET_USERS,
    users,
  } as const);
export const SetDisabledAC = (disabled: boolean) =>
  ({
    type: DISABLED,
    disabled,
  } as const);
export const SetOnDisabledAC = (id: string, disable: boolean) =>
  ({
    type: ON_DISABLE,
    id,
    disable,
  } as const);
export const AddUsersAC = (usersAdded: Array<UserType>, page: number) =>
  ({
    type: ADD_USERS,
    usersAdded,
    page,
  } as const);
export const FollowAC = (id: string) =>
  ({
    type: FOLLOW_TOGGLE,
    id,
  } as const);
export const setTotalCountAC = (totalCount: number) =>
  ({
    type: SET_TOTAL_COUNT,
    totalCount,
  } as const);
export const setFetchingAC = (isFetching: boolean) =>
  ({
    type: IS_FETCHING,
    isFetching,
  } as const);

const getUserTC = (page: number) => (dispatch: AppThunkDispatch) => {
  dispatch(setFetchingAC(true));
  API_USERS.getUser(page).then((res) => {
    dispatch(SetUsersAC(res.data.items));
    dispatch(setTotalCountAC(res.data.totalCount));
    dispatch(setFetchingAC(false));
  });
};
export const addUsersTC = (page: number) => (dispatch: AppThunkDispatch) => {
  dispatch(setFetchingAC(true));
  dispatch(SetDisabledAC(true));
  API_USERS.getUser(page).then((res) => {
    dispatch(AddUsersAC(res.data.items, page));
    dispatch(SetDisabledAC(false));
    dispatch(setFetchingAC(false));
  });
};
const addUsersPaginationTC = (page: number) => (dispatch: AppThunkDispatch) => {
  dispatch(setFetchingAC(true));
  API_USERS.getUser(page).then((res) => {
    dispatch(AddUsersPaginationAC(res.data.items, page));
    dispatch(setFetchingAC(false));
  });
};

const followToggleTC =
  (userId: string, followed: boolean) => (dispatch: AppThunkDispatch) => {
    const apiFollow = followed
      ? API_USERS.unFollowUser(userId) // Если подписан — отписываем
      : API_USERS.followUser(userId); // Если не подписан — подписываем
    dispatch(setFetchingAC(true));
    dispatch(SetOnDisabledAC(userId, true));
    apiFollow
      .then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(FollowAC(userId));
        }
        dispatch(setFetchingAC(false));
        dispatch(SetOnDisabledAC(userId, false));
      })
      .catch(() => {
        dispatch(setFetchingAC(false));
      });
  };

export { getUserTC, addUsersPaginationTC, followToggleTC };
