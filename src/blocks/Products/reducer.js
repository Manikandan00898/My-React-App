import { FETCH_ALL_PRODUCTS, FETCH_ALL_PRODUCTS_SUCCESS, FETCH_ALL_PRODUCTS_ERROR } from './action'

const initialState = {
   productsData: [],
   loading: false,
   error: false,
   success: false
};



export default (state = initialState, { type, records }) => {
   switch (type) {
      case FETCH_ALL_PRODUCTS:
         return {
            ...state,
            loading: true,
            error: false,
            success: false
         };
      case FETCH_ALL_PRODUCTS_SUCCESS:
         return {
            ...state,
            loading: false,
            success: true,
            error: false,
            productsData: [state.productsData, ...records],
         };
      case FETCH_ALL_PRODUCTS_ERROR:
         return {
            ...state,
            loading: false,
            success: false,
            error: true,
            productsData: []
         };
      default:
         return state;
   }
};