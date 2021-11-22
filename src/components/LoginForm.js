import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/user/user_duck';

const LoginForm = () => {
  const inputTextField = React.createRef();

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const dispatchLogin = (userInput) => {
    dispatch(loginUser(userInput));

    console.log(user);

    localStorage.setItem('current_user', user.content);
  };

  const loginToServices = (userInput) => <button className="btn btn-primary" type="submit" onClick={() => dispatchLogin(userInput)}>Button</button>;

  return (
    <div className="mb-3">
      <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" placeholder="User Name" ref={inputTextField} />
      {loginToServices(inputTextField.current?.value)}
    </div>
  );
};

export default LoginForm;
