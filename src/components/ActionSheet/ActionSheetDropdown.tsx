import React, { FC, MouseEventHandler } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { ActionSheetProps } from './ActionSheet';

interface Props {
  closing: boolean;
  onClose(): void;
  toggleRef: Element;
  elementRef: React.RefObject<HTMLDivElement>;
  /** Has no effect - only for ActionSheetDropdownDesktip polymorhipsm */
  popupDirection?: ActionSheetProps['popupDirection'];
}

const stopPropagation: MouseEventHandler = (e) => e.stopPropagation();

const ActionSheetDropdown: FC<Props> = ({
  children,
  elementRef,
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
      ref={elementRef}
      onClick={stopPropagation}
      vkuiClass={classNames(baseClaseName, {
        'ActionSheet--closing': closing,
      })}
    >
      {children}
    </div>
  );
};

export default ActionSheetDropdown;
