// using multiple reducers

const redux = require('redux');

const combineReducers = redux.combineReducers;
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
// const initialState = {
//         numOfCakes: 10,
//         numOfIceCreams: 20
//     }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
        numOfIceCreams: 20
    }
    // ============================================================================

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {...state, numOfCakes: state.numOfCakes - 1 }
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
        switch (action.type) {
            case "BUY_ICECREAM":
                return {...state, numOfIceCreams: state.numOfIceCreams - 1 }
            default:
                return state;
        }
    }
    // ============================================================================


// note:------createStore can accept only one reducer at a time 
// rootReducer:---- it is convenctional name when we are using multiple reducer and combine them 
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer);
console.log("initial state : ", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("Updated State : ", store.getState())
})


// Note:------- when we dispatch an action both the reducers accept the action one of them execute and other will ignore as per the condition provided 
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

// same as the name of the variable return from store.subscribe()
unsubscribe();

// output:---------------
// gives the global object with cake and iceCream as corresponding element key define in the combineReducers() object 

// initial state :  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
// Updated State :  { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
// Updated State :  { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
// Updated State :  { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
// Updated State :  { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
// Updated State :  { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 18 } }