import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";
import axios from 'axios'

export function fetchUsersRequest () {
    return {
        type: FETCH_USERS_REQUEST
    };
};

export function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

export function fetchUsersFailure(error) {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    };
};

// does not have to be pure, and is allowed to have side-effects such as async function calls
export function fetchUsers() {
    return function (dispatch) {
        dispatch(fetchUsersRequest()); // sets loading to true
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log("RESPONSE: ", response);
                const users = response.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg));
            })
    }
}