import * as React from 'react';
import type { HasRef, HasRootRef } from '../../types';
import { Button, type VKUIButtonProps } from '../Button/Button';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

export interface FileProps
  extends Omit<VKUIButtonProps, 'type'>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLElement> {}

/**
 * @see https://vkui.io/components/file
 */
export const File = ({
  children = 'Выберите файл',
  align = 'left',
  size,
  mode,
  stretched,
  before,
  after,
  loading,
  className,
  style,
  getRef,
  getRootRef,
  appearance,
  ...restProps
}: FileProps): React.ReactNode => {
  return (
    <Button
      Component="label"
      align={align}
      className={className}
      stretched={stretched}
      mode={mode}
      appearance={appearance}
      size={size}
      before={before}
      after={after}
      loading={loading}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
    >
      <VisuallyHidden title="" {...restProps} Component="input" type="file" getRootRef={getRef} />
      {children}
    </Button>
  );
};
