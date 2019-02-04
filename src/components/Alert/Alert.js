import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassNames = getClassName('Alert');

const Alert = props => {
  const { actions, actionsLayout, children, className, style, onClose, ...restProps } = props;

  const onItemClick = item => () => {
    item.autoclose && onClose();
    item.action && item.action();
  };

  return (
    <PopoutWrapper className={className} style={style}>
      <div {...restProps} className={classNames(baseClassNames, {
        'Alert--v': actionsLayout === 'vertical',
        'Alert--h': actionsLayout === 'horizontal'
      })}>
        <div className="Alert__content">{children}</div>
        <footer className="Alert__footer">
          {actions.map((button, i) => (
            <Tappable
              component="button"
              className={classNames('Alert__btn', { [`Alert__btn--${button.style}`]: true })}
              onClick={onItemClick(button)}
              key={`alert-action-${i}`}
            >
              <span>{button.title}</span>
            </Tappable>
          ))}
        </footer>
      </div>
    </PopoutWrapper>
  );
};

Alert.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  actionsLayout: PropTypes.oneOf(['vertical', 'horizontal']),
  actions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    action: PropTypes.func,
    style: PropTypes.oneOf(['primary', 'cancel', 'destructive', 'default'])
  })),
  onClose: PropTypes.func
};

Alert.defaultProps = {
  actionsLayout: 'horizontal',
  actions: []
};

export default Alert;
