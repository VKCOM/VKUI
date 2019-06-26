import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import Button from '../Button/Button';
import classNames from '../../lib/classNames';
import { HasStyleObject, HasChildren, HasAlign, HasRef } from '../../types/props';

const baseClassNames = getClassName('File');

export interface FileProps extends HasStyleObject, HasChildren, HasAlign {
  getRef?: (instance: HTMLInputElement) => void;
  /**
   * @ignore
   */
  level: any;
  /**
   * @ignore
   */
  size: any;
  /**
   * @ignore
   */
  type: any;
  /**
   * @ignore
   */
  align: any;
  /**
   * @ignore
   */
  stretched: any;
  /**
   * @ignore
   */
  before: any;
  /**
   * @deprecated Используйте `children`. Свойство `label` будет удалено в 3.0.0
   */
  label: string;
  /**
   * @deprecated Используйте `align`. Свойство `alignment` будет удалено в 3.0.0
   */
  alignment: 'left' | 'center' | 'right';
}

const File = (props: FileProps) => {
  const {
    children,
    label,
    alignment,
    align,
    size,
    level,
    type,
    stretched,
    before,
    className,
    style,
    getRef,
    // FIXME
    // getRootRef,
    ...restProps
  } = props;

  return (
    <Button
      align={align || alignment}
      className={classNames(baseClassNames, className)}
      component="label"
      type={type}
      stretched={stretched}
      level={level}
      size={size}
      before={before}
      style={style}
      // FIXME
      // getRootRef={getRootRef}
    >
      <input {...restProps} className="File__input" type="file" ref={getRef} />
      {children || label}
    </Button>
  );
};

File.propTypes = {
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
   * @deprecated Используйте `children`. Свойство `label` будет удалено в 3.0.0
   */
  label: PropTypes.string,
  /**
   * @deprecated Используйте `align`. Свойство `alignment` будет удалено в 3.0.0
   */
  alignment: PropTypes.oneOf(['left', 'center', 'right'])
};

File.defaultProps = {
  label: 'Выберите файл',
  children: 'Выберите файл',
  alignment: 'left',
  align: 'left'
};

export default File;
