import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ERROR,
} from "../actions/types";

const initialState = {
  products: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
