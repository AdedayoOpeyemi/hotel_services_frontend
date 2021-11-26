/* eslint-disable */
import axios from 'axios';

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP';
const LOGOUT = 'LOGOUT;'

const port = '3000';
const rootUrl = `http://localhost:${port}`;

const logOut = (dispatch) => {
  localStorage.clear();

  dispatch({
    type: LOGOUT,
  })
}

const getUser = (username) => (dispatch) => {
  return axios.get(`${rootUrl}/api/v1/users`, { params: { name: username } })
    .then((response) => {
      const { data } = response;
      dispatch(
        {
          type: LOGIN,
          userId: data.user_id,
          name: username,
          message: data.message,
        },
      );

      localStorage.setItem('current_user', data.user_id);
    }).catch((error) => {
      dispatch(
        {
          type: LOGIN,
          name: null,
          userId: null,
          message: error.response.data.errors.reduce((acc, error) => `${acc}, ${error}`, ''),
        },
      );
    });
};

const postUser = (username) => async (dispatch) => {
  axios.post(`${rootUrl}/api/v1/users`, { name: username })
    .then((response) => {
      const { data } = response;

      dispatch(
        {
          type: SIGNUP,
          userId: data.user_id !== (undefined || null) ? data.user_id : null,
          message: data.message,
        },
      );
    }).catch((error) => {
      dispatch(
        {
          type: SIGNUP,
          userId: null,
          message: error.response.data.errors.reduce((acc, error) => `${acc}, ${error}`, ''),
        },
      );
    });
};

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {
          username: action.name,
          userId: action.userId,
          message: action.message,
        },
      };
    case SIGNUP:
      return {
        ...state,
        user: {
          userId: action.userId,
          message: action.message,
        },
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default user;
export { getUser, postUser, logOut };

