import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassName = getClassName('Tabs');

export default class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Значения white и gray устарели. Они будут удалены в следующей мажорной версии
     */
    theme: PropTypes.oneOf(['light', 'header']),
    /**
     * Свойство отвечает за растягивание табов
     */
    type: PropTypes.oneOf(['default', 'buttons']),
    style: PropTypes.object,
    getRootRef: PropTypes.func
  };

  static defaultProps = {
    theme: 'light',
    type: 'default'
  };

  /**
   * Метод нужен для маппинга устаревших значений theme на новые
   * @returns {string}
   */
  get theme () {
    switch (this.props.theme) {
      case 'white':
        return 'header';
      case 'gray':
        return 'light';
      default:
        return this.props.theme;
    }
  }

  render () {
    const { className, children, theme, style, type, getRootRef, ...restProps } = this.props;

    return (
      <div {...restProps} ref={getRootRef} className={classnames(baseClassName, {
        [`Tabs--${this.theme}`]: true,
        [`Tabs--${type}`]: true
      }, className)} style={style}>{children}</div>
    );
  }
}
