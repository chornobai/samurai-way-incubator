import React from "react";

import { Header } from "./Header";
import { AppStateType, HeaderType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { getAuthTC, LoginOutTC } from "../../redux/auth-reducer";
import { compose } from "redux";
import login from "../Login/Login";
import {
  getAuthSelector,
  getLinksSelector,
  getLoginSelector,
} from "../../redux/selectors";

const HeaderContainer: React.FC<HeaderContainerPropsType> = (props) => {
  return <Header {...props} />;
};

// TYPES

type mapDispatchToPropsType = {
  getAuthTC: () => void;
  LoginOutTC: () => void;
};
type mapStateToPropsType = {
  links: Array<HeaderType>;
  isAuth: boolean;
  login: any;
};

type HeaderContainerPropsType = mapDispatchToPropsType & mapStateToPropsType;
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    links: getLinksSelector(state),
    isAuth: getAuthSelector(state),
    login: getLoginSelector(state),
  };
};

export default compose(
  connect(mapStateToProps, { getAuthTC, login, LoginOutTC })(HeaderContainer)
);
