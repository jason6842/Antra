import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux' // buyCake from cakeAction.jsx


function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

/* 
  props = { numOfCakes: 10, buyCake: buyCake callback}
*/
// connect function connects react component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)