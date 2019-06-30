import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import Button from '../Button/Button';
import classNames from '../../lib/classNames';

const baseClassNames = getClassName('File');

const File = props => {
  const { children, label, alignment, align, size, level, type, stretched, before, className, style, getRef, getRootRef, ...restProps } = props;

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
      getRootRef={getRootRef}
    >
      <input {...restProps} className="File__input" type="file" ref={getRef}/>
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
  getRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  getRootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
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
