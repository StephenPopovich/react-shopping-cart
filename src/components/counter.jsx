import React, { Component } from 'react';

class Counter extends Component {
 state = {
   value: this.props.counter.value
 };

    render() { 

        return (
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-lg"
            >
            Increment
            </button>
            <button 
            onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-lg m-2"
            >
            Delete
            </button>
          </div>
     );
  }

    getBadgeClasses() {
        let classes = "btn btn-primary btn-lg m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount(){
      const {value} = this.props.counter;
      const x = "0";
      return value === 0 ?  x : value;
  }
}
 
export default Counter;