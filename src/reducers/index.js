import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loginReducer from './loginReducer';
import globalReducer from './globalReducers';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  loginReducer,
  globalReducer
})

export default createRootReducer;