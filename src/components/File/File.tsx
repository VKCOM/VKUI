import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import Button, { VKUIButtonProps } from '../Button/Button';
import { HasRef, HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { useExternRef } from '../../hooks/useExternRef';
import './File.css';

export interface FileProps extends
  Omit<VKUIButtonProps, 'size' | 'type'>,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onClick' | 'type'>,
  Pick<React.HTMLAttributes<HTMLElement>, 'onClick'>,
  HasRef<HTMLInputElement>,
  HasRootRef<HTMLElement> {
  controlSize?: VKUIButtonProps['size'];
}

const File: React.FunctionComponent<FileProps> = (props: FileProps) => {
  const { children, align, controlSize, mode, stretched, before, className,
    style, getRef, getRootRef, onClick, ...restProps } = props;

  const platform = usePlatform();
  const inputRef = useExternRef(getRef);

  return (
    <Button
      align={align}
      vkuiClass={getClassName('File', platform)}
      className={className}
      stretched={stretched}
      mode={mode}
      size={controlSize}
      before={before}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
      type="button"
      onClick={(e) => {
        inputRef.current.click();
        onClick && onClick(e);
      }}
    >
      <input {...restProps} vkuiClass="File__input" type="file" ref={inputRef} />
      {children}
    </Button>
  );
};

File.defaultProps = {
  children: 'Выберите файл',
  align: 'left',
};

export default File;
