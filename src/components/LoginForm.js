import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/user/user_duck';

const LoginForm = () => {
  const dispatch = useDispatch();

  const inputTextField = useRef('');

  const loginToServices = (userInput) => <button className="btn btn-primary" type="submit" onClick={() => dispatch(loginUser(userInput))}>Button</button>;

  return (
    <div className="mb-3">
      <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" placeholder="User Name" ref={inputTextField} />
      {loginToServices(inputTextField.current?.value)}
    </div>
  );
};

export default LoginForm;
