import React, { FunctionComponent, ElementType, ButtonHTMLAttributes } from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  Component?: ElementType;
  stopPropagation?: boolean;
  active?: boolean;
  hovered?: boolean;
}

const SliderSwitchButton: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const platform = usePlatform();
  const { active, hovered, className, children, getRootRef, Component, ...restProps } = props;

  return <Tappable {...restProps}
    className={
      classNames(
        getClassName('SliderSwitchButton', platform),
        className,
        {
          ['SliderSwitchButton__active']: active,
          ['SliderSwitchButton__hover']: !active && hovered,
          ['SliderSwitchButton__hover__active']: active && hovered,
        },
      )
    }
    Component={Component}
    getRootRef={getRootRef}
    aria-pressed={active}
  >
    {children}
  </Tappable>;
};

SliderSwitchButton.defaultProps = {
  Component: 'button',
  stopPropagation: true,
};

export default SliderSwitchButton;
