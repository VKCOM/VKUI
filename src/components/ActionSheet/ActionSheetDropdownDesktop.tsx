import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { withPlatform } from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { DOMProps, withDOM } from '../../lib/dom';
import { ActionSheetProps } from './ActionSheet';
import './ActionSheet.css';

interface Props extends React.HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps {
  closing: boolean;
  onClose(): void;
  popupDirection?: ActionSheetProps['popupDirection'];
  toggleRef: Element;
  elementRef: React.RefObject<HTMLDivElement>;
}

interface State {
  dropdownStyles: React.CSSProperties;
}

class ActionSheetDropdownDesktop extends React.Component<Props & DOMProps, State> {
  state: State = {
    dropdownStyles: {
      left: '0',
      top: '0',
      opacity: '0',
      pointerEvents: 'none',
    },
  };

  get window(): Window {
    return this.props.window;
  }

  componentDidMount = () => {
    const { toggleRef, elementRef, popupDirection } = this.props;

    const toggleRect = toggleRef.getBoundingClientRect();
    const elementRect = elementRef.current.getBoundingClientRect();

    let left = toggleRect.left + toggleRect.width - elementRect.width + this.window.pageXOffset;
    let top: number;

    if (popupDirection === 'top' || typeof popupDirection === 'function' && popupDirection(elementRef) === 'top') {
      top = toggleRect.top - elementRect.height + this.window.pageYOffset;
    } else {
      top = toggleRect.top + toggleRect.height + this.window.pageYOffset;
    }

    this.setState({
      dropdownStyles: {
        left,
        top,
        opacity: 1,
        pointerEvents: 'auto',
      },
    });

    setTimeout(() => {
      this.window.addEventListener('click', this.handleClickOutside);
    });
  };

  componentWillUnmount = () => {
    this.window.removeEventListener('click', this.handleClickOutside);
  };

  handleClickOutside = (e: MouseEvent) => {
    const dropdownElement = this.props.elementRef.current;

    if (dropdownElement !== e.target && dropdownElement && !dropdownElement.contains(e.target as Node)) {
      this.onClose();
    }
  };

  onClose = () => {
    this.props.onClose();
  };

  stopPropagation: React.MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();

  render() {
    const {
      children,
      platform,
      elementRef,
      toggleRef,
      closing,
      sizeY,
      window,
      document,
      popupDirection,
      ...restProps
    } = this.props;
    const baseClaseName = getClassName('ActionSheet', platform);

    return (
      <div
        {...restProps}
        ref={elementRef}
        onClick={this.stopPropagation}
        style={this.state.dropdownStyles}
        vkuiClass={classNames(baseClaseName, 'ActionSheet--desktop', {
          'ActionSheet--closing': this.props.closing,
        }, `ActionSheet--sizeY-${sizeY}`)}
      >
        {children}
      </div>
    );
  }
}

export default withAdaptivity(withPlatform(withDOM<Props>(ActionSheetDropdownDesktop)), {
  sizeY: true,
});
