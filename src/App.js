import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Services from './components/Services';
import Reserve from './components/Reserve';
import { checkLogin } from './redux/user/user_duck';
import Reservations from './components/Reservations';
import NewService from './components/NewService';
import Delete from './components/Delete';
import { getServices } from './redux/service/service_duck';

function App() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(checkLogin);
    dispatch(getServices);
    // dispatch(loginUser);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/services" element={<Services services={services} />} />
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
