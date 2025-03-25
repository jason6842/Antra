import React, { useReducer, useState } from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

type State = {
    count: number;
}

type Action = | { type: typeof ACTIONS.INCREMENT } | { type: typeof ACTIONS.DECREMENT };

function reducer(state: State, action: Action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1}
        case ACTIONS.DECREMENT:
            return { count: state.count - 1}
        default:
            return state
    }
}

export default function ReducerApp() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [count, setCount] = useState(0);

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
    </div>
  )
}
