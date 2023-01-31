import * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { classNames } from '@vkontakte/vkjs';
import { FixedLayout } from '../FixedLayout/FixedLayout';
import { Separator } from '../Separator/Separator';
import { Platform } from '../../lib/platform';
import { HasRef, HasRootRef } from '../../types';
import { useConfigProvider, WebviewType } from '../ConfigProvider/ConfigProviderContext';
import { Text } from '../Typography/Text/Text';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { Spacing } from '../Spacing/Spacing';
import styles from './PanelHeader.module.css';

function getPlatformClassName(platform: string): string {
  switch (platform) {
    case 'ios':
      return styles['PanelHeader--ios'];
    case 'vkcom':
      return styles['PanelHeader--vkcom'];
    default:
      return styles['PanelHeader--android'];
  }
}

const sizeXClassNames = {
  compact: '',
  regular: styles['PanelHeader--sizeX-regular'],
  none: styles['PanelHeader--sizeX-none'],
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

const PanelHeaderIn = ({ before, after, separator, children }: PanelHeaderProps) => {
  const { webviewType } = useConfigProvider();
  const { isInsideModal } = React.useContext(ModalRootContext);
  const platform = usePlatform();

  return (
    <React.Fragment>
      <TooltipContainer fixed className={styles['PanelHeader__in']}>
        <div className={styles['PanelHeader__before']}>{before}</div>
        <div className={styles['PanelHeader__content']}>
          {platform === Platform.VKCOM ? (
            <Text weight="2">{children}</Text>
          ) : (
            <span className={styles['PanelHeader__content-in']}>{children}</span>
          )}
        </div>
        <div className={styles['PanelHeader__after']}>
          {(webviewType === WebviewType.INTERNAL || isInsideModal) && after}
        </div>
      </TooltipContainer>
      {separator && platform === Platform.VKCOM && <Separator wide />}
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
        getPlatformClassName(platform),
        transparent && styles['PanelHeader--trnsp'],
        shadow && styles['PanelHeader--shadow'],
        visor && styles['PanelHeader--vis'],
        separator && visor && styles['PanelHeader--sep'],
        webviewType === WebviewType.VKAPPS && !isInsideModal && styles['PanelHeader--vkapps'],
        !before && styles['PanelHeader--no-before'],
        !after && styles['PanelHeader--no-after'],
        isFixed && styles['PanelHeader--fixed'],
        sizeXClassNames[sizeX],
        className,
      )}
      ref={isFixed ? getRootRef : getRef}
    >
      {isFixed ? (
        <FixedLayout className={styles['PanelHeader__fixed']} vertical="top" getRootRef={getRef}>
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
