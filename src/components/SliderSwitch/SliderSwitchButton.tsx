import React, { FunctionComponent, ButtonHTMLAttributes } from 'react';
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
  const platform = usePlatform();
  const { active, hovered, className, children, getRootRef, ...restProps } = props;

  return <Tappable {...restProps}
    className={
      classNames(
        getClassName('SliderSwitch__button', platform),
        className,
        {
          ['SliderSwitch__button--active']: active,
          ['SliderSwitch__button--hover']: !active && hovered,
          ['SliderSwitch__button--activeHover']: active && hovered,
        },
      )
    }
    getRootRef={getRootRef}
    aria-pressed={active}
  >
    {children}
  </Tappable>;
};

export default SliderSwitchButton;
