import { AppStateType } from "./redux-store"; // DIALOGSCONTAINER

// DIALOGSCONTAINER
const getDialogsMessagesSelector = (state: AppStateType) =>
  state.dialogPage.dialogMessages;
const getDialogsNameSelector = (state: AppStateType) =>
  state.dialogPage.dialogs;

// POSTS
const getPostSelector = (state: AppStateType) => state.profilePage.posts;

// PROFILE / DIALOGSCONTAINER
const getProfileSelector = (state: AppStateType) => state.profilePage.profile;
const getFetchSelector = (state: AppStateType) => state.usersPage.isFetching;
const getStatusSelector = (state: AppStateType) => state.profilePage.status;
const getAuthSelector = (state: AppStateType) => state.auth.isAuth;
const getAuthIdSelector = (state: AppStateType) => state.auth.id;
const getErrorSelector = (state: AppStateType) => state.profilePage.error;
// HEADER
const getLinksSelector = (state: AppStateType) => state.headerBlock.headerLink;
const getLoginSelector = (state: AppStateType) => state.auth.login;

// USER
const getDisabledSelector = (state: AppStateType) => state.usersPage.disabled;
const getPageSelector = (state: AppStateType) => state.usersPage.page;
const getTotalCountSelector = (state: AppStateType) =>
  state.usersPage.totalCount;
const getUsersSelector = (state: AppStateType) => state.usersPage.users;
// APP

const getIniSelector = (state: AppStateType) => state.app.initialize;

// NAV

// LOGIN
const getCaptchaSelector = (state: AppStateType) => state.auth.captcha;

const getNavSelector = (state: AppStateType) => state.nav.headerLink;
export {
  getProfileSelector,
  getFetchSelector,
  getStatusSelector,
  getAuthSelector,
  getAuthIdSelector,
  getPostSelector,
  getDialogsMessagesSelector,
  getDialogsNameSelector,
  getLinksSelector,
  getLoginSelector,
  getDisabledSelector,
  getPageSelector,
  getTotalCountSelector,
  getUsersSelector,
  getIniSelector,
  getNavSelector,
  getErrorSelector,
  getCaptchaSelector,
};
