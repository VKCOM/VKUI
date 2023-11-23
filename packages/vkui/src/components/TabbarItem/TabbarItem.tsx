import * as React from 'react';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import { HasComponent, HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
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
    <RootComponent
      Component={Component}
      {...restProps}
      disabled={disabled}
      href={href}
      baseClassName={classNames(
        styles['TabbarItem'],
        platform === 'ios' && styles['TabbarItem--ios'],
        platform === 'android' && styles['TabbarItem--android'],
        selected && styles['TabbarItem--selected'],
      )}
    >
      <Tappable
        role="presentation"
        disabled={disabled}
        activeMode={platform === 'ios' ? styles['TabbarItem__tappable--active'] : 'background'}
        activeEffectDelay={platform === 'ios' ? 0 : 300}
        hasHover={false}
        className={styles['TabbarItem__tappable']}
        onClick={noop}
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
    </RootComponent>
  );
};
