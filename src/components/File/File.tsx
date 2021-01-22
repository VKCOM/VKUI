import { HTMLAttributes, FunctionComponent, InputHTMLAttributes, useRef } from 'react';
import { getClassName } from '../../helpers/getClassName';
import Button, { VKUIButtonProps } from '../Button/Button';
import { HasRef, HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { setRef } from '../../lib/utils';
import './File.css';

export interface FileProps extends
  Omit<VKUIButtonProps, 'size' | 'type'>,
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onClick' | 'type'>,
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

  const getInputRef = (element: HTMLInputElement) => {
    inputRef.current = element;
    setRef(element, getRef);
  };

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
      <input {...restProps} vkuiClass="File__input" type="file" ref={getInputRef} />
      {children}
    </Button>
  );
};

File.defaultProps = {
  children: 'Выберите файл',
  align: 'left',
};

export default File;
