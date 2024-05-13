import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../../hooks/useAdaptivity';
import { useAdaptivityConditionalRender } from '../../../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../../../hooks/usePlatform';
import { RootComponent } from '../../../RootComponent/RootComponent';
import { Separator } from '../../../Separator/Separator';
import { Spacing } from '../../../Spacing/Spacing';
import type { PanelHeaderProps } from '../../types';
// eslint-disable-next-line import/order
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

export const PanelHeaderHost = ({
  children,
  float = false,
  transparent = false,
  delimiter = 'auto',
  shadow,
  getRootRef,
  fixed,
  ...restProps
}: Omit<PanelHeaderProps, 'before' | 'after' | 'typographyProps'>) => {
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
        isFixed && styles['PanelHeader--fixed'],
        sizeX !== 'compact' && sizeXClassNames[sizeX],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
      getRootRef={getRootRef}
    >
      <div className={styles['PanelHeader__in']}>{children}</div>
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
