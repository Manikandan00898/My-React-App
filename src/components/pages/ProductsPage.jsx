import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../blocks/Products/action';

import { styled } from '@mui/material/styles';

const ProductsPage = () => {
  const productsData = useSelector((state) => state.productsPage.productsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div>
      <p>List of Products Description</p>
      {productsData.map((val, index) => {
        return <p key={index}>{val.body}</p>
      })}
    </div>
  );
};

export default ProductsPage;