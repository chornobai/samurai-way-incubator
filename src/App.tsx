import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { ActionTypes, RootStateType, RootStore } from './redux/store';

type AppType = {
  store: RootStore
  state: RootStateType
  dispatch: (action: ActionTypes) => void
}

function App(props: AppType) {

  console.log(props.store.getState().profilePage.posts)
  let newSms = props.store.getState().dialogPage.newSms
  let newValue = props.store.getState().profilePage.newValue
  let links = props.store.getState().headerBlock.headerLink
  let dialogsName = props.store.getState().dialogPage.dialogs
  let dialogsMessages = props.store.getState().dialogPage.dialogMessages
  let profilePosts = props.store.getState().profilePage.posts
  return (
    <BrowserRouter>
      <div className="App">
        <Header links={links} />
        <Navbar />

        <Route path='/dialogs' render={() => <Dialogs dialogsName={dialogsName} dialogsMessages={dialogsMessages} newSms={newSms} dispatch={props.dispatch} />} />
        <Route path={'/profile'} render={() => <Profile
          profilePosts={profilePosts}
          // addPost={props.store.addPost.bind(props.store)}                                      благодаря диспачу не нужно тащить в себе все эти функции
          // changeTextPost={props.store.changeTextPost.bind(props.store)}
          updateText={newValue}
          // deletePost={props.store.deletePost.bind(props.store)}
          // addLike={props.store.addLike.bind(props.store)}
          dispatch={props.dispatch} />} />

      </div>
    </BrowserRouter>
  );
}

export default App;
