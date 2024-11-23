import React from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { getAuthSelector } from "../../redux/selectors";

type MapStateToProps = {
  isAuth: boolean;
};

let mapStateToPropsRedirectComponent = (
  state: AppStateType
): MapStateToProps => {
  return {
    isAuth: getAuthSelector(state),
  };
};

export const AuthWithRedirect = <T,>(Component: React.ComponentType<T>) => {
  class RedirectComponent extends React.Component<MapStateToProps> {
    render() {
      const { isAuth, ...restProps } = this.props;

      if (isAuth === false) return <Redirect to={"/login"} />;

      return <Component {...(restProps as T & {})} />;
    }
  }

  let ConnectedIsAuthRedirectComponent = connect(
    mapStateToPropsRedirectComponent
  )(RedirectComponent);
  return ConnectedIsAuthRedirectComponent;
};
