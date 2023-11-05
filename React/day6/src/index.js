import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.scss';
import App from '@/App';

import { RouterProvider } from 'react-router-dom'
import router from '@/router';
import { Provider } from 'react-redux';
import store from './store';

import 'normalize.css'  //初始話css，消除默認設置

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}>

        <App />
      </RouterProvider>
    </Provider>
);
