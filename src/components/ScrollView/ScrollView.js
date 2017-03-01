import './ScrollView.css';
import React, { Component } from 'react';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';

const baseClassNames = getClassName('ScrollView');

export default class ScrollView extends Component {
  render() {
    return (
      <div className={baseClassNames} {...removeObjectKeys(this.props, ['header'])}>
        {this.props.children}
      </div>
    );
  }
}