import { AppStateType, PostsType } from "../../../redux/redux-store";
import {
  AddLikeAC,
  addPostAC,
  deletePostAC,
  ProfileType,
} from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { getPostSelector, getProfileSelector } from "../../../redux/selectors";

type mapDispatchToPropsType = {
  addPostNow: (n: string) => void;

  onDeleteHandler: (id: string) => void;
  onAddLikeHandler: (id: string) => void;
};
type mapStateToPropsType = {
  posts: Array<PostsType>;
  profile: ProfileType;
};

export type MyPostsPropsType = mapDispatchToPropsType & mapStateToPropsType;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    posts: getPostSelector(state),
    profile: getProfileSelector(state),
  };
};

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPostNow: (n: string) => {
      dispatch(addPostAC(n));
    },

    onDeleteHandler: (id: string) => {
      dispatch(deletePostAC(id));
    },
    onAddLikeHandler: (id: string) => {
      dispatch(AddLikeAC(id));
    },
  };
};
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export { MyPostsContainer };
