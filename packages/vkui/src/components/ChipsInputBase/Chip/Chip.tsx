import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../../hooks/useFocusVisibleClassName';
import { getTitleFromChildren } from '../../../lib/utils';
import { RootComponent } from '../../RootComponent/RootComponent';
import { Footnote } from '../../Typography/Footnote/Footnote';
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
  removeAriaLabel = 'Удалить',
  before,
  after,
  disabled,
  children,
  className,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  ...restProps
}: ChipProps) => {
  const { sizeY = 'none' } = useAdaptivity();
  const { focusVisible, onFocus, onBlur } = useFocusVisible();
  const focusVisibleClassName = useFocusVisibleClassName({ focusVisible });
  const removeLabel = `${removeAriaLabel} ${getTitleFromChildren(children)}`;

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus(event);
    if (onFocusProp) {
      onFocusProp(event);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur(event);
    if (onBlurProp) {
      onBlurProp(event);
    }
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
      tabIndex={-1} // [reason]: чтобы можно было выставлять состояние фокуса, только программно через `*.focus()`
      aria-disabled={disabled}
      onFocus={disabled ? undefined : handleFocus}
      onBlur={disabled ? undefined : handleBlur}
    >
      <div className={styles['Chip__in']}>
        {hasReactNode(before) && <div className={styles['Chip__before']}>{before}</div>}
        <Footnote className={styles['Chip__content']}>{children}</Footnote>
        {hasReactNode(after) && <div className={styles['Chip__after']}>{after}</div>}
      </div>
      {removable && (
        <div className={styles['Chip__removable']}>
          <button
            tabIndex={-1} // [reason]: чтобы можно было выставлять состояние фокуса, только программно через `*.focus()`
            disabled={disabled}
            className={styles['Chip__remove']}
            aria-label={removeLabel}
            onClick={disabled ? undefined : onRemoveWrapper}
          >
            <Icon16Cancel aria-hidden />
          </button>
        </div>
      )}
    </RootComponent>
  );
};
