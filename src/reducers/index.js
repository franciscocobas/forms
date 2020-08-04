import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loginReducer from './loginReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  loginReducer
})

export default createRootReducer;