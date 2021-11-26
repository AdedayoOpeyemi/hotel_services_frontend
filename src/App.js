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
import Signup from './components/Signup';
import Sidebar from './components/Sidebar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(defaultService);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {['/', '/login'].map((path) => <Route exact path={path} element={<LoginForm />} key={path} />)}
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<Service />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/newservice" element={<NewService />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
