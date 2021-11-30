import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import user from './user/user_duck';
import services from './service/service_duck';
import reservations from './reservation/reservation_duck';

const reducer = combineReducers({
  user,
  services,
  reservations,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const testStore = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleWare(reducer, initialState);
};

export default store;
export { reducer, testStore };
