import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import reducer, {initialState} from './context/reducer/reducer'
import {StateProvider} from './context/stateprovider/StateProvider'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
       <App />
       </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
