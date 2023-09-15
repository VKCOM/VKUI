import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { HasComponent, HasDataAttribute, HasRef, HTMLAttributesWithRootRef } from '../../types';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { FixedLayout } from '../FixedLayout/FixedLayout';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { RootComponent } from '../RootComponent/RootComponent';
import { Separator } from '../Separator/Separator';
import { Spacing } from '../Spacing/Spacing';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { Text } from '../Typography/Text/Text';
import { LegacyPanelHeaderContent } from './LegacyPanelHeaderContent';
import styles from './PanelHeader.module.css';

const platformClassNames = {
  ios: classNames(styles['PanelHeader--ios'], 'vkuiInternalPanelHeader--ios'),
  android: classNames(styles['PanelHeader--android'], 'vkuiInternalPanelHeader--android'),
  vkcom: classNames(styles['PanelHeader--vkcom'], 'vkuiInternalPanelHeader--vkcom'),
};

const sizeXClassNames = {
  none: styles['PanelHeader--sizeX-none'],
  regular: styles['PanelHeader--sizeX-regular'],
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
  let typographyNode: React.ReactNode;

  // TODO [>=6]: Удалить условие
  if (
    React.isValidElement(children) &&
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    (children as JSX.Element).type.displayName === LegacyPanelHeaderContent.displayName
  ) {
    typographyNode = children;
  } else {
    typographyNode =
      platform === Platform.VKCOM ? (
        <Text weight="2" Component={Component} {...restProps}>
          {children}
        </Text>
      ) : (
        <Component className={styles['PanelHeader__content-in']} {...restProps}>
          {children}
        </Component>
      );
  }

  return (
    <React.Fragment>
      <TooltipContainer fixed className={styles['PanelHeader__in']}>
        <div
          className={classNames(styles['PanelHeader__before'], 'vkuiInternalPanelHeader__before')}
        >
          {before}
        </div>
        <div className={styles['PanelHeader__content']}>{typographyNode}</div>
        <div
          className={classNames(styles['PanelHeader__after'], 'vkuiInternalPanelHeader__after')}
          {...afterSlotProps}
        />
      </TooltipContainer>
      {separator && platform === Platform.VKCOM && (
        <Separator className={styles['PanelHeader__separator']} wide />
      )}
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
  const { sizeX = 'none' } = useAdaptivity();
  const { sizeX: adaptiveSizeX } = useAdaptivityConditionalRender();
  let isFixed = fixed !== undefined ? fixed : platform !== Platform.VKCOM;

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
        visor && classNames(styles['PanelHeader--vis'], 'vkuiInternalPanelHeader--vis'),
        separator &&
          visor &&
          classNames(styles['PanelHeader--sep'], 'vkuiInternalPanelHeader--sep'),
        !before &&
          classNames(styles['PanelHeader--no-before'], 'vkuiInternalPanelHeader--no-before'),
        !after && styles['PanelHeader--no-after'],
        isFixed && styles['PanelHeader--fixed'],
        sizeX !== SizeType.COMPACT && sizeXClassNames[sizeX],
      )}
      getRootRef={isFixed ? getRootRef : getRef}
    >
      {isFixed ? (
        <FixedLayout
          className={classNames(styles['PanelHeader__fixed'], 'vkuiInternalPanelHeader__fixed')}
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
      {separator && visor && platform !== Platform.VKCOM && (
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

PanelHeader.Content = LegacyPanelHeaderContent;
