import React from "react";
import { buyCake } from "../redux";

// to connect the below 2 function with react library
import { connect } from "react-redux";

function CakeContainer(props) {
  // console.log(props);
  return (
    <div>
      <h2>No. Of Cakes-{props.numofCakes}</h2>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  );
}

// here redux state is passed as state argument in mapStateToProps() function
// numofCakes prop mein state.numofCakes map ho gyi
const mapStateToProps = (state) => {
  return {
    // numofCakes:state.numofCakes
    // for combine reducers
    numofCakes: state.cake.numofCakes,
  };
};

// here redux dispatch function is paases as dispatch argument in mapDispatchToProps() function
// buyCake prop mein dispatch(buyCake()) map ho gyi
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// it will connect mapStateToProps and mapDispatchToProps with the CakeContainer
// the connect function basically map the function to the Component props
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
