import { AppThunkDispatch } from "./redux-store";
import { getAuthTC } from "./auth-reducer";

export const INI = "INI";

export type initialStateTypeApp = {
  initialize: boolean;
};

let initialState = {
  initialize: false,
};

export const appReducer = (
  state: initialStateTypeApp = initialState,
  action: ActionTypesApp
): initialStateTypeApp => {
  switch (action.type) {
    case INI:
      return {
        ...state,
        initialize: true,
      };

    default:
      return state;
  }
};
export type ActionTypesApp = setIniACT;
export type setIniACT = ReturnType<typeof setIniAC>;

export const setIniAC = () => {
  return {
    type: INI,
  } as const;
};
export const getInTC = () => (dispatch: AppThunkDispatch) => {
  Promise.all([dispatch(getAuthTC())]).then(() => {
    dispatch(setIniAC());
  });
};
