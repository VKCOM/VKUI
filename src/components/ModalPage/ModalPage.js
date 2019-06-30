import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';

const baseClassName = getClassName('ModalPage');

class ModalPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,

    /**
     * Шапка модальной страницы, `<ModalPageHeader />`
     */
    header: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,

    /**
     * Процент, на который изначально будет открыта модальная страница
     */
    settlingHeight: PropTypes.number,

    /**
     * @ignore
     */
    insets: PropTypes.object
  };

  static defaultProps = {
    settlingHeight: 75,
    insets: {}
  };

  render () {
    const { children, header, insets } = this.props;

    return (
      <div className={classNames(baseClassName)}>
        <div className="ModalPage__in-wrap">
          <div className="ModalPage__in">
            <div className="ModalPage__header">
              {header}
            </div>

            <div
              className="ModalPage__content"
              style={{ paddingBottom: !isNaN(insets.bottom) ? insets.bottom : null }}
            >
              <div className="ModalPage__content-in">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withInsets(ModalPage);
