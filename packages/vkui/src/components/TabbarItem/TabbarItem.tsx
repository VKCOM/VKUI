import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import { HasComponent, HasRootRef } from '../../types';
import { Tappable } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './TabbarItem.module.css';

export interface TabbarItemProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
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
  className,
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
    <Component
      {...restProps}
      disabled={disabled}
      href={href}
      className={classNames(
        styles['TabbarItem'],
        platform === Platform.IOS && styles['TabbarItem--ios'],
        platform === Platform.ANDROID && styles['TabbarItem--android'],
        selected && styles['TabbarItem--selected'],
        className,
      )}
    >
      <Tappable
        role="presentation"
        Component="div"
        disabled={disabled}
        activeMode={
          platform === Platform.IOS ? styles['TabbarItem__tappable--active'] : 'background'
        }
        activeEffectDelay={platform === Platform.IOS ? 0 : 300}
        hasHover={false}
        className={styles['TabbarItem__tappable']}
      />
      <div className={styles['TabbarItem__in']}>
        <div className={styles['TabbarItem__icon']}>
          {children}
          <div className="vkuiInternalTabbarItem__label">
            {hasReactNode(indicator) && indicator}
          </div>
        </div>
        {text && (
          <Footnote Component="div" className={styles['TabbarItem__text']} weight="2">
            {text}
          </Footnote>
        )}
      </div>
    </Component>
  );
};
