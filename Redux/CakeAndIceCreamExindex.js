// Using single reducer :-----------------------------------------

// If We use React we may use ES-6 Syntax to import 
// import redux from 'redux';

// here simple Node.js import as require 
const redux = require('redux');


const createStore = redux.createStore;


// Action:----- An action is an object with type property
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = "BUY_ICECREAM";

// ============================================================================
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }

}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: "Second Redux Action"
    }
}


// Action Creator:-- Function that return an action

// ============================================================================

// (previousState,action)=>newState;
const initialState = {
        numOfCakes: 10,
        numOfIceCreams: 20
    }
    // ============================================================================

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "BUY_CAKE":
                return {...state, numOfCakes: state.numOfCakes - 1 }
            case "BUY_ICECREAM":
                return {...state, numOfIceCreams: state.numOfIceCreams - 1 }
            default:
                return state;
        }
    }
    // ============================================================================
const store = createStore(reducer);
console.log("initial state : ", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("Updated State : ", store.getState())
})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

// same as the name of the variable return from store.subscribe()
unsubscribe();

// output:----------
// initial state :  { numOfCakes: 10, numOfIceCreams: 20 }
// Updated State :  { numOfCakes: 9, numOfIceCreams: 20 }
// Updated State :  { numOfCakes: 8, numOfIceCreams: 20 }
// Updated State :  { numOfCakes: 7, numOfIceCreams: 20 }
// Updated State :  { numOfCakes: 7, numOfIceCreams: 19 }
// Updated State :  { numOfCakes: 7, numOfIceCreams: 18 }