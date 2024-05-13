import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../../hooks/useAdaptivity';
import { usePlatform } from '../../../../hooks/usePlatform';
import { useConfigProvider } from '../../../ConfigProvider/ConfigProviderContext';
import { ModalRootContext } from '../../../ModalRoot/ModalRootContext';
import { OnboardingTooltipContainer } from '../../../OnboardingTooltip/OnboardingTooltipContainer';
import { Text } from '../../../Typography/Text/Text';
import type { TypographyProps } from '../../types';
// eslint-disable-next-line import/order
import styles from './PanelHeaderIn.module.css';

const platformClassNames = {
  ios: styles['PanelHeaderIn--ios'],
  android: styles['PanelHeaderIn--android'],
  vkcom: styles['PanelHeaderIn--vkcom'],
};

const sizeXClassNames = {
  none: styles['PanelHeaderIn--sizeX-none'],
  regular: styles['PanelHeaderIn--sizeX-regular'],
};

const sizeYClassNames = {
  none: styles['PanelHeaderIn--sizeY-none'],
  compact: styles['PanelHeaderIn--sizeY-compact'],
};

export interface PanelHeaderInProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  typographyProps?: TypographyProps;
}

export const PanelHeaderIn = ({
  before,
  after,
  children,
  style,
  typographyProps = {},
}: PanelHeaderInProps) => {
  const platform = usePlatform();
  const { Component = 'span', ...restProps } = typographyProps;
  const { sizeX = 'none', sizeY = 'none' } = useAdaptivity();
  const { hasCustomPanelHeaderAfter, customPanelHeaderAfterMinWidth } = useConfigProvider();
  const { isInsideModal } = React.useContext(ModalRootContext);

  const afterSlotProps =
    !hasCustomPanelHeaderAfter || isInsideModal
      ? {
          children: after,
        }
      : {
          style: { minWidth: customPanelHeaderAfterMinWidth },
        };
  const typographyNode: React.ReactNode =
    platform === 'vkcom' ? (
      <Text weight="2" Component={Component} {...restProps}>
        {children}
      </Text>
    ) : (
      <Component className={styles['PanelHeaderIn__content-in']} {...restProps}>
        {children}
      </Component>
    );

  return (
    <OnboardingTooltipContainer
      fixed
      className={classNames(
        styles['PanelHeaderIn'],
        !before &&
          classNames(styles['PanelHeaderIn--no-before'], 'vkuiInternalPanelHeader--no-before'),
        !after && styles['PanelHeaderIn--no-after'],
        platformClassNames.hasOwnProperty(platform)
          ? platformClassNames[platform]
          : platformClassNames.android,
        sizeX !== 'compact' && sizeXClassNames[sizeX],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
      style={style}
    >
      <div
        className={classNames(styles['PanelHeaderIn__before'], 'vkuiInternalPanelHeader__before')}
      >
        {before}
      </div>
      <div className={styles['PanelHeaderIn__content']}>{typographyNode}</div>
      <div
        className={classNames(styles['PanelHeaderIn__after'], 'vkuiInternalPanelHeader__after')}
        {...afterSlotProps}
      />
    </OnboardingTooltipContainer>
  );
};
