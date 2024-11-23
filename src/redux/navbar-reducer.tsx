export const NAVRENDER = "NAVRENDER";
export type HeaderLinkType = {
  link: string;
  name: string;
};
export type initialStateTypeNav = {
  headerLink: Array<HeaderLinkType>;
};

let initialState = {
  headerLink: [
    { link: "/profile", name: "Profile" },
    { link: "/dialogs", name: "Dialogs" },
    { link: "/news", name: "News" },
    { link: "/music", name: "Music" },
    { link: "/settings", name: "Settings" },
    { link: "/users", name: "Users" },
  ],
};

export const navReducer = (
  state: initialStateTypeNav = initialState,
  action: ActionTypesNav
): initialStateTypeNav => {
  switch (action.type) {
    case NAVRENDER:
      return {
        ...state,
      };

    default:
      return state;
  }
};
export type ActionTypesNav = setNavACT;
export type setNavACT = ReturnType<typeof setNavAC>;

export const setNavAC = () => {
  return {
    type: NAVRENDER,
  } as const;
};
