import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  };

  render() {
    return <div>
      <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
      <button className="btn btn-primary btn-sm" onClick={this.handleIncrement} >Increment</button>
    </div>;
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  getBadgeClasses() {
    let classes = `badge m-2 badge-`;
    classes += this.state.count > 0 ? 'primary' : `warning`;
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? `Zero` : count;
  }
}

export default Counter;