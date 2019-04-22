import axios from 'axios';
import { LOGIN_USER, LOGIN_USER_ERROR, LOGOUT_USER } from '../types';
import setAuthToken from '../../utils/setAuthorizationToken';


export const loginUser = user => ({
  type: LOGIN_USER,
  user
});


export const loginUserFailure = error => ({
  type: LOGIN_USER_ERROR,
  error
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('TurningToken');
  dispatch({
    type: LOGOUT_USER
  });
};
export const userLoginRequest = loginData => dispatch => axios.post(
  'https://backendapi.turing.com/customers/login',
  loginData
)
  .then((response) => {
    console.log(response, "Response");
    const { accessToken } = response.data;
    localStorage.setItem('TurningToken', accessToken);
    setAuthToken(accessToken);
    dispatch(loginUser(response.data));
  }, (error) => {
    dispatch(loginUserFailure(error.response));
    console.log(error);
  });
