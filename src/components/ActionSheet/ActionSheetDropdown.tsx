import React, { Component } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { withPlatform } from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';
import { ActionSheetProps } from './ActionSheet';

interface Props extends HasPlatform {
  closing: boolean;
  onClose(): void;
  toggleRef: Element;
  elementRef: React.RefObject<HTMLDivElement>;
  /** Has no effect - only for ActionSheetDropdownDesktip polymorhipsm */
  popupDirection?: ActionSheetProps['popupDirection'];
}

type ClickHandler = (event: React.MouseEvent<HTMLDivElement>) => void;

class ActionSheetDropdown extends Component<Props> {
  onClose = () => {
    this.props.onClose();
  };

  stopPropagation: ClickHandler = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

  render() {
    const { children, platform, elementRef, toggleRef, closing, popupDirection, ...restProps } = this.props;

    const baseClaseName = getClassName('ActionSheet', platform);

    return (
      <div
        {...restProps}
        ref={elementRef}
        onClick={this.stopPropagation}
        vkuiClass={classNames(baseClaseName, {
          'ActionSheet--closing': this.props.closing,
        })}
      >
        {children}
      </div>
    );
  }
}

export default withPlatform(ActionSheetDropdown);
