import React, { useMemo } from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { DialogMessagesType, DialogType } from "../../redux/redux-store";
import { DialogsPropsType } from "./DialogsContainer";
import { Field, reduxForm } from "redux-form";
import {
  maxlenghtCreator,
  requiredField,
} from "../../utils/validators/validators";
import { Textarea } from "../Form/FormControls/Forms_Controls";
import image from "./../../img/images.jpeg";

const Dialogs: React.FC<DialogsPropsType> = React.memo((props) => {
  const max10 = maxlenghtCreator(10);
  const onSubmitDialog = useMemo(
    () => (data: any) => {
      props.onClickSendDialog(data.dialogName);
      props.onClickSendDialog((data.dialogName = ""));
    },
    [props.onClickSendDialog, props.onClickSendDialog]
  );
  const DialogForm = (props: any) => {
    return (
      <form className={s.message_form} onSubmit={props.handleSubmit}>
        <Field
          name={"dialogName"}
          id={"dialogName"}
          component={Textarea}
          placeholder={"message"}
          validate={[requiredField, max10]}
          className={s.text_message}
        />
        <button>Send</button>
      </form>
    );
  };

  const DialogReduxForm = reduxForm({
    // a unique name for the form
    form: "Dialog",
  })(DialogForm);

  let dialogItems = props.dialogsName.map((item: DialogType) => {
    return (
      <li className={s.dialogitem} key={item.id}>
        <img className={s.avatar_dialog} src={image} alt="avatar" />
        <NavLink
          className={s.link}
          activeClassName={s.active}
          to={"/dialogs/" + item.path}
        >
          {item.name}
        </NavLink>
      </li>
    );
  });

  let dialogMessageItem = props.dialogsMessages.map(
    (item: DialogMessagesType) => {
      return (
        <li className={s.dialogMessagetem} key={item.id}>
          {item.message}
        </li>
      );
    }
  );

  return (
    <section className={s.dialogs}>
      <ul className={s.dialog}>{dialogItems}</ul>
      <ul className={s.messages}>{dialogMessageItem}</ul>
      <div className={s.messages_area}>
        <DialogReduxForm onSubmit={onSubmitDialog} />
      </div>
    </section>
  );
});

export { Dialogs };
