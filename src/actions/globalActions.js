import { SET_MENU_VISIBILITY } from './types';

const setMenuVisibility = (visible) => ({
  type: SET_MENU_VISIBILITY,
  payload: visible
});

export {
  setMenuVisibility
};