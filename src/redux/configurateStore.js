import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user/user_duck';
import services from './service/service_duck';
import reservations from './reservation/reservation_duck';

const reducer = combineReducers({
  user,
  services,
  reservations,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const testStore = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleWare(reducer, initialState);
};

export default store;
export { reducer, testStore };
