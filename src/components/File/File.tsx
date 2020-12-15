import React, { HTMLAttributes, FunctionComponent, InputHTMLAttributes, useRef } from 'react';
import getClassName from '../../helpers/getClassName';
import Button, { VKUIButtonProps } from '../Button/Button';
import classNames from '../../lib/classNames';
import { HasRef, HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';

export interface FileProps extends
  Omit<VKUIButtonProps, 'size'>,
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onClick'>,
  Pick<HTMLAttributes<HTMLElement>, 'onClick'>,
  HasRef<HTMLInputElement>,
  HasRootRef<HTMLElement> {
  controlSize?: VKUIButtonProps['size'];
}

const File: FunctionComponent<FileProps> = (props: FileProps) => {
  const { children, align, controlSize, mode, stretched, before, className,
    style, getRef, getRootRef, onClick, ...restProps } = props;

  const platform = usePlatform();
  const inputRef = useRef<HTMLInputElement>();

  return (
    <Button
      align={align}
      className={classNames(getClassName('File', platform), className)}
      stretched={stretched}
      mode={mode}
      size={controlSize}
      before={before}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
      onClick={(e) => {
        if (!getRef) {
          inputRef.current.click();
        } else if (onClick) {
          onClick(e);
        }
      }}
    >
      <input {...restProps} className="File__input" type="file" ref={getRef || inputRef} />
      {children}
    </Button>
  );
};

File.defaultProps = {
  children: 'Выберите файл',
  align: 'left',
};

export default File;
