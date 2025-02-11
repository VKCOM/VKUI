'use client';

import * as React from 'react';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import type { HasComponent, HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './TabbarItem.module.css';

export interface TabbarItemProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'label'>,
    HasRootRef<HTMLElement>,
    HasComponent {
  selected?: boolean;
  /**
   * Текст рядом с иконкой
   */
  label?: React.ReactNode;
  /**
   * Индикатор над иконкой. Принимает `<Badge mode="prominent" />` или `<Counter size="s" mode="prominent" />`
   */
  indicator?: React.ReactNode;
}

const warn = warnOnce('TabbarItem');

/**
 * @see https://vkcom.github.io/VKUI/#/TabbarItem
 */
export const TabbarItem = ({
  children,
  selected,
  indicator,
  label,
  href,
  Component = href ? 'a' : 'button',
  disabled,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  ...restProps
}: TabbarItemProps): React.ReactNode => {
  const platform = usePlatform();

  if (process.env.NODE_ENV === 'development') {
    const hasAccessibleName = label || restProps['aria-label'] || restProps['aria-labelledby'];

    if (!hasAccessibleName) {
      warn(COMMON_WARNINGS.a11y[Component === 'a' ? 'link-name' : 'button-name'], 'error');
    }
  }

  const {
    focusVisible,
    onFocus: handleFocusVisibleOnFocus,
    onBlur: handleFocusVisibleOnBlur,
  } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({
    focusVisible,
  });

  return (
    <RootComponent
      Component={Component}
      {...restProps}
      disabled={disabled}
      onFocus={callMultiple(handleFocusVisibleOnFocus, onFocusProp)}
      onBlur={callMultiple(handleFocusVisibleOnBlur, onBlurProp)}
      href={href}
      baseClassName={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        platform === 'android' && styles.android,
        selected && styles.selected,
      )}
    >
      <Tappable
        role="presentation"
        disabled={disabled}
        activeMode={platform === 'ios' ? styles.tappableActive : 'background'}
        activeEffectDelay={platform === 'ios' ? 0 : 300}
        hasHover={false}
        className={classNames(styles.tappable, focusVisibleClassNames)}
        onClick={noop}
        tabIndex={-1}
      />
      <div className={styles.in}>
        <div className={styles.icon}>
          {children}
          <div className="vkuiInternalTabbarItem__label">
            {hasReactNode(indicator) && indicator}
          </div>
        </div>
        {label && (
          <Footnote Component="div" className={styles.label} weight="2">
            {label}
          </Footnote>
        )}
      </div>
    </RootComponent>
  );
};
