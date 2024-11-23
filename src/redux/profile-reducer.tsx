import { v1 } from "uuid";
import { AppStateType, AppThunkDispatch, PostsType } from "./redux-store";
import { API_PROFILE } from "../components/api/API";
import { setFetchingAC } from "./users-reducer";
import { stopSubmit } from "redux-form";
import { getCaptchaTC } from "./auth-reducer";

export const ADD_POST = "ADD_POST";
export const ADD_LIKE = "ADD_LIKE";
export const DELETE_POST = "DELETE_POST";
export const SET_PROFILE = "SET_PROFILE";
export const STATUS = "STATUS";
export const ERROR_PROFILE = "ERROR_PROFILE";
export const SAVE_PHOTO = "SAVE_PHOTO";

export type ProfileType = {
  aboutMe: string | null;
  contacts: {
    facebook: null;
    website: null;
    vk: null;
    twitter: null;
    instagram: null;
    youtube: null;
    github: null;
    mainLink: null;
  };
  lookingForAJob: false;
  lookingForAJobDescription: null;
  fullName: string;
  userId: any;
  photos: {
    small: null;
    large: null;
  };
};

export type initialProfilePageType = {
  profile: ProfileType;
  posts: Array<PostsType>;

  status: string;
  error: boolean | null;
};

let initialState: initialProfilePageType = {
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
    userId: null,
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
  error: null,
};

const profileReducer = (
  state: initialProfilePageType = initialState,
  action: ActionTypesProfile
): initialProfilePageType => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: v1(), messageText: action.newValue, like: 156 },
        ],
      };

      return state;
    case ADD_LIKE:
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.id ? { ...p, like: p.like + 1 } : p
        ),
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.id),
      };
    case STATUS:
      return {
        ...state,
        status: action.status,
      };
    case ERROR_PROFILE:
      return {
        ...state,
        error: action.error,
      };

    case SAVE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};
export type ActionTypesProfile =
  | setProfileACT
  | AddPostACT
  | AddLikeACT
  | deletePostACT
  | setStatusACT
  | savePhotoSucccessACT
  | setErrorProfileACT;

export const setErrorProfileAC = (error: boolean) => {
  return {
    type: ERROR_PROFILE,
    error,
  } as const;
};
export const setProfileAC = (profile: ProfileType) => {
  return {
    type: SET_PROFILE,
    profile,
  } as const;
};
export const setStatusAC = (status: string) => {
  return {
    type: STATUS,
    status,
  } as const;
};
export const addPostAC = (newValue: string) => {
  return {
    type: "ADD_POST",
    newValue: newValue,
  } as const;
};

export const AddLikeAC = (id: string) => {
  return {
    type: "ADD_LIKE",
    id: id,
  } as const;
};
export const deletePostAC = (id: string) => {
  return {
    type: "DELETE_POST",
    id: id,
  } as const;
};
export const savePhotoSucccessAC = (photos: any) => {
  return {
    type: "SAVE_PHOTO",
    photos: photos,
  } as const;
};
export type savePhotoSucccessACT = ReturnType<typeof savePhotoSucccessAC>;
export type setProfileACT = ReturnType<typeof setProfileAC>;
export type AddPostACT = ReturnType<typeof addPostAC>;
export type setErrorProfileACT = ReturnType<typeof setErrorProfileAC>;

export type AddLikeACT = ReturnType<typeof AddLikeAC>;
export type deletePostACT = ReturnType<typeof deletePostAC>;
export type setStatusACT = ReturnType<typeof setStatusAC>;

export const getProfileTC = (userId: any) => (dispatch: AppThunkDispatch) => {
  dispatch(setFetchingAC(true));
  API_PROFILE.getProfile(userId).then((res) => {
    dispatch(setProfileAC(res.data));
    dispatch(setFetchingAC(false));
  });
  API_PROFILE.getStatus(userId).then((res) => dispatch(setStatusAC(res.data)));
};

export const updateStatusTC =
  (status: string) => (dispatch: AppThunkDispatch) => {
    dispatch(setFetchingAC(true));
    API_PROFILE.updateStatus(status).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }

      dispatch(setFetchingAC(false));
    });
  };
export const savePhotoTC =
  (file: any) => async (dispatch: AppThunkDispatch) => {
    dispatch(setFetchingAC(true));

    let res = await API_PROFILE.savePhoto(file);
    if (res.data.resultCode === 0) {
      dispatch(savePhotoSucccessAC(res.data.data));
    }

    dispatch(setFetchingAC(false));
  };

export const updateProfileTC =
  (profile: any) =>
  async (dispatch: AppThunkDispatch, getState: () => AppStateType) => {
    const id = getState().auth.id;
    let res = await API_PROFILE.updateProfile(profile);
    if (res.data.resultCode === 0) {
      dispatch(getProfileTC(id));
      dispatch(setErrorProfileAC(false));
    } else {
      if (res.data.resultCode === 10) {
        dispatch(getCaptchaTC);
      }
      let message =
        res.data.messages.length > 0 ? res.data.messages[0] : "some error";
      dispatch(
        stopSubmit("ProfileInfoForm", {
          _error: message,
        })
      );
      dispatch(setErrorProfileAC(true));
    }
  };

export default profileReducer;
