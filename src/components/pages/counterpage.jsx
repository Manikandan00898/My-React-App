import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../blocks/counter/action';

const CounterPage = () => {
   const counter = useSelector((state) => state.counterPage.counter);
   const dispatch = useDispatch();

   console.log('counter', counter);
  return (
    <div>
      <p>Count : {counter}</p>
      <button onClick={() => dispatch(incrementCounter())}>+</button>
      <button onClick={() => dispatch(decrementCounter())}>-</button>
    </div>
  );
};

export default CounterPage;