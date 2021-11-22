import axios from 'axios';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ALREADY_LOGGED = 'ALREADY_LOGGED';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const port = '3000';
const rootUrl = `http://localhost:${port}`;

const checkLogin = (dispatch) => {
  const user = localStorage.getItem('current_user');

  if (user) {
    dispatch(
      {
        type: ALREADY_LOGGED,
        message: 'User already logged',
      },
    );

    return 'User already logged in';
  }

  return 'No user Logged';
};

const loginUser = (username) => async (dispatch) => {
  if (checkLogin(dispatch) === 'User already logged in') return 'User already logged in';

  axios.get(`${rootUrl}/api/v1/users`, { params: { name: username } })
    .then((response) => {
      const { data } = response;

      console.log(data);

      if (true) { // TODO: change to data.data.code === '202' when non hard-coded data is used
        dispatch(
          {
            type: LOGIN_SUCCESS,
            content: data.user_id,
            message: data.message,
          },
        );

        return 'Login Succesful';
      }

      return 'Login Failed';
    }).catch((error) => {
      console.log(error.message);

      axios.post(`${rootUrl}/api/v1/users/`).then((response) => {
        const { data } = response;

        if (data.data.code === '201') {
          dispatch(
            {
              type: SIGNUP_SUCCESS,
              content: data.data.attributes.user_id,
              message: data.data.attributes.message,
            },
          );

          return 'Signup Succesful';
        }

        return 'Signup Failed';
      }).catch((error) => {
        console.log(error.message);

        dispatch({
          type: LOGIN_ERROR,
          message: 'Login was not succesful',
        });
      });
    });

  return 'Login was not succesful';
};

const user = (state = [], action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(LOGIN_SUCCESS, action.content);
      localStorage.setItem('current_user', action.content);
      return {
        content: action.content,
        message: action.message,
      };
    case SIGNUP_SUCCESS:
      return {
        content: action.content,
        message: action.message,
      };
    case ALREADY_LOGGED:
      console.log(ALREADY_LOGGED);
      return state;
    case LOGIN_ERROR:
      return {
        message: action.message,
      };
    default:
      console.log('DEFAULT');
      return state;
  }
};

export default user;
export { checkLogin, loginUser };
