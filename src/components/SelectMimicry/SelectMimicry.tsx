import { FunctionComponent, HTMLAttributes } from 'react';
import { classNames } from '../../lib/classNames';
import { Icon24Dropdown, Icon20Dropdown } from '@vkontakte/icons';
import FormField from '../FormField/FormField';
import { HasAlign, HasRootRef } from '../../types';
import { withAdaptivity, AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../..';
import Headline from '../Typography/Headline/Headline';
import Text from '../Typography/Text/Text';
import { VKCOM } from '../../lib/platform';

export interface SelectMimicryProps extends
  HTMLAttributes<HTMLElement>,
  HasAlign,
  HasRootRef<HTMLElement>,
  AdaptivityProps {
  multiline?: boolean;
  disabled?: boolean;
}

const SelectMimicry: FunctionComponent<SelectMimicryProps> = ({
  className,
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
      className={classNames(getClassName('Select', platform), 'Select--mimicry', {
        'Select--not-selected': !children,
        'Select--multiline': multiline,
        'Select--disabled': disabled,
        [`Select--align-${align}`]: !!align,
        [`Select--sizeX--${sizeX}`]: !!sizeX,
        [`Select--sizeY--${sizeY}`]: !!sizeY,
      }, className)}
      getRootRef={getRootRef}
      onClick={disabled ? null : onClick}
    >
      <TypographyComponent weight="regular" className="Select__container">
        <div className="Select__title">{children || placeholder}</div>
        {sizeY === SizeType.COMPACT ? <Icon20Dropdown /> : <Icon24Dropdown />}
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
