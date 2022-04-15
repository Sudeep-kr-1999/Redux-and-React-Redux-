import React from 'react'
import { buyIcecream } from '../redux';

// to connect the below 2 function with react library 
import {connect} from 'react-redux';

function iceCreamContainer(props) {
    // console.log(props);
    return (
        <div>
           <h2>No. Of IceCream-{props.numOfIceCreams}</h2>
           <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}


// here redux state is passed as state argument in mapStateToProps() function  
// numofCakes prop mein state.numofCakes map ho gyi 
const mapStateToProps=(state)=>{
    return{
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}


// here redux dispatch function is paases as dispatch argument in mapDispatchToProps() function 
//.buyIcecream prop mein dispatch.buyIcecream()) map ho gyi 
const mapDispatchToProps=(dispatch)=>{
    return{
    buyIcecream:()=>dispatch(buyIcecream())
    }

}

// it will connect mapStateToProps and mapDispatchToProps with the iceCreamContainer 
// the connect function basically map the function to the Component props 
export default connect(mapStateToProps,mapDispatchToProps)(iceCreamContainer);
