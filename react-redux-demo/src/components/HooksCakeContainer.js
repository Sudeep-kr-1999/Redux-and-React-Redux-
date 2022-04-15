import React from "react";

// useSelector is a hook the react-redux library provide which act as the close equivalent to the mapStateToProps() function we have already seen
import { useSelector, useDispatch } from "react-redux";
// import { combineReducers } from 'redux';
import { buyCake } from "../redux";

function HooksCakeContainer() {
  // const numofCakes=useSelector((state)=>state.numofCakes)
  const numofCakes = useSelector((state) => state.cake.numofCakes);

  // for combineReducers
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes-{numofCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buyCake</button>
    </div>
  );
}

export default HooksCakeContainer;

// Note:-----------
// useSelector is a hook the react-redux library provide which act as the close equivalent to the mapStateToProps() function we have already seen
// this hook accept a function as its parameter and this function is called as the selector function :-- the selector function recieves redux state as the arguments the function
// can then return a value .

// Note:---------------------------------
// the useSelector hook return whatever is returned by the selector function

// ====================================================================================================================================================================

// useDispatch hook is used to dispatch an action with react redux
// useDispatch hook return reference to the dispatch() function from the redux store

// for more go through react redux documentation usage warnings
