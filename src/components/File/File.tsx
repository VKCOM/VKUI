import * as React from 'react';
import { getPlatformClassName } from '../../helpers/getPlatformClassName';
import { Button, VKUIButtonProps } from '../Button/Button';
import { HasRef, HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { VisuallyHiddenInput } from '../VisuallyHiddenInput/VisuallyHiddenInput';
import { classNames } from '@vkontakte/vkjs';
import styles from './File.module.css';

export interface FileProps
  extends Omit<VKUIButtonProps, 'type'>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/File
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
}: FileProps) => {
  const platform = usePlatform();

  return (
    <Button
      Component="label"
      align={align}
      className={classNames(
        styles['File'],
        getPlatformClassName(styles['File'], platform),
        className,
      )}
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
      <VisuallyHiddenInput
        {...restProps}
        className={styles['File__input']}
        type="file"
        getRef={getRef}
      />
      {children}
    </Button>
  );
};
