export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';
export const FETCH_ALL_PRODUCTS_SUCCESS = 'FETCH_ALL_PRODUCTS_SUCCESS';
export const FETCH_ALL_PRODUCTS_ERROR = 'FETCH_ALL_PRODUCTS_ERROR';

export const fetchAllProducts = () => {
   return {
      type: FETCH_ALL_PRODUCTS,
   };
};

export const fetchAllProductsSuccess = (records) => {
   return {
      type: FETCH_ALL_PRODUCTS_SUCCESS,
      records
   };
};

export const fetchAllProductsError = (error) => {
   return {
      type: FETCH_ALL_PRODUCTS_ERROR,
      error
   };
};