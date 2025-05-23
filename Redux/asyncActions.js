const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk');
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            };
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

const fetchUsers = () => {
    // doesn't have to be pure, allows side-effects such as async api calls
    return function(dispatch) {
        dispatch(fetchUsersRequest()); // sets loading to true
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the array of users
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                // error.message
                dispatch(fetchUserFailure(error.message));
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware.thunk));
store.subscribe(() => { console.log(store.getState())});
store.dispatch(fetchUsers());