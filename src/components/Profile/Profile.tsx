import React, { useEffect, useState } from "react";
import s from "./Profile.module.css";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  getProfileTC,
  ProfileType,
  savePhotoTC,
  setProfileAC,
  setStatusAC,
  updateProfileTC,
  updateStatusTC,
} from "../../redux/profile-reducer";
import { setFetchingAC } from "../../redux/users-reducer";
import { EditableSpan } from "../EditableSpan/EditableSpan";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AuthWithRedirect } from "../HOC/AuthWithRedirect";
import { compose } from "redux";
import {
  getAuthIdSelector,
  getAuthSelector,
  getErrorSelector,
  getFetchSelector,
  getProfileSelector,
  getStatusSelector,
} from "../../redux/selectors";
import image from "./../../img/images.jpeg";
import ProfileInfoFormRedux from "./ProfileInfoForm";
// TYPES
type PathParamsType = { userId?: string };

type ProfilePropsType = {
  profile: ProfileType;
  isFetching: boolean;
  status: string;
  auth: boolean;
  error: boolean;
  authId?: string;
  setProfileAC: (profile: ProfileType) => void;
  setFetchingAC: (isFetching: boolean) => void;
  setStatusAC: (status: string) => void;
  getProfileTC: (userId: string) => void;
  updateStatusTC: (status: string) => void;
  savePhotoTC: (photo: File) => void;
  updateProfileTC: any;
};

type ProfilePagePropsType = RouteComponentProps<PathParamsType> &
  ProfilePropsType;
//
const ProfileContainer: React.FC<ProfilePagePropsType> = React.memo((props) => {
  // Destruction props
  const {
    profile,
    authId,
    match,
    error,
    getProfileTC,
    savePhotoTC,
    status,
    updateStatusTC,
    updateProfileTC,
  } = props;

  // Function for submit on ReduxForm
  const onSubmit = (formData: any) => {
    updateProfileTC(formData);
    //   Use useEffect for go out from editMode on success
  };

  // EDIT MODE
  const [editMode, setEditMode] = useState(false);
  const onEditMode = () => {
    setEditMode(true);
  };
  //

  //  if we authoraized
  const isOwner = !match.params.userId;

  // Photo Change
  const onPhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      savePhotoTC(e.target.files[0]);
    }
  };

  useEffect(() => {
    const userId = match.params.userId || authId;
    if (userId) {
      getProfileTC(userId);
    } else {
      props.history.push("/login");
    }
    if (error === false) {
      setEditMode(false);
    }
  }, [match.params.userId, authId, getProfileTC, props.history, error]);

  // Render Contacts list
  const Contact = ({
    contactName,
    contactValue,
  }: {
    contactName: string;
    contactValue: string | null;
  }) => {
    return (
      <div>
        <div>
          {contactName} :{contactValue}{" "}
        </div>
      </div>
    );
  };
  return (
    <section className={s.profile}>
      <div className="container">
        <div className={s.wrapper_profile}>
          <div>
            <h2>Profile</h2>
            <div className={s.profile_id}>Id: {profile.userId}</div>
          </div>

          {/*AVATAR*/}
          <div className={s.avatar}>
            <img src={profile.photos.large || image} alt="Avatar" />
          </div>

          {/*CHANGE PHOTO*/}
          {isOwner && (
            <div className={s.photo_profile}>
              <label htmlFor="photo" className={s.photo_profile}>
                Сменить фото
                <input type="file" id="photo" onChange={onPhotoSelect} />
              </label>
            </div>
          )}

          {/*STATUS*/}
          <EditableSpan value={status} onChange={updateStatusTC} />

          {/*EDITMODE FORM*/}
          <div className={s.profile_info}>
            {editMode ? (
              <ProfileInfoFormRedux
                {...props}
                initialValues={profile}
                onSubmit={onSubmit}
              />
            ) : (
              <div>
                <div>Full Name:{profile.fullName}</div>
                <div>
                  Looking for a job:{profile.lookingForAJob ? "yes" : "no"}
                </div>
                <div>Job description:{profile.lookingForAJobDescription}</div>
                <div>About me:{profile.aboutMe}</div>

                <div>
                  <h3>Contacts</h3>
                  {Object.keys(profile.contacts).map((i) => {
                    // Используем правильный тип для ключей
                    const contactValue =
                      profile.contacts[i as keyof typeof profile.contacts];
                    return (
                      <Contact
                        key={i}
                        contactName={i}
                        contactValue={contactValue}
                      />
                    );
                  })}
                </div>
                <button className={s.edit_btn_profile} onClick={onEditMode}>
                  EDIT
                </button>
              </div>
            )}
          </div>

          <MyPostsContainer />
        </div>
      </div>
    </section>
  );
});

//  PROPS
const mapStateToProps = (state: AppStateType) => ({
  profile: getProfileSelector(state),
  isFetching: getFetchSelector(state),
  status: getStatusSelector(state),
  auth: getAuthSelector(state),
  authId: getAuthIdSelector(state),
  error: getErrorSelector(state),
});

export default compose<React.ComponentType>(
  AuthWithRedirect,
  connect(mapStateToProps, {
    setProfileAC,
    setFetchingAC,
    setStatusAC,
    getProfileTC,
    updateStatusTC,
    savePhotoTC,
    updateProfileTC,
  }),
  withRouter
)(ProfileContainer);
