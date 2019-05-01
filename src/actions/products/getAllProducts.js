import axios from 'axios';
import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_ERROR } from '../types';

export const getAllProducts = payload => ({
  type: GET_ALL_PRODUCTS,
  payload
});


export const getAllProductsFailure = payload => ({
  type: GET_ALL_PRODUCTS_ERROR,
  payload
});

export const userLoginRequest = () => dispatch => axios.get(
  'https://backendapi.turing.com/products',
)
  .then((response) => {
    console.log(response, "Response");
    const { accessToken } = response.data;
    localStorage.setItem('TurningToken', accessToken);
    dispatch(getAllProducts(response.data));
    return response.data;
  }, (error) => {
    dispatch(getAllProductsFailure(error.response.data));
    return error.response.data;
  });