//3 chije - h1 , p, ul

import React from "react";

class MyComp extends React.Component {
  state = {
    someNumber: 0,
  };

  render = () => {
    return (
      <div>
        <button style={{color:"green"}} onClick={()=>{
            this.setState({someNumber: this.state.someNumber + 1});
        }}>Increment</button>
        <button style={{color:"red"}} onClick={()=>{
            this.setState({someNumber: this.state.someNumber - 1});
        }}>Decrement</button>
        <h1> {this.state.someNumber} </h1>
      </div>
    );
  };
}

export default MyComp;