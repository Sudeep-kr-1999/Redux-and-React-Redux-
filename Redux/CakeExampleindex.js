// console.log("Redux tutorial");
// If We use React we may use ES-6 Syntax to import 
// import redux from 'redux';



// here simple Node.js import as require 
const redux = require('redux');
const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE';

// ============================================================================
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }

}

// Action:----- An action is an object with type property
// Action Creator:-- Function that return an action

// ============================================================================

// (previousState,action)=>newState;
const initialState = {
        numOfCakes: 10
    }
    // ============================================================================

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "BUY_CAKE":
                return {...state, numOfCakes: state.numOfCakes - 1 }
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

unsubscribe();


// output: -- -- -- -- -- -- -

// initial state :  { numOfCakes: 10 }
// Updated State :  { numOfCakes: 9 }
// Updated State :  { numOfCakes: 8 }
// Updated State :  { numOfCakes: 7 }