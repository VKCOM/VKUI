import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { HasComponent, HasRef, HasRootRef } from '../../types';
import { useConfigProvider, WebviewType } from '../ConfigProvider/ConfigProviderContext';
import { FixedLayout } from '../FixedLayout/FixedLayout';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { Separator } from '../Separator/Separator';
import { Spacing } from '../Spacing/Spacing';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { Text } from '../Typography/Text/Text';
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
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRef<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  before?: React.ReactNode;
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
}

interface PanelHeaderContentProps extends React.HTMLAttributes<HTMLElement>, HasComponent {}

const PanelHeaderContent = ({ children, Component = 'span', id }: PanelHeaderContentProps) => {
  const platform = usePlatform();

  return platform === Platform.VKCOM ? (
    <Text weight="2" Component={Component} id={id}>
      {children}
    </Text>
  ) : (
    <Component className={styles['PanelHeader__content-in']} id={id}>
      {children}
    </Component>
  );
};

PanelHeaderContent.displayName = 'PanelHeaderContent';

const PanelHeaderIn = ({ before, after, separator, children }: PanelHeaderProps) => {
  const { webviewType } = useConfigProvider();
  const { isInsideModal } = React.useContext(ModalRootContext);
  const platform = usePlatform();

  return (
    <React.Fragment>
      <TooltipContainer fixed className={styles['PanelHeader__in']}>
        <div
          className={classNames(styles['PanelHeader__before'], 'vkuiInternalPanelHeader__before')}
        >
          {before}
        </div>
        <div className={styles['PanelHeader__content']}>
          {/* Поддерживаем обратную совместимость для подкомпонентного подхода */}
          {React.isValidElement(children) &&
          (children as JSX.Element).type.displayName === PanelHeaderContent.displayName ? (
            children
          ) : (
            <PanelHeaderContent>{children}</PanelHeaderContent>
          )}
        </div>
        <div className={classNames(styles['PanelHeader__after'], 'vkuiInternalPanelHeader__after')}>
          {(webviewType === WebviewType.INTERNAL || isInsideModal) && after}
        </div>
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
  className,
  ...restProps
}: PanelHeaderProps) => {
  const platform = usePlatform();
  const { webviewType } = useConfigProvider();
  const { isInsideModal } = React.useContext(ModalRootContext);
  const { sizeX = 'none' } = useAdaptivity();
  const { sizeX: adaptiveSizeX } = useAdaptivityConditionalRender();
  let isFixed = fixed !== undefined ? fixed : platform !== Platform.VKCOM;

  return (
    <div
      {...restProps}
      className={classNames(
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
        webviewType === WebviewType.VKAPPS && !isInsideModal && styles['PanelHeader--vkapps'],
        !before && styles['PanelHeader--no-before'],
        !after && styles['PanelHeader--no-after'],
        isFixed && styles['PanelHeader--fixed'],
        sizeX !== SizeType.COMPACT && sizeXClassNames[sizeX],
        className,
      )}
      ref={isFixed ? getRootRef : getRef}
    >
      {isFixed ? (
        <FixedLayout
          className={classNames(styles['PanelHeader__fixed'], 'vkuiInternalPanelHeader__fixed')}
          vertical="top"
          getRootRef={getRef}
        >
          <PanelHeaderIn before={before} after={after} separator={separator}>
            {children}
          </PanelHeaderIn>
        </FixedLayout>
      ) : (
        <PanelHeaderIn before={before} after={after} separator={separator}>
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
    </div>
  );
};

PanelHeader.Content = PanelHeaderContent;
