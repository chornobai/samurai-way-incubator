import { AppThunkDispatch } from "./redux-store";
import { API_LOGIN, API_SECURITY } from "../components/api/API";
import { FormAction, stopSubmit } from "redux-form";

export const AUTH = "AUTH";
export const CAPTCHA = "CAPTCHA";
export type initialStateTypeAuth = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captcha: string | null;
};

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

const authReducer = (
  state: initialStateTypeAuth = initialState,
  action: ActionTypesAuth
): initialStateTypeAuth => {
  switch (action.type) {
    case AUTH:
    case CAPTCHA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
export type ActionTypesAuth = setAuthACT | FormAction | getCaptchaACT;
export type setAuthACT = ReturnType<typeof setAuthAC>;
export type getCaptchaACT = ReturnType<typeof getCaptchaAC>;

export const getCaptchaAC = (captcha: string | null) => {
  return {
    type: CAPTCHA,
    payload: {
      captcha,
    },
  } as const;
};
export const setAuthAC = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return {
    type: AUTH,
    payload: {
      id,
      email,
      login,
      isAuth,
    },
  } as const;
};
export const getAuthTC = () => (dispatch: AppThunkDispatch) => {
  API_LOGIN.getAuth().then((res) => {
    if (res.data.resultCode === 0) {
      let { id, email, login } = res.data.data;
      dispatch(setAuthAC(id, email, login, true));
    }
  });
};
export const LoginTC =
  (email: any, password: any, rememberMe: boolean, captcha: any) =>
  (dispatch: AppThunkDispatch) => {
    API_LOGIN.login(email, password, rememberMe, captcha).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthTC());
      } else {
        if (res.data.resultCode === 10) {
          dispatch(getCaptchaTC());
        }
        let message =
          res.data.messages.length > 0 ? res.data.messages[0] : "some error";
        dispatch(
          stopSubmit("login", {
            _error: message,
          })
        );
      }
    });
  };
export const LoginOutTC = () => (dispatch: AppThunkDispatch) => {
  API_LOGIN.loginOut().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthAC(null, null, null, false));
    }
  });
};
export const getCaptchaTC = () => async (dispatch: AppThunkDispatch) => {
  const res = await API_SECURITY.getCaptcha();
  const captcha = res.data.url;
  dispatch(getCaptchaAC(captcha));
};
export { authReducer };
