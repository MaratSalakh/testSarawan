import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { Provider } from 'react-redux';

import App from './App.jsx'
import store from './slices/store.js';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
