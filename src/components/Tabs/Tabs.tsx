import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasStyleObject, HasChildren, HasRef } from '../../types/props';

const baseClassName = getClassName('Tabs');

export interface TabsProps extends HasStyleObject, HasChildren, HasRef {
  theme?: 'light' | 'header';
  type?: 'default' | 'buttons';
}

export default class Tabs extends React.Component<TabsProps> {
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
    switch (this.props.theme as string) {
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
      <div
        {...restProps}
        ref={getRootRef}
        className={classNames(
          baseClassName,
          {
            [`Tabs--${this.theme}`]: true,
            [`Tabs--${type}`]: true
          },
          className
        )}
        style={style}
      >
        {children}
      </div>
    );
  }
}
