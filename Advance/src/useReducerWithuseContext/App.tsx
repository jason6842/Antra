import { createContext, useContext, useReducer } from 'react';
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

// Goal: Maintain a Count state in App.js and modify it from all children components - A, D, F
type CountContextType = {
    countState: number,
    countDispatch: React.Dispatch<Action>
}
export const CountContext = createContext<CountContextType | null>(null);

type State = number

type Action = 'increment' | 'decrement' | 'reset';

const initialState = 0

function reducer(state: State, action: Action) {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function ReducerAndContextApp() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
        Count: {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
    </div>
    </CountContext.Provider>
  )
}
