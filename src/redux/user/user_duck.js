import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

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
        content: 'User already logged',
      },
    );

    return 'User already logged in';
  }

  return 'No user Logged';
};

const loginUser = (username) => async (dispatch) => {
  if (checkLogin(dispatch) === 'User already logged in') return 'User already logged in';

  const mock = new MockAdapter(axios);

  mock.onGet(`${rootUrl}/api/v1/users?name=${username}`).reply({ data: { code: '202', attributes: { user_id: '1', message: 'User Logged In' } } });

  const loginCall = axios.get(`${rootUrl}/api/v1/users?name=${username}`).then((response) => {
    const { data } = response;

    if (data.data.code === '202') {
      dispatch(
        {
          type: LOGIN_SUCCESS,
          content: data.data.attributes.user_id,
          message: data.data.attributes.message,
        },
      );

      return 'Login Succesful';
    }

    return 'Login Failed. NonExistant User?';
  });

  if (loginCall === 'Login Succesful') return 'Login Succesful';

  const signInCall = axios.post(`${rootUrl}/api/v1/users/`).then((response) => {
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
  });

  if (signInCall === 'Signup Succesful') return 'Signup Succesful';

  dispatch({
    type: LOGIN_ERROR,
    message: 'Login was not succesful',
  });

  return 'Login was not succesful';
};

// 1. Checkear si hay un usuario logueado. Si esta logueado redirigir a servicios
// 2. Si no esta logueado, preguntar en la base de datos
// 2.5 si falla la llamada, poner el mensaje de que fallo
// 3. Si la respuesta es que existe, usar ese usuario
// 4. Si la respuesta es que no existe, crear un nuevo usuario (con post)
// 5. redirigir a servicios

const user = (state = [], action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
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
      return {
        message: action.message,
      };
    case LOGIN_ERROR:
      return {
        message: action.message,
      };
    default:
      return state;
  }
};

export default user;
export { checkLogin, loginUser };
