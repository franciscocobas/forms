import { LOGIN } from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
  userToken: '',
  user: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};