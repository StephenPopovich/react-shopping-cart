import React, { Component } from 'react';

class Counter extends Component {
 state = {
     count: 0,

 };
 styles = {
     fontSize: '50px',
     fontWeight: "bold"
 }
    render() { 
        
        return (
         <div>

            <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-lg">Increment</button>
          </div>
     );
  }

  formatCount(){
      const {count} = this.state;
      const x = <h1>Zero</h1>;
      return count === 0 ?  x : count;
  }
}
 
export default Counter;