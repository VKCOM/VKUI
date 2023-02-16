import * as React from 'react';
import {
  Icon28ArrowLeftOutline,
  Icon28ChevronBack,
  Icon28ChevronLeftOutline,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { getSizeXClassName } from '../../helpers/getSizeXClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { PanelHeaderButton, PanelHeaderButtonProps } from '../PanelHeaderButton/PanelHeaderButton';
import styles from './PanelHeaderBack.module.css';

export type PanelHeaderBackProps = PanelHeaderButtonProps & {
  'aria-label'?: string;
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderBack
 */
export const PanelHeaderBack = ({
  label,
  'aria-label': ariaLabel = 'Назад',
  className,
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();
  // так-же label нужно скрывать при platform === Platform.IOS && sizeX === regular
  // https://github.com/VKCOM/VKUI/blob/master/src/components/PanelHeaderButton/PanelHeaderButton.css#L104
  const showLabel = platform === Platform.VKCOM || platform === Platform.IOS;

  let icon = <Icon28ArrowLeftOutline />;
  switch (platform) {
    case Platform.IOS:
      icon = <Icon28ChevronBack />;
      break;
    case Platform.VKCOM:
      icon = <Icon28ChevronLeftOutline />;
      break;
  }

  return (
    <PanelHeaderButton
      {...restProps}
      className={classNames(
        styles['PanelHeaderBack'],
        getSizeXClassName(styles['PanelHeaderBack'], sizeX),
        platform === Platform.IOS && styles['PanelHeaderBack--ios'],
        platform === Platform.VKCOM && styles['PanelHeaderBack--vkcom'],
        showLabel && !!label && styles['PanelHeaderBack--has-label'],
        className,
      )}
      label={showLabel && label}
      aria-label={ariaLabel}
    >
      {icon}
    </PanelHeaderButton>
  );
};
