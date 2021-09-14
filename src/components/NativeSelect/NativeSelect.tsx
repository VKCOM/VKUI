import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { Icon20Dropdown, Icon24Dropdown } from '@vkontakte/icons';
import { FormField } from '../FormField/FormField';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { withAdaptivity, AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';
import { getClassName } from '../../helpers/getClassName';
import Headline from '../Typography/Headline/Headline';
import Text from '../Typography/Text/Text';
import { VKCOM } from '../../lib/platform';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useEnsuredControl } from '../../hooks/useEnsuredControl';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import '../Select/Select.css';

export interface NativeSelectProps extends
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HasRef<HTMLSelectElement>,
  HasRootRef<HTMLLabelElement>,
  HasAlign,
  AdaptivityProps {
  placeholder?: string;
}

export interface SelectState {
  value?: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  title?: string;
  notSelected?: boolean;
}

const NativeSelect: React.FC<NativeSelectProps> = ({
  style, defaultValue = '', align, placeholder, children,
  className, getRef, getRootRef, disabled, sizeX, sizeY,
  ...restProps
}) => {
  const platform = usePlatform();
  const [title, setTitle] = React.useState('');
  const [notSelected, setNotSelected] = React.useState(false);
  const [value, onChange] = useEnsuredControl(restProps, { defaultValue });
  const selectRef = useExternRef(getRef);
  useIsomorphicLayoutEffect(() => {
    const selectedOption = selectRef.current.options[selectRef.current.selectedIndex];
    if (selectedOption) {
      setTitle(selectedOption.text);
      setNotSelected(selectedOption.value === '' && placeholder != null);
    }
  }, [value, children]);

  const TypographyComponent = platform === VKCOM || sizeY === SizeType.COMPACT ? Text : Headline;

  return (
    <FormField
      Component="label"
      vkuiClass={classNames(getClassName('Select', platform), {
        ['Select--not-selected']: notSelected,
        [`Select--align-${align}`]: !!align,
        [`Select--sizeX--${sizeX}`]: !!sizeX,
        [`Select--sizeY--${sizeY}`]: !!sizeY,
      })}
      className={className}
      style={style}
      getRootRef={getRootRef}
      disabled={disabled}
      after={sizeY === SizeType.COMPACT ? <Icon20Dropdown /> : <Icon24Dropdown />}
    >
      <select
        {...restProps}
        disabled={disabled}
        vkuiClass="Select__el"
        onChange={onChange}
        value={value}
        ref={selectRef}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <TypographyComponent Component="div" weight="regular" vkuiClass="Select__container">
        <span vkuiClass="Select__title">{title}</span>
      </TypographyComponent>
    </FormField>
  );
};

export default withAdaptivity(NativeSelect, {
  sizeX: true,
  sizeY: true,
});
