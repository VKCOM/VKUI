import React, { Component } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';

interface Props extends HasPlatform {
  closing: boolean;
  onClose(): void;
  toggleRef: Element;
  elementRef: React.RefObject<HTMLDivElement>;
}

type ClickHandler = (event: React.MouseEvent<HTMLDivElement>) => void;

class ActionSheetDropdownDesktop extends Component<Props> {
  componentDidMount = () => {
    setTimeout(() => {
      window.addEventListener('click', this.handleClickOutside);
    });
  };

  componentWillUnmount = () => {
    window.removeEventListener('click', this.handleClickOutside);
  };

  handleClickOutside = (e: MouseEvent) => {
    const dropdownElement = this.props.elementRef.current;

    if (dropdownElement !== e.target && !dropdownElement.contains(e.target as Node)) {
      this.onClose();
    }
  };

  onClose = () => {
    this.props.onClose();
  };

  stopPropagation: ClickHandler = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

  getDropdownCoords: () => { right: number; top: number } = () => {
    const { toggleRef } = this.props;

    const { x, y, width, height } = toggleRef.getBoundingClientRect();
    const right = innerWidth - (x + width);
    const top = + y + height + 10 + window.pageYOffset;

    return { right, top };
  };

  render() {
    const { children, platform, elementRef, ...restProps } = this.props;
    const dropdownStyles = {
      ...this.getDropdownCoords(),
      left: 'auto',
    };

    const baseClaseName = getClassName('ActionSheet', platform);

    return (
      <div
        {...restProps}
        ref={elementRef}
        onClick={this.stopPropagation}
        style={{ ...dropdownStyles }}
        className={classNames(baseClaseName, 'ActionSheet--desktop', {
          'ActionSheet--closing': this.props.closing,
        })}
      >
        {children}
      </div>
    );
  }
}

export default withPlatform(ActionSheetDropdownDesktop);
