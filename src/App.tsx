import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import {state} from './redux/store';



function App() {
  let links = state.headerBlock.headerLink
  let dialogsName = state.dialogPage.dialogs
  let dialogsMessages = state.dialogPage.dialogMessages
  let profilePosts = state.profilePage.posts
  return (
    <BrowserRouter>
      <div className="App">
      <Header links={links}/>
      <Navbar/>
  
    <Route path='/dialogs' render={() => <Dialogs dialogsName={dialogsName} dialogsMessages = {dialogsMessages}/>}/>
    <Route path={'/profile'} render={()=> <Profile profilePosts={profilePosts} />}/>
 
      </div>
     </BrowserRouter>
  );
}

export default App;
