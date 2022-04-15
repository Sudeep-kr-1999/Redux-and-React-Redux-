import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./UserActionTypes"
import axios from 'axios';
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// ====================================================================================================================================================================================
// this is an action creator: with the help of thunk middleware fetchUsers() will return a function instead of an action , and most importantly it doesnot have to be pure it can 
//allow sideEffect like Async calls etc ....!

// it also recieve dispatch method as its argument 


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            // note:----- response.data is the array of users 
            const users=response.data;
            dispatch(fetchUsersSuccess(users))
        }).catch((error)=>{
            const errorMsg=error.message
            dispatch(fetchUsersFailure(errorMsg))
        })

    }

}