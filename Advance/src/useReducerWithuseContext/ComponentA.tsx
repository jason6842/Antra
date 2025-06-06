import React, { useContext } from 'react'
import { CountContext } from './App'

export default function ComponentA() {
  const countContext = useContext(CountContext);
  if (!countContext) return null;
  return (
    <div>
        ComponentA: {countContext.countState} {"  "}
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}
