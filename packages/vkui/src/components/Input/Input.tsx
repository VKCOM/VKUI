import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { Text } from '../Typography/Text/Text';
import styles from './Input.module.css';

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  ['compact']: styles.hostSizeYCompact,
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    FormFieldProps {}

/**
 * @see https://vkcom.github.io/VKUI/#/Input
 */
export const Input = ({
  type = 'text',
  align = 'left',
  getRef,
  className,
  getRootRef,
  style,
  before,
  after,
  status,
  mode,
  ...restProps
}: InputProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <FormField
      style={style}
      className={classNames(
        styles.host,
        align === 'right' && styles.hostAlignRight,
        align === 'center' && styles.hostAlignCenter,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        before && styles.hostHasBefore,
        after && styles.hostHasAfter,
        className,
      )}
      getRootRef={getRootRef}
      before={before}
      after={after}
      disabled={restProps.disabled}
      mode={mode}
      status={status}
    >
      <Text
        {...restProps}
        Component="input"
        normalize={false}
        type={type}
        className={styles.el}
        getRootRef={getRef}
      />
    </FormField>
  );
};
