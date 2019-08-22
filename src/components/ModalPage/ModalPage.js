import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';

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
     * Если высота контента в модальной странице может поменяться, нужно установить это свойство
     */
    dynamicContentHeight: PropTypes.bool,

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

            <div className="ModalPage__content">
              <div className="ModalPage__content-in" style={isNumeric(insets.bottom) ? { paddingBottom: insets.bottom } : null}>
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
