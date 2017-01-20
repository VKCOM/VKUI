import React, { Component } from 'react';
import './ScrollView.css';

export default class ScrollView extends Component {
  render() {
    return (
      <div className="ScrollView" {...this.props}>{this.props.children}</div>
    );
  }
}