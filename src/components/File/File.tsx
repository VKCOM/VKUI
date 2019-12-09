import React, { FunctionComponent } from 'react';
import getClassName from '../../helpers/getClassName';
import Button, { ButtonProps } from '../Button/Button';
import classNames from '../../lib/classNames';
import { HasRef } from '../../types/props';
import usePlatform from '../../hooks/usePlatform';

export interface FileProps extends ButtonProps, HasRef<HTMLInputElement> {
  /**
   * @ignore
   */
  disabled?: boolean;
}

const File: FunctionComponent<FileProps> = (props: FileProps) => {
  const { children, align, size, level, stretched, before, className,
    style, getRef, getRootRef, ...restProps } = props;

  const platform = usePlatform();

  return (
    <Button
      align={align}
      className={classNames(getClassName('File', platform), className)}
      Component="label"
      stretched={stretched}
      level={level}
      size={size}
      before={before}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
    >
      <input {...restProps} className="File__input" type="file" ref={getRef}/>
      {children}
    </Button>
  );
};

File.defaultProps = {
  children: 'Выберите файл',
  align: 'left',
};

export default File;
