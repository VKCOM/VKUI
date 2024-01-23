import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../../hooks/useFocusVisibleClassName';
import { RootComponent } from '../../RootComponent/RootComponent';
import { Footnote } from '../../Typography/Footnote/Footnote';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import type { ChipProps } from '../types';
import styles from './Chip.module.css';

const sizeYClassNames = {
  none: styles['Chip--sizeY-none'],
  compact: styles['Chip--sizeY-compact'],
} as const;

/**
 * @see https://vkcom.github.io/VKUI/#/Chip
 */
export const Chip = ({
  Component = 'span',
  value = '',
  removable = true,
  onRemove = noop,
  removeLabel = 'Удалить',
  before,
  after,
  disabled,
  readOnly,
  children,
  className,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  ...restProps
}: ChipProps) => {
  const { sizeY = 'none' } = useAdaptivity();
  const { focusVisible, onFocus, onBlur } = useFocusVisible();
  const focusVisibleClassName = useFocusVisibleClassName({ focusVisible });

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocusProp) {
      onFocusProp(event);
    }
    onFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlurProp) {
      onBlurProp(event);
    }
    onBlur(event);
  };

  const onRemoveWrapper = React.useCallback(
    (event: React.MouseEvent) => {
      onRemove(event, value);
    },
    [onRemove, value],
  );

  return (
    <RootComponent
      {...restProps}
      Component={Component}
      className={classNames(
        styles['Chip'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        focusVisibleClassName,
        className,
      )}
      aria-readonly={readOnly}
      aria-disabled={disabled}
      onFocus={disabled ? undefined : handleFocus}
      onBlur={disabled ? undefined : handleBlur}
    >
      <div className={styles['Chip__in']}>
        {hasReactNode(before) && <div className={styles['Chip__before']}>{before}</div>}
        <Footnote className={styles['Chip__content']}>{children}</Footnote>
        {hasReactNode(after) && <div className={styles['Chip__after']}>{after}</div>}
      </div>
      {!readOnly && removable && (
        <div className={styles['Chip__removable']}>
          <button
            tabIndex={-1} // [reason]: чтобы можно было выставлять состояние фокуса только программно через `*.focus()`
            disabled={disabled}
            className={styles['Chip__remove']}
            onClick={disabled ? undefined : onRemoveWrapper}
          >
            <VisuallyHidden>
              &nbsp; {removeLabel} {children}
            </VisuallyHidden>
            <Icon16Cancel />
          </button>
        </div>
      )}
    </RootComponent>
  );
};
