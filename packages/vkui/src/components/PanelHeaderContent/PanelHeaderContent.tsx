'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasChildren, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Text } from '../Typography/Text/Text';
import styles from './PanelHeaderContent.module.css';

const platformClassNames = {
  ios: styles.ios,
  android: styles.android,
  vkcom: styles.vkcom,
};

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface PanelHeaderContentProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Компонент отображаемый после содержимого.
   */
  aside?: React.ReactNode;
  /**
   * Компонент отображаемый до содержимого.
   */
  before?: React.ReactNode;
  /**
   * Подпись под основным текстом.
   */
  subtitle?: React.ReactNode;
}

interface PanelHeaderChildrenProps extends HasChildren {
  /**
   * Есть ли подпись.
   */
  hasSubtitle: boolean;
  /**
   * Есть ли `before`.
   */
  hasBefore: boolean;
}

const PanelHeaderChildren = ({ hasSubtitle, hasBefore, children }: PanelHeaderChildrenProps) => {
  const platform = usePlatform();

  return hasSubtitle || hasBefore ? (
    <Text
      className={styles.childrenText}
      Component="div"
      weight={platform === 'vkcom' ? '2' : undefined}
    >
      {children}
    </Text>
  ) : (
    <div className={styles.childrenIn}>{children}</div>
  );
};

/**
 * @see https://vkui.io/components/panel-header#panel-header-content
 */
export const PanelHeaderContent = ({
  aside,
  subtitle,
  before,
  children,
  onClick,
  ...restProps
}: PanelHeaderContentProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const InComponent = onClick ? Tappable : 'div';
  const rootProps = onClick ? {} : restProps;
  const platform = usePlatform();
  const inProps = onClick
    ? {
        ...restProps,
        onClick,
        activeEffectDelay: 200,
        hasActive: platform === 'ios',
        activeMode: 'opacity',
      }
    : {};

  return (
    <RootComponent
      {...rootProps}
      baseClassName={classNames(
        styles.host,
        platformClassNames.hasOwnProperty(platform)
          ? platformClassNames[platform]
          : platformClassNames.android,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
    >
      {hasReactNode(before) && <div className={styles.before}>{before}</div>}
      <InComponent
        {...inProps}
        className={classNames(styles.in, !before && platform !== 'android' && styles.inCentered)}
      >
        {hasReactNode(subtitle) && <Footnote className={styles.subtitle}>{subtitle}</Footnote>}
        <div className={styles.children}>
          <PanelHeaderChildren
            hasSubtitle={hasReactNode(subtitle)}
            hasBefore={hasReactNode(before)}
          >
            {children}
          </PanelHeaderChildren>
          {hasReactNode(aside) && <div className={styles.aside}>{aside}</div>}
        </div>
        {hasReactNode(before) && <div className={styles.width} />}
      </InComponent>
    </RootComponent>
  );
};
