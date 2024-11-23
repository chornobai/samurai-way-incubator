import React from "react";
import s from "./Users.module.css";

type UserTypeItem = {
  users: any;
};
const User: React.FC<UserTypeItem> = React.memo((props) => {
  return <ul className={s.users_list}>{props.users}</ul>;
});
export { User };
