import { AppStateType, AppThunkDispatch } from "../../redux/redux-store";
import { connect } from "react-redux";
import imagePlaceholder from "../../img/images.jpeg";
import {
  addUsersPaginationTC,
  addUsersTC,
  followToggleTC,
  getUserTC,
  SetDisabledAC,
  setFetchingAC,
  setTotalCountAC,
  UserType,
} from "../../redux/users-reducer";
import React, { useEffect } from "react";
import s from "./Users.module.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { User } from "./User";
import LinearProgress from "@mui/material/LinearProgress";
import { AuthWithRedirect } from "../HOC/AuthWithRedirect";
import { compose } from "redux";
import {
  getAuthSelector,
  getDisabledSelector,
  getFetchSelector,
  getPageSelector,
  getTotalCountSelector,
  getUsersSelector,
} from "../../redux/selectors";
import { Pagination } from "../Pagination/Pagination";

// Here first type of pagination with chatgpt and mui
// Another type is realisation with video Dmitry

const UsersContainer: React.FC<UsersPropsType> = (props) => {
  useEffect(() => {
    props.onSetUsers(props.page);
  }, []);

  const onShowMore = () => {
    props.onAddUsers(props.page + 1);
  };

  const userItem = props.users.map((u) => (
    <Card className={s.user_card} variant="outlined">
      <li className={s.user_item} key={u.id}>
        <Button
          disabled={u.onDisable}
          onClick={() => props.onFollowUsers(u.id, u.followed)}
          variant="outlined"
          className={s.user_item_btn}
        >
          {u.followed === true ? "Unfollow" : "Follow"}
        </Button>
        <div>
          <p>{u.name}</p>
          <p>{u.status}</p>
          <img
            src={u.photos.small == null ? imagePlaceholder : u.photos.small}
            alt={""}
          />
        </div>
      </li>
    </Card>
  ));

  return (
    <section className={s.users}>
      {props.isFetching && <LinearProgress />}
      <User users={userItem} />
      <button
        className={s.users_btn}
        onClick={onShowMore}
        disabled={props.disabled}
      >
        Show more
      </button>
      <div>
        <Pagination {...props} />
      </div>
    </section>
  );
};

type mapDispatchToPropsType = {
  onAddUsersPagination: (page: number) => void;

  onSetUsers: (page: number) => void;
  onAddUsers: (page: number) => void;
  onTotalCount: (totalCount: number) => void;
  onFetching: (isFetching: boolean) => void;
  onDisabled: (disabled: boolean) => void;
  onFollowUsers: (userId: string, followed: boolean) => void;
};
type mapStateToPropsType = {
  users: Array<UserType>;
  page: number;
  totalCount: number;
  isFetching: boolean;
  disabled: boolean;
  auth: boolean;
};

export type UsersPropsType = mapDispatchToPropsType & mapStateToPropsType;

let mapDispatchToProps = (
  dispatch: AppThunkDispatch
): mapDispatchToPropsType => {
  return {
    onAddUsersPagination: (page: number) => {
      dispatch(addUsersPaginationTC(page));
    },

    onSetUsers: (page) => {
      dispatch(getUserTC(page));
    },
    onTotalCount: (totalCount: number) => {
      dispatch(setTotalCountAC(totalCount));
    },
    onFetching: (isFetching: boolean) => {
      dispatch(setFetchingAC(isFetching));
    },
    onDisabled: (disabled: boolean) => {
      dispatch(SetDisabledAC(disabled));
    },
    onAddUsers: (page: number) => {
      dispatch(addUsersTC(page));
    },
    onFollowUsers: (userId: string, followed: boolean) => {
      dispatch(followToggleTC(userId, followed));
    },
  };
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    users: getUsersSelector(state),
    page: getPageSelector(state),
    totalCount: getTotalCountSelector(state),
    isFetching: getFetchSelector(state),
    disabled: getDisabledSelector(state),
    auth: getAuthSelector(state),
  };
};

export default compose<React.ComponentType>(
  AuthWithRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
