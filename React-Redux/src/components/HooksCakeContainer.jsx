import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
  // same as mapStateToProps()
  // this state variable is the entire Redux store state
  const numOfCakes = useSelector(state => state.cake.numOfCakes) // accepts a function as parameter
  // same as mapDispatchToProps()
  const dispatch = useDispatch() // returns a reference of the dispatch function from the redux store

  return (
    <div>
        <h2>Num of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer