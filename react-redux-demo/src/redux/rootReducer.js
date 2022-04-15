import { combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer'
import reducer from './User/UserReducer';
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user:reducer 
})

export default rootReducer;

// Note:--------------(very very important)
// here we use sepreate reducer so the state object will also have to manage seprately
// isliye state.numofCakes or state.numOfIceCreams ke jagah par state.cake.numofCakes and state.iceCream.numOfIceCreams hoga takki dono apne apne reference ke reducer ke hisab se change
// kr sake jo humne root reducer mein key mein reference bnaye h reducer ke liye


// ===============================================================================================================================================
// for USER DATA FROM THE API



// Note:---------------- packages needed for fetching data from the endpoint in the react-redux 
// PS D:\COMPUTER LANGUAGES FOLDER\REACT AND REACT NATIVE\REACT\REACT REDUX TUTORIAL\react-redux-demo> npm install redux-thunk
// PS D:\COMPUTER LANGUAGES FOLDER\REACT AND REACT NATIVE\REACT\REACT REDUX TUTORIAL\react-redux-demo> npm install axios