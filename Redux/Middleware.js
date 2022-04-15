// using multiple reducers

const redux = require('redux');

// redux-logger is a middleware 
const reduxLogger = require('redux-logger');
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();


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

// we can pass as may as number of middleware we want 
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state : ", store.getState());

// we remove all console log as we have logger middleware to do this work 
const unsubscribe = store.subscribe(() => {})


// Note:------- when we dispatch an action both the reducers accept the action one of them execute and other will ignore as per the condition provided 
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

// same as the name of the variable return from store.subscribe()
unsubscribe();

// ==========================================================================================================================
// output:---------------
// gives all the logs with the help of logger middleware 

// PS D:\COMPUTER LANGUAGES FOLDER\REACT AND REACT NATIVE\REACT\REACT REDUX TUTORIAL\Redux> node Middleware
// initial state :  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
//  action BUY_CAKE @ 13:43:28.735
//    prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
//    action     { type: 'BUY_CAKE', info: 'First Redux Action' }
//    next state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
//  action BUY_CAKE @ 13:43:28.763
//    prev state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
//    action     { type: 'BUY_CAKE', info: 'First Redux Action' }
//    next state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
//  action BUY_CAKE @ 13:43:28.766
//    prev state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
//    action     { type: 'BUY_CAKE', info: 'First Redux Action' }
//    next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
//  action BUY_ICECREAM @ 13:43:28.769
//    prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
//    action     { type: 'BUY_ICECREAM', info: 'Second Redux Action' }
//    next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
//  action BUY_ICECREAM @ 13:43:28.773
//    prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
//    action     { type: 'BUY_ICECREAM', info: 'Second Redux Action' }
//    next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 18 } }