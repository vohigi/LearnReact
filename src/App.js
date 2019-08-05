import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Main from './components/main/Main/Main';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
