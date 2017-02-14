import './List.css';

import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('List');

export default class List extends Component {
  static propTypes = {
    style: PropTypes.object,
    indented: PropTypes.bool
  };
  static defaultProps = {
    style: {},
    indented: false
  };
  render() {
    const { style, indented } = this.props;
    const modifiers = {
      'List--indented': indented
    };

    return (
      <ul className={classnames(baseClassNames, modifiers)} style={{ style }}>
        {this.props.children}
      </ul>
    );
  }
}


