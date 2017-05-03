import './Alert.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('Alert');

export default class Alert extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
    actionsLayout: PropTypes.oneOf(['vertical', 'horizontal']),
    actions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
      modifier: PropTypes.oneOf(['primary'])
    }))
  };
  static defaultProps = {
    style: {},
    children: '',
    actionsLayout: 'horizontal'
  };
  render () {
    const { style, actions, actionsLayout } = this.props;
    const modifiers = {
      'Alert--v': actionsLayout === 'vertical',
      'Alert--h': actionsLayout === 'horizontal'
    };

    return (
      <div className={classnames(baseClassNames, modifiers)} style={style}>
        <div className="Alert__content">
          {this.props.children}
        </div>
        <footer className="Alert__footer">
          {actions.map((button, i) => (
            <Tappable
              component="button"
              className={classnames('Alert__btn', {
                'Alert__btn--primary': button.modifier === 'primary'
              })}
              onClick={button.action}
              key={`alert-action-${i}`}
            >
              {button.title}
            </Tappable>
          ))}
        </footer>
      </div>
    );
  }
}
