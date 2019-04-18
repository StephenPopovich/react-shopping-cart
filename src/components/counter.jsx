import React, { Component } from 'react';

class Counter extends Component {
 state = {
     value: this.props.value 
 };
// constructor(){
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
// }

 handleIncrement = () => {
     this.setState({ value: this.state.value + 1 });
 };

    render() { 
        console.log(this.props);
        return (
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement} 
            className="btn btn-secondary btn-lg"
            >
            Increment
            </button>
            <button 
            onClick={() => this.props.onDelete(this.props.id)} 
            className="btn btn-danger btn-lg m-2"
            >
            Delete
            </button>
          </div>
     );
  }

    getBadgeClasses() {
        let classes = "btn-lg badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

  formatCount(){
      const {value} = this.state;
      const x = <h1>Zero</h1>;
      return value === 0 ?  x : value;
  }
}
 
export default Counter;