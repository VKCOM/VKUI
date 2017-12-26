import './ScrollView.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('ScrollView');

export default class ScrollView extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    activePanel: PropTypes.string,
    prevPanel: PropTypes.string,
    nextPanel: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.oneOf(['white', 'gray'])
  };

  static defaultProps = {
    children: '',
    theme: 'gray'
  };

  shouldComponentUpdate ({ id, activePanel, nextPanel }) {
    return id === activePanel || id === nextPanel;
  }

  render () {
    const { className } = this.props;

    return (
      <div
        className={classnames(baseClassNames, className)}
        {...removeObjectKeys(this.props, ['header', 'onPull', 'className', 'activePanel', 'prevPanel', 'nextPanel', 'fixedLayout', 'theme'])}
        ref={this.getRef}
      >
        <div className="ScrollView__in">
          {this.props.children}
        </div>
      </div>
    );
  }
}
