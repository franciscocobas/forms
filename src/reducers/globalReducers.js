import { SET_MENU_VISIBILITY } from '../actions/types';

const INITIAL_STATE = {
  menuVisible: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MENU_VISIBILITY:
      return { ...state, menuVisible: action.payload };
    default:
      return state;
  }
};