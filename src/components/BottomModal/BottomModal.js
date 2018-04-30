import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Icon16Cancel from '../../../dist/icons/16/cancel';
import './BottomModal.css';

const baseClassName = getClassName('BottomModal');

export default class BottomModal extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    header: PropTypes.node,
    children: PropTypes.node,
    onClose: PropTypes.func,
    addon: PropTypes.node
  };

  componentWillMount () {
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }

  componentWillUnmount () {
    document.body.removeChild(this.node);
  }

  render () {
    const { className, header, onClose, addon, children } = this.props;

    return (
      ReactDOM.createPortal(
        <div className={classnames(baseClassName, className)}>
          <div className="BottomModal__container">
            <div className="BottomModal__header">
              <div className="BottomModal__addon">
                {addon}
              </div>
              {header && <div className="BottomModal__header-content">{header}</div>}
              <div className="BottomModal__close" onClick={onClose}>
                <Icon16Cancel/>
              </div>
            </div>
            <div className="Bottom__content">
              {children}
            </div>
          </div>
        </div>, this.node
      )
    );
  }
}
