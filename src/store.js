import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createRootReducer from './reducers';
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  return createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      )
    )
  )
};