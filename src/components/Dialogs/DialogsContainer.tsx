import {
  AppStateType,
  DialogMessagesType,
  DialogType,
} from "../../redux/redux-store";
import { addSMSAC } from "../../redux/dialog-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { AuthWithRedirect } from "../HOC/AuthWithRedirect";
import {
  getAuthSelector,
  getDialogsMessagesSelector,
  getDialogsNameSelector,
} from "../../redux/selectors";

type mapDispatchToPropsType = {
  onClickSendDialog: (t: string) => void;
};
type mapStateToPropsType = {
  dialogsMessages: Array<DialogMessagesType>;

  dialogsName: Array<DialogType>;
  auth: boolean;
};

export type DialogsPropsType = mapDispatchToPropsType & mapStateToPropsType;
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    onClickSendDialog: (t: string) => {
      dispatch(addSMSAC(t));
    },
  };
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    dialogsMessages: getDialogsMessagesSelector(state),
    dialogsName: getDialogsNameSelector(state),
    auth: getAuthSelector(state),
  };
};
const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  AuthWithRedirect
)(Dialogs);

export default DialogsContainer;
