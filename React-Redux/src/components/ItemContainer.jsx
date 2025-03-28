import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
}

// ownProps - the props that the component has
function mapStateToProps(state, ownProps) {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
  
  return {
    item: itemState
  }
}

// <ItemContainer cake /> === <ItemContainer cake={true} />
function mapDispatchToProps(dispatch, ownProps) {
    const dispatchFn = ownProps.cake ? () => buyCake() : () => buyIceCream();
    return {
        buyItem: () => dispatch(dispatchFn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)

// if you don't have a mapStateToProps, but need to connect mapDispatchToProps
// export default connect(null, mapDispatchToProps)(ItemContainer)

