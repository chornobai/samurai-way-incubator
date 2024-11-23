import React from "react";
import s from "./MyPosts.module.css";
import { MyPostsPropsType } from "./MyPostsContainer";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Form/FormControls/Forms_Controls";
import {
  maxlenghtCreator,
  requiredField,
} from "../../../utils/validators/validators";
import image from "../../../img/images.jpeg";

const MyPosts: React.FC<MyPostsPropsType> = React.memo((props) => {
  const max20 = maxlenghtCreator(20);
  const onSubmitPost = (data: any) => {
    props.addPostNow(data.PostName);
    props.addPostNow((data.PostName = ""));
  };
  const PostForm = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          name={"PostName"}
          id={"PostName"}
          component={Textarea}
          placeholder={"message"}
          validate={[requiredField, max20]}
          className={s.textfield_post}
        />
        <button className={s.post_btn_sbm}>Send</button>
      </form>
    );
  };

  const PostReduxForm = reduxForm({
    // a unique name for the form
    form: "PostProfilePage",
  })(PostForm);

  let postsItem = props.posts.map((i) => {
    const onDeleteHandler = () => {
      props.onDeleteHandler(i.id);
    };
    const onAddLikeHandler = () => {
      props.onAddLikeHandler(i.id);
    };
    return (
      <li className={s.post_item} key={i.id}>
        <img
          className={s.post_img}
          src={props.profile.photos.large || image}
          alt="avatar"
          width="50"
          height="50"
        />
        <div>
          <blockquote>{i.messageText}</blockquote>
          <button onClick={onDeleteHandler}>X</button>
        </div>

        <div>
          <button className={s.heart_btn} onClick={onAddLikeHandler}>
            {i.like}
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className={s.myposts}>
      <h2>My Posts</h2>

      <div className="new_post">
        <PostReduxForm onSubmit={onSubmitPost} />
      </div>
      <ul className={s.list_post}>{postsItem}</ul>
    </div>
  );
});

export { MyPosts };
