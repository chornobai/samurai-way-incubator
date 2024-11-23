import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LinearProgress from "@mui/material/LinearProgress";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "./redux/redux-store";
import { getInTC } from "./redux/app-reducer";
import { getIniSelector } from "./redux/selectors";

// Lazy import компонентов
const ProfileContainer = lazy(() => import("./components/Profile/Profile"));
const DialogsContainer = lazy(
  () => import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const HeaderContainer = lazy(
  () => import("./components/Header/HeaderContainer")
);
const Login = lazy(() => import("./components/Login/Login"));

const App: React.FC<any> = (props) => {
  useEffect(() => {
    props.getInTC();
  }, []);

  if (!props.ini) return <LinearProgress />;

  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<LinearProgress />}>
          <HeaderContainer />
          <Navbar />
          <Route path="/" exact render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

type mapStateToPropsType = {
  ini: boolean;
};
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    ini: getIniSelector(state),
  };
};

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { getInTC })
)(App);
