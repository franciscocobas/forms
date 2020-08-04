import { LOGIN } from './types';
import { push } from 'connected-react-router';

const login = ({ email, password }) => (dispatch) => {
  const user = { fullname: 'Francisco Cobas', email: 'fcobas@vairix.com', };
  dispatch({
    type: LOGIN,
    payload: user
  });
  dispatch(push('/'));
};

export {
  login
}