import * as React from 'react';
import { Icon20CheckCircleOn, Icon24CheckCircleOn } from '@vkontakte/icons';
import { HasRef, HasRootRef } from '../../../../types';
import { AdaptiveIconRenderer } from '../../../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { RootComponent } from '../../../RootComponent/RootComponent';
import { VisuallyHidden } from '../../../VisuallyHidden/VisuallyHidden';
import styles from './Radio.module.css';

const adaptiveIcon = (
  <AdaptiveIconRenderer IconCompact={Icon20CheckCircleOn} IconRegular={Icon24CheckCircleOn} />
);

interface ActionSheetItemCheckedProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLInputElement> {
  /**
   * Иконка для `checked` режима.
   */
  children?: React.ReactNode;
}

export const Radio = ({
  children = adaptiveIcon,
  getRootRef,
  getRef,
  className,
  style,
  ...restProps
}: ActionSheetItemCheckedProps) => {
  return (
    <RootComponent getRootRef={getRootRef} className={className} style={style}>
      <VisuallyHidden
        Component="input"
        getRootRef={getRef}
        type="radio"
        className={styles['ActionSheetItemRadio__input']}
        {...restProps}
      />
      {children}
    </RootComponent>
  );
};
