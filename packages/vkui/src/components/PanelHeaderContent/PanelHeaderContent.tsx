import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { HasChildren, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Text } from '../Typography/Text/Text';
import styles from './PanelHeaderContent.module.css';

const platformClassNames = {
  ios: styles['PanelHeaderContent--ios'],
  android: styles['PanelHeaderContent--android'],
  vkcom: styles['PanelHeaderContent--vkcom'],
};

const sizeYClassNames = {
  none: styles['PanelHeaderContent--sizeY-none'],
  compact: styles['PanelHeaderContent--sizeY-compact'],
};

export interface PanelHeaderContentProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  aside?: React.ReactNode;
  before?: React.ReactNode;
  status?: React.ReactNode;
}

interface PanelHeaderChildrenProps extends HasChildren {
  hasStatus: boolean;
  hasBefore: boolean;
}

const PanelHeaderChildren = ({ hasStatus, hasBefore, children }: PanelHeaderChildrenProps) => {
  const platform = usePlatform();

  return hasStatus || hasBefore ? (
    <Text
      className={styles['PanelHeaderContent__childrenText']}
      Component="div"
      weight={platform === 'vkcom' ? '2' : undefined}
    >
      {children}
    </Text>
  ) : (
    <div className={styles['PanelHeaderContent__children-in']}>{children}</div>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderContent
 */
export const PanelHeaderContent = ({
  aside,
  status,
  before,
  children,
  onClick,
  ...restProps
}: PanelHeaderContentProps) => {
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
        styles['PanelHeaderContent'],
        platformClassNames.hasOwnProperty(platform)
          ? platformClassNames[platform]
          : platformClassNames.android,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
    >
      {hasReactNode(before) && <div className={styles['PanelHeaderContent__before']}>{before}</div>}
      <InComponent
        {...inProps}
        className={classNames(
          styles['PanelHeaderContent__in'],
          !before && platform !== 'android' && styles['PanelHeaderContent__in--centered'],
        )}
      >
        {hasReactNode(status) && (
          <Footnote className={styles['PanelHeaderContent__status']}>{status}</Footnote>
        )}
        <div className={styles['PanelHeaderContent__children']}>
          <PanelHeaderChildren hasStatus={hasReactNode(status)} hasBefore={hasReactNode(before)}>
            {children}
          </PanelHeaderChildren>
          {hasReactNode(aside) && (
            <div className={styles['PanelHeaderContent__aside']}>{aside}</div>
          )}
        </div>
        {hasReactNode(before) && <div className={styles['PanelHeaderContent__width']} />}
      </InComponent>
    </RootComponent>
  );
};
