import { v1 } from "uuid";
import { DialogMessagesType, DialogType } from "./redux-store";

export const ADD_SMS = "ADD_SMS";

export type initialStateDialogPageType = {
  dialogs: Array<DialogType>;
  dialogMessages: Array<DialogMessagesType>;
};

let initialState: initialStateDialogPageType = {
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

const dialogReducer = (
  state: initialStateDialogPageType = initialState,
  action: ActionTypesDialog
): initialStateDialogPageType => {
  switch (action.type) {
    case ADD_SMS:
      return {
        ...state,
        dialogMessages: [
          ...state.dialogMessages,
          { id: v1(), message: action.newSms },
        ],
      };

    default:
      return state;
  }
};
export const addSMSAC = (newSms: string) => {
  return {
    type: ADD_SMS,
    newSms: newSms,
  } as const;
};

export type ActionTypesDialog = AddSMSACT;
export type AddSMSACT = ReturnType<typeof addSMSAC>;

export default dialogReducer;
