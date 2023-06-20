import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {Increment_number,Decrement_number} from '../Action/counterAction'
export default function CouterComponent() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const increment = () => {
    dispatch({type:Increment_number});
  };
  const decrement = () => {
    dispatch({type:Decrement_number});
  };
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button>Stop</button>
    </div>
  );
}
