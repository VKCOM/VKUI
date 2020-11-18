import React, { Component } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';
import { PointerEventsProperty } from 'csstype';
import PropTypes from 'prop-types';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';
import { getScrollableParent } from '../../lib/dom';
import { PANEL_CLASS } from '../Panel/Panel';

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

    const scrollableParent = getScrollableParent(toggleRef);
    const isWindowScroll = scrollableParent === document.body || scrollableParent.classList.contains(PANEL_CLASS);

    const toggleRect = toggleRef.getBoundingClientRect();
    const elementRect = elementRef.current.getBoundingClientRect();
    const scrollableParentRect = scrollableParent.getBoundingClientRect();

    let left: number;
    let top: number;
    if (isWindowScroll) {
      left = toggleRect.left + toggleRect.width - elementRect.width + this.window.pageXOffset;
      top = toggleRect.top + toggleRect.height + this.window.pageYOffset;
    } else {
      left = toggleRect.left + toggleRect.width - elementRect.width;
      top = toggleRect.top + toggleRect.height;
    }

    const scrollableParentOffset = (scrollableParent as HTMLDivElement).offsetTop - scrollableParentRect.top;
    const scrollableParentBottomDistance = this.window.innerHeight - scrollableParentRect.top - scrollableParentRect.height;

    const overflowSpaceTop = -(top - elementRect.height - elementRect.height + scrollableParentOffset);
    const overflowSpaceBottom = -(scrollableParentRect.height - top + toggleRect.height - elementRect.height - scrollableParentBottomDistance);

    let direction = 'bottom';
    if (overflowSpaceBottom > 0 && overflowSpaceBottom > overflowSpaceTop) {
      direction = 'top';
    }

    if (direction === 'top') {
      top -= elementRect.height + toggleRect.height;
    }

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
