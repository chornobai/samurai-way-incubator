import React from "react";
import s from "./Navbar.module.css";
import { NavLink, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { getNavSelector } from "../../redux/selectors";
import { HeaderLinkType } from "../../redux/navbar-reducer";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

const Navbar = React.memo((props: any) => {
  let navbarItems = props.nav.map((item: HeaderLinkType) => {
    return (
      <ListItem className={s.item}>
        <NavLink activeClassName={s.activeclass} to={item.link}>
          {item.name}
        </NavLink>
      </ListItem>
    );
  });

  return (
    <section className={s.navbar}>
      <List className={s.list}>{navbarItems}</List>
    </section>
  );
});

let mapStateToProps = (state: AppStateType) => ({
  nav: getNavSelector(state),
});
export default compose<React.ComponentType>(
  connect(mapStateToProps, {}),
  withRouter
)(Navbar);
