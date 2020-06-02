import React, { FunctionComponent, ButtonHTMLAttributes, useState } from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  active?: boolean;
  hovered?: boolean;
}

const SliderSwitchButton: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { active, hovered, className, children, getRootRef, tabIndex, ...restProps } = props;
  const platform = usePlatform();
  const [focus, setFocus] = useState(false);

  const toggleFocus = () => {
    setFocus(!focus);
  };

  return <Tappable {...restProps}
    className={
      classNames(
        getClassName('SliderSwitch__button', platform),
        className,
        {
          ['SliderSwitch__button--active']: active,
          ['SliderSwitch__button--hover']: !active && hovered,
          ['SliderSwitch__button--activeHover']: active && hovered,
          ['SliderSwitch__button--focus']: focus && !hovered,
        },
      )
    }
    Component="button"
    getRootRef={getRootRef}
    aria-pressed={active}
    onFocus={toggleFocus}
    onBlur={toggleFocus}
    tabIndex={tabIndex}
  >
    {children}
  </Tappable>;
};

export default SliderSwitchButton;
