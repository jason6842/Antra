import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
    <div>
        <h2>Num of ice creams - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

function mapStateToProps(state) {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

function mapDispatchToProps(dispatch) {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
