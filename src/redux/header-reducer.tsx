import { v1 } from "uuid";
import { ActionTypes, HeaderType } from "./redux-store";

type initialStateHeaderType = {
  headerLink: Array<HeaderType>;
};
let initialState = {
  headerLink: [
    { id: v1(), link: "/about", name: "О нас" },
    { id: v1(), link: "/profile", name: "Профиль" },
    { id: v1(), link: "/contact", name: "Контакты" },
    { id: v1(), link: "/gallery", name: "Галлерея" },
  ],
};

const headerReducer = (
  state: initialStateHeaderType = initialState,
  action: ActionTypes
): initialStateHeaderType => {
  return state;
};
export default headerReducer;
