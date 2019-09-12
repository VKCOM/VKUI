import React, { FunctionComponent } from 'react';
import getClassName from '../../helpers/getClassName';
import Button, { ButtonProps } from '../Button/Button';
import classNames from '../../lib/classNames';
import { HasRef } from '../../types/props';
import usePlatform from '../../hooks/usePlatform';

export interface FileProps extends ButtonProps, HasRef<HTMLInputElement> {
  /**
   * @deprecated Используйте `children`. Свойство `label` будет удалено в 3.0.0
   */
  label: ButtonProps['children']
  /**
   * @deprecated Используйте `align`. Свойство `alignment` будет удалено в 3.0.0
   */
  alignment: ButtonProps['align']
}

const File: FunctionComponent<FileProps> = (props: FileProps) => {
  const { children, label, alignment, align, size, level, type, stretched, before, className,
    style, getRef, getRootRef, ...restProps } = props;

  const platform = usePlatform();

  return (
    <Button
      align={align || alignment}
      className={classNames(getClassName('File', platform), className)}
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

File.defaultProps = {
  label: 'Выберите файл',
  children: 'Выберите файл',
  alignment: 'left',
  align: 'left'
};

export default File;
