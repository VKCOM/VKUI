import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { ActionSheetProps } from './ActionSheet';
import './ActionSheet.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  closing: boolean;
  onClose(): void;
  toggleRef: Element;
  /** Has no effect - only for ActionSheetDropdownDesktip polymorhipsm */
  popupDirection?: ActionSheetProps['popupDirection'];
}

const stopPropagation: React.MouseEventHandler = (e) => e.stopPropagation();

export const ActionSheetDropdown: React.FC<Props> = ({
  children,
  toggleRef,
  closing,
  popupDirection,
  ...restProps
}) => {
  const platform = usePlatform();
  const baseClaseName = getClassName('ActionSheet', platform);

  return (
    <div
      {...restProps}
      onClick={stopPropagation}
      vkuiClass={classNames(baseClaseName, {
        'ActionSheet--closing': closing,
      })}
    >
      {children}
    </div>
  );
};
