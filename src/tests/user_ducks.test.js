/**
 * @jest-environment jsdom
 */

import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import user, {
  getUser, postUser,
} from '../redux/user/user_duck';
import { testStore } from '../redux/configurateStore';

const mock = new MockAdapter(axios);

const port = '3000';
const rootUrl = `http://localhost:${port}`;

const defaultState = {
  user: {
    username: '',
    userId: -1,
    messages: [],
  },
};

const store = testStore(defaultState);

test('DEFAULT: should return the default state', () => {
  expect(user(undefined, { type: 'NON_EXISTANT' })).toStrictEqual(defaultState);
});

test('GET: should set a user with name, userId, and the login message', () => {
  const username = 'John';
  mock.onGet(`${rootUrl}/api/v1/users`, { params: { name: username } }).reply(202, {
    message: 'User Logged In',
    user_id: 1,
  });

  store.dispatch(getUser(username)).then(() => {
    expect(store.getState().user).toBe({
      user: username,
      userId: 1,
      message: 'User Logged In',
    });
  });
});

test('POST: should set a new user with signup message', () => {
  const username = 'Bruce';
  mock.onPost(`${rootUrl}/api/v1/users`, { name: username }).reply(201, {
    message: 'User was successfully created',
    user_id: 2,
  });

  store.dispatch(postUser(username)).then(() => {
    expect(store.getState().user).toBe({
      message: 'User was successfully created',
      user_id: 2,
    });
  });
});
