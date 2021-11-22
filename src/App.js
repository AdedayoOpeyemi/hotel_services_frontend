import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import store from './redux/configurateStore';
import { checkLogin } from './redux/user/user_duck';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(checkLogin));

  return (
    <Provider store={store}>
      <div className="App">
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
