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
  ios: styles['PanelHeader--ios'],
  android: styles['PanelHeader--android'],
  vkcom: classNames(styles['PanelHeader--vkcom'], 'vkuiInternalPanelHeader--vkcom'),
};

const sizeXClassNames = {
  none: styles['PanelHeader--sizeX-none'],
  regular: styles['PanelHeader--sizeX-regular'],
};

const sizeYClassNames = {
  none: styles['PanelHeader--sizeY-none'],
  compact: styles['PanelHeader--sizeY-compact'],
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
  /**
   * Тип разделителя под шапкой.
   *
   * - `"none"` означает, что разделитель не нужен
   * - `"separator"` включает сепаратор при условии, что это:
   *      - либо платформа `vkcom`
   *      - либо платформа `android`/`ios` при `<AdaptivityProvider sizeX="compact" />`
   * - `"spacing"` включает отступ, если это платформа `android`/`ios` при `<AdaptivityProvider sizeX="regular" />`
   * - `"auto"` автоматически подбирает либо `"separator"`, либо `"spacing"` по их условиям
   */
  delimiter?: 'auto' | 'none' | 'separator' | 'spacing';
  transparent?: boolean;
  shadow?: boolean;
  /**
   * Высота шапки будет игнорироваться контентом панели
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

interface PanelHeaderInProps {
  before?: PanelHeaderProps['before'];
  after?: PanelHeaderProps['after'];
  children?: PanelHeaderProps['children'];
  typographyProps?: PanelHeaderProps['typographyProps'];
}

const PanelHeaderIn = ({ before, after, children, typographyProps = {} }: PanelHeaderInProps) => {
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
      <Component className={styles['PanelHeader__content-in']} {...restProps}>
        {children}
      </Component>
    );

  return (
    <OnboardingTooltipContainer fixed className={styles['PanelHeader__in']}>
      <div className={classNames(styles['PanelHeader__before'], 'vkuiInternalPanelHeader__before')}>
        {before}
      </div>
      <div className={styles['PanelHeader__content']}>{typographyNode}</div>
      <div
        className={classNames(styles['PanelHeader__after'], 'vkuiInternalPanelHeader__after')}
        {...afterSlotProps}
      />
    </OnboardingTooltipContainer>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeader
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
  getRootRef,
  fixed,
  typographyProps,
  ...restProps
}: PanelHeaderProps) => {
  const platform = usePlatform();
  const { sizeX = 'none', sizeY = 'none' } = useAdaptivity();
  const { sizeX: adaptiveSizeX } = useAdaptivityConditionalRender();
  const isVKCOM = platform === 'vkcom';
  const isFixed = fixed !== undefined ? fixed : !isVKCOM;
  const separatorVisible = delimiter === 'auto' || delimiter === 'separator';
  const staticSeparatorVisible = !float && separatorVisible;
  const staticSpacingVisible = !float && (delimiter === 'auto' || delimiter === 'spacing');

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['PanelHeader'],
        'vkuiInternalPanelHeader',
        platformClassNames.hasOwnProperty(platform)
          ? platformClassNames[platform]
          : platformClassNames.android,
        transparent && styles['PanelHeader--trnsp'],
        shadow && styles['PanelHeader--shadow'],
        !float && classNames(styles['PanelHeader--static'], 'vkuiInternalPanelHeader--static'),
        staticSeparatorVisible &&
          classNames(styles['PanelHeader--sep'], 'vkuiInternalPanelHeader--sep'),
        !before &&
          classNames(styles['PanelHeader--no-before'], 'vkuiInternalPanelHeader--no-before'),
        !after && styles['PanelHeader--no-after'],
        isFixed && styles['PanelHeader--fixed'],
        sizeX !== 'compact' && sizeXClassNames[sizeX],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
      getRootRef={isFixed ? getRootRef : getRef}
    >
      {isFixed ? (
        <FixedLayout
          className={classNames(styles['PanelHeader__fixed'], 'vkuiInternalPanelHeader__fixed')}
          vertical="top"
          getRootRef={getRef}
        >
          <PanelHeaderIn before={before} after={after} typographyProps={typographyProps}>
            {children}
          </PanelHeaderIn>
        </FixedLayout>
      ) : (
        <PanelHeaderIn before={before} after={after} typographyProps={typographyProps}>
          {children}
        </PanelHeaderIn>
      )}
      {!isVKCOM && (
        <>
          {staticSeparatorVisible && adaptiveSizeX.compact && (
            <Separator className={adaptiveSizeX.compact.className} />
          )}
          {staticSpacingVisible && adaptiveSizeX.regular && (
            <Spacing className={adaptiveSizeX.regular.className} size={16} />
          )}
        </>
      )}
      {separatorVisible && isVKCOM && (
        <Separator className={styles['PanelHeader__separator']} wide />
      )}
    </RootComponent>
  );
};
