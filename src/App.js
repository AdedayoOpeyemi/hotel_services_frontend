import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import store from './redux/configurateStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        < Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
