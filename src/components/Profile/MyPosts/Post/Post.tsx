import React from "react";
import s from "./Post.module.css";
import { ActionTypes, PostsType } from "../../../../redux/redux-store";
import { AddLikeAC, deletePostAC } from "../../../../redux/profile-reducer";

type PostTypeComponent = {
  posts: Array<PostsType>;
  // deletePost: (id: string) => void,
  // addLike: (id: string) => void
  dispatch: (action: ActionTypes) => void;
};

const Post: React.FC<PostTypeComponent> = React.memo((props) => {
  let postsItem = props.posts.map((i) => {
    const onDeleteHandler = () => {
      props.dispatch(deletePostAC(i.id));
    };
    return (
      <li className={s.item} key={i.id}>
        <p>{i.messageText}</p>
        <button onClick={onDeleteHandler}>Удалить</button>
        <button
          onClick={() => {
            props.dispatch(AddLikeAC(i.id));
          }}
        >
          {" "}
          {i.like} like
        </button>
      </li>
    );
  });

  return <ul>{postsItem}</ul>;
});

export { Post };
