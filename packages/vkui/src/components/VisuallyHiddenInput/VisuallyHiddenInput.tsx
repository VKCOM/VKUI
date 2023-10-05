import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { warnOnce } from '../../lib/warnOnce';
import { HasRef, HasRootRef } from '../../types';
import styles from './VisuallyHiddenInput.module.css';

const warn = warnOnce('VisuallyHiddenInput');
export interface VisuallyHiddenInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLInputElement>,
    HasRef<HTMLInputElement> {}
/**
 * @deprecated v5.4.0
 *
 * Компонент устарел и будет удален в v6. Используйте
 * `<VisuallyHidden Component="input" />`
 */
export const VisuallyHiddenInput = ({
  getRef,
  className,
  getRootRef,
  ...restProps
}: VisuallyHiddenInputProps) => {
  const visuallyHiddenInputRef = useExternRef(getRef, getRootRef);
  if (process.env.NODE_ENV === 'development') {
    warn(
      'Компонент устарел и будет удален в v6. Используйте https://vkcom.github.io/VKUI/#/VisuallyHidden',
    );
  }

  return (
    <input
      {...restProps}
      className={classNames(styles['VisuallyHiddenInput'], className)}
      ref={visuallyHiddenInputRef}
    />
  );
};
