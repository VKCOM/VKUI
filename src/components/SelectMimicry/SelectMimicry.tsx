import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { Icon24Dropdown, Icon20Dropdown } from '@vkontakte/icons';
import { FormField } from '../FormField/FormField';
import { HasAlign, HasRootRef } from '../../types';
import { withAdaptivity, AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import Headline from '../Typography/Headline/Headline';
import Text from '../Typography/Text/Text';
import { VKCOM } from '../../lib/platform';
import '../Select/Select.css';

export interface SelectMimicryProps extends
  React.HTMLAttributes<HTMLElement>,
  HasAlign,
  HasRootRef<HTMLElement>,
  AdaptivityProps {
  multiline?: boolean;
  disabled?: boolean;
}

const SelectMimicry: React.FunctionComponent<SelectMimicryProps> = ({
  tabIndex,
  placeholder,
  children,
  align,
  getRootRef,
  multiline,
  disabled,
  onClick,
  sizeX,
  sizeY,
  ...restProps
}: SelectMimicryProps) => {
  const platform = usePlatform();

  const TypographyComponent = platform === VKCOM || sizeY === SizeType.COMPACT ? Text : Headline;

  return (
    <FormField
      {...restProps}
      tabIndex={disabled ? null : tabIndex}
      vkuiClass={classNames(getClassName('Select', platform), 'Select--mimicry', {
        'Select--not-selected': !children,
        'Select--multiline': multiline,
        [`Select--align-${align}`]: !!align,
        [`Select--sizeX--${sizeX}`]: !!sizeX,
        [`Select--sizeY--${sizeY}`]: !!sizeY,
      })}
      getRootRef={getRootRef}
      onClick={disabled ? null : onClick}
      disabled={disabled}
      after={sizeY === SizeType.COMPACT ? <Icon20Dropdown /> : <Icon24Dropdown />}
    >
      <TypographyComponent Component="div" weight="regular" vkuiClass="Select__container">
        <span vkuiClass="Select__title">{children || placeholder}</span>
      </TypographyComponent>
    </FormField>
  );
};

SelectMimicry.defaultProps = {
  tabIndex: 0,
};

export default withAdaptivity(SelectMimicry, {
  sizeX: true,
  sizeY: true,
});
