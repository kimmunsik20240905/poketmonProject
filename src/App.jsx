import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Router from './shared/Router';
import store from './redux/config/configStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   


function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
      <ToastContainer />
    </>
  )
}

export default App
