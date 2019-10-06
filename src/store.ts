import { createStore, applyMiddleware } from 'redux';
import rootReducers from './redux/reducers';
import { createLogger } from 'redux-logger';

const middleware = [];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;
