
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import Button from '../Button/Button';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('File');

export default class File extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: null
    };
  }

  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * @ignore
     */
    level: PropTypes.any,
    /**
     * @ignore
     */
    size: PropTypes.any,
    /**
     * @ignore
     */
    type: PropTypes.any,
    /**
     * @ignore
     */
    align: PropTypes.any,
    /**
     * @ignore
     */
    stretched: PropTypes.any,
    /**
     * @ignore
     */
    before: PropTypes.any,
    getRef: PropTypes.func,
    getRootRef: PropTypes.func,
    /**
     * @deprecated Используйте `children`. Свойство `label` будет удалено в следующей мажорной версии.
     */
    label: PropTypes.string,
    /**
     * @deprecated Используйте `align`. Свойство `alignment` будет удалено в следующей мажорной версии.
     */
    alignment: PropTypes.oneOf(['left', 'center', 'right'])
  };

  static defaultProps = {
    label: 'Выберите файл',
    children: 'Выберите файл',
    alignment: 'left',
    align: 'left'
  };

  render () {
    const { children, label, alignment, align, size, level, type, stretched, before, className, style, getRef, getRootRef, ...restProps } = this.props;

    return (
      <Button
        align={align || alignment}
        className={classnames(baseClassNames, className)}
        component="label"
        type={type}
        stretched={stretched}
        level={level}
        size={size}
        before={before}
        style={style}
        getRootRef={getRootRef}
      >
        <input {...restProps} className="File__input" type="file" ref={getRef}/>
        {children || label}
      </Button>
    );
  }
}
