import './Alert.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
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
      style: PropTypes.oneOf(['primary', 'cancel', 'destructive', 'default'])
    })),
    onClose: PropTypes.func
  };

  static defaultProps = {
    style: {},
    children: '',
    actionsLayout: 'horizontal'
  };

  onItemClick = (item) => () => {
    item.autoclose && this.props.onClose();
    item.action && item.action();
  };

  render () {
    const { style, actions, actionsLayout } = this.props;
    const modifiers = {
      'Alert--v': actionsLayout === 'vertical',
      'Alert--h': actionsLayout === 'horizontal'
    };

    return (
      <PopoutWrapper>
        <div className={classnames(baseClassNames, modifiers)} style={style}>
          <div className="Alert__content">
            {this.props.children}
          </div>
          <footer className="Alert__footer">
            {actions.map((button, i) => (
              <Tappable
                component="button"
                className={classnames('Alert__btn', {
                  [`Alert__btn--${button.style || button.modifier}`]: true
                })}
                onClick={this.onItemClick(button)}
                key={`alert-action-${i}`}
              >
                <span dangerouslySetInnerHTML={{ __html: button.title }} />
              </Tappable>
            ))}
          </footer>
        </div>
      </PopoutWrapper>
    );
  }
}
