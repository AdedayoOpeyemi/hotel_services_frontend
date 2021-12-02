/* eslint-disable */
import axios from 'axios';

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP';
const LOGOUT = 'LOGOUT;'

const rootUrl = 'https://hotel-services-2021.herokuapp.com/';

const logOut = (dispatch) => {
  localStorage.clear();

  dispatch({
    type: LOGOUT,
  })
}

const defaultState = {
  user: {
    username: '',
    userId: -1,
    messages: [],
  }
};

const loadUser = (dispatch) => {
  const newUser = JSON.parse(localStorage.getItem('current_user'));
  dispatch({
    type: LOGIN,
    ...newUser,
  });
}

const getUser = (username) => (dispatch) => {
  return axios.get(`${rootUrl}/api/v1/users`, { params: { name: username } })
    .then((response) => {
      const { data } = response;
      const newUser = {
        userId: data.user_id,
        name: username,
        message: data.message,
      };
      dispatch(
        {
          type: LOGIN,
          ...newUser,
        },
      );

      localStorage.setItem('current_user', JSON.stringify(newUser));
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
  try {
    const { data } = await axios
          .post(`${rootUrl}/api/v1/users`, { name: username });
    dispatch(
      {
        type: SIGNUP,
        userId: data.user_id || -1,
        message: data.message,
      },
    );
  } catch (error) {
    dispatch(
      {
        type: SIGNUP,
        userId: -1,
        message: error.response.data.errors.reduce((acc, error) => `${acc}, ${error}`, ''),
      },
    );
  }
};

const user = (state = defaultState, action) => {
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
      return defaultState;
    default:
      return state;
  }
};

export default user;
export { getUser, postUser, logOut, loadUser };
