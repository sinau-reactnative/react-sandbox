import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseNumber, decreaseNumber } from "../../store/actions/counter";

const Counter = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();

  function increment() {
    dispatch(increaseNumber());
  }

  function decrement() {
    dispatch(decreaseNumber());
  }

  return (
    <Fragment>
      <h1>{number}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </Fragment>
  );
};

export default Counter;
