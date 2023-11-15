import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <Navbar/>
     
    <Route path={'/dialogs'} component={Dialogs}/>
    <Route path={'/profile'} component={Profile}/>
  
      </div>
     </BrowserRouter>
  );
}

export default App;
