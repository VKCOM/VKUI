import './ScrollView.css';
import React, { Component } from 'react';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('ScrollView');

export default class ScrollView extends Component {
  render() {
    return (
      <div className={baseClassNames} {...this.props}>{this.props.children}</div>
    );
  }
}