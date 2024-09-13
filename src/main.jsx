import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { Calendario } from './Calendario';
import { store } from './store';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Calendario />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
