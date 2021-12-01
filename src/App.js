import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Services from './components/Services';
import Reserve from './components/Reserve';
import Reservations from './components/Reservations';
import NewService from './components/NewService';
import Delete from './components/Delete';
import Service from './components/Service';
import { defaultService } from './redux/service/service_duck';
import MainPage from './components/MainPage';
import Signup from './components/Signup';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(defaultService);
  }, []);

  return (
    <div className="App container-fluid p-0">
      <BrowserRouter>
        <Routes className="col-md-9">
          {['/', '/login'].map((path) => <Route exact path={path} element={<LoginForm />} key={path} />)}
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/services"
            element={(<MainPage type="content"><Services /></MainPage>)}
          />
          <Route
            path="/services/:id"
            element={(<MainPage type="content"><Service /></MainPage>)}
          />
          <Route
            path="/reserve"
            element={(<MainPage type="form"><Reserve /></MainPage>)}
          />
          <Route
            path="/reservations"
            element={(<MainPage type="content"><Reservations /></MainPage>)}
          />
          <Route
            path="/newservice"
            element={(<MainPage type="form"><NewService /></MainPage>)}
          />
          <Route
            path="/delete"
            element={(<MainPage type="content"><Delete /></MainPage>)}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
