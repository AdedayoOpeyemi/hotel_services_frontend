import React from 'react';

const LoginForm = () => {
  const inputTextField = React.createRef();

  const printInput = (name) => {
    console.log(name);
  };

  return (
    <div className="mb-3">
      <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" placeholder="User Name" ref={inputTextField} />
      <button className="btn btn-primary" type="submit" onClick={() => printInput(inputTextField.current.value)}>Button</button>
    </div>
  );
};

export default LoginForm;
