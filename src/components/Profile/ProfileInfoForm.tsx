import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../Form/FormControls/Forms_Controls";
import { reduxForm } from "redux-form";
import s from "../Form/FormControls/FormControl.module.css";

const ProfileInfoForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <button type="submit">Save</button>
      <label>
        Full name:{props.profile.fullName}
        {createField("FullName", "fullName", [], Input)}
      </label>
      <label>
        Looking for a job:
        {createField("LookingForAJob", "lookingForAJob", [], Input, {
          type: "checkbox",
        })}
      </label>
      <label>
        Job description:{props.profile.lookingForAJobDescription}
        {createField(
          "LookingForAJobDescription",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </label>
      <label>
        About me:{props.profile.aboutMe}
        {createField("AboutMe", "aboutMe", [], Textarea)}
      </label>
      {Object.keys(props.profile.contacts).map((i) => {
        return (
          <label>
            {i}:{props.profile[i]}
            {createField(i, "contacts." + i, [], Input)}
          </label>
        );
      })}
      <div className={s.formControl_common_error}>{props.error}</div>
    </form>
  );
};
const ProfileInfoFormRedux = reduxForm({ form: "ProfileInfoForm" })(
  ProfileInfoForm
);
export default ProfileInfoFormRedux;
