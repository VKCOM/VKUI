import * as React from 'react';
import { callMultiple } from '../../lib/callMultiple';
import { stopPropagation } from '../../lib/utils';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './InputLike.module.css';

export interface InputLikeProps extends HTMLAttributesWithRootRef<HTMLSpanElement> {
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
    <RootComponent
      Component="span"
      baseClassName={value?.length === length ? styles['InputLike--full'] : undefined}
      tabIndex={0}
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
    </RootComponent>
  );
};

InputLike.displayName = 'InputLike';
