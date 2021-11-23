import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Services from './components/Services';
import Reserve from './components/Reserve';
import { checkLogin } from './redux/user/user_duck';
import Reservations from './components/Reservations';
import NewService from './components/NewService';
import Delete from './components/Delete';
import Service from './components/Service';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin);
    // dispatch(loginUser);
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service" element={<Service />} />
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
