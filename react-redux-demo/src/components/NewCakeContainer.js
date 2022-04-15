import React,{useState} from 'react'
import { buyCake } from '../redux';

// to connect the below 2 function with react library 
import {connect} from 'react-redux';

function NewCakeContainer(props) {

    // for payload concept merge with original concept 
    const [number,setNumber]=useState(1);
    // console.log(props);
    return (
        <div>
           <h2>No. Of Cakes-{props.numofCakes}</h2>
           <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
           <button onClick={()=>props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}


// here redux state is passed as state argument in mapStateToProps() function  
// numofCakes prop mein state.numofCakes map ho gyi 
const mapStateToProps=(state)=>{
    return{
        // numofCakes:state.numofCakes

        // for combine reducers 
        numofCakes:state.cake.numofCakes
    }
}


// here redux dispatch function is paases as dispatch argument in mapDispatchToProps() function 
// buyCake prop mein dispatch(buyCake()) map ho gyi 

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         buyCake:()=>dispatch(buyCake())
//     }

// }
// ======================================================================================================
// for payload concept 
const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:(number)=>dispatch(buyCake(number))
    }

}

// ======================================================================================================

// it will connect mapStateToProps and mapDispatchToProps with the CakeContainer 
// the connect function basically map the function to the Component props 
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer);
