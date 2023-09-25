import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { HasChildren, HTMLAttributesWithRootRef } from '../../types';
import { OptionalDiv, OptionalFootnote } from '../OptionalWrapper/OptionalWrapper';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { Headline } from '../Typography/Headline/Headline';
import { Text } from '../Typography/Text/Text';
import styles from './PanelHeaderContent.module.css';

const platformClassNames = {
  ios: styles['PanelHeaderContent--ios'],
  android: styles['PanelHeaderContent--android'],
  vkcom: styles['PanelHeaderContent--vkcom'],
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
  if (platform === Platform.VKCOM) {
    return (
      <Text className={styles['PanelHeaderContent__childrenText']} Component="div" weight="2">
        {children}
      </Text>
    );
  }

  return hasStatus || hasBefore ? (
    <Headline className={styles['PanelHeaderContent__childrenText']} Component="div" weight="2">
      {children}
    </Headline>
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
  const InComponent = onClick ? Tappable : 'div';
  const rootProps = onClick ? {} : restProps;
  const platform = usePlatform();
  const inProps = onClick
    ? {
        ...restProps,
        onClick,
        activeEffectDelay: 200,
        hasActive: platform === Platform.IOS,
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
      )}
    >
      <OptionalDiv className={styles['PanelHeaderContent__before']}>{before}</OptionalDiv>
      <InComponent
        {...inProps}
        className={classNames(
          styles['PanelHeaderContent__in'],
          !before && platform !== Platform.ANDROID && styles['PanelHeaderContent__in--centered'],
        )}
      >
        <OptionalFootnote className={styles['PanelHeaderContent__status']}>
          {status}
        </OptionalFootnote>
        <div className={styles['PanelHeaderContent__children']}>
          <PanelHeaderChildren hasStatus={hasReactNode(status)} hasBefore={hasReactNode(before)}>
            {children}
          </PanelHeaderChildren>
          <OptionalDiv className={styles['PanelHeaderContent__aside']}>{aside}</OptionalDiv>
        </div>
        {hasReactNode(before) && <div className={styles['PanelHeaderContent__width']} />}
      </InComponent>
    </RootComponent>
  );
};
