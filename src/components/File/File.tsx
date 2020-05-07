import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import Button, { VKUIButtonProps } from '../Button/Button';
import classNames from '../../lib/classNames';
import { HasRef, HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';

export interface FileProps extends
  Omit<VKUIButtonProps, 'size'>,
  InputHTMLAttributes<HTMLInputElement>,
  HasRef<HTMLInputElement>,
  HasRootRef<HTMLElement> {
  controlSize?: VKUIButtonProps['size'];
}

const File: FunctionComponent<FileProps> = (props: FileProps) => {
  const { children, align, controlSize, mode, stretched, before, className,
    style, getRef, getRootRef, ...restProps } = props;

  const platform = usePlatform();

  return (
    <Button
      align={align}
      className={classNames(getClassName('File', platform), className)}
      Component="label"
      stretched={stretched}
      mode={mode}
      size={controlSize}
      before={before}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
    >
      <input {...restProps} className="File__input" type="file" ref={getRef} />
      {children}
    </Button>
  );
};

File.defaultProps = {
  children: 'Выберите файл',
  align: 'left',
};

export default File;
