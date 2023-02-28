import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { callMultiple } from '../../lib/callMultiple';
import { stopPropagation } from '../../lib/utils';
import { HasRootRef } from '../../types';
import styles from './InputLike.module.css';

export interface InputLikeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    HasRootRef<HTMLSpanElement> {
  length: number;
  index: number;
  value?: string;
  onElementSelect?(index: number): void;
}

const MASK_SYMBOL = String.fromCharCode(0x2007);

function getMaskElements(length: number) {
  const result = [];
  for (let index = 0; index < length; index += 1) {
    result.push(
      <span key={index} className={styles['InputLike__mask']}>
        {MASK_SYMBOL}
      </span>,
    );
  }
  return result;
}

export const InputLike = ({
  value,
  length,
  index,
  onElementSelect,
  onClick,
  onFocus,
  getRootRef,
  className,
  ...props
}: InputLikeProps) => {
  const handleElementSelect = React.useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      stopPropagation(event);
      onElementSelect?.(index);
    },
    [index, onElementSelect],
  );

  return (
    <span
      className={classNames(
        styles['InputLike'],
        value?.length === length && styles['InputLike--full'],
        className,
      )}
      tabIndex={0}
      ref={getRootRef}
      onClick={callMultiple(onClick, handleElementSelect)}
      onFocus={callMultiple(stopPropagation, onFocus)}
      {...props}
    >
      {value?.slice(0, length - 1)}
      {value?.slice(length - 1) && (
        <span key={index} className={styles['InputLike__last_character']}>
          {value.slice(length - 1)}
        </span>
      )}
      {getMaskElements(length - (value?.length ?? 0))}
    </span>
  );
};

InputLike.displayName = 'InputLike';
