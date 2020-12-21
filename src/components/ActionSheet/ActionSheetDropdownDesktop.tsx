import React, { Component } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';
import { PointerEventsProperty } from 'csstype';
import PropTypes from 'prop-types';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

interface Props extends HasPlatform, AdaptivityProps {
  closing: boolean;
  onClose(): void;
  toggleRef: Element;
  elementRef: React.RefObject<HTMLDivElement>;
}

type ClickHandler = (event: React.MouseEvent<HTMLDivElement>) => void;

class ActionSheetDropdownDesktop extends Component<Props> {
  state = {
    dropdownStyles: {
      left: '0',
      top: '0',
      opacity: '0',
      pointerEvents: 'none' as PointerEventsProperty,
    },
  };

  static contextTypes = {
    window: PropTypes.any,
  };

  get window(): Window {
    return this.context.window || window;
  }

  componentDidMount = () => {
    const { toggleRef, elementRef } = this.props;

    const toggleRect = toggleRef.getBoundingClientRect();
    const elementRect = elementRef.current.getBoundingClientRect();

    const left = toggleRect.left + toggleRect.width - elementRect.width + this.window.pageXOffset;
    const top = toggleRect.top + toggleRect.height + this.window.pageYOffset;

    this.setState({
      dropdownStyles: {
        left: `${left}px`,
        top: `${top}px`,
        opacity: '1',
        pointerEvents: 'auto' as PointerEventsProperty,
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

  stopPropagation: ClickHandler = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

  render() {
    const { children, platform, elementRef, toggleRef, closing, sizeY, ...restProps } = this.props;
    const baseClaseName = getClassName('ActionSheet', platform);

    return (
      <div
        {...restProps}
        ref={elementRef}
        onClick={this.stopPropagation}
        style={this.state.dropdownStyles}
        className={classNames(baseClaseName, 'ActionSheet--desktop', {
          'ActionSheet--closing': this.props.closing,
        }, `ActionSheet--sizeY-${sizeY}`)}
      >
        {children}
      </div>
    );
  }
}

export default withAdaptivity(withPlatform(ActionSheetDropdownDesktop), {
  sizeY: true,
});
