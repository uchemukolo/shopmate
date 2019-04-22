import axios from 'axios';
import { SIGNUP_USER, SIGNUP_USER_ERROR } from '../types';
import setAuthToken from '../../utils/setAuthorizationToken';


export const signupUser = user => ({
  type: SIGNUP_USER,
  user
});


export const signupUserFailure = error => ({
  type: SIGNUP_USER_ERROR,
  error
});

export const userSignupRequest = userData => dispatch => axios.post(
  'https://backendapi.turing.com/customers',
  userData
)
  .then((response) => {
    console.log(response, "Response");
    const { accessToken } = response.data;
    localStorage.setItem('TurningToken', accessToken);
    setAuthToken(accessToken);
    dispatch(signupUser(response.data));
  }, (error) => {
    dispatch(signupUserFailure(error.response));
    console.log(error);
  });
