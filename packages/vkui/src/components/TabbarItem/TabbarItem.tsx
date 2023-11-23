import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import { TappableRefactored, type TappableRefactoredProps } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './TabbarItem.module.css';

export interface TabbarItemProps extends TappableRefactoredProps {
  selected?: boolean;
  /**
   * Текст рядом с иконкой
   */
  text?: React.ReactNode;
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
  text,
  href,
  Component = href ? 'a' : 'button',
  disabled,
  ...restProps
}: TabbarItemProps) => {
  const platform = usePlatform();

  if (process.env.NODE_ENV === 'development') {
    const hasAccessibleName = text || restProps['aria-label'] || restProps['aria-labelledby'];

    if (!hasAccessibleName) {
      warn(COMMON_WARNINGS.a11y[Component === 'a' ? 'link-name' : 'button-name'], 'error');
    }
  }

  return (
    <TappableRefactored
      Component={Component}
      {...restProps}
      disabled={disabled}
      href={href}
      className={classNames(
        styles['TabbarItem'],
        platform === Platform.IOS && styles['TabbarItem--ios'],
        platform === Platform.ANDROID && styles['TabbarItem--android'],
        selected && styles['TabbarItem--selected'],
      )}
      activeMode={false}
      hoverMode={false}
    >
      <span className={styles['TabbarItem__in']}>
        <span className={styles['TabbarItem__icon']}>
          {children}
          <span className="vkuiInternalTabbarItem__label">
            {hasReactNode(indicator) && indicator}
          </span>
        </span>
        {text && (
          <Footnote Component="span" className={styles['TabbarItem__text']} weight="2">
            {text}
          </Footnote>
        )}
      </span>
    </TappableRefactored>
  );
};
