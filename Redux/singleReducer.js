// A store that holds the state of your application.
// An action that describes the changes in the state of the application.
// A reducer which actually carries out the state transition depending on the action.
const redux = require('redux');
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

// action creator is a function that returns an action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICE_CREAM
    }
}

// (previousState, action) => newState

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

// Application State
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state;
    }
}

// store holds application state
const store = createStore(reducer);

// current state of the store
console.log('Initial state', store.getState());

// allows the app to subscribe to changes in the store
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState())); // returns the unsubscribe function

// store provides dispatch method to update the state
store.dispatch({type: BUY_CAKE}); // same
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// unsubscribe from the store
unsubscribe();
