import React, { Component } from 'react';

export default class Link extends Component {
  // clickHandler = (e) => {
  //   // this.props.dispatch({
  //   //   type: 'PAGE_TRANSITION',
  //   //   data: this.props.href,
  //   //   animated: true
  //   // });
  //   // e.preventDefault();
  //   this.props.dispatch()
  // }

  render() {
    return (
      <a href={this.props.href} onClick={this.props.onClick} style={this.props.style}>
        {this.props.children}
      </a>
    );
  }
}