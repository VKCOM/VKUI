'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useModalContext } from '../../context/ModalContext';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import {
  getAdaptivityConditionalRenderForSizeXCompact,
  useAdaptivityConditionalRender,
} from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { type SizeTypeValues, ViewWidth, type ViewWidthType } from '../../lib/adaptivity';
import type {
  HasComponent,
  HasDataAttribute,
  HasRef,
  HTMLAttributesWithRootRef,
} from '../../types';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { OnboardingTooltipContainer } from '../OnboardingTooltip/OnboardingTooltipContainer';
import { RootComponent } from '../RootComponent/RootComponent';
import { Separator } from '../Separator/Separator';
import { Text } from '../Typography/Text/Text';
import styles from './PanelHeader.module.css';

const platformClassNames = {
  ios: styles.ios,
  android: styles.android,
  vkcom: classNames(styles.vkcom, 'vkuiInternalPanelHeader--vkcom'),
};

function getViewWidthClassName(
  viewWidth: ViewWidthType | 'none',
  legacySizeX: SizeTypeValues | undefined,
) {
  // TODO [>=10]: #9015 Удалить это условие
  if (legacySizeX !== undefined && legacySizeX === 'regular') {
    return styles.viewWidthSmallTabletPlus;
  }
  if (viewWidth === 'none') {
    return styles.viewWidthNone;
  }
  if (viewWidth >= ViewWidth.SMALL_TABLET) {
    return styles.viewWidthSmallTabletPlus;
  }
  return;
}

const densityClassNames = {
  none: styles.densityNone,
  compact: styles.densityCompact,
};

export interface PanelHeaderProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * Добавляет элемент слева.
   */
  before?: React.ReactNode;
  /**
   * Добавляет элемент справа.
   *
   * При передаче нескольких элементов, расставляет отступы между ними.
   */
  after?: React.ReactNode;
  /**
   * Тип разделителя под шапкой.
   *
   * - `"none"` означает, что разделитель не нужен
   * - `"separator"` включает сепаратор при условии, что это:
   *      - либо платформа `vkcom`
   *      - либо платформа `android`/`ios` при `<AdaptivityProvider viewWidth={ViewWidth.MOBILE} />`
   * - `"spacing"` включает отступ, если это платформа `android`/`ios` при `<AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} />`
   * - `"auto"` автоматически подбирает либо `"separator"`, либо `"spacing"` по их условиям.
   */
  delimiter?: 'auto' | 'none' | 'separator' | 'spacing';
  /**
   * Прозрачный фон компонента.
   */
  transparent?: boolean;
  /**
   * @deprecated Since 7.4.0. Будет удалeно в **VKUI v9**.
   */
  shadow?: boolean; // TODO [>=9]: удалить неиспользуемое свойство свойство
  /**
   * Высота шапки будет игнорироваться контентом панели.
   */
  float?: boolean;
  /**
   * Если `false`, то шапка будет в потоке. По умолчанию `true`, но если платформа vkcom, то по умолчанию `false`.
   */
  fixed?: boolean;
  /**
   * По умолчанию как `Component` используется `span`.
   */
  typographyProps?: HasComponent & React.HTMLAttributes<HTMLElement> & HasDataAttribute;
}

/* eslint-disable jsdoc/require-jsdoc */
interface PanelHeaderInProps {
  before?: PanelHeaderProps['before'];
  after?: PanelHeaderProps['after'];
  children?: PanelHeaderProps['children'];
  typographyProps?: PanelHeaderProps['typographyProps'];
}
/* eslint-enable jsdoc/require-jsdoc */

const PanelHeaderIn = ({ before, after, children, typographyProps = {} }: PanelHeaderInProps) => {
  const { Component = 'span', ...restProps } = typographyProps;
  const { hasCustomPanelHeaderAfter, customPanelHeaderAfterMinWidth } = useConfigProvider();
  const isInsideModal = useModalContext().id !== null;
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
    <OnboardingTooltipContainer fixed className={styles.in}>
      <div className={classNames(styles.before, 'vkuiInternalPanelHeader__before')}>{before}</div>
      <div className={styles.content}>{typographyNode}</div>
      <div
        className={classNames(styles.after, 'vkuiInternalPanelHeader__after')}
        {...afterSlotProps}
      />
    </OnboardingTooltipContainer>
  );
};

/**
 * @see https://vkui.io/components/panel-header
 */
export const PanelHeader = ({
  before,
  children,
  after,
  float = false,
  transparent = false,
  delimiter = 'auto',
  shadow,
  getRef,
  fixed,
  typographyProps,
  ...restProps
}: PanelHeaderProps): React.ReactNode => {
  const platform = usePlatform();
  const { sizeX: legacySizeX, viewWidth = 'none', density = 'none' } = useAdaptivity();
  const { sizeX: adaptiveSizeX, viewWidth: adaptiveViewWidth } = useAdaptivityConditionalRender();
  const adaptivityConditionalRender = getAdaptivityConditionalRenderForSizeXCompact(
    adaptiveViewWidth,
    adaptiveSizeX,
    legacySizeX,
  );
  const isVKCOM = platform === 'vkcom';
  const isFixed = fixed !== undefined ? fixed : !isVKCOM;
  const separatorVisible = delimiter === 'auto' || delimiter === 'separator';
  const staticSeparatorVisible = !float && separatorVisible;
  const staticSpacingVisible =
    !isVKCOM && !float && (delimiter === 'auto' || delimiter === 'spacing');

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        'vkuiInternalPanelHeader',
        platformClassNames.hasOwnProperty(platform)
          ? platformClassNames[platform]
          : platformClassNames.android,
        transparent && styles.trnsp,
        shadow && styles.shadow,
        !float && classNames(styles.static, 'vkuiInternalPanelHeader--static'),
        staticSeparatorVisible && classNames(styles.sep, 'vkuiInternalPanelHeader--sep'),
        staticSpacingVisible && styles.hasSpacingDelimiter,
        !before && classNames(styles.noBefore, 'vkuiInternalPanelHeader--no-before'),
        !after && styles.noAfter,
        isFixed && styles.hasFixed,
        getViewWidthClassName(viewWidth, legacySizeX),
        density !== 'regular' && densityClassNames[density],
      )}
    >
      <PanelHeaderIn before={before} after={after} typographyProps={typographyProps}>
        {children}
      </PanelHeaderIn>
      {isVKCOM
        ? separatorVisible && <Separator className={styles.separator} />
        : staticSeparatorVisible &&
          adaptivityConditionalRender && (
            <Separator
              className={classNames(adaptivityConditionalRender.className, styles.separator)}
              padding
            />
          )}
    </RootComponent>
  );
};
