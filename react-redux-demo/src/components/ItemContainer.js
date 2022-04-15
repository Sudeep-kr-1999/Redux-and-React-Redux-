import React from 'react'
import {connect}from 'react-redux';
import { buyCake, buyIcecream } from '../redux';
function ItemContainer(props) {
    return (
        <div>
            <h2>Item -{props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}


// ==================================================================================================

// mapStateToProps() can take 2 paramters :
// first parameter is the redux state
// // second parameter is the props of the Component itself which refer to by convenction ownProps 
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    // This is the output of this console 
    // {cake: true}

    const itemState= ownProps.cake ?state.cake.numofCakes: state.iceCream.numOfIceCreams ;
    return {
        item:itemState
    }

}

// =========================================================================================================
// mapDispatchToProps() can take 2 parameters :
// first parameter is the redux dispatch
// second parameter is the ownProps
const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFucntion=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIcecream())
    return{
        buyItem:dispatchFucntion
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);

// Note:----------------------
// note:------- if we donot need mapStateToProps in the connect means we only want to dispatch but not want to do anything with state we should pass (null) as the firstargument 
                // in connect function 