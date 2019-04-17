import React, { Component } from 'react';

class Counter extends Component {
 state = {
     count: 0, 
     tags: ['tag1', 'tag2', 'tag3']

 };
// constructor(){
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
// }

 handleIncrement = () => {
     this.state.count++;
     this.setState({count: this.state.count + 1 });
 };

    render() { 
        return (
         <div>

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement} 
            className="btn btn-secondary btn-lg"
            >Increment
            </button>
          </div>
     );
  }

    getBadgeClasses() {
        let classes = "btn-lg badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

  formatCount(){
      const {count} = this.state;
      const x = <h1>Zero</h1>;
      return count === 0 ?  x : count;
  }
}
 
export default Counter;