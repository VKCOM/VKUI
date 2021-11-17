import * as React from 'react';
import Tappable from '../Tappable/Tappable';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import Text from '../Typography/Text/Text';
import './SliderSwitch.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  active?: boolean;
  hovered?: boolean;
}

const SliderSwitchButton: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { active, hovered, children, getRootRef, ...restProps } = props;
  const platform = usePlatform();
  const [focus, setFocus] = React.useState(false);

  const toggleFocus = () => {
    setFocus(!focus);
  };

  return <Tappable {...restProps}
    vkuiClass={
      classNames(
        getClassName('SliderSwitch__button', platform),
        {
          ['SliderSwitch__button--active']: active,
          ['SliderSwitch__button--hover']: !active && hovered,
          ['SliderSwitch__button--activeHover']: active && hovered,
          ['SliderSwitch__button--focus']: focus && !hovered,
        },
      )
    }
    Component="button"
    type="button"
    getRootRef={getRootRef}
    aria-pressed={active}
    onFocus={toggleFocus}
    onBlur={toggleFocus}
    tabIndex={0}
    hasActive={false}
    hoverMode="opacity"
  >
    <Text weight="medium">{children}</Text>
  </Tappable>;
};

export default SliderSwitchButton;
