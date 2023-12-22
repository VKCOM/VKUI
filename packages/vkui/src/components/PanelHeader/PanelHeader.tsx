import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { HasComponent, HasDataAttribute, HasRef, HTMLAttributesWithRootRef } from '../../types';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { FixedLayout } from '../FixedLayout/FixedLayout';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { OnboardingTooltipContainer } from '../OnboardingTooltip/OnboardingTooltipContainer';
import { RootComponent } from '../RootComponent/RootComponent';
import { Separator } from '../Separator/Separator';
import { Spacing } from '../Spacing/Spacing';
import { Text } from '../Typography/Text/Text';
import styles from './PanelHeader.module.css';

const platformClassNames = {
  ios: classNames(styles.hostIos, 'vkuiInternalPanelHeaderIos'),
  android: classNames(styles.hostAndroid, 'vkuiInternalPanelHeaderAndroid'),
  vkcom: classNames(styles.hostVkcom, 'vkuiInternalPanelHeaderVkcom'),
};

const sizeXClassNames = {
  none: styles.hostSizeXNone,
  regular: styles.hostSizeXRegular,
};

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  compact: styles.hostSizeYCompact,
};

export interface PanelHeaderProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  before?: React.ReactNode;
  /**
   * Добавляет элемент справа.
   *
   * При передаче нескольких элементов, расставляет отступы между ними.
   */
  after?: React.ReactNode;
  separator?: boolean;
  transparent?: boolean;
  shadow?: boolean;
  /**
   * Если `false`, то шапка будет нулевой высоты и контент панели "залезет" под неё
   */
  visor?: boolean;
  /**
   * Если `false`, то шапка будет в потоке. По умолчанию `true`, но если платформа vkcom, то по умолчанию `false`.
   */
  fixed?: boolean;
  /**
   * По умолчанию как `Component` используется `span`.
   */
  typographyProps?: HasComponent & React.HTMLAttributes<HTMLElement> & HasDataAttribute;
}

const PanelHeaderIn = ({
  before,
  after,
  separator,
  children,
  typographyProps = {},
}: PanelHeaderProps) => {
  const { Component = 'span', ...restProps } = typographyProps;
  const { hasCustomPanelHeaderAfter, customPanelHeaderAfterMinWidth } = useConfigProvider();
  const { isInsideModal } = React.useContext(ModalRootContext);
  const platform = usePlatform();

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
      <Component className={styles.contentIn} {...restProps}>
        {children}
      </Component>
    );

  return (
    <React.Fragment>
      <OnboardingTooltipContainer fixed className={styles.in}>
        <div className={classNames(styles.before, 'vkuiInternalPanelHeaderBefore')}>{before}</div>
        <div className={styles.content}>{typographyNode}</div>
        <div
          className={classNames(styles.after, 'vkuiInternalPanelHeaderAfter')}
          {...afterSlotProps}
        />
      </OnboardingTooltipContainer>
      {separator && platform === 'vkcom' && <Separator className={styles.separator} wide />}
    </React.Fragment>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeader
 */
export const PanelHeader = ({
  before,
  children,
  after,
  separator = true,
  visor = true,
  transparent = false,
  shadow,
  getRef,
  getRootRef,
  fixed,
  typographyProps,
  ...restProps
}: PanelHeaderProps) => {
  const platform = usePlatform();
  const { sizeX = 'none', sizeY = 'none' } = useAdaptivity();
  const { sizeX: adaptiveSizeX } = useAdaptivityConditionalRender();
  let isFixed = fixed !== undefined ? fixed : platform !== 'vkcom';

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        'vkuiInternalPanelHeader',
        platformClassNames.hasOwnProperty(platform)
          ? platformClassNames[platform]
          : platformClassNames.android,
        transparent && styles.hostTrnsp,
        shadow && styles.hostShadow,
        visor && classNames(styles.hostVis, 'vkuiInternalPanelHeaderVis'),
        separator && visor && classNames(styles.hostSep, 'vkuiInternalPanelHeaderSep'),
        !before && classNames(styles.hostNoBefore, 'vkuiInternalPanelHeaderNoBefore'),
        !after && styles.hostNoAfter,
        isFixed && styles.hostFixed,
        sizeX !== 'compact' && sizeXClassNames[sizeX],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
      getRootRef={isFixed ? getRootRef : getRef}
    >
      {isFixed ? (
        <FixedLayout
          className={classNames(styles.fixed, 'vkuiInternalPanelHeaderFixed')}
          vertical="top"
          getRootRef={getRef}
        >
          <PanelHeaderIn
            before={before}
            after={after}
            separator={separator}
            typographyProps={typographyProps}
          >
            {children}
          </PanelHeaderIn>
        </FixedLayout>
      ) : (
        <PanelHeaderIn
          before={before}
          after={after}
          separator={separator}
          typographyProps={typographyProps}
        >
          {children}
        </PanelHeaderIn>
      )}
      {separator && visor && platform !== 'vkcom' && (
        <React.Fragment>
          {adaptiveSizeX.compact && <Separator className={adaptiveSizeX.compact.className} />}
          {adaptiveSizeX.regular && (
            <Spacing className={adaptiveSizeX.regular.className} size={16} />
          )}
        </React.Fragment>
      )}
    </RootComponent>
  );
};
