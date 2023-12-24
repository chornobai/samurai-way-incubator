import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import { RootStateType, RootStore } from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

let rerenderDom = (state: RootStateType) => {

  ReactDOM.render(
    <BrowserRouter>

      < App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)} />,

    </BrowserRouter>,
    document.getElementById('root')
  );
}
let state = store.getState()

rerenderDom(state)
store.subscribe(() => {
  let state = store.getState()
  rerenderDom(state)
})

