import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import user, {
  getUser, postUser,
} from '../redux/user/user_duck';
import { testStore } from '../redux/configurateStore';
import './LocalStorageMock';

const mock = new MockAdapter(axios);

const port = '3000';
const rootUrl = `http://localhost:${port}`;

const defaultState = {
  user: {
    user: {
      username: '',
      userId: -1,
      messages: [],
    },
  },
};

let store = testStore(defaultState);

beforeEach(() => {
  mock.reset();
  store = testStore(defaultState);
});

test('DEFAULT: should return the default state', () => {
  expect(user(undefined, { type: 'NON_EXISTANT' })).toEqual(defaultState.user);
});

test('GET: should set a user with name, userId, and the login message', async () => {
  const username = 'John';
  mock.onGet(`${rootUrl}/api/v1/users`, { params: { name: username } }).reply(202, {
    message: 'User Logged In',
    user_id: 1,
  });

  await store.dispatch(getUser(username)).then(() => {
    expect(store.getState().user.user).toEqual({
      username: username,
      userId: 1,
      message: 'User Logged In',
    });
  });
});

test('POST: should set a new user with signup message', async () => {
  const username = 'Bruce';
  mock.onPost(`${rootUrl}/api/v1/users`).reply(201, {
    message: 'User was successfully created',
    user_id: 2,
  });

  await store.dispatch(postUser(username)).then(() => {
    expect(store.getState().user.user).toEqual({
      message: 'User was successfully created',
      userId: 2,
    });
  });
});
